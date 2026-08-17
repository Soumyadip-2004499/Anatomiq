import json
import os
import glob

organs = ['heart', 'brain', 'lungs', 'liver', 'kidneys', 'eyeball', 'intestine', 'pancreas', 'skin']
all_files = glob.glob('scratch/*_questions.json')

if len(all_files) < 9:
    print('Still waiting for all 9 organs to generate. Currently have:', len(all_files))
    exit(1)

merged_data = {}
for organ in organs:
    filepath = f'scratch/{organ}_questions.json'
    with open(filepath, 'r', encoding='utf-8') as f:
        # Strip markdown codeblocks if subagents returned them
        content = f.read().strip()
        if content.startswith('```json'):
            content = content[7:]
        elif content.startswith('```'):
            content = content[3:]
            
        if content.endswith('```'):
            content = content[:-3]
        
        try:
            data = json.loads(content)
            # Ensure it is 60 questions
            if len(data) != 60:
                print(f'Warning: {organ} has {len(data)} questions instead of 60')
            merged_data[organ] = data
        except Exception as e:
            print(f'Error parsing {organ}: {e}')
            exit(1)

# Generate TypeScript file
ts_output = '''import type { OrganId } from "./anatomy-data";

export type Question = {
  id: string;
  organId: OrganId;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export const questionBank: Record<OrganId, Question[]> = {
'''

for organ in organs:
    ts_output += f'  "{organ}": [\n'
    for q in merged_data[organ]:
        # Escape quotes in strings safely
        q_text = str(q.get('question', '')).replace('"', '\\"')
        ans_text = str(q.get('correctAnswer', '')).replace('"', '\\"')
        exp_text = str(q.get('explanation', '')).replace('"', '\\"')
        
        opt_str = ', '.join([f'"{str(o).replace(chr(34), chr(92)+chr(34))}"' for o in q.get('options', [])])
        
        ts_output += f'''    {{
      id: "{q.get('id')}", organId: "{organ}",
      question: "{q_text}",
      options: [{opt_str}],
      correctAnswer: "{ans_text}",
      explanation: "{exp_text}"
    }},
'''
    ts_output += '  ],\n'
ts_output += '};\n'

with open('app/lib/quiz-data.ts', 'w', encoding='utf-8') as out:
    out.write(ts_output)

print('Successfully generated app/lib/quiz-data.ts with all 540 questions!')
