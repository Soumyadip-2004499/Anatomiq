import type { OrganId } from "./anatomy-data";

export type Question = {
  id: string;
  organId: OrganId;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export const questionBank: Record<OrganId, Question[]> = {
  heart: [
    {
      id: "heart-1", organId: "heart",
      question: "Which chamber of the heart pumps oxygenated blood to the systemic circulation?",
      options: ["Right Atrium", "Right Ventricle", "Left Atrium", "Left Ventricle"],
      correctAnswer: "Left Ventricle",
      explanation: "The left ventricle is the thickest chamber and pumps oxygenated blood through the aorta to the rest of the body."
    },
    {
      id: "heart-2", organId: "heart",
      question: "What valve separates the left atrium and the left ventricle?",
      options: ["Tricuspid Valve", "Mitral Valve", "Aortic Valve", "Pulmonary Valve"],
      correctAnswer: "Mitral Valve",
      explanation: "The mitral (bicuspid) valve regulates blood flow from the left atrium into the left ventricle."
    },
    {
      id: "heart-3", organId: "heart",
      question: "Which blood vessels supply the heart muscle itself with oxygenated blood?",
      options: ["Pulmonary arteries", "Carotid arteries", "Coronary arteries", "Subclavian arteries"],
      correctAnswer: "Coronary arteries",
      explanation: "The coronary arteries branch off the aorta and supply oxygen and nutrients directly to the myocardium (heart muscle)."
    },
    {
      id: "heart-4", organId: "heart",
      question: "What is the natural pacemaker of the heart?",
      options: ["AV Node", "Bundle of His", "SA Node", "Purkinje fibers"],
      correctAnswer: "SA Node",
      explanation: "The Sinoatrial (SA) node initiates the electrical impulses that determine the heart rate."
    },
    {
      id: "heart-5", organId: "heart",
      question: "Which chamber receives deoxygenated blood from the body?",
      options: ["Right Atrium", "Right Ventricle", "Left Atrium", "Left Ventricle"],
      correctAnswer: "Right Atrium",
      explanation: "The right atrium receives deoxygenated blood returning from the body via the superior and inferior vena cava."
    },
    {
      id: "heart-6", organId: "heart",
      question: "What is the largest artery in the human body?",
      options: ["Pulmonary Artery", "Aorta", "Femoral Artery", "Carotid Artery"],
      correctAnswer: "Aorta",
      explanation: "The aorta is the largest artery, originating from the left ventricle and distributing oxygenated blood to all parts of the body."
    },
    {
      id: "heart-7", organId: "heart",
      question: "What structure prevents the backflow of blood into the right ventricle?",
      options: ["Tricuspid Valve", "Mitral Valve", "Pulmonary Valve", "Aortic Valve"],
      correctAnswer: "Pulmonary Valve",
      explanation: "The pulmonary valve closes during ventricular relaxation (diastole) to prevent blood from flowing back into the right ventricle from the pulmonary artery."
    },
    {
      id: "heart-8", organId: "heart",
      question: "What is the innermost layer of the heart wall called?",
      options: ["Epicardium", "Myocardium", "Endocardium", "Pericardium"],
      correctAnswer: "Endocardium",
      explanation: "The endocardium is the smooth, innermost membrane lining the cavities of the heart."
    },
    {
      id: "heart-9", organId: "heart",
      question: "What separates the left and right ventricles?",
      options: ["Atrial septum", "Interventricular septum", "Coronary sulcus", "Chordae tendineae"],
      correctAnswer: "Interventricular septum",
      explanation: "The interventricular septum is the stout wall separating the lower chambers (ventricles) of the heart."
    },
    {
      id: "heart-10", organId: "heart",
      question: "Which vessels carry oxygenated blood from the lungs to the heart?",
      options: ["Pulmonary arteries", "Pulmonary veins", "Vena cava", "Aorta"],
      correctAnswer: "Pulmonary veins",
      explanation: "Uniquely, the pulmonary veins carry oxygenated blood from the lungs to the left atrium."
    }
  ],
  brain: [
    {
      id: "brain-1", organId: "brain",
      question: "Which part of the brain is primarily responsible for coordinating movement and balance?",
      options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
      correctAnswer: "Cerebellum",
      explanation: "The cerebellum, located at the back of the brain, plays a critical role in motor control, coordination, and spatial balance."
    },
    {
      id: "brain-2", organId: "brain",
      question: "What lobe of the cerebral cortex is primarily associated with visual processing?",
      options: ["Frontal Lobe", "Parietal Lobe", "Occipital Lobe", "Temporal Lobe"],
      correctAnswer: "Occipital Lobe",
      explanation: "The occipital lobe contains the primary visual cortex and is responsible for processing visual information."
    },
    {
      id: "brain-3", organId: "brain",
      question: "Which structure connects the left and right hemispheres of the brain?",
      options: ["Corpus callosum", "Medulla oblongata", "Thalamus", "Hippocampus"],
      correctAnswer: "Corpus callosum",
      explanation: "The corpus callosum is a large bundle of nerve fibers that facilitates communication between the two cerebral hemispheres."
    },
    {
      id: "brain-4", organId: "brain",
      question: "What part of the brain controls vital autonomic functions like heart rate and breathing?",
      options: ["Cerebrum", "Thalamus", "Brainstem", "Cerebellum"],
      correctAnswer: "Brainstem",
      explanation: "The brainstem (specifically the medulla) controls involuntary life-sustaining functions such as respiration and heart rate."
    },
    {
      id: "brain-5", organId: "brain",
      question: "Which region is famously crucial for the formation of new memories?",
      options: ["Amygdala", "Hippocampus", "Basal ganglia", "Pons"],
      correctAnswer: "Hippocampus",
      explanation: "The hippocampus is a seahorse-shaped structure in the temporal lobe heavily involved in memory consolidation and spatial navigation."
    },
    {
      id: "brain-6", organId: "brain",
      question: "Which lobe is critical for executive functions, decision making, and voluntary movement?",
      options: ["Frontal Lobe", "Parietal Lobe", "Occipital Lobe", "Temporal Lobe"],
      correctAnswer: "Frontal Lobe",
      explanation: "The frontal lobe is situated at the front of the brain and manages executive functions, personality, and voluntary motor control."
    },
    {
      id: "brain-7", organId: "brain",
      question: "What structure serves as the main relay station for sensory information reaching the cerebral cortex?",
      options: ["Hypothalamus", "Thalamus", "Pons", "Midbrain"],
      correctAnswer: "Thalamus",
      explanation: "The thalamus processes and relays sensory and motor signals to the cerebral cortex."
    },
    {
      id: "brain-8", organId: "brain",
      question: "What fluid cushions the brain and spinal cord?",
      options: ["Synovial fluid", "Lymph", "Cerebrospinal fluid", "Plasma"],
      correctAnswer: "Cerebrospinal fluid",
      explanation: "Cerebrospinal fluid (CSF) surrounds the brain and spinal cord, providing mechanical and immunological protection."
    },
    {
      id: "brain-9", organId: "brain",
      question: "Which cranial nerve is primarily responsible for vision?",
      options: ["Olfactory nerve (I)", "Optic nerve (II)", "Trigeminal nerve (V)", "Vagus nerve (X)"],
      correctAnswer: "Optic nerve (II)",
      explanation: "The optic nerve (Cranial Nerve II) transmits visual information from the retina to the brain."
    },
    {
      id: "brain-10", organId: "brain",
      question: "What area of the brain regulates body temperature, hunger, and the endocrine system?",
      options: ["Thalamus", "Hypothalamus", "Hippocampus", "Amygdala"],
      correctAnswer: "Hypothalamus",
      explanation: "The hypothalamus links the nervous system to the endocrine system via the pituitary gland and regulates homeostasis."
    }
  ],
  lungs: [
    {
      id: "lungs-1", organId: "lungs",
      question: "How many lobes does the right human lung typically have?",
      options: ["One", "Two", "Three", "Four"],
      correctAnswer: "Three",
      explanation: "The right lung has three lobes (superior, middle, inferior), while the left lung has only two to make room for the heart."
    },
    {
      id: "lungs-2", organId: "lungs",
      question: "What are the tiny air sacs where gas exchange occurs called?",
      options: ["Bronchi", "Bronchioles", "Alveoli", "Pleura"],
      correctAnswer: "Alveoli",
      explanation: "Alveoli are microscopic balloon-like structures surrounded by capillaries where oxygen and carbon dioxide are exchanged."
    },
    {
      id: "lungs-3", organId: "lungs",
      question: "What is the primary muscle of respiration located below the lungs?",
      options: ["Intercostals", "Diaphragm", "Abdominals", "Pectoralis major"],
      correctAnswer: "Diaphragm",
      explanation: "The diaphragm is a dome-shaped muscle that contracts and flattens during inhalation, increasing thoracic cavity volume."
    },
    {
      id: "lungs-4", organId: "lungs",
      question: "What is the main tube that carries air from the larynx to the bronchi?",
      options: ["Esophagus", "Trachea", "Pharynx", "Epiglottis"],
      correctAnswer: "Trachea",
      explanation: "The trachea, or windpipe, is a cartilaginous tube connecting the larynx to the primary bronchi."
    },
    {
      id: "lungs-5", organId: "lungs",
      question: "What is the double-layered membrane surrounding each lung?",
      options: ["Pericardium", "Peritoneum", "Pleura", "Meninges"],
      correctAnswer: "Pleura",
      explanation: "The pleura consists of two layers (visceral and parietal) enclosing a fluid-filled space that reduces friction during breathing."
    },
    {
      id: "lungs-6", organId: "lungs",
      question: "Which substance reduces surface tension within the alveoli to prevent collapse?",
      options: ["Mucus", "Surfactant", "Plasma", "Lymph"],
      correctAnswer: "Surfactant",
      explanation: "Pulmonary surfactant is a lipoprotein complex that prevents alveolar collapse during exhalation."
    },
    {
      id: "lungs-7", organId: "lungs",
      question: "What is the notch on the left lung called where the heart rests?",
      options: ["Cardiac notch", "Pulmonary hilum", "Lingula", "Carina"],
      correctAnswer: "Cardiac notch",
      explanation: "The cardiac notch is an indentation on the surface of the left lung that accommodates the apex of the heart."
    },
    {
      id: "lungs-8", organId: "lungs",
      question: "The trachea bifurcates (splits) into what structures?",
      options: ["Primary bronchi", "Secondary bronchi", "Bronchioles", "Alveolar ducts"],
      correctAnswer: "Primary bronchi",
      explanation: "The trachea splits at the carina into the right and left primary (main) bronchi."
    },
    {
      id: "lungs-9", organId: "lungs",
      question: "Which process describes the movement of oxygen from alveoli into the blood?",
      options: ["Active transport", "Osmosis", "Simple diffusion", "Facilitated diffusion"],
      correctAnswer: "Simple diffusion",
      explanation: "Gases move across the respiratory membrane via simple diffusion, driven by partial pressure gradients."
    },
    {
      id: "lungs-10", organId: "lungs",
      question: "What cartilaginous flap prevents food from entering the trachea?",
      options: ["Uvula", "Glottis", "Epiglottis", "Thyroid cartilage"],
      correctAnswer: "Epiglottis",
      explanation: "The epiglottis folds down over the glottis during swallowing to prevent aspiration of food into the airway."
    }
  ],
  liver: [
    {
      id: "liver-1", organId: "liver",
      question: "The liver produces which digestive fluid?",
      options: ["Insulin", "Gastric juice", "Bile", "Amylase"],
      correctAnswer: "Bile",
      explanation: "The liver produces bile, which is necessary for the emulsification and digestion of dietary fats."
    },
    {
      id: "liver-2", organId: "liver",
      question: "Where is bile temporarily stored and concentrated?",
      options: ["Pancreas", "Gallbladder", "Duodenum", "Spleen"],
      correctAnswer: "Gallbladder",
      explanation: "Bile travels from the liver to the gallbladder, where it is stored and concentrated until needed in the small intestine."
    },
    {
      id: "liver-3", organId: "liver",
      question: "Which major blood vessel delivers nutrient-rich blood from the intestines to the liver?",
      options: ["Hepatic artery", "Hepatic vein", "Hepatic portal vein", "Inferior vena cava"],
      correctAnswer: "Hepatic portal vein",
      explanation: "The hepatic portal vein carries deoxygenated but nutrient-rich blood from the digestive tract directly to the liver for processing."
    },
    {
      id: "liver-4", organId: "liver",
      question: "In what form does the liver store excess glucose?",
      options: ["Glucagon", "Glycogen", "Triglycerides", "Starch"],
      correctAnswer: "Glycogen",
      explanation: "The liver converts excess glucose into glycogen for storage, later converting it back to glucose when blood sugar drops."
    },
    {
      id: "liver-5", organId: "liver",
      question: "What is the primary functional cell of the liver?",
      options: ["Kupffer cell", "Hepatocyte", "Enterocyte", "Adipocyte"],
      correctAnswer: "Hepatocyte",
      explanation: "Hepatocytes make up about 80% of the liver's mass and perform most of its metabolic, endocrine, and secretory functions."
    },
    {
      id: "liver-6", organId: "liver",
      question: "Which liver cells are specialized macrophages that clear bacteria and old red blood cells?",
      options: ["Hepatocytes", "Kupffer cells", "Stellate cells", "Endothelial cells"],
      correctAnswer: "Kupffer cells",
      explanation: "Kupffer cells reside in the liver sinusoids and play a crucial role in the body's immune response by phagocytizing pathogens."
    },
    {
      id: "liver-7", organId: "liver",
      question: "How many anatomical lobes is the human liver typically divided into?",
      options: ["Two", "Three", "Four", "Five"],
      correctAnswer: "Four",
      explanation: "The liver has four anatomical lobes: the right, left, caudate, and quadrate lobes."
    },
    {
      id: "liver-8", organId: "liver",
      question: "What ligament separates the right and left lobes of the liver anteriorly?",
      options: ["Falciform ligament", "Coronary ligament", "Round ligament", "Triangular ligament"],
      correctAnswer: "Falciform ligament",
      explanation: "The falciform ligament attaches the liver to the anterior abdominal wall and visually separates the right and left lobes."
    },
    {
      id: "liver-9", organId: "liver",
      question: "Which of these is NOT a function of the liver?",
      options: ["Detoxification of blood", "Synthesis of plasma proteins", "Production of red blood cells in adults", "Cholesterol synthesis"],
      correctAnswer: "Production of red blood cells in adults",
      explanation: "While the fetal liver produces red blood cells, adult erythropoiesis occurs in the bone marrow, not the liver."
    },
    {
      id: "liver-10", organId: "liver",
      question: "What toxic byproduct of protein metabolism does the liver convert into urea?",
      options: ["Uric acid", "Creatinine", "Ammonia", "Bilirubin"],
      correctAnswer: "Ammonia",
      explanation: "The liver converts highly toxic ammonia into less toxic urea, which is then excreted by the kidneys."
    }
  ],
  kidneys: [
    {
      id: "kidney-1", organId: "kidneys",
      question: "What is the basic functional filtering unit of the kidney?",
      options: ["Nephron", "Glomerulus", "Renal corpuscle", "Loop of Henle"],
      correctAnswer: "Nephron",
      explanation: "The nephron is the microscopic structural and functional unit of the kidney, responsible for filtering blood and forming urine."
    },
    {
      id: "kidney-2", organId: "kidneys",
      question: "What is the network of capillaries where blood filtration begins in the kidney?",
      options: ["Bowman's capsule", "Glomerulus", "Vasa recta", "Peritubular capillaries"],
      correctAnswer: "Glomerulus",
      explanation: "The glomerulus is a tuft of capillaries that filters plasma into Bowman's capsule as the first step in urine formation."
    },
    {
      id: "kidney-3", organId: "kidneys",
      question: "What tube transports urine from the kidney to the bladder?",
      options: ["Urethra", "Ureter", "Collecting duct", "Renal pelvis"],
      correctAnswer: "Ureter",
      explanation: "The ureters are muscular tubes that propel urine from the kidneys to the urinary bladder."
    },
    {
      id: "kidney-4", organId: "kidneys",
      question: "What is the outer layer of the kidney called?",
      options: ["Renal medulla", "Renal pelvis", "Renal cortex", "Renal capsule"],
      correctAnswer: "Renal cortex",
      explanation: "The renal cortex is the outer layer of the kidney where the glomeruli and most portions of the nephrons are located."
    },
    {
      id: "kidney-5", organId: "kidneys",
      question: "Which hormone produced by the kidneys stimulates red blood cell production?",
      options: ["Aldosterone", "Erythropoietin (EPO)", "Renin", "Antidiuretic hormone (ADH)"],
      correctAnswer: "Erythropoietin (EPO)",
      explanation: "The kidneys release EPO in response to low oxygen levels, stimulating the bone marrow to produce more red blood cells."
    },
    {
      id: "kidney-6", organId: "kidneys",
      question: "What part of the nephron is crucial for establishing a concentration gradient to conserve water?",
      options: ["Proximal convoluted tubule", "Distal convoluted tubule", "Loop of Henle", "Bowman's capsule"],
      correctAnswer: "Loop of Henle",
      explanation: "The Loop of Henle creates a concentration gradient in the medulla, allowing the kidney to reabsorb water and produce concentrated urine."
    },
    {
      id: "kidney-7", organId: "kidneys",
      question: "Where do the renal artery and renal vein enter/exit the kidney?",
      options: ["Renal cortex", "Renal pelvis", "Renal hilum", "Major calyx"],
      correctAnswer: "Renal hilum",
      explanation: "The renal hilum is the central fissure where blood vessels, nerves, and the ureter pass into and out of the kidney."
    },
    {
      id: "kidney-8", organId: "kidneys",
      question: "What enzyme is secreted by the kidneys to regulate blood pressure?",
      options: ["Angiotensin", "Renin", "Pepsin", "Amylase"],
      correctAnswer: "Renin",
      explanation: "Renin is secreted by the juxtaglomerular cells and activates the renin-angiotensin system to regulate blood pressure."
    },
    {
      id: "kidney-9", organId: "kidneys",
      question: "Which structure acts as a funnel for urine flowing to the ureter?",
      options: ["Renal cortex", "Renal medulla", "Renal pelvis", "Glomerulus"],
      correctAnswer: "Renal pelvis",
      explanation: "The renal pelvis collects urine from the major calyces and funnels it into the ureter."
    },
    {
      id: "kidney-10", organId: "kidneys",
      question: "Most water and solutes are reabsorbed into the blood in which part of the nephron?",
      options: ["Proximal convoluted tubule", "Loop of Henle", "Distal convoluted tubule", "Collecting duct"],
      correctAnswer: "Proximal convoluted tubule",
      explanation: "About 65% of water and most vital solutes are reabsorbed in the proximal convoluted tubule immediately after filtration."
    }
  ],
  eyeball: [
    {
      id: "eye-1", organId: "eyeball",
      question: "What is the transparent front part of the eye that covers the iris and pupil?",
      options: ["Lens", "Cornea", "Sclera", "Retina"],
      correctAnswer: "Cornea",
      explanation: "The cornea provides most of the eye's optical power and protects the internal structures."
    },
    {
      id: "eye-2", organId: "eyeball",
      question: "Which layer of the eye contains the photoreceptor cells?",
      options: ["Choroid", "Sclera", "Retina", "Macula"],
      correctAnswer: "Retina",
      explanation: "The retina is the light-sensitive inner lining of the eye containing rods and cones."
    },
    {
      id: "eye-3", organId: "eyeball",
      question: "What controls the size of the pupil and the amount of light reaching the retina?",
      options: ["Lens", "Cornea", "Iris", "Ciliary body"],
      correctAnswer: "Iris",
      explanation: "The iris is a muscular ring that constricts and dilates the pupil to regulate light entry."
    },
    {
      id: "eye-4", organId: "eyeball",
      question: "What structure focuses light rays onto the retina?",
      options: ["Cornea", "Lens", "Vitreous humor", "Fovea"],
      correctAnswer: "Lens",
      explanation: "The crystalline lens changes shape to fine-tune the focus of light onto the retina, a process called accommodation."
    },
    {
      id: "eye-5", organId: "eyeball",
      question: "What is the tough, white outer coat of the eyeball called?",
      options: ["Choroid", "Conjunctiva", "Sclera", "Cornea"],
      correctAnswer: "Sclera",
      explanation: "The sclera is the dense, fibrous opaque outer layer that maintains the eyeball's shape."
    },
    {
      id: "eye-6", organId: "eyeball",
      question: "Which photoreceptor cells are responsible for color vision?",
      options: ["Rods", "Cones", "Ganglion cells", "Bipolar cells"],
      correctAnswer: "Cones",
      explanation: "Cones function in bright light and provide color vision and high visual acuity, primarily located in the macula."
    },
    {
      id: "eye-7", organId: "eyeball",
      question: "What is the area of sharpest central vision on the retina?",
      options: ["Optic disc", "Fovea centralis", "Ora serrata", "Ciliary body"],
      correctAnswer: "Fovea centralis",
      explanation: "The fovea is a small pit in the macula packed with cones, responsible for sharp, detailed central vision."
    },
    {
      id: "eye-8", organId: "eyeball",
      question: "What fluid fills the large space between the lens and the retina?",
      options: ["Aqueous humor", "Vitreous humor", "Tears", "Synovial fluid"],
      correctAnswer: "Vitreous humor",
      explanation: "Vitreous humor is a clear, gel-like substance that fills the posterior chamber and helps maintain the eye's shape."
    },
    {
      id: "eye-9", organId: "eyeball",
      question: "Where do the optic nerve fibers exit the eye, creating a 'blind spot'?",
      options: ["Fovea", "Macula", "Optic disc", "Choroid"],
      correctAnswer: "Optic disc",
      explanation: "The optic disc is where ganglion cell axons exit the eye to form the optic nerve. It lacks photoreceptors, causing a blind spot."
    },
    {
      id: "eye-10", organId: "eyeball",
      question: "What muscle group alters the curvature of the lens?",
      options: ["Extraocular muscles", "Iris sphincter", "Ciliary muscle", "Orbicularis oculi"],
      correctAnswer: "Ciliary muscle",
      explanation: "The ciliary muscle contracts and relaxes to change the lens shape, allowing the eye to focus on near or distant objects."
    }
  ],
  intestine: [
    {
      id: "intestine-1", organId: "intestine",
      question: "What is the first and shortest segment of the small intestine?",
      options: ["Jejunum", "Ileum", "Duodenum", "Cecum"],
      correctAnswer: "Duodenum",
      explanation: "The duodenum receives chyme from the stomach along with bile and pancreatic juices for chemical digestion."
    },
    {
      id: "intestine-2", organId: "intestine",
      question: "Where does the majority of nutrient absorption occur?",
      options: ["Stomach", "Small intestine", "Large intestine", "Liver"],
      correctAnswer: "Small intestine",
      explanation: "The small intestine (specifically the jejunum and ileum) absorbs most of the nutrients from digested food."
    },
    {
      id: "intestine-3", organId: "intestine",
      question: "What are the tiny, finger-like projections that increase the surface area of the small intestine?",
      options: ["Cilia", "Villi", "Rugae", "Haustra"],
      correctAnswer: "Villi",
      explanation: "Villi and microvilli dramatically increase the intestinal surface area to maximize nutrient absorption."
    },
    {
      id: "intestine-4", organId: "intestine",
      question: "What is the primary function of the large intestine (colon)?",
      options: ["Protein digestion", "Fat emulsification", "Water absorption", "Vitamin C synthesis"],
      correctAnswer: "Water absorption",
      explanation: "The large intestine absorbs water and electrolytes from indigestible food matter, forming solid feces."
    },
    {
      id: "intestine-5", organId: "intestine",
      question: "Which valve separates the small intestine from the large intestine?",
      options: ["Pyloric sphincter", "Ileocecal valve", "Cardiac sphincter", "Anal sphincter"],
      correctAnswer: "Ileocecal valve",
      explanation: "The ileocecal valve controls the flow of material from the ileum into the cecum and prevents backflow."
    },
    {
      id: "intestine-6", organId: "intestine",
      question: "What is the pouch at the beginning of the large intestine called?",
      options: ["Appendix", "Cecum", "Rectum", "Sigmoid colon"],
      correctAnswer: "Cecum",
      explanation: "The cecum is a blind pouch that marks the beginning of the large intestine, to which the appendix is attached."
    },
    {
      id: "intestine-7", organId: "intestine",
      question: "What are the muscular contractions that move food through the digestive tract?",
      options: ["Segmentation", "Peristalsis", "Mastication", "Deglutition"],
      correctAnswer: "Peristalsis",
      explanation: "Peristalsis is a series of wave-like muscle contractions that propel food boluses and chyme through the gastrointestinal tract."
    },
    {
      id: "intestine-8", organId: "intestine",
      question: "What lymphatic structures in the intestinal villi absorb dietary fats?",
      options: ["Capillaries", "Lacteals", "Venules", "Peyer's patches"],
      correctAnswer: "Lacteals",
      explanation: "Lacteals are specialized lymphatic capillaries in the villi that absorb digested fats and fat-soluble vitamins."
    },
    {
      id: "intestine-9", organId: "intestine",
      question: "The S-shaped final portion of the colon before the rectum is the:",
      options: ["Ascending colon", "Descending colon", "Transverse colon", "Sigmoid colon"],
      correctAnswer: "Sigmoid colon",
      explanation: "The sigmoid colon connects the descending colon to the rectum and holds feces until they are ready to be expelled."
    },
    {
      id: "intestine-10", organId: "intestine",
      question: "What is the longest segment of the small intestine?",
      options: ["Duodenum", "Jejunum", "Ileum", "Cecum"],
      correctAnswer: "Ileum",
      explanation: "The ileum is the final and longest section of the small intestine, primarily responsible for absorbing vitamin B12 and bile salts."
    }
  ],
  pancreas: [
    {
      id: "pancreas-1", organId: "pancreas",
      question: "The pancreas functions as which type of gland?",
      options: ["Endocrine only", "Exocrine only", "Both endocrine and exocrine", "Lymphatic"],
      correctAnswer: "Both endocrine and exocrine",
      explanation: "The pancreas is a dual-function gland: exocrine (secreting digestive enzymes) and endocrine (secreting hormones)."
    },
    {
      id: "pancreas-2", organId: "pancreas",
      question: "Which cells in the pancreas produce insulin?",
      options: ["Alpha cells", "Beta cells", "Delta cells", "Acinar cells"],
      correctAnswer: "Beta cells",
      explanation: "Beta cells within the Islets of Langerhans produce and secrete insulin to lower blood glucose levels."
    },
    {
      id: "pancreas-3", organId: "pancreas",
      question: "What hormone is secreted by pancreatic alpha cells to raise blood glucose?",
      options: ["Insulin", "Glucagon", "Somatostatin", "Amylase"],
      correctAnswer: "Glucagon",
      explanation: "Glucagon stimulates the liver to convert stored glycogen into glucose, raising blood sugar levels."
    },
    {
      id: "pancreas-4", organId: "pancreas",
      question: "Where do the pancreatic digestive enzymes enter the gastrointestinal tract?",
      options: ["Stomach", "Duodenum", "Jejunum", "Ileum"],
      correctAnswer: "Duodenum",
      explanation: "The main pancreatic duct joins with the common bile duct to empty digestive juices into the duodenum."
    },
    {
      id: "pancreas-5", organId: "pancreas",
      question: "What substance does the pancreas secrete to neutralize stomach acid?",
      options: ["Bile", "Hydrochloric acid", "Bicarbonate", "Pepsin"],
      correctAnswer: "Bicarbonate",
      explanation: "Pancreatic juice is rich in bicarbonate, which neutralizes the highly acidic chyme entering the duodenum."
    },
    {
      id: "pancreas-6", organId: "pancreas",
      question: "Which of these enzymes is NOT produced by the pancreas?",
      options: ["Lipase", "Amylase", "Trypsin", "Pepsin"],
      correctAnswer: "Pepsin",
      explanation: "Pepsin is produced in the stomach, while the pancreas produces lipase, amylase, and proteases like trypsin."
    },
    {
      id: "pancreas-7", organId: "pancreas",
      question: "What is the functional unit of the exocrine pancreas?",
      options: ["Islets of Langerhans", "Acini", "Nephrons", "Follicles"],
      correctAnswer: "Acini",
      explanation: "Acinar cells form clusters called acini, which secrete digestive enzymes into the pancreatic ducts."
    },
    {
      id: "pancreas-8", organId: "pancreas",
      question: "The wide right portion of the pancreas nestled in the curve of the duodenum is the:",
      options: ["Tail", "Body", "Neck", "Head"],
      correctAnswer: "Head",
      explanation: "The head of the pancreas is the widest part and sits snugly in the C-shaped curve of the duodenum."
    },
    {
      id: "pancreas-9", organId: "pancreas",
      question: "Which cells secrete somatostatin in the pancreas?",
      options: ["Alpha cells", "Beta cells", "Delta cells", "F cells"],
      correctAnswer: "Delta cells",
      explanation: "Delta cells secrete somatostatin, which regulates the secretion of both insulin and glucagon."
    },
    {
      id: "pancreas-10", organId: "pancreas",
      question: "Which pancreatic enzyme breaks down dietary fats?",
      options: ["Pancreatic amylase", "Pancreatic lipase", "Trypsin", "Nuclease"],
      correctAnswer: "Pancreatic lipase",
      explanation: "Pancreatic lipase breaks down triglycerides into free fatty acids and monoglycerides for absorption."
    }
  ],
  skin: [
    {
      id: "skin-1", organId: "skin",
      question: "What is the outermost layer of the skin?",
      options: ["Dermis", "Epidermis", "Hypodermis", "Stratum corneum"],
      correctAnswer: "Epidermis",
      explanation: "The epidermis is the superficial, avascular outer layer of the skin."
    },
    {
      id: "skin-2", organId: "skin",
      question: "Which cells produce the pigment responsible for skin color?",
      options: ["Keratinocytes", "Melanocytes", "Langerhans cells", "Merkel cells"],
      correctAnswer: "Melanocytes",
      explanation: "Melanocytes located in the basal layer produce melanin, which protects the skin from UV radiation."
    },
    {
      id: "skin-3", organId: "skin",
      question: "What is the primary structural protein of the epidermis?",
      options: ["Collagen", "Elastin", "Keratin", "Melanin"],
      correctAnswer: "Keratin",
      explanation: "Keratin is a tough, fibrous protein that provides structural strength and waterproofing to the epidermis, hair, and nails."
    },
    {
      id: "skin-4", organId: "skin",
      question: "The dermis is rich in which protein fibers that provide strength and elasticity?",
      options: ["Keratin and melanin", "Actin and myosin", "Collagen and elastin", "Fibrin and fibronectin"],
      correctAnswer: "Collagen and elastin",
      explanation: "The dermis contains dense networks of collagen for tensile strength and elastin for flexibility."
    },
    {
      id: "skin-5", organId: "skin",
      question: "What type of gland secretes sebum (oil) to lubricate the skin and hair?",
      options: ["Eccrine gland", "Apocrine gland", "Sebaceous gland", "Ceruminous gland"],
      correctAnswer: "Sebaceous gland",
      explanation: "Sebaceous glands secrete sebum, an oily substance that waterproofs and lubricates the skin and hair follicles."
    },
    {
      id: "skin-6", organId: "skin",
      question: "Which layer lies beneath the dermis and consists mainly of adipose (fat) tissue?",
      options: ["Epidermis", "Papillary layer", "Reticular layer", "Hypodermis"],
      correctAnswer: "Hypodermis",
      explanation: "The hypodermis (subcutaneous layer) stores fat for insulation and energy and anchors the skin to underlying tissues."
    },
    {
      id: "skin-7", organId: "skin",
      question: "Which sweat glands are primarily responsible for thermoregulation?",
      options: ["Sebaceous glands", "Eccrine glands", "Apocrine glands", "Ceruminous glands"],
      correctAnswer: "Eccrine glands",
      explanation: "Eccrine sweat glands are distributed all over the body and produce watery sweat to cool the body via evaporation."
    },
    {
      id: "skin-8", organId: "skin",
      question: "What muscle causes hair to stand on end, producing 'goosebumps'?",
      options: ["Skeletal muscle", "Arrector pili", "Orbicularis", "Cutaneous maximus"],
      correctAnswer: "Arrector pili",
      explanation: "The arrector pili are tiny smooth muscles attached to hair follicles that contract in response to cold or fear."
    },
    {
      id: "skin-9", organId: "skin",
      question: "Which epidermal cells play a role in the immune response by presenting antigens?",
      options: ["Melanocytes", "Merkel cells", "Keratinocytes", "Langerhans cells"],
      correctAnswer: "Langerhans cells",
      explanation: "Langerhans cells are dendritic cells in the epidermis that capture antigens and participate in immune defense."
    },
    {
      id: "skin-10", organId: "skin",
      question: "What is the deepest layer of the epidermis where cell division actively occurs?",
      options: ["Stratum corneum", "Stratum lucidum", "Stratum granulosum", "Stratum basale"],
      correctAnswer: "Stratum basale",
      explanation: "The stratum basale is the deepest epidermal layer containing stem cells that constantly divide to replace shed skin cells."
    }
  ]
};
