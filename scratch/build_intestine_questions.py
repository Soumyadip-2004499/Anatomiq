import json

questions = [
  {
    "id": "intestine-1",
    "organId": "intestine",
    "question": "Which anatomical landmark marks the junction between the duodenum and jejunum and serves as the clinical boundary between upper and lower gastrointestinal bleeding?",
    "options": [
      "Ligament of Treitz (suspensory muscle of the duodenum)",
      "Ileocecal valve",
      "Pyloric sphincter",
      "Major duodenal papilla"
    ],
    "correctAnswer": "Ligament of Treitz (suspensory muscle of the duodenum)",
    "explanation": "The ligament of Treitz, or suspensory muscle of the duodenum, suspends the duodenojejunal flexure from the right crus of the diaphragm and defines the dividing line between upper and lower gastrointestinal bleeding."
  },
  {
    "id": "intestine-2",
    "organId": "intestine",
    "question": "The major duodenal papilla (Ampulla of Vater) is anatomically located in which segment of the duodenum?",
    "options": [
      "Second (descending) part",
      "First (superior) part",
      "Third (horizontal) part",
      "Fourth (ascending) part"
    ],
    "correctAnswer": "Second (descending) part",
    "explanation": "The major duodenal papilla (Ampulla of Vater), where the common bile duct and the main pancreatic duct unite and empty, is situated on the posteromedial wall of the second (descending) part of the duodenum."
  },
  {
    "id": "intestine-3",
    "organId": "intestine",
    "question": "Which characteristic histological structure is exclusively found in the submucosa of the duodenum to produce an alkaline, bicarbonate-rich mucus?",
    "options": [
      "Brunner's glands",
      "Peyer's patches",
      "Paneth cells",
      "Crypts of Lieberkühn"
    ],
    "correctAnswer": "Brunner's glands",
    "explanation": "Brunner's (duodenal) glands are compound branched tubular glands confined to the submucosa of the duodenum; their alkaline secretion protects the mucosal lining from gastric acid."
  },
  {
    "id": "intestine-4",
    "organId": "intestine",
    "question": "Superior mesenteric artery (SMA) syndrome results from extrinsic vascular compression of which specific part of the gastrointestinal tract?",
    "options": [
      "Third (horizontal) part of the duodenum",
      "First (superior) part of the duodenum",
      "Duodenojejunal junction",
      "Terminal ileum"
    ],
    "correctAnswer": "Third (horizontal) part of the duodenum",
    "explanation": "SMA syndrome occurs when the third (horizontal) part of the duodenum is compressed between the abdominal aorta posteriorly and the superior mesenteric artery anteriorly due to loss of the intervening mesenteric fat pad."
  },
  {
    "id": "intestine-5",
    "organId": "intestine",
    "question": "Aggregated lymphoid nodules known as Peyer's patches are most numerous and prominent in which region of the small intestine?",
    "options": [
      "Ileum",
      "Duodenum",
      "Jejunum",
      "Appendix"
    ],
    "correctAnswer": "Ileum",
    "explanation": "Peyer's patches are prominent clusters of lymphoid follicles located primarily in the lamina propria and submucosa of the ileum, especially the terminal ileum, where they play a key role in gut immune surveillance via M cells."
  },
  {
    "id": "intestine-6",
    "organId": "intestine",
    "question": "When comparing the vascular anatomy of the jejunum and ileum, which description accurately characterizes the jejunum?",
    "options": [
      "Few, simple arterial arcades with long vasa recta",
      "Numerous, complex arterial arcades with short vasa recta",
      "Complete absence of arterial arcades",
      "A single straight arcade with no branching vasa recta"
    ],
    "correctAnswer": "Few, simple arterial arcades with long vasa recta",
    "explanation": "The jejunal mesentery features only 1-2 simple arterial arcades from which long, straight arteries (vasa recta) arise, whereas the ileum has multiple tiers of complex arcades and very short vasa recta."
  },
  {
    "id": "intestine-7",
    "organId": "intestine",
    "question": "Circular mucosal folds called plicae circulares (valves of Kerckring) are most dense and prominent in which segment of the small intestine?",
    "options": [
      "Proximal jejunum",
      "Distal ileum",
      "First part of the duodenum",
      "Cecum"
    ],
    "correctAnswer": "Proximal jejunum",
    "explanation": "Plicae circulares (valves of Kerckring) are permanent crescentic folds of mucosa and submucosa that are most pronounced and densely packed in the jejunum, progressively diminishing and largely disappearing in the distal ileum."
  },
  {
    "id": "intestine-8",
    "organId": "intestine",
    "question": "Which specialized cells located at the base of the intestinal crypts of Lieberkühn secrete antimicrobial peptides such as lysozyme, defensins, and phospholipase A2?",
    "options": [
      "Paneth cells",
      "Goblet cells",
      "Enteroendocrine I-cells",
      "Tuft cells"
    ],
    "correctAnswer": "Paneth cells",
    "explanation": "Paneth cells reside at the base of the crypts of Lieberkühn throughout the small intestine and contain prominent eosinophilic granules packed with antimicrobial agents including lysozymes and alpha-defensins (cryptdins)."
  },
  {
    "id": "intestine-9",
    "organId": "intestine",
    "question": "Active absorption of vitamin B12 bound to intrinsic factor occurs predominantly in which anatomical region?",
    "options": [
      "Terminal ileum",
      "Duodenal bulb",
      "Proximal jejunum",
      "Ascending colon"
    ],
    "correctAnswer": "Terminal ileum",
    "explanation": "The intrinsic factor-cobalamin (vitamin B12) complex is actively absorbed in the terminal ileum via receptor-mediated endocytosis involving the cubam receptor complex."
  },
  {
    "id": "intestine-10",
    "organId": "intestine",
    "question": "The primary anatomical site for the active reabsorption of conjugated bile acids via the apical sodium-dependent bile acid transporter (ASBT) in the enterohepatic circulation is the:",
    "options": [
      "Terminal ileum",
      "Second part of the duodenum",
      "Proximal jejunum",
      "Sigmoid colon"
    ],
    "correctAnswer": "Terminal ileum",
    "explanation": "Over 95% of bile acids are actively reabsorbed in the terminal ileum through the ASBT transporter and returned to the liver via the portal venous circulation."
  },
  {
    "id": "intestine-11",
    "organId": "intestine",
    "question": "What is the primary site of dietary iron absorption in the human digestive system?",
    "options": [
      "Duodenum and upper jejunum",
      "Terminal ileum",
      "Stomach antrum",
      "Cecum"
    ],
    "correctAnswer": "Duodenum and upper jejunum",
    "explanation": "Dietary iron (in both heme and non-heme ferrous Fe2+ forms) is predominantly absorbed in the enterocytes of the duodenum and upper jejunum through divalent metal transporter 1 (DMT1) and ferroportin."
  },
  {
    "id": "intestine-12",
    "organId": "intestine",
    "question": "Meckel's diverticulum is a congenital anomaly representing the persistence of which embryological structure?",
    "options": [
      "Vitelline duct (omphalomesenteric duct)",
      "Urachus",
      "Allantois",
      "Thyroglossal duct"
    ],
    "correctAnswer": "Vitelline duct (omphalomesenteric duct)",
    "explanation": "Meckel's diverticulum arises from incomplete obliteration of the vitelline (omphalomesenteric) duct, creating a true diverticulum on the antimesenteric border of the ileum roughly 2 feet proximal to the ileocecal valve."
  },
  {
    "id": "intestine-13",
    "organId": "intestine",
    "question": "Which enteric nervous system plexus is situated between the inner circular and outer longitudinal smooth muscle layers of the intestinal wall, primarily controlling gastrointestinal motility?",
    "options": [
      "Myenteric (Auerbach's) plexus",
      "Submucosal (Meissner's) plexus",
      "Subserosal plexus",
      "Mucosal plexus"
    ],
    "correctAnswer": "Myenteric (Auerbach's) plexus",
    "explanation": "The myenteric (Auerbach's) plexus lies in the muscularis externa between the circular and longitudinal muscle layers and regulates rhythmic peristalsis and intestinal motility."
  },
  {
    "id": "intestine-14",
    "organId": "intestine",
    "question": "The submucosal (Meissner's) plexus is located in which layer of the intestinal wall, and what is its primary function?",
    "options": [
      "Submucosa; regulates local secretions, absorption, and mucosal blood flow",
      "Muscularis externa; coordinates migrating motor complexes",
      "Lamina propria; triggers immune cell migration",
      "Serosa; senses visceral distention and peritoneal friction"
    ],
    "correctAnswer": "Submucosa; regulates local secretions, absorption, and mucosal blood flow",
    "explanation": "Meissner's plexus resides within the submucosa and is primarily responsible for regulating epithelial ion/water secretion, glandular activity, and local submucosal blood flow."
  },
  {
    "id": "intestine-15",
    "organId": "intestine",
    "question": "Enteropeptidase (enterokinase), an essential brush border enzyme responsible for cleaving trypsinogen to active trypsin, is produced by the enterocytes of which organ?",
    "options": [
      "Duodenum",
      "Pancreas",
      "Stomach",
      "Ileum"
    ],
    "correctAnswer": "Duodenum",
    "explanation": "Enteropeptidase (enterokinase) is tethered to the brush border of duodenal mucosal cells; it cleaves pancreatic trypsinogen into active trypsin, initiating the cascade of digestive enzyme activation."
  },
  {
    "id": "intestine-16",
    "organId": "intestine",
    "question": "What is the dual arterial blood supply of the duodenum?",
    "options": [
      "Superior pancreaticoduodenal artery (from celiac trunk) and inferior pancreaticoduodenal artery (from SMA)",
      "Left gastric artery and splenic artery",
      "Right gastric artery and right gastroepiploic artery",
      "Ileocolic artery and middle colic artery"
    ],
    "correctAnswer": "Superior pancreaticoduodenal artery (from celiac trunk) and inferior pancreaticoduodenal artery (from SMA)",
    "explanation": "The duodenum sits at the junction of the foregut and midgut, receiving dual arterial supply from the superior pancreaticoduodenal artery (branch of gastroduodenal artery via celiac trunk) and inferior pancreaticoduodenal artery (branch of the superior mesenteric artery)."
  },
  {
    "id": "intestine-17",
    "organId": "intestine",
    "question": "What specialized lymphatic capillaries located in the core of small intestinal villi are dedicated to the uptake of dietary lipids packaged into chylomicrons?",
    "options": [
      "Lacteals",
      "Sinusoids",
      "Crypt venules",
      "Peyer's sinuses"
    ],
    "correctAnswer": "Lacteals",
    "explanation": "Lacteals are blind-ended central lymphatic capillaries within intestinal villi that absorb emulsified dietary fats packaged as chylomicrons, transporting milky chyle to the mesenteric lymphatics and cisterna chyli."
  },
  {
    "id": "intestine-18",
    "organId": "intestine",
    "question": "During normal embryonic development, how many total degrees of counterclockwise rotation does the midgut loop undergo around the superior mesenteric artery axis?",
    "options": [
      "270 degrees",
      "90 degrees",
      "180 degrees",
      "360 degrees"
    ],
    "correctAnswer": "270 degrees",
    "explanation": "The midgut loop herniates into the umbilical cord, rotates 90 degrees counterclockwise, and upon physiological reduction back into the abdominal cavity rotates another 180 degrees, totaling 270 degrees of counterclockwise rotation around the SMA."
  },
  {
    "id": "intestine-19",
    "organId": "intestine",
    "question": "Peritoneal fibrous bands known as Ladd's bands are associated with intestinal malrotation and cause extrinsic obstruction of which structure?",
    "options": [
      "Duodenum",
      "Terminal ileum",
      "Sigmoid colon",
      "Esophagogastric junction"
    ],
    "correctAnswer": "Duodenum",
    "explanation": "In intestinal malrotation, Ladd's bands (anomalous peritoneal bands extending from the abnormally positioned cecum across to the posterior abdominal wall) compress and obstruct the second and third parts of the duodenum."
  },
  {
    "id": "intestine-20",
    "organId": "intestine",
    "question": "Which congenital condition is characterized by failure of duodenal recanalization during the 8th to 10th gestational week, producing the classic 'double bubble' sign on abdominal radiographs?",
    "options": [
      "Duodenal atresia",
      "Pyloric stenosis",
      "Intussusception",
      "Meconium ileus"
    ],
    "correctAnswer": "Duodenal atresia",
    "explanation": "Duodenal atresia is caused by failure of lumen recanalization in early embryogenesis, resulting in complete duodenal obstruction, prominent polyhydramnios, and a radiographic 'double bubble' appearance (gastric and duodenal bulb distention)."
  },
  {
    "id": "intestine-21",
    "organId": "intestine",
    "question": "Which intestinal hormone is secreted by S-cells in the duodenal mucosa in response to acidic chyme (pH < 4.5), stimulating pancreatic ductal secretion of bicarbonate?",
    "options": [
      "Secretin",
      "Cholecystokinin (CCK)",
      "Motilin",
      "Gastric inhibitory polypeptide (GIP)"
    ],
    "correctAnswer": "Secretin",
    "explanation": "Secretin is released by S-cells of the duodenum into the bloodstream when luminal pH drops below 4.5, stimulating biliary and pancreatic duct cells to secrete water and bicarbonate."
  },
  {
    "id": "intestine-22",
    "organId": "intestine",
    "question": "Cholecystokinin (CCK) is synthesized and secreted primarily by which enteroendocrine cells, and what is its main physiological trigger?",
    "options": [
      "I-cells of the duodenum and jejunum; stimulated by luminal fatty acids and amino acids",
      "S-cells of the ileum; stimulated by hypertonic saline",
      "K-cells of the colon; stimulated by short-chain fatty acids",
      "G-cells of the jejunum; stimulated by gastric distention"
    ],
    "correctAnswer": "I-cells of the duodenum and jejunum; stimulated by luminal fatty acids and amino acids",
    "explanation": "I-cells in the mucosal epithelium of the duodenum and upper jejunum secrete CCK in response to monoglycerides, fatty acids, and peptides, which stimulates gallbladder contraction and pancreatic acinar enzyme secretion."
  },
  {
    "id": "intestine-23",
    "organId": "intestine",
    "question": "The suspensory muscle of the duodenum (ligament of Treitz) originates anatomically from which structure?",
    "options": [
      "Right crus of the diaphragm",
      "Left crus of the diaphragm",
      "Median arcuate ligament",
      "Transversus abdominis muscle"
    ],
    "correctAnswer": "Right crus of the diaphragm",
    "explanation": "The ligament of Treitz is a fibromuscular slip of tissue that originates from the right crus of the diaphragm as it encircles the esophagus and inserts onto the third and fourth parts of the duodenum and duodenojejunal flexure."
  },
  {
    "id": "intestine-24",
    "organId": "intestine",
    "question": "Which of the following features accurately distinguishes the ileum from the jejunum upon gross anatomical examination?",
    "options": [
      "More mesenteric fat extending onto the serosal surface ('creeping fat')",
      "Thicker wall with wider luminal diameter",
      "Higher concentration and taller height of plicae circulares",
      "Longer vasa recta with fewer arcade layers"
    ],
    "correctAnswer": "More mesenteric fat extending onto the serosal surface ('creeping fat')",
    "explanation": "The ileum has an abundance of mesenteric fat that encroaches onto the intestinal wall ('creeping fat'), leaving no translucent windows in the mesentery, whereas the jejunal mesentery has less fat and clear translucent windows."
  },
  {
    "id": "intestine-25",
    "organId": "intestine",
    "question": "What is the most common anatomical location where intussusception (telescoping of one bowel segment into another) occurs in infants and young children?",
    "options": [
      "Ileocecal junction",
      "Duodenojejunal flexure",
      "Splenic flexure",
      "Rectosigmoid junction"
    ],
    "correctAnswer": "Ileocecal junction",
    "explanation": "The vast majority (approx. 90%) of pediatric intussusceptions are ileocolic, where the terminal ileum invaginates through the ileocecal valve into the cecum and ascending colon."
  },
  {
    "id": "intestine-26",
    "organId": "intestine",
    "question": "Venous blood from the entire small intestine is collected into which major vessel that subsequently joins the splenic vein to form the hepatic portal vein?",
    "options": [
      "Superior mesenteric vein (SMV)",
      "Inferior mesenteric vein (IMV)",
      "Left gastric vein",
      "Internal iliac vein"
    ],
    "correctAnswer": "Superior mesenteric vein (SMV)",
    "explanation": "The superior mesenteric vein drains venous blood from the small intestine, cecum, ascending colon, and transverse colon, joining posterior to the neck of the pancreas with the splenic vein to form the hepatic portal vein."
  },
  {
    "id": "intestine-27",
    "organId": "intestine",
    "question": "Parasympathetic preganglionic innervation to the small intestine is mediated exclusively by which cranial nerve?",
    "options": [
      "Vagus nerve (CN X)",
      "Glossopharyngeal nerve (CN IX)",
      "Pelvic splanchnic nerves (S2-S4)",
      "Greater splanchnic nerve"
    ],
    "correctAnswer": "Vagus nerve (CN X)",
    "explanation": "The vagus nerve (CN X) supplies all parasympathetic preganglionic fibers to the digestive tract from the esophagus down to the distal third of the transverse colon, including the entire small intestine."
  },
  {
    "id": "intestine-28",
    "organId": "intestine",
    "question": "The minor duodenal papilla serves as the entrance into the duodenum for which anatomical duct?",
    "options": [
      "Accessory pancreatic duct (duct of Santorini)",
      "Main pancreatic duct (duct of Wirsung)",
      "Common bile duct",
      "Cystic duct"
    ],
    "correctAnswer": "Accessory pancreatic duct (duct of Santorini)",
    "explanation": "The minor duodenal papilla, located approximately 2 cm superior to the major papilla, is the opening site of the accessory pancreatic duct (duct of Santorini)."
  },
  {
    "id": "intestine-29",
    "organId": "intestine",
    "question": "Sympathetic preganglionic fibers supplying the small intestine travel in the greater and lesser splanchnic nerves and synapse primarily in which autonomic ganglia?",
    "options": [
      "Celiac and superior mesenteric ganglia",
      "Inferior mesenteric ganglion",
      "Hypogastric plexus",
      "Paravertebral sympathetic chain ganglia only"
    ],
    "correctAnswer": "Celiac and superior mesenteric ganglia",
    "explanation": "Splanchnic nerves carrying preganglionic sympathetic fibers (T5-T11) pass through the sympathetic chain without synapsing and synapse in the celiac and superior mesenteric prevertebral ganglia."
  },
  {
    "id": "intestine-30",
    "organId": "intestine",
    "question": "In the microanatomy of the small intestine, what is the turnover rate of the enterocyte epithelial lining?",
    "options": [
      "Every 3 to 5 days",
      "Every 24 hours",
      "Every 30 to 45 days",
      "Every 6 months"
    ],
    "correctAnswer": "Every 3 to 5 days",
    "explanation": "Intestinal stem cells located in the crypts of Lieberkühn continuously proliferate and differentiate into mature enterocytes, which migrate up the villus and are shed into the lumen, renewing the epithelium every 3 to 5 days."
  },
  {
    "id": "intestine-31",
    "organId": "intestine",
    "question": "Which three macroscopic anatomical features distinguish the colon from the small intestine?",
    "options": [
      "Taeniae coli, haustra, and epiploic appendages",
      "Plicae circulares, villi, and microvilli",
      "Brunner's glands, Peyer's patches, and lacteals",
      "Mesenteric windows, long vasa recta, and rugae"
    ],
    "correctAnswer": "Taeniae coli, haustra, and epiploic appendages",
    "explanation": "The large intestine is distinguished by: (1) taeniae coli (three longitudinal smooth muscle bands), (2) haustra (sacculations caused by shortening of the taeniae), and (3) epiploic appendages (fat-filled peritoneal pouches)."
  },
  {
    "id": "intestine-32",
    "organId": "intestine",
    "question": "The three longitudinal muscular bands of the colon (taeniae coli) converge at which specific anatomical structure?",
    "options": [
      "Base of the vermiform appendix",
      "Ileocecal valve",
      "Hepatic flexure",
      "Rectosigmoid junction"
    ],
    "correctAnswer": "Base of the vermiform appendix",
    "explanation": "All three taeniae coli (taenia libera, taenia mesocolica, and taenia omentalis) converge at the base of the vermiform appendix on the cecum, serving as a reliable surgical guide to locate the appendix."
  },
  {
    "id": "intestine-33",
    "organId": "intestine",
    "question": "What is the most common anatomical position of the vermiform appendix relative to the cecum in the general population?",
    "options": [
      "Retrocecal (approx. 65%)",
      "Pelvic (approx. 30%)",
      "Subcecal",
      "Pre-ileal"
    ],
    "correctAnswer": "Retrocecal (approx. 65%)",
    "explanation": "The retrocecal position is the most common anatomic variation, occurring in roughly 65% of individuals, followed by the pelvic position (around 30%)."
  },
  {
    "id": "intestine-34",
    "organId": "intestine",
    "question": "McBurney's point is clinically utilized to evaluate appendicitis. Where is McBurney's point located on the anterior abdominal wall?",
    "options": [
      "One-third of the distance from the right anterior superior iliac spine to the umbilicus",
      "One-third of the distance from the umbilicus to the pubic tubercle",
      "Midway between the xiphoid process and the umbilicus",
      "Two-thirds of the distance from the right anterior superior iliac spine to the right costal margin"
    ],
    "correctAnswer": "One-third of the distance from the right anterior superior iliac spine to the umbilicus",
    "explanation": "McBurney's point lies one-third of the distance along a line drawn from the right anterior superior iliac spine (ASIS) to the umbilicus; tenderness here corresponds to the inflamed base of the appendix."
  },
  {
    "id": "intestine-35",
    "organId": "intestine",
    "question": "The appendicular artery, which supplies blood to the vermiform appendix, is a direct branch of which artery?",
    "options": [
      "Ileocolic artery (branch of SMA)",
      "Right colic artery",
      "Middle colic artery",
      "Inferior mesenteric artery"
    ],
    "correctAnswer": "Ileocolic artery (branch of SMA)",
    "explanation": "The appendicular artery is a terminal branch of the inferior division of the ileocolic artery (from the superior mesenteric artery); it travels within the mesoappendix to reach the appendix."
  },
  {
    "id": "intestine-36",
    "organId": "intestine",
    "question": "Which segments of the large intestine are located retroperitoneally (secondarily retroperitoneal)?",
    "options": [
      "Ascending colon and descending colon",
      "Transverse colon and sigmoid colon",
      "Cecum and vermiform appendix",
      "Transverse colon and cecum"
    ],
    "correctAnswer": "Ascending colon and descending colon",
    "explanation": "The ascending colon and descending colon are fixed to the posterior abdominal wall and are secondarily retroperitoneal, whereas the cecum, transverse colon, and sigmoid colon possess mesenteries and are intraperitoneal."
  },
  {
    "id": "intestine-37",
    "organId": "intestine",
    "question": "The left colic flexure (splenic flexure) is attached to the diaphragm and supported by which ligament?",
    "options": [
      "Phrenicocolic ligament (sustentaculum lienis)",
      "Gastrocolic ligament",
      "Hepatoduodenal ligament",
      "Falciform ligament"
    ],
    "correctAnswer": "Phrenicocolic ligament (sustentaculum lienis)",
    "explanation": "The phrenicocolic ligament connects the left colic flexure to the diaphragm at the level of the 10th and 11th ribs, supporting the splenic flexure and forming a shelf for the spleen (sustentaculum lienis)."
  },
  {
    "id": "intestine-38",
    "organId": "intestine",
    "question": "Which landmark region in the colon is known as 'Griffiths' point' and is particularly vulnerable to ischemic colitis?",
    "options": [
      "Splenic flexure (junction of SMA and IMA territories)",
      "Rectosigmoid junction",
      "Ileocecal valve",
      "Hepatic flexure"
    ],
    "correctAnswer": "Splenic flexure (junction of SMA and IMA territories)",
    "explanation": "Griffiths' point at the splenic flexure is a watershed area representing the junction between the superior mesenteric artery (middle colic) and inferior mesenteric artery (left colic) perfusion zones, making it highly susceptible to low-flow ischemia."
  },
  {
    "id": "intestine-39",
    "organId": "intestine",
    "question": "The watershed area known as 'Sudeck's point' is located at which anatomical transition?",
    "options": [
      "Rectosigmoid junction (between lowest sigmoid branch and superior rectal artery)",
      "Duodenojejunal junction",
      "Hepatosplenic junction",
      "Cecal-appendiceal junction"
    ],
    "correctAnswer": "Rectosigmoid junction (between lowest sigmoid branch and superior rectal artery)",
    "explanation": "Sudeck's point (critical point of Sudeck) is a watershed area at the rectosigmoid junction, situated between the territory of the lowest sigmoid artery and the superior rectal artery."
  },
  {
    "id": "intestine-40",
    "organId": "intestine",
    "question": "The continuous arterial channel that runs along the inner mesenteric border of the colon, providing collateral circulation between the SMA and IMA, is the:",
    "options": [
      "Marginal artery of Drummond",
      "Arc of Riolan",
      "Internal pudendal artery",
      "Celiac arterial arcade"
    ],
    "correctAnswer": "Marginal artery of Drummond",
    "explanation": "The marginal artery of Drummond is a continuous arterial arcade formed by anastomoses between branches of the ileocolic, right colic, middle colic, left colic, and sigmoid arteries along the inner margin of the colon."
  },
  {
    "id": "intestine-41",
    "organId": "intestine",
    "question": "The Arc of Riolan (meandering mesenteric artery) provides a direct collateral channel between which two vessels?",
    "options": [
      "Middle colic artery (from SMA) and left colic artery (from IMA)",
      "Ileocolic artery and appendicular artery",
      "Celiac trunk and superior mesenteric artery",
      "Inferior mesenteric artery and internal iliac artery"
    ],
    "correctAnswer": "Middle colic artery (from SMA) and left colic artery (from IMA)",
    "explanation": "The Arc of Riolan (meandering mesenteric artery) is an inconstant but important central collateral connection between the proximal middle colic branch of the SMA and the left colic branch of the IMA."
  },
  {
    "id": "intestine-42",
    "organId": "intestine",
    "question": "At which anatomical point along the gastrointestinal tract does parasympathetic innervation switch from the Vagus nerve (CN X) to the pelvic splanchnic nerves (S2-S4)?",
    "options": [
      "Distal one-third of the transverse colon (Cannon-Böhm point)",
      "Ileocecal valve",
      "Duodenojejunal flexure",
      "Rectosigmoid junction"
    ],
    "correctAnswer": "Distal one-third of the transverse colon (Cannon-Böhm point)",
    "explanation": "The Cannon-Böhm point, located at the junction between the proximal two-thirds and distal one-third of the transverse colon, marks the embryological midgut-hindgut junction where parasympathetic supply transitions from CN X to pelvic splanchnic nerves (S2-S4)."
  },
  {
    "id": "intestine-43",
    "organId": "intestine",
    "question": "Hirschsprung disease is characterized pathologically by the congenital absence of ganglion cells in the myenteric and submucosal plexuses due to failure of which embryonic cells to migrate?",
    "options": [
      "Neural crest cells",
      "Mesodermal somites",
      "Endodermal stem cells",
      "Lateral plate mesoderm"
    ],
    "correctAnswer": "Neural crest cells",
    "explanation": "Hirschsprung disease (congenital aganglionic megacolon) results from the failure of neural crest cells to migrate craniocaudally into the distal intestinal wall during weeks 5 to 12 of gestation."
  },
  {
    "id": "intestine-44",
    "organId": "intestine",
    "question": "What is the primary histological feature that distinguishes the mucosal epithelium of the colon from that of the small intestine?",
    "options": [
      "Abundant straight tubular crypts rich in goblet cells without villi or plicae circulares",
      "Presence of tall villi lined by ciliated columnar cells",
      "Prominent Paneth cells throughout the surface epithelium",
      "Stratified squamous non-keratinized epithelium with deep glands"
    ],
    "correctAnswer": "Abundant straight tubular crypts rich in goblet cells without villi or plicae circulares",
    "explanation": "The large intestinal mucosa lacks villi and plicae circulares, possessing instead a flat surface indented by numerous straight, parallel crypts of Lieberkühn packed with mucus-secreting goblet cells."
  },
  {
    "id": "intestine-45",
    "organId": "intestine",
    "question": "What is the primary mechanism of water absorption in the colon?",
    "options": [
      "Active sodium absorption via apical ENaC and Na+/H+ exchangers, creating an osmotic gradient for water",
      "Primary active water transport by ATP-driven water pumps",
      "Passive diffusion across tight junctions without ion movement",
      "Receptor-mediated endocytosis of fluid vesicles"
    ],
    "correctAnswer": "Active sodium absorption via apical ENaC and Na+/H+ exchangers, creating an osmotic gradient for water",
    "explanation": "In the colon, sodium is actively absorbed via apical epithelial sodium channels (ENaC, stimulated by aldosterone) and Na+/H+ exchangers, followed by passive paracellular and transcellular movement of water along the osmotic gradient."
  },
  {
    "id": "intestine-46",
    "organId": "intestine",
    "question": "The rectum is distinguished anatomically from the colon by which of the following features?",
    "options": [
      "Absence of taeniae coli, haustra, and epiploic appendages",
      "Presence of prominent Peyer's patches",
      "Triple layer of muscularis mucosae",
      "Continuous mesentery and prominent haustrations"
    ],
    "correctAnswer": "Absence of taeniae coli, haustra, and epiploic appendages",
    "explanation": "The rectum lacks the three characteristic colonic features: its longitudinal muscle layer forms a complete continuous outer coat (no distinct taeniae coli), and it contains no haustra or epiploic appendages."
  },
  {
    "id": "intestine-47",
    "organId": "intestine",
    "question": "What are the three transverse internal folds of the rectum that support the weight of the fecal column called?",
    "options": [
      "Valves of Houston (transverse rectal folds)",
      "Valves of Kerckring",
      "Crypts of Morgagni",
      "Columns of Morgagni"
    ],
    "correctAnswer": "Valves of Houston (transverse rectal folds)",
    "explanation": "The transverse rectal folds (valves of Houston) are three permanent semilunar transverse shelf-like folds within the rectal ampulla that help maintain fecal continence by supporting rectal contents."
  },
  {
    "id": "intestine-48",
    "organId": "intestine",
    "question": "Regarding the peritoneal coverage of the rectum, which statement is anatomically correct?",
    "options": [
      "The upper third is covered anteriorly and laterally; middle third anteriorly only; lower third is completely extraperitoneal",
      "The entire rectum is fully enclosed within the peritoneal cavity (intraperitoneal)",
      "The rectum is entirely retroperitoneal with no peritoneal covering",
      "The upper third has no peritoneum; lower two-thirds are covered anteriorly"
    ],
    "correctAnswer": "The upper third is covered anteriorly and laterally; middle third anteriorly only; lower third is completely extraperitoneal",
    "explanation": "The upper 1/3 of the rectum has peritoneum on its anterior and lateral surfaces; the middle 1/3 has peritoneum only on its anterior surface; and the lower 1/3 is entirely subperitoneal/extraperitoneal."
  },
  {
    "id": "intestine-49",
    "organId": "intestine",
    "question": "In males, the reflection of peritoneum from the anterior surface of the middle third of the rectum onto the bladder base forms the:",
    "options": [
      "Rectovesical pouch",
      "Rectouterine pouch (Pouch of Douglas)",
      "Vesicouterine pouch",
      "Hepatorenal recess (Morison's pouch)"
    ],
    "correctAnswer": "Rectovesical pouch",
    "explanation": "In males, the peritoneum reflects from the rectum forward onto the posterior bladder and seminal vesicles, creating the rectovesical pouch (the lowest peritoneal space in the male pelvis)."
  },
  {
    "id": "intestine-50",
    "organId": "intestine",
    "question": "In females, the deep peritoneal pouch formed between the anterior rectum and the posterior wall of the uterus is the:",
    "options": [
      "Rectouterine pouch (Pouch of Douglas)",
      "Rectovesical pouch",
      "Vesicouterine pouch",
      "Retropubic space of Retzius"
    ],
    "correctAnswer": "Rectouterine pouch (Pouch of Douglas)",
    "explanation": "The rectouterine pouch (pouch of Douglas) is the lowest extension of the peritoneal cavity in females, located between the anterior surface of the rectum and the posterior surface of the uterus."
  },
  {
    "id": "intestine-51",
    "organId": "intestine",
    "question": "The superior rectal artery, the chief arterial supply to the proximal rectum, arises directly as the continuation of which vessel?",
    "options": [
      "Inferior mesenteric artery (IMA)",
      "Internal iliac artery",
      "Superior mesenteric artery (SMA)",
      "Middle rectal artery"
    ],
    "correctAnswer": "Inferior mesenteric artery (IMA)",
    "explanation": "The superior rectal artery is the direct terminal branch and continuation of the inferior mesenteric artery as it crosses the left common iliac vessels into the pelvis."
  },
  {
    "id": "intestine-52",
    "organId": "intestine",
    "question": "An important portosystemic venous anastomosis in the anal canal exists between which two venous drainage systems?",
    "options": [
      "Superior rectal vein (portal) and middle/inferior rectal veins (systemic)",
      "Left gastric vein and azygos vein",
      "Paraumbilical veins and epigastric veins",
      "Colic veins and retroperitoneal lumbar veins"
    ],
    "correctAnswer": "Superior rectal vein (portal) and middle/inferior rectal veins (systemic)",
    "explanation": "The superior rectal vein drains into the inferior mesenteric vein (portal system), while the middle and inferior rectal veins drain into the internal iliac and internal pudendal veins (systemic venous system / IVC), forming a critical portosystemic anastomosis."
  },
  {
    "id": "intestine-53",
    "organId": "intestine",
    "question": "Internal hemorrhoids originate above the pectinate (dentate) line. Why are they typically painless compared to external hemorrhoids?",
    "options": [
      "They are covered by visceral mucosa innervated by autonomic sensory fibers insensitive to sharp pain",
      "They lack any nerve fibers or sensory receptors",
      "They are located in a tissue layer devoid of blood vessels",
      "They are anesthetized by alkaline rectal secretions"
    ],
    "correctAnswer": "They are covered by visceral mucosa innervated by autonomic sensory fibers insensitive to sharp pain",
    "explanation": "Above the pectinate line, the mucosa is innervated by visceral autonomic nerves (sympathetic and parasympathetic) that only sense stretch/distention and are insensitive to sharp pain, cutting, or burning."
  },
  {
    "id": "intestine-54",
    "organId": "intestine",
    "question": "External hemorrhoids develop below the pectinate line and are excruciatingly painful when thrombosed because they are innervated by somatic branches of which nerve?",
    "options": [
      "Inferior rectal nerve (branch of pudendal nerve, S2-S4)",
      "Ilioinguinal nerve",
      "Genitofemoral nerve",
      "Obturator nerve"
    ],
    "correctAnswer": "Inferior rectal nerve (branch of pudendal nerve, S2-S4)",
    "explanation": "Structures below the pectinate line, including the perianal skin and external hemorrhoids, are somatically innervated by the inferior rectal nerve (branch of the pudendal nerve, S2-S4), making them highly sensitive to pain, temperature, and touch."
  },
  {
    "id": "intestine-55",
    "organId": "intestine",
    "question": "The pectinate (dentate) line represents the embryological junction between which two germ layer derivatives?",
    "options": [
      "Hindgut endoderm and proctodeal ectoderm",
      "Foregut endoderm and midgut mesoderm",
      "Neural crest neuroectoderm and somatic mesoderm",
      "Amniotic ectoderm and yolk sac endoderm"
    ],
    "correctAnswer": "Hindgut endoderm and proctodeal ectoderm",
    "explanation": "The pectinate line marks the embryological boundary where the endodermal lining of the hindgut meets the ectodermal lining of the invaginating proctodeum (anal pit)."
  },
  {
    "id": "intestine-56",
    "organId": "intestine",
    "question": "What epithelial transition occurs across the anal canal from proximal to distal?",
    "options": [
      "Simple columnar -> stratified squamous non-keratinized -> stratified squamous keratinized",
      "Pseudostratified ciliated columnar -> transitional -> simple cuboidal",
      "Stratified squamous keratinized -> simple columnar -> transitional",
      "Simple cuboidal -> simple columnar -> stratified columnar"
    ],
    "correctAnswer": "Simple columnar -> stratified squamous non-keratinized -> stratified squamous keratinized",
    "explanation": "Above the pectinate line, the mucosa is simple columnar; in the anal transition zone/pecten below the line, it becomes non-keratinized stratified squamous; and near the anal verge (perianal skin), it transitions into keratinized stratified squamous epithelium."
  },
  {
    "id": "intestine-57",
    "organId": "intestine",
    "question": "The internal anal sphincter is an involuntary smooth muscle ring that represents the thickened distal continuation of which muscular layer?",
    "options": [
      "Inner circular smooth muscle layer of the rectum",
      "Outer longitudinal smooth muscle layer of the rectum",
      "Levator ani (puborectalis muscle)",
      "Transversus perinei profundus muscle"
    ],
    "correctAnswer": "Inner circular smooth muscle layer of the rectum",
    "explanation": "The internal anal sphincter is an involuntary smooth muscle sphincter formed by the thickening and specialization of the circular smooth muscle layer of the rectum."
  },
  {
    "id": "intestine-58",
    "organId": "intestine",
    "question": "The external anal sphincter is composed of striated muscle and receives voluntary somatic motor innervation primarily from which nerve?",
    "options": [
      "Inferior rectal nerve and perineal branch of S4",
      "Sciatic nerve",
      "Pelvic splanchnic nerve",
      "Femoral nerve"
    ],
    "correctAnswer": "Inferior rectal nerve and perineal branch of S4",
    "explanation": "The external anal sphincter is a skeletal muscle cylinder under voluntary control innervated by somatic fibers from the inferior rectal branch of the pudendal nerve (S2-S4) and the perineal branch of S4."
  },
  {
    "id": "intestine-59",
    "organId": "intestine",
    "question": "Small pocket-like depressions at the distal ends of the anal columns of Morgagni that house the openings of anal glands are termed:",
    "options": [
      "Anal crypts (crypts of Morgagni)",
      "Anal papillae",
      "Peyer's pouches",
      "Valves of Houston"
    ],
    "correctAnswer": "Anal crypts (crypts of Morgagni)",
    "explanation": "Anal crypts (crypts of Morgagni) are small recesses located at the level of the pectinate line where branching anal glands drain; blockage and infection of these glands lead to perianal abscesses and fistulae-in-ano."
  },
  {
    "id": "intestine-60",
    "organId": "intestine",
    "question": "Lymphatic drainage from the anal canal ABOVE the pectinate line drains primarily to which lymph nodes, whereas drainage BELOW the pectinate line flows to which nodes?",
    "options": [
      "Above: Internal iliac and inferior mesenteric nodes; Below: Superficial inguinal nodes",
      "Above: Superficial inguinal nodes; Below: Para-aortic nodes",
      "Above: Deep inguinal nodes; Below: Celiac nodes",
      "Above: Cisterna chyli directly; Below: Internal iliac nodes"
    ],
    "correctAnswer": "Above: Internal iliac and inferior mesenteric nodes; Below: Superficial inguinal nodes",
    "explanation": "Above the pectinate line, lymph drains into internal iliac and inferior mesenteric (retroperitoneal) lymph nodes; below the pectinate line, somatic lymph flows to the superficial inguinal lymph nodes."
  }
]

print(f"Total questions: {len(questions)}")
for i, q in enumerate(questions):
    assert q['id'] == f'intestine-{i+1}', f'ID mismatch at {i}: {q["id"]}'
    assert q['organId'] == 'intestine'
    assert len(q['options']) == 4, f'Options count mismatch at {i}'
    assert q['correctAnswer'] in q['options'], f'correctAnswer not in options at {i}: {q["correctAnswer"]}'
    assert len(q['question']) > 10
    assert len(q['explanation']) > 10

out_path = r"C:\Users\chatt\.gemini\antigravity\scratch\anatomy-explorer\scratch\intestine_questions.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2)
print("Successfully generated intestine_questions.json with 60 verified questions!")
