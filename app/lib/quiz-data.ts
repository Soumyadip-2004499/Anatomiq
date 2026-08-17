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
  "heart": [
    {
      id: "heart-1", organId: "heart",
      question: "Which anatomical chamber forms the majority of the base (posterior surface) of the heart?",
      options: ["Left atrium", "Right atrium", "Left ventricle", "Right ventricle"],
      correctAnswer: "Left atrium",
      explanation: "The base of the heart faces posteriorly toward thoracic vertebrae T6–T9 and is formed primarily by the left atrium, with a smaller contribution from the right atrium."
    },
    {
      id: "heart-2", organId: "heart",
      question: "The apex of the heart is typically located at which anatomical landmark in an adult?",
      options: ["Left 5th intercostal space in the midclavicular line", "Right 4th intercostal space parasternal line", "Left 2nd intercostal space midclavicular line", "Left 6th intercostal space anterior axillary line"],
      correctAnswer: "Left 5th intercostal space in the midclavicular line",
      explanation: "The cardiac apex is directed inferolaterally and is formed entirely by the left ventricle, normally positioned in the left 5th intercostal space along the midclavicular line."
    },
    {
      id: "heart-3", organId: "heart",
      question: "Which chamber of the heart forms the largest portion of the sternocostal (anterior) surface?",
      options: ["Right ventricle", "Left ventricle", "Right atrium", "Left atrium"],
      correctAnswer: "Right ventricle",
      explanation: "The anterior (sternocostal) surface of the heart lies directly behind the sternum and costal cartilages, formed predominantly by the right ventricle."
    },
    {
      id: "heart-4", organId: "heart",
      question: "In the right atrium, what internal ridge separates the smooth-walled sinus venarum from the muscular pectinate portion?",
      options: ["Crista terminalis", "Fossa ovalis", "Modiolus", "Torus aorticus"],
      correctAnswer: "Crista terminalis",
      explanation: "The crista terminalis is a prominent vertical muscular ridge on the interior lateral wall of the right atrium separating the smooth sinus venarum from the anterior atrium with pectinate muscles."
    },
    {
      id: "heart-5", organId: "heart",
      question: "The fossa ovalis is an anatomical landmark located on which structure of the heart?",
      options: ["Interatrial septum", "Interventricular septum", "Anterior wall of left atrium", "Floor of right ventricle"],
      correctAnswer: "Interatrial septum",
      explanation: "The fossa ovalis is an oval depression situated on the right atrial side of the interatrial septum, representing the remnant of the embryonic foramen ovale."
    },
    {
      id: "heart-6", organId: "heart",
      question: "Where is the sinoatrial (SA) node anatomically located?",
      options: ["At the junction of the superior vena cava and the upper right atrium near the crista terminalis", "At the base of the interatrial septum near the coronary sinus", "In the membranous part of the interventricular septum", "At the apex of the left ventricle"],
      correctAnswer: "At the junction of the superior vena cava and the upper right atrium near the crista terminalis",
      explanation: "The SA node, the primary physiological pacemaker, is situated subepicardially at the anterolateral junction of the superior vena cava and the right atrium near the superior aspect of the crista terminalis."
    },
    {
      id: "heart-7", organId: "heart",
      question: "The atrioventricular (AV) node is located within which anatomical triangle in the right atrium?",
      options: ["Triangle of Koch", "Triangle of Petit", "Subclavian triangle", "Triangle of Calot"],
      correctAnswer: "Triangle of Koch",
      explanation: "The AV node is located within the Triangle of Koch, which is bounded by the tendon of Todaro, the tricuspid valve septal leaflet attachment, and the orifice of the coronary sinus."
    },
    {
      id: "heart-8", organId: "heart",
      question: "How many cusps (leaflets) comprise the right atrioventricular valve?",
      options: ["Three (anterior, posterior, septal)", "Two (anterior, posterior)", "Four (anterior, posterior, medial, lateral)", "Three (left, right, non-coronary)"],
      correctAnswer: "Three (anterior, posterior, septal)",
      explanation: "The right atrioventricular (tricuspid) valve consists of three distinct cusps: anterior, posterior, and septal."
    },
    {
      id: "heart-9", organId: "heart",
      question: "What is the primary anatomical and functional role of the moderator band (septomarginal trabecula)?",
      options: ["It carries the right bundle branch of the conduction system to the anterior papillary muscle", "It anchors the posterior leaflet of the mitral valve to the apex", "It prevents backward flow of blood into the coronary sinus", "It divides the right atrium into true atrium and sinus venarum"],
      correctAnswer: "It carries the right bundle branch of the conduction system to the anterior papillary muscle",
      explanation: "The moderator band is a muscular bundle that traverses the right ventricular cavity from the interventricular septum to the anterior papillary muscle, conducting the right bundle branch for synchronized ventricular contraction."
    },
    {
      id: "heart-10", organId: "heart",
      question: "How many pulmonary veins typically drain oxygenated blood into the left atrium?",
      options: ["4", "2", "3", "5"],
      correctAnswer: "4",
      explanation: "Four pulmonary veins—two superior and two inferior (from right and left lungs)—normally enter the posterior wall of the left atrium."
    },
    {
      id: "heart-11", organId: "heart",
      question: "Why is the free wall of the left ventricle substantially thicker than that of the right ventricle in normal adults?",
      options: ["It must generate higher pressures to overcome systemic vascular resistance", "It contains more adipocytes and collagen within the interstitium", "It receives all coronary venous return directly through Thebesian veins", "It contracts twice as frequently as the right ventricle during sinus rhythm"],
      correctAnswer: "It must generate higher pressures to overcome systemic vascular resistance",
      explanation: "The left ventricle pumps blood into the high-resistance systemic circulation requiring systolic pressures around 120 mmHg, whereas the right ventricle pumps into the low-resistance pulmonary circuit at around 25 mmHg."
    },
    {
      id: "heart-12", organId: "heart",
      question: "The mitral (bicuspid) valve consists of which two cusps?",
      options: ["Anterior and posterior leaflets", "Septal and lateral leaflets", "Right and left semilunar leaflets", "Superior and inferior leaflets"],
      correctAnswer: "Anterior and posterior leaflets",
      explanation: "The left atrioventricular (mitral) valve is composed of two cusps: a larger anterior (aortic) leaflet and a posterior (mural) leaflet."
    },
    {
      id: "heart-13", organId: "heart",
      question: "What is the primary physiological function of papillary muscles and chordae tendineae during ventricular systole?",
      options: ["To prevent prolapse and eversion of atrioventricular valve leaflets into the atria", "To actively pull open the atrioventricular valves for ventricular filling", "To close the semilunar valves at the beginning of ventricular diastole", "To depolarize the ventricular myocardium after the Purkinje fibers"],
      correctAnswer: "To prevent prolapse and eversion of atrioventricular valve leaflets into the atria",
      explanation: "During ventricular systole, papillary muscles contract to tighten the chordae tendineae, preventing the mitral and tricuspid valve cusps from being forced backwards (everting) into the atria under high ventricular pressure."
    },
    {
      id: "heart-14", organId: "heart",
      question: "The smooth-walled superior outflow tract leading into the pulmonary trunk from the right ventricle is the:",
      options: ["Conus arteriosus (infundibulum)", "Aortic vestibule", "Sinus venarum", "Pectinate tract"],
      correctAnswer: "Conus arteriosus (infundibulum)",
      explanation: "The conus arteriosus (or infundibulum) is the smooth, conical outflow tract at the superior aspect of the right ventricle leading directly to the pulmonary orifice."
    },
    {
      id: "heart-15", organId: "heart",
      question: "The smooth-walled outflow tract located directly inferior to the aortic orifice in the left ventricle is termed the:",
      options: ["Aortic vestibule", "Infundibulum", "Trabeculae carneae", "Sinus of Valsalva"],
      correctAnswer: "Aortic vestibule",
      explanation: "The aortic vestibule is the smooth-walled upper anterior part of the left ventricular cavity located immediately beneath the aortic semilunar valve."
    },
    {
      id: "heart-16", organId: "heart",
      question: "What is the key electrical function of the fibrous skeleton of the heart (annuli fibrosi)?",
      options: ["It electrically insulates the atria from the ventricles, ensuring impulses pass only via the AV bundle", "It accelerates electrical conduction across the atrioventricular groove directly into the epicardium", "It generates automatic rhythmic action potentials when the SA node fails", "It connects the SA node directly to the Purkinje network through collagen fibers"],
      correctAnswer: "It electrically insulates the atria from the ventricles, ensuring impulses pass only via the AV bundle",
      explanation: "The dense fibrous skeleton acts as an electrical insulator separating atrial and ventricular myocardium, ensuring that the cardiac action potential enters the ventricles exclusively through the bundle of His."
    },
    {
      id: "heart-17", organId: "heart",
      question: "Which pericardial space lies posterior to the ascending aorta and pulmonary trunk and anterior to the superior vena cava and left atrium?",
      options: ["Transverse pericardial sinus", "Oblique pericardial sinus", "Coronary sinus", "Costomediastinal recess"],
      correctAnswer: "Transverse pericardial sinus",
      explanation: "The transverse pericardial sinus is a passage in the pericardial cavity positioned posterior to the aorta and pulmonary trunk and anterior to the superior vena cava and left atrium."
    },
    {
      id: "heart-18", organId: "heart",
      question: "The blind-ended pouch of the pericardial cavity located posterior to the left atrium between the pulmonary veins is the:",
      options: ["Oblique pericardial sinus", "Transverse pericardial sinus", "Coronary sulcus", "Infundibular pouch"],
      correctAnswer: "Oblique pericardial sinus",
      explanation: "The oblique pericardial sinus is a cul-de-sac recess of the serous pericardial cavity situated behind the left atrium and bounded by the pulmonary veins and inferior vena cava."
    },
    {
      id: "heart-19", organId: "heart",
      question: "The parietal layer of serous pericardium is directly continuous with and adherent to which structure?",
      options: ["Fibrous pericardium", "Endocardium", "Myocardium", "Epicardium"],
      correctAnswer: "Fibrous pericardium",
      explanation: "The parietal layer of the serous pericardium forms the inner lining firmly attached to the fibrous pericardium, reflecting at the roots of great vessels to become the visceral serous pericardium (epicardium)."
    },
    {
      id: "heart-20", organId: "heart",
      question: "Somatic sensory pain fibers from the fibrous pericardium and parietal serous pericardium are carried primarily by which nerve?",
      options: ["Phrenic nerve (C3-C5)", "Vagus nerve (CN X)", "Intercostal nerves (T1-T4)", "Sympathetic splanchnic nerves"],
      correctAnswer: "Phrenic nerve (C3-C5)",
      explanation: "The phrenic nerves (C3-C5) supply somatic sensory innervation to the fibrous and parietal pericardium; pain from pericarditis is consequently referred to the shoulder dermatomes (C3-C5)."
    },
    {
      id: "heart-21", organId: "heart",
      question: "The anterior interventricular artery (left anterior descending / LAD) is a major direct branch of which artery?",
      options: ["Left main coronary artery", "Right coronary artery", "Left circumflex artery", "Ascending aorta"],
      correctAnswer: "Left main coronary artery",
      explanation: "The left main coronary artery arises from the left aortic sinus and quickly bifurcates into the anterior interventricular (LAD) artery and the circumflex artery."
    },
    {
      id: "heart-22", organId: "heart",
      question: "In a right-dominant coronary circulation (present in approximately 70-85% of individuals), which vessel gives rise to the posterior interventricular (descending) artery?",
      options: ["Right coronary artery", "Left circumflex artery", "Left anterior descending artery", "Marginal branch of left coronary artery"],
      correctAnswer: "Right coronary artery",
      explanation: "Coronary dominance is defined by the artery giving rise to the posterior interventricular artery (PDA); in right dominance, the PDA branches directly off the terminal right coronary artery."
    },
    {
      id: "heart-23", organId: "heart",
      question: "Into which cardiac chamber does the coronary sinus directly drain its venous blood?",
      options: ["Right atrium", "Left atrium", "Superior vena cava", "Right ventricle"],
      correctAnswer: "Right atrium",
      explanation: "The coronary sinus receives the majority of the cardiac venous blood and empties directly into the posterior-inferior region of the right atrium between the IVC valve and the tricuspid valve."
    },
    {
      id: "heart-24", organId: "heart",
      question: "Which vein travels in the anterior interventricular sulcus alongside the left anterior descending (LAD) artery?",
      options: ["Great cardiac vein", "Middle cardiac vein", "Small cardiac vein", "Anterior cardiac vein"],
      correctAnswer: "Great cardiac vein",
      explanation: "The great cardiac vein ascends in the anterior interventricular groove alongside the LAD artery before turning into the coronary sulcus to form the coronary sinus."
    },
    {
      id: "heart-25", organId: "heart",
      question: "Which vein runs in the posterior interventricular sulcus alongside the posterior interventricular (posterior descending) artery?",
      options: ["Middle cardiac vein", "Great cardiac vein", "Small cardiac vein", "Oblique vein of left atrium"],
      correctAnswer: "Middle cardiac vein",
      explanation: "The middle cardiac vein (posterior interventricular vein) ascends along the posterior interventricular sulcus with the posterior descending artery and drains into the coronary sinus."
    },
    {
      id: "heart-26", organId: "heart",
      question: "Which cardiac vein courses along the acute margin of the heart accompanying the right marginal branch of the RCA?",
      options: ["Small cardiac vein", "Great cardiac vein", "Middle cardiac vein", "Vein of Marshall"],
      correctAnswer: "Small cardiac vein",
      explanation: "The small cardiac vein runs along the inferior (acute) margin of the heart alongside the right marginal branch of the right coronary artery."
    },
    {
      id: "heart-27", organId: "heart",
      question: "Where do the anterior cardiac veins typically empty their deoxygenated blood?",
      options: ["Directly into the anterior wall of the right atrium", "Into the coronary sinus", "Into the left atrium", "Into the inferior vena cava"],
      correctAnswer: "Directly into the anterior wall of the right atrium",
      explanation: "The anterior cardiac veins drain blood from the anterior right ventricular wall and open directly through the anterior wall into the right atrium without passing through the coronary sinus."
    },
    {
      id: "heart-28", organId: "heart",
      question: "What are the Thebesian veins (venae cordis minimae)?",
      options: ["Minute valveless veins that drain blood directly from the myocardium into all four cardiac chambers", "Veins connecting the coronary sinus directly to the superior vena cava", "Lymphatic vessels draining pericardial fluid into the thoracic duct", "Microscopic venous arches in the aortic valve cusps"],
      correctAnswer: "Minute valveless veins that drain blood directly from the myocardium into all four cardiac chambers",
      explanation: "Thebesian veins are tiny valveless channels that drain venous blood directly from the myocardium into the cardiac chambers, primarily into the right atrium and right ventricle."
    },
    {
      id: "heart-29", organId: "heart",
      question: "In the majority of people (~60%), the sinoatrial (SA) nodal artery arises as a branch of which vessel?",
      options: ["Right coronary artery", "Left circumflex artery", "Left anterior descending artery", "Posterior descending artery"],
      correctAnswer: "Right coronary artery",
      explanation: "The SA nodal artery originates from the proximal right coronary artery in approximately 60% of individuals, and from the left circumflex artery in approximately 40%."
    },
    {
      id: "heart-30", organId: "heart",
      question: "The atrioventricular (AV) nodal artery typically arises from the dominant coronary artery at which landmark?",
      options: ["The crux of the heart", "The apex of the heart", "The anterior interventricular sulcus", "The origin of the ascending aorta"],
      correctAnswer: "The crux of the heart",
      explanation: "The AV nodal artery arises from the dominant coronary artery (usually the RCA) at the crux of the heart, the junction where the coronary sulcus meets the posterior interventricular sulcus."
    },
    {
      id: "heart-31", organId: "heart",
      question: "The first heart sound (S1, 'lub') is primarily generated by which mechanical event?",
      options: ["Closure of the mitral and tricuspid (atrioventricular) valves", "Closure of the aortic and pulmonary (semilunar) valves", "Rapid passive inflow of blood during early diastole", "Atrial systole ejecting blood into non-compliant ventricles"],
      correctAnswer: "Closure of the mitral and tricuspid (atrioventricular) valves",
      explanation: "S1 marks the beginning of ventricular systole and is caused by vibrations following the sudden closure of the mitral and tricuspid valves at the start of isovolumetric contraction."
    },
    {
      id: "heart-32", organId: "heart",
      question: "The second heart sound (S2, 'dub') is caused by which event?",
      options: ["Closure of the aortic and pulmonary (semilunar) valves", "Closure of the mitral and tricuspid valves", "Opening of the mitral valve", "Vigorous contraction of the papillary muscles"],
      correctAnswer: "Closure of the aortic and pulmonary (semilunar) valves",
      explanation: "S2 marks the onset of ventricular diastole and results from turbulence and vibrations associated with the closure of the aortic (A2) and pulmonary (P2) valves."
    },
    {
      id: "heart-33", organId: "heart",
      question: "Why does normal physiological splitting of the second heart sound (S2) increase during inspiration?",
      options: ["Increased venous return to the right ventricle delays pulmonary valve closure (P2)", "Decreased intrathoracic pressure accelerates aortic valve closure (A2)", "Inspiration causes earlier tricuspid valve closure", "Inspiration causes delayed closure of the mitral valve"],
      correctAnswer: "Increased venous return to the right ventricle delays pulmonary valve closure (P2)",
      explanation: "During inspiration, negative intrathoracic pressure increases venous return to the right heart, increasing right ventricular stroke volume and prolonging ejection time, thereby delaying closure of the pulmonary valve (P2)."
    },
    {
      id: "heart-34", organId: "heart",
      question: "What is the standard anatomical site for auscultating the aortic valve area?",
      options: ["Right 2nd intercostal space at the sternal border", "Left 2nd intercostal space at the sternal border", "Left 5th intercostal space at the midclavicular line", "Left 4th intercostal space at the lower sternal border"],
      correctAnswer: "Right 2nd intercostal space at the sternal border",
      explanation: "The aortic auscultation area is located in the right second intercostal space adjacent to the sternum, directly overlying the direction of blood flow in the ascending aorta."
    },
    {
      id: "heart-35", organId: "heart",
      question: "Where is the pulmonic valve sound best heard on the anterior chest wall?",
      options: ["Left 2nd intercostal space at the sternal border", "Right 2nd intercostal space at the sternal border", "Left 5th intercostal space in the midaxillary line", "Epigastric region"],
      correctAnswer: "Left 2nd intercostal space at the sternal border",
      explanation: "The pulmonary valve area is located at the left second intercostal space immediately lateral to the sternal edge."
    },
    {
      id: "heart-36", organId: "heart",
      question: "The mitral valve area (apex beat) is best auscultated at which surface location?",
      options: ["Left 5th intercostal space in the midclavicular line", "Right 2nd intercostal space", "Left 2nd intercostal space", "Right 4th intercostal space at the sternal edge"],
      correctAnswer: "Left 5th intercostal space in the midclavicular line",
      explanation: "The mitral valve area corresponds to the apex beat, located in the left 5th intercostal space at the midclavicular line."
    },
    {
      id: "heart-37", organId: "heart",
      question: "The tricuspid valve is optimally auscultated at which anatomical location?",
      options: ["Left lower sternal border (4th or 5th intercostal space)", "Right 2nd intercostal space", "Left 2nd intercostal space", "Posterior thoracic wall at T4"],
      correctAnswer: "Left lower sternal border (4th or 5th intercostal space)",
      explanation: "The tricuspid auscultation area is situated at the lower left sternal border in the 4th or 5th intercostal space."
    },
    {
      id: "heart-38", organId: "heart",
      question: "In cardiac muscle histology, which specialized junctions within intercalated discs provide low-resistance electrical coupling between adjacent myocytes?",
      options: ["Gap junctions (nexus)", "Desmosomes (maculae adherentes)", "Fascia adherens", "Tight junctions (zonula occludens)"],
      correctAnswer: "Gap junctions (nexus)",
      explanation: "Gap junctions, composed primarily of connexin-43 protein hexamers, allow direct ionic diffusion between myocytes, enabling rapid electrical wave propagation throughout the functional syncytium."
    },
    {
      id: "heart-39", organId: "heart",
      question: "What is the primary mechanical role of fascia adherens and desmosomes within cardiac intercalated discs?",
      options: ["Transmitting mechanical contractile force and preventing myocytes from separating during contraction", "Allowing rapid passage of calcium ions between adjacent cells", "Conducting action potentials faster than Purkinje fibers", "Synthesizing atrial natriuretic peptide"],
      correctAnswer: "Transmitting mechanical contractile force and preventing myocytes from separating during contraction",
      explanation: "Fascia adherens anchor actin filaments of terminal sarcomeres and desmosomes bind intermediate filaments across cell boundaries, transmitting physical tension and preventing cellular tearing during systole."
    },
    {
      id: "heart-40", organId: "heart",
      question: "How do the T-tubules of ventricular cardiomyocytes differ structurally from those of skeletal muscle fibers?",
      options: ["They are larger in diameter and form dyads at the Z-discs rather than triads at the A-I junctions", "They are completely absent, with calcium entering only through caveolae", "They form triads located exclusively at the M-line", "They are located only within the nuclear envelope"],
      correctAnswer: "They are larger in diameter and form dyads at the Z-discs rather than triads at the A-I junctions",
      explanation: "Cardiac T-tubules are significantly wider than skeletal muscle T-tubules, occur at Z-lines rather than A-I junctions, and form dyads with single sarcoplasmic reticulum terminal cisternae rather than triads."
    },
    {
      id: "heart-41", organId: "heart",
      question: "The ligamentum arteriosum represents the fibrous remnant of which fetal cardiovascular structure?",
      options: ["Ductus arteriosus", "Ductus venosus", "Umbilical vein", "Foramen ovale"],
      correctAnswer: "Ductus arteriosus",
      explanation: "The ligamentum arteriosum is the fibrous cord connecting the left pulmonary artery to the inferior aortic arch, which was the patent ductus arteriosus that shunted blood away from fetal lungs in utero."
    },
    {
      id: "heart-42", organId: "heart",
      question: "During cardiac embryogenesis, partitioning of the truncus arteriosus by the spiral septum gives rise to which two great vessels?",
      options: ["Ascending aorta and pulmonary trunk", "Superior vena cava and inferior vena cava", "Right and left pulmonary veins", "Brachiocephalic trunk and subclavian artery"],
      correctAnswer: "Ascending aorta and pulmonary trunk",
      explanation: "The embryonic truncus arteriosus is divided by the spiraling aorticopulmonary (neural crest-derived) septum into the ascending aorta and the pulmonary trunk."
    },
    {
      id: "heart-43", organId: "heart",
      question: "Which adult cardiac structures are primarily derived from the embryonic bulbus cordis?",
      options: ["Smooth outflow tracts of the ventricles (conus arteriosus and aortic vestibule)", "Trabeculated parts of both atria", "Coronary sinus and oblique vein of left atrium", "Descending thoracic aorta and aortic arch"],
      correctAnswer: "Smooth outflow tracts of the ventricles (conus arteriosus and aortic vestibule)",
      explanation: "The bulbus cordis forms the smooth outflow tracts of both ventricles: the conus arteriosus (infundibulum) in the right ventricle and the aortic vestibule in the left ventricle."
    },
    {
      id: "heart-44", organId: "heart",
      question: "The smooth-walled sinus venarum of the adult right atrium is derived embryologically from the:",
      options: ["Right horn of the sinus venosus", "Left horn of the sinus venosus", "Primitive ventricle", "Truncus arteriosus"],
      correctAnswer: "Right horn of the sinus venosus",
      explanation: "The right horn of the sinus venosus enlarges and gets incorporated into the right atrium to form the smooth posterior sinus venarum, into which the venae cavae empty."
    },
    {
      id: "heart-45", organId: "heart",
      question: "The left horn of the embryonic sinus venosus gives rise to which structure in the adult heart?",
      options: ["Coronary sinus and oblique vein of the left atrium", "Crista terminalis", "Superior vena cava", "Trabeculae carneae of the left ventricle"],
      correctAnswer: "Coronary sinus and oblique vein of the left atrium",
      explanation: "As venous return shifts to the right, the left horn of the sinus venosus diminishes and develops into the coronary sinus and the oblique vein of the left atrium (vein of Marshall)."
    },
    {
      id: "heart-46", organId: "heart",
      question: "Parasympathetic regulation of the heart via the vagus nerve (CN X) slows heart rate primarily through which receptor subtype?",
      options: ["Muscarinic M2 receptors", "Beta-1 adrenergic receptors", "Nicotinic neuronal receptors", "Alpha-1 adrenergic receptors"],
      correctAnswer: "Muscarinic M2 receptors",
      explanation: "Acetylcholine released from postganglionic parasympathetic vagal fibers binds to myocardial M2 muscarinic receptors, activating Gi proteins that decrease cAMP and open GIRK (K+Ach) channels, causing hyperpolarization and reduced SA/AV node firing rates."
    },
    {
      id: "heart-47", organId: "heart",
      question: "Sympathetic stimulation increases cardiac inotropy and chronotropy predominantly by activating which receptor type?",
      options: ["Beta-1 adrenergic receptors", "Beta-2 adrenergic receptors", "Alpha-2 adrenergic receptors", "Muscarinic M3 receptors"],
      correctAnswer: "Beta-1 adrenergic receptors",
      explanation: "Norepinephrine and epinephrine bind to myocardial beta-1 adrenergic receptors, triggering Gs-adenylyl cyclase-cAMP signaling and protein kinase A phosphorylation to augment contractility and rate."
    },
    {
      id: "heart-48", organId: "heart",
      question: "Where is the superficial cardiac plexus anatomically situated?",
      options: ["Inferior to the aortic arch and anterior to the right pulmonary artery", "Directly behind the left atrium near the esophagus", "On the posterior wall of the right atrium", "Deep within the interventricular septum"],
      correctAnswer: "Inferior to the aortic arch and anterior to the right pulmonary artery",
      explanation: "The superficial cardiac plexus lies beneath the concavity of the aortic arch, just anterior to the right pulmonary artery and adjacent to the ligamentum arteriosum."
    },
    {
      id: "heart-49", organId: "heart",
      question: "In ventricular contractile myocytes, Phase 0 (rapid depolarization) of the action potential is driven by:",
      options: ["Rapid influx of Na+ through voltage-gated Nav1.5 channels", "Efflux of K+ through delayed rectifier channels", "Influx of Ca2+ through L-type calcium channels", "Activation of HCN funny current channels"],
      correctAnswer: "Rapid influx of Na+ through voltage-gated Nav1.5 channels",
      explanation: "Phase 0 depolarization in contractile ventricular myocytes is mediated by a massive, sudden influx of Na+ through voltage-gated fast sodium channels (Nav1.5) when the membrane reaches threshold."
    },
    {
      id: "heart-50", organId: "heart",
      question: "Phase 2 (the plateau phase) of the ventricular action potential is primarily maintained by a balance between which currents?",
      options: ["Inward Ca2+ current through L-type channels and outward K+ currents", "Inward fast Na+ current and outward Cl- current", "Outward Na+ current via the Na+/K+ pump and inward H+", "Inward funny current (If) and outward Ca2+ current"],
      correctAnswer: "Inward Ca2+ current through L-type channels and outward K+ currents",
      explanation: "The plateau phase is maintained by slow inward Ca2+ influx via L-type calcium channels (Cav1.2) balanced against outward K+ efflux through delayed rectifier potassium channels (IKr and IKs)."
    },
    {
      id: "heart-51", organId: "heart",
      question: "Spontaneous Phase 4 diastolic depolarization in sinoatrial node pacemaker cells is primarily driven by the:",
      options: ["Funny current (If) via HCN channels", "Fast sodium current via Nav1.5 channels", "Rapid delayed rectifier potassium current (IKr)", "Inward sodium-potassium ATPase pump current"],
      correctAnswer: "Funny current (If) via HCN channels",
      explanation: "Pacemaker cells in the SA node undergo spontaneous Phase 4 depolarization due to the funny current (If), a hyperpolarization-activated inward mixed cation current carried through HCN channels."
    },
    {
      id: "heart-52", organId: "heart",
      question: "What is the primary mechanism of calcium release from the sarcoplasmic reticulum during cardiac excitation-contraction coupling?",
      options: ["Calcium-induced calcium release (CICR) via Ryanodine receptors (RyR2)", "Direct mechanical opening of RyR1 by DHP receptors", "Sodium-calcium antiporter reverse activation", "IP3-mediated calcium release from mitochondrial stores"],
      correctAnswer: "Calcium-induced calcium release (CICR) via Ryanodine receptors (RyR2)",
      explanation: "Extracellular calcium entering through L-type Ca2+ channels (Cav1.2) during Phase 2 triggers the opening of nearby Ryanodine receptor 2 (RyR2) channels on the sarcoplasmic reticulum, releasing a large wave of stored Ca2+ into the cytosol (CICR)."
    },
    {
      id: "heart-53", organId: "heart",
      question: "During cardiac relaxation (lusitropy), which SR membrane protein pumps calcium from the cytosol back into the sarcoplasmic reticulum?",
      options: ["SERCA2a (regulated by phospholamban)", "Ryanodine receptor 2 (regulated by calsequestrin)", "NCX1 (regulated by calmodulin)", "L-type calcium channel (Cav1.2)"],
      correctAnswer: "SERCA2a (regulated by phospholamban)",
      explanation: "SERCA2a (sarco/endoplasmic reticulum Ca2+-ATPase) pumps ~70% of cytosolic calcium back into the SR lumen. Unphosphorylated phospholamban inhibits SERCA2a, and its phosphorylation by PKA accelerates calcium reuptake."
    },
    {
      id: "heart-54", organId: "heart",
      question: "Atrial Natriuretic Peptide (ANP) is synthesized and secreted by atrial cardiomyocytes primarily in response to:",
      options: ["Atrial wall stretch from increased intravascular volume", "Sympathetic alpha-1 adrenergic stimulation", "Decreased systemic blood pressure and renal hypoperfusion", "Elevated plasma potassium concentrations"],
      correctAnswer: "Atrial wall stretch from increased intravascular volume",
      explanation: "Atrial myocytes release ANP when increased blood volume or pressure causes mechanical stretch of the atrial walls, inducing natriuresis, diuresis, and vasodilation to reduce volume load."
    },
    {
      id: "heart-55", organId: "heart",
      question: "The Frank-Starling law of the heart states that:",
      options: ["Stroke volume increases in response to an increase in end-diastolic volume (preload)", "Heart rate increases linearly with systemic arterial pressure", "Cardiac output is inversely proportional to myocardial oxygen consumption", "Coronary blood flow is determined solely by left ventricular systolic pressure"],
      correctAnswer: "Stroke volume increases in response to an increase in end-diastolic volume (preload)",
      explanation: "The Frank-Starling mechanism dictates that stretching cardiac muscle fibers by greater end-diastolic volume (preload) optimizes sarcomere actin-myosin overlap, producing a more forceful ventricular contraction and higher stroke volume."
    },
    {
      id: "heart-56", organId: "heart",
      question: "During which phase of the cardiac cycle do ventricular pressures rise steeply while all four valves remain closed?",
      options: ["Isovolumetric contraction", "Rapid ventricular ejection", "Isovolumetric relaxation", "Atrial systole"],
      correctAnswer: "Isovolumetric contraction",
      explanation: "Isovolumetric contraction begins after AV valve closure when ventricles contract with closed AV and semilunar valves, dramatically raising chamber pressure without altering blood volume."
    },
    {
      id: "heart-57", organId: "heart",
      question: "During the isovolumetric relaxation phase of the cardiac cycle:",
      options: ["All four heart valves are closed and ventricular pressure falls rapidly", "The mitral valve is open while the aortic valve is closed", "The aortic valve is open while the mitral valve is closed", "Atrial pressure exceeds ventricular pressure, forcing AV valves open"],
      correctAnswer: "All four heart valves are closed and ventricular pressure falls rapidly",
      explanation: "Isovolumetric relaxation occurs immediately following semilunar valve closure (S2) and before AV valve opening; during this phase, all four valves are shut while ventricular pressure falls without volume change."
    },
    {
      id: "heart-58", organId: "heart",
      question: "In the jugular venous pulse (JVP) waveform, what physiological event produces the 'a' wave?",
      options: ["Right atrial contraction (atrial systole)", "Right ventricular contraction bulging the tricuspid valve", "Passive atrial filling during ventricular systole", "Rapid ventricular ejection into the pulmonary trunk"],
      correctAnswer: "Right atrial contraction (atrial systole)",
      explanation: "The 'a' wave in the venous pulse reflects the transient rise in right atrial pressure generated by active atrial contraction at the end of ventricular diastole."
    },
    {
      id: "heart-59", organId: "heart",
      question: "Myocardial perfusion of the left ventricular subendocardium occurs predominantly during which phase of the cardiac cycle?",
      options: ["Diastole", "Isovolumetric contraction", "Rapid systolic ejection", "Reduced systolic ejection"],
      correctAnswer: "Diastole",
      explanation: "During ventricular systole, high intramyocardial pressure compresses intramural coronary vessels; therefore, approximately 70-80% of coronary blood flow to the left ventricle occurs during diastole when the myocardium is relaxed."
    },
    {
      id: "heart-60", organId: "heart",
      question: "Which anatomical recess of the left atrium is the predominant site (>90%) of thrombus formation in non-valvular atrial fibrillation?",
      options: ["Left atrial appendage (auricle)", "Sinus of Valsalva", "Conus arteriosus", "Fossa ovalis"],
      correctAnswer: "Left atrial appendage (auricle)",
      explanation: "The left atrial appendage is a muscular pouch lined with trabeculated pectinate muscles where blood stasis in atrial fibrillation leads to thrombus formation, posing a high risk of thromboembolic stroke."
    },
  ],
  "brain": [
    {
      id: "brain-1", organId: "brain",
      question: "Which cerebral gyrus contains the primary motor cortex (Brodmann area 4)?",
      options: ["Precentral gyrus", "Postcentral gyrus", "Superior temporal gyrus", "Cingulate gyrus"],
      correctAnswer: "Precentral gyrus",
      explanation: "The primary motor cortex is located in the precentral gyrus of the frontal lobe (Brodmann area 4) and controls voluntary somatic motor output."
    },
    {
      id: "brain-2", organId: "brain",
      question: "The primary somatosensory cortex (Brodmann areas 3, 1, and 2) is located in which lobe of the cerebrum?",
      options: ["Parietal lobe", "Frontal lobe", "Temporal lobe", "Occipital lobe"],
      correctAnswer: "Parietal lobe",
      explanation: "The primary somatosensory cortex is situated in the postcentral gyrus of the parietal lobe, processing tactile, proprioceptive, pain, and temperature sensations."
    },
    {
      id: "brain-3", organId: "brain",
      question: "Which region of the dominant frontal lobe is responsible for motor speech production?",
      options: ["Broca's area", "Wernicke's area", "Primary auditory cortex", "Angular gyrus"],
      correctAnswer: "Broca's area",
      explanation: "Broca's area is located in the inferior frontal gyrus (pars opercularis and pars triangularis, BA 44 and 45) of the dominant hemisphere and coordinates motor speech production."
    },
    {
      id: "brain-4", organId: "brain",
      question: "Wernicke's area, essential for language comprehension, is primarily situated in which cortical region?",
      options: ["Posterior superior temporal gyrus", "Anterior inferior frontal gyrus", "Precentral gyrus", "Calcarine sulcus"],
      correctAnswer: "Posterior superior temporal gyrus",
      explanation: "Wernicke's area (Brodmann area 22) resides in the posterior section of the superior temporal gyrus in the dominant hemisphere and is responsible for receptive language and comprehension."
    },
    {
      id: "brain-5", organId: "brain",
      question: "The primary visual cortex (Brodmann area 17) is located along the banks of which anatomical landmark in the occipital lobe?",
      options: ["Calcarine sulcus", "Central sulcus", "Lateral sulcus (Sylvian fissure)", "Parieto-occipital sulcus"],
      correctAnswer: "Calcarine sulcus",
      explanation: "The primary visual cortex (V1 or striate cortex) lines the superior and inferior banks of the calcarine sulcus in the medial occipital lobe."
    },
    {
      id: "brain-6", organId: "brain",
      question: "Where is the primary auditory cortex (Brodmann areas 41 and 42) located?",
      options: ["Transverse temporal gyri of Heschl", "Postcentral gyrus", "Cingulate cortex", "Uncus of temporal lobe"],
      correctAnswer: "Transverse temporal gyri of Heschl",
      explanation: "The primary auditory cortex occupies the transverse temporal gyri of Heschl located on the superior surface of the superior temporal gyrus buried within the lateral sulcus."
    },
    {
      id: "brain-7", organId: "brain",
      question: "What is the largest commissural white matter tract connecting the left and right cerebral hemispheres?",
      options: ["Corpus callosum", "Anterior commissure", "Fornix", "Internal capsule"],
      correctAnswer: "Corpus callosum",
      explanation: "The corpus callosum is the major interhemispheric commissure consisting of rostrum, genu, body, and splenium, facilitating communication between the two cerebral hemispheres."
    },
    {
      id: "brain-8", organId: "brain",
      question: "Which part of the internal capsule carries corticospinal motor fibers descending to the contralateral body?",
      options: ["Posterior limb", "Anterior limb", "Genu", "Retrolenticular part"],
      correctAnswer: "Posterior limb",
      explanation: "The posterior limb of the internal capsule contains the corticospinal tract fibers, as well as somatosensory thalamocortical projections."
    },
    {
      id: "brain-9", organId: "brain",
      question: "The lentiform (lenticular) nucleus is composed of which two deep gray matter structures?",
      options: ["Putamen and Globus pallidus", "Caudate nucleus and Putamen", "Caudate nucleus and Thalamus", "Substantia nigra and Subthalamic nucleus"],
      correctAnswer: "Putamen and Globus pallidus",
      explanation: "The lentiform nucleus consists of the lateral putamen and the medial globus pallidus (internal and external segments)."
    },
    {
      id: "brain-10", organId: "brain",
      question: "Degeneration of dopaminergic neurons in which midbrain structure is the primary hallmark of Parkinson's disease?",
      options: ["Substantia nigra pars compacta", "Red nucleus", "Superior colliculus", "Periaqueductal gray"],
      correctAnswer: "Substantia nigra pars compacta",
      explanation: "Parkinson's disease is characterized by loss of pigmented dopaminergic neurons in the substantia nigra pars compacta projecting to the striatum."
    },
    {
      id: "brain-11", organId: "brain",
      question: "Profound atrophy of which basal ganglia nucleus causes characteristic dilation of the frontal horns of the lateral ventricles in Huntington's disease?",
      options: ["Caudate nucleus", "Subthalamic nucleus", "Globus pallidus internus", "Claustrum"],
      correctAnswer: "Caudate nucleus",
      explanation: "Degeneration of the head of the caudate nucleus in Huntington's disease causes loss of the lateral bulging contour of the anterior (frontal) horns of the lateral ventricles."
    },
    {
      id: "brain-12", organId: "brain",
      question: "A lesion in the contralateral subthalamic nucleus typically results in which clinical movement disorder?",
      options: ["Hemiballismus", "Athetosis", "Resting tremor", "Intention tremor"],
      correctAnswer: "Hemiballismus",
      explanation: "Damage to the subthalamic nucleus (often due to lacunar infarct) disinhibits the thalamus, causing violent, flinging, involuntary movements of the contralateral limbs (hemiballismus)."
    },
    {
      id: "brain-13", organId: "brain",
      question: "Which thalamic relay nucleus receives sensory input from the optic tract and projects to the primary visual cortex?",
      options: ["Lateral geniculate nucleus (LGN)", "Medial geniculate nucleus (MGN)", "Ventral posterolateral nucleus (VPL)", "Ventral posteromedial nucleus (VPM)"],
      correctAnswer: "Lateral geniculate nucleus (LGN)",
      explanation: "The Lateral Geniculate Nucleus (LGN) of the thalamus relays visual input from retinal ganglion cells through optic radiations to the calcarine cortex (L = Light/Visual)."
    },
    {
      id: "brain-14", organId: "brain",
      question: "Which thalamic nucleus relays auditory input from the inferior colliculus to the primary auditory cortex?",
      options: ["Medial geniculate nucleus (MGN)", "Lateral geniculate nucleus (LGN)", "Ventral anterior nucleus (VA)", "Pulvinar"],
      correctAnswer: "Medial geniculate nucleus (MGN)",
      explanation: "The Medial Geniculate Nucleus (MGN) receives ascending auditory fibers from the inferior colliculus and projects to the primary auditory cortex (M = Music/Auditory)."
    },
    {
      id: "brain-15", organId: "brain",
      question: "Somatic sensory pathways from the body (spinothalamic and dorsal column-medial lemniscus) relay through which thalamic nucleus?",
      options: ["Ventral posterolateral nucleus (VPL)", "Ventral posteromedial nucleus (VPM)", "Ventral lateral nucleus (VL)", "Anterior thalamic nucleus"],
      correctAnswer: "Ventral posterolateral nucleus (VPL)",
      explanation: "The VPL nucleus relays pain, temperature, touch, vibration, and proprioception from the torso and limbs (spinal pathways) to the primary somatosensory cortex."
    },
    {
      id: "brain-16", organId: "brain",
      question: "Sensory information from the face carried by the trigeminothalamic tract and gustatory (taste) pathways relay in which thalamic nucleus?",
      options: ["Ventral posteromedial nucleus (VPM)", "Ventral posterolateral nucleus (VPL)", "Lateral posterior nucleus (LP)", "Centromedian nucleus"],
      correctAnswer: "Ventral posteromedial nucleus (VPM)",
      explanation: "The Ventral Posteromedial (VPM) nucleus processes sensory input from the trigeminal system (face) and gustatory system (taste) (M = Makeup on face / Mouth)."
    },
    {
      id: "brain-17", organId: "brain",
      question: "Which hypothalamic nucleus functions as the master pacemaker for circadian rhythms?",
      options: ["Suprachiasmatic nucleus", "Paraventricular nucleus", "Ventromedial nucleus", "Arcuate nucleus"],
      correctAnswer: "Suprachiasmatic nucleus",
      explanation: "The suprachiasmatic nucleus (SCN) receives direct light input from the retinohypothalamic tract and synchronizes circadian rhythms throughout the body."
    },
    {
      id: "brain-18", organId: "brain",
      question: "Which hypothalamic nuclei synthesize oxytocin and antidiuretic hormone (vasopressin) for axonal transport to the posterior pituitary?",
      options: ["Paraventricular and Supraoptic nuclei", "Suprachiasmatic and Preoptic nuclei", "Ventromedial and Dorsomedial nuclei", "Mammillary and Arcuate nuclei"],
      correctAnswer: "Paraventricular and Supraoptic nuclei",
      explanation: "The supraoptic nucleus (primarily ADH) and paraventricular nucleus (primarily oxytocin) produce these peptide hormones and transport them via the hypothalamohypophyseal tract to the neurohypophysis."
    },
    {
      id: "brain-19", organId: "brain",
      question: "Bilateral destruction of the ventromedial nucleus of the hypothalamus leads to which clinical outcome?",
      options: ["Hyperphagia and severe obesity", "Anorexia and severe emaciation", "Hyperthermia and heat stroke", "Central diabetes insipidus"],
      correctAnswer: "Hyperphagia and severe obesity",
      explanation: "The ventromedial hypothalamic nucleus functions as the satiety center; its destruction abolishes satiety signals, leading to hyperphagia and obesity."
    },
    {
      id: "brain-20", organId: "brain",
      question: "Stimulation of which hypothalamic nucleus triggers appetite and feeding behaviors?",
      options: ["Lateral hypothalamic nucleus", "Ventromedial nucleus", "Anterior hypothalamic nucleus", "Posterior hypothalamic nucleus"],
      correctAnswer: "Lateral hypothalamic nucleus",
      explanation: "The lateral hypothalamic area acts as the hunger center; stimulation triggers feeding, whereas destruction leads to anorexia and severe weight loss."
    },
    {
      id: "brain-21", organId: "brain",
      question: "Which hypothalamic region is primarily responsible for heat dissipation (cooling) via parasympathetic activation?",
      options: ["Anterior hypothalamus", "Posterior hypothalamus", "Mammillary bodies", "Dorsomedial nucleus"],
      correctAnswer: "Anterior hypothalamus",
      explanation: "The anterior hypothalamic nucleus senses elevated temperature and coordinates heat dissipation (sweating, cutaneous vasodilation) through parasympathetic mechanisms (A/C = Anterior/Cooling)."
    },
    {
      id: "brain-22", organId: "brain",
      question: "Which hypothalamic area mediates heat conservation and shivering in response to cold exposure?",
      options: ["Posterior hypothalamus", "Anterior hypothalamus", "Suprachiasmatic nucleus", "Supraoptic nucleus"],
      correctAnswer: "Posterior hypothalamus",
      explanation: "The posterior hypothalamus stimulates sympathetic responses (shivering, vasoconstriction) to generate and conserve body heat."
    },
    {
      id: "brain-23", organId: "brain",
      question: "The hippocampus, crucial for converting short-term memory into long-term declarative memory, is located in which cerebral lobe?",
      options: ["Medial temporal lobe", "Orbitofrontal cortex", "Superior parietal lobule", "Lateral occipital lobe"],
      correctAnswer: "Medial temporal lobe",
      explanation: "The hippocampal formation is located within the medial temporal lobe bordering the inferior horn of the lateral ventricle."
    },
    {
      id: "brain-24", organId: "brain",
      question: "Bilateral lesions of the amygdala (as seen in Klüver-Bucy syndrome) result in which triad of symptoms?",
      options: ["Hyperorality, hypersexuality, and psychic docility/loss of fear", "Resting tremor, cogwheel rigidity, and bradykinesia", "Broca's aphasia, right hemiplegia, and apraxia", "Pure sensory stroke, hemi-neglect, and agraphia"],
      correctAnswer: "Hyperorality, hypersexuality, and psychic docility/loss of fear",
      explanation: "Bilateral damage to the anterior temporal lobes involving the amygdala causes Klüver-Bucy syndrome, marked by hyperorality, hypersexuality, placidity (loss of fear/aggression), and visual agnosia."
    },
    {
      id: "brain-25", organId: "brain",
      question: "In the classic Papez circuit of emotion and memory, efferent fibers from the hippocampus travel via which white matter tract to reach the mammillary bodies?",
      options: ["Fornix", "Stria terminalis", "Cingulum", "Mammillothalamic tract"],
      correctAnswer: "Fornix",
      explanation: "The fornix is the primary C-shaped efferent bundle projecting from the hippocampus/subiculum to the mammillary bodies of the hypothalamus."
    },
    {
      id: "brain-26", organId: "brain",
      question: "Which epithalamic structure secretes melatonin and is prone to calcification forming visible 'brain sand' (corpora arenacea) on neuroimaging?",
      options: ["Pineal gland", "Pituitary gland", "Habenular nucleus", "Mammillary body"],
      correctAnswer: "Pineal gland",
      explanation: "The pineal gland (epiphysis cerebri) secretes melatonin into the bloodstream under dark conditions and frequently calcifies with age, serving as a midline radiographic landmark."
    },
    {
      id: "brain-27", organId: "brain",
      question: "Which midbrain tectal structures coordinate visual tracking reflexes and saccadic eye movements?",
      options: ["Superior colliculi", "Inferior colliculi", "Red nuclei", "Crus cerebri"],
      correctAnswer: "Superior colliculi",
      explanation: "The superior colliculi form the upper pair of swellings in the midbrain tectum (corpora quadrigemina) and direct reflexive head and eye movements toward visual stimuli."
    },
    {
      id: "brain-28", organId: "brain",
      question: "The inferior colliculi of the midbrain serve as vital synaptic stations along which sensory pathway?",
      options: ["Auditory pathway", "Visual pathway", "Olfactory pathway", "Gustatory pathway"],
      correctAnswer: "Auditory pathway",
      explanation: "The inferior colliculi receive ascending auditory fibers from the lateral lemniscus and project via the brachium of the inferior colliculus to the medial geniculate nucleus."
    },
    {
      id: "brain-29", organId: "brain",
      question: "Which cranial nerve is the ONLY one to exit from the dorsal (posterior) surface of the brainstem?",
      options: ["Trochlear nerve (CN IV)", "Oculomotor nerve (CN III)", "Abducens nerve (CN VI)", "Trigeminal nerve (CN V)"],
      correctAnswer: "Trochlear nerve (CN IV)",
      explanation: "CN IV (Trochlear) is unique among cranial nerves because it exits dorsally from the midbrain inferior to the inferior colliculus and completely decussates before emerging."
    },
    {
      id: "brain-30", organId: "brain",
      question: "Which narrow channel traverses the midbrain to connect the third ventricle to the fourth ventricle?",
      options: ["Cerebral aqueduct of Sylvius", "Foramen of Monro", "Foramen of Magendie", "Central canal"],
      correctAnswer: "Cerebral aqueduct of Sylvius",
      explanation: "The cerebral aqueduct (mesencephalic aqueduct of Sylvius) runs through the midbrain, surrounded by the periaqueductal gray matter, linking the 3rd and 4th ventricles."
    },
    {
      id: "brain-31", organId: "brain",
      question: "The trigeminal nerve (CN V) emerges from which anatomical region of the brainstem?",
      options: ["Anterolateral mid-pons", "Pontomedullary junction", "Interpeduncular fossa of midbrain", "Post-olivary sulcus of medulla"],
      correctAnswer: "Anterolateral mid-pons",
      explanation: "CN V exits directly from the anterolateral surface of the mid-pons as a large sensory root and smaller motor root."
    },
    {
      id: "brain-32", organId: "brain",
      question: "The middle cerebellar peduncle (brachium pontis) predominantly carries which type of nerve fibers into the cerebellum?",
      options: ["Pontocerebellar fibers from the contralateral pontine nuclei", "Olivocerebellar climbing fibers", "Dorsal spinocerebellar fibers", "Direct efferent Purkinje axons to the thalamus"],
      correctAnswer: "Pontocerebellar fibers from the contralateral pontine nuclei",
      explanation: "The middle cerebellar peduncle consists almost entirely of crossed afferent pontocerebellar fibers conveying corticopontine motor planning signals from the cerebral cortex."
    },
    {
      id: "brain-33", organId: "brain",
      question: "At which level of the brainstem does the decussation of the pyramids occur?",
      options: ["Caudal medulla oblongata", "Rostral midbrain", "Mid-pons", "Diencephalic-mesencephalic junction"],
      correctAnswer: "Caudal medulla oblongata",
      explanation: "Approximately 85-90% of corticospinal tract axons cross the anterior midline at the motor decussation located in the caudal (closed) medulla oblongata."
    },
    {
      id: "brain-34", organId: "brain",
      question: "Climbing fibers that establish direct excitatory synapses onto cerebellar Purkinje cells originate exclusively from which brainstem nucleus?",
      options: ["Inferior olivary nucleus", "Pontine nuclei", "Red nucleus", "Nucleus cuneatus"],
      correctAnswer: "Inferior olivary nucleus",
      explanation: "The inferior olivary complex in the medulla is the exclusive source of climbing fibers, which enter through the inferior cerebellar peduncle to synapse on Purkinje cell dendrites."
    },
    {
      id: "brain-35", organId: "brain",
      question: "Which cranial nerve emerges from the pre-olivary sulcus (groove between the pyramid and olive) of the medulla?",
      options: ["Hypoglossal nerve (CN XII)", "Glossopharyngeal nerve (CN IX)", "Vagus nerve (CN X)", "Accessory nerve (CN XI)"],
      correctAnswer: "Hypoglossal nerve (CN XII)",
      explanation: "The hypoglossal nerve (CN XII) emerges as multiple rootlets from the anterolateral (pre-olivary) sulcus between the pyramid and olive."
    },
    {
      id: "brain-36", organId: "brain",
      question: "Second-order somatosensory neurons located in the nucleus gracilis and nucleus cuneatus cross the medulla as which fiber bundle before forming the medial lemniscus?",
      options: ["Internal arcuate fibers", "Lateral lemniscus", "Corpus trapezoideum", "Stria vascularis"],
      correctAnswer: "Internal arcuate fibers",
      explanation: "Internal arcuate fibers arise from the dorsal column nuclei (gracilis and cuneatus), sweep anteromedially across the midline in the sensory decussation, and ascend as the medial lemniscus."
    },
    {
      id: "brain-37", organId: "brain",
      question: "What is the largest and most lateral of the deep cerebellar nuclei, responsible for communicating with the motor thalamus and cerebral cortex?",
      options: ["Dentate nucleus", "Fastigial nucleus", "Globose nucleus", "Emboliform nucleus"],
      correctAnswer: "Dentate nucleus",
      explanation: "The dentate nucleus is the largest and most lateral deep cerebellar nucleus, participating in the cerebrocerebellar circuit for motor planning and fine coordination."
    },
    {
      id: "brain-38", organId: "brain",
      question: "Which cerebellar division (the archicerebellum) maintains primary connections with the vestibular system to regulate balance and vestibulo-ocular reflexes?",
      options: ["Flocculonodular lobe", "Anterior lobe", "Posterior lobe", "Cerebellar tonsils"],
      correctAnswer: "Flocculonodular lobe",
      explanation: "The flocculonodular lobe (vestibulocerebellum) is phylogenetically the oldest part of the cerebellum, dedicated to equilibrium, balance, and coordinating eye movements."
    },
    {
      id: "brain-39", organId: "brain",
      question: "Which neuronal cell type provides the SOLE inhibitory output from the cerebellar cortex to the deep cerebellar nuclei?",
      options: ["Purkinje cells", "Granule cells", "Golgi cells", "Basket cells"],
      correctAnswer: "Purkinje cells",
      explanation: "Purkinje cells are large GABAergic neurons whose axons represent the only efferent pathway leaving the cerebellar cortex to regulate deep cerebellar nuclei."
    },
    {
      id: "brain-40", organId: "brain",
      question: "A unilateral lesion of the right cerebellar hemisphere produces motor deficits primarily on which side of the body?",
      options: ["Ipsilateral side (right side)", "Contralateral side (left side)", "Bilateral limbs equally", "Truncal musculature only without limb involvement"],
      correctAnswer: "Ipsilateral side (right side)",
      explanation: "Cerebellar hemisphere output crosses twice before reaching the spinal motor neurons (dentato-rubro-thalamo-cortical tract crosses, and corticospinal tract crosses), resulting in ipsilateral clinical signs (ataxia, dysmetria)."
    },
    {
      id: "brain-41", organId: "brain",
      question: "Through which anatomical opening does cerebrospinal fluid flow from each lateral ventricle into the third ventricle?",
      options: ["Interventricular foramen of Monro", "Cerebral aqueduct of Sylvius", "Foramen of Magendie", "Foramen of Luschka"],
      correctAnswer: "Interventricular foramen of Monro",
      explanation: "The paired interventricular foramina of Monro connect the anterior horn and body of each lateral ventricle to the slit-like midline third ventricle."
    },
    {
      id: "brain-42", organId: "brain",
      question: "Which apertures allow cerebrospinal fluid to exit the fourth ventricle into the subarachnoid space (cisterna magna and pontine cistern)?",
      options: ["Median aperture of Magendie and two lateral apertures of Luschka", "Two foramina of Monro and one aqueduct of Sylvius", "Foramen cecum and foramen spinosum", "Jugular foramen and hypoglossal canal"],
      correctAnswer: "Median aperture of Magendie and two lateral apertures of Luschka",
      explanation: "CSF leaves the fourth ventricle via one median aperture (Magendie - M for Midline) and two lateral apertures (Luschka - L for Lateral) into the subarachnoid cisterns."
    },
    {
      id: "brain-43", organId: "brain",
      question: "Which specialized vascular structure lined with modified ependymal cells produces the majority of cerebrospinal fluid (CSF)?",
      options: ["Choroid plexus", "Arachnoid granulations", "Pia mater", "Corpora cavernosa"],
      correctAnswer: "Choroid plexus",
      explanation: "The choroid plexus, found in the lateral, third, and fourth ventricles, secretes CSF via active transport and filtration across tight-junctioned choroid epithelial cells."
    },
    {
      id: "brain-44", organId: "brain",
      question: "Where is cerebrospinal fluid predominantly reabsorbed back into the systemic venous circulation?",
      options: ["Arachnoid granulations (villi) into the superior sagittal sinus", "Choroid plexus into the internal cerebral veins", "Ependymal lining into the cavernous sinus", "Pial capillaries into the basilar vein"],
      correctAnswer: "Arachnoid granulations (villi) into the superior sagittal sinus",
      explanation: "Arachnoid granulations (Pacchionian bodies) project through the dura mater into dural venous sinuses (especially the superior sagittal sinus) acting as one-way pressure valves for CSF drainage."
    },
    {
      id: "brain-45", organId: "brain",
      question: "Which sickle-shaped dural fold dips vertically into the longitudinal cerebral fissure to separate the two cerebral hemispheres?",
      options: ["Falx cerebri", "Tentorium cerebelli", "Falx cerebelli", "Diaphragma sellae"],
      correctAnswer: "Falx cerebri",
      explanation: "The falx cerebri is the large, vertical crescentic dural fold attached anteriorly to the crista galli and frontal crest, descending between the two cerebral hemispheres."
    },
    {
      id: "brain-46", organId: "brain",
      question: "An epidural hematoma typically results from trauma to the pterion tearing which arterial vessel, producing a lens-shaped (biconvex) collection on non-contrast CT?",
      options: ["Middle meningeal artery", "Bridging cortical vein", "Anterior cerebral artery", "Basilar artery"],
      correctAnswer: "Middle meningeal artery",
      explanation: "Fracture of the pterion commonly lacerates the anterior branch of the middle meningeal artery (a branch of the maxillary artery), creating a high-pressure, biconvex epidural hematoma that does not cross cranial sutures."
    },
    {
      id: "brain-47", organId: "brain",
      question: "Tearing of which vascular structures produces a crescent-shaped subdural hematoma that can cross cranial suture lines?",
      options: ["Bridging cortical veins", "Middle meningeal artery", "Superficial temporal artery", "Internal carotid artery"],
      correctAnswer: "Bridging cortical veins",
      explanation: "Subdural hematomas result from rupture of delicate bridging veins traversing the subdural space to enter dural venous sinuses, especially in elderly or brain-atrophy patients."
    },
    {
      id: "brain-48", organId: "brain",
      question: "A patient presenting with a sudden 'thunderclap' headache ('worst headache of life') is most likely suffering from a subarachnoid hemorrhage due to rupture of what structure?",
      options: ["Saccular (berry) aneurysm at a Circle of Willis bifurcation", "Middle meningeal artery in the epidural space", "Internal jugular vein at the skull base", "Choroid plexus papilloma"],
      correctAnswer: "Saccular (berry) aneurysm at a Circle of Willis bifurcation",
      explanation: "Non-traumatic subarachnoid hemorrhage is most commonly caused by rupture of a saccular (berry) aneurysm, particularly at the anterior communicating artery or branch points of the Circle of Willis."
    },
    {
      id: "brain-49", organId: "brain",
      question: "Which of the following arteries is directly part of the arterial polygon known as the Circle of Willis?",
      options: ["Anterior communicating artery", "Middle cerebral artery", "Superior cerebellar artery", "Posterior inferior cerebellar artery (PICA)"],
      correctAnswer: "Anterior communicating artery",
      explanation: "The Circle of Willis is formed by the ACA, ACom, ICA, PCom, and PCA. The Middle Cerebral Artery (MCA) is a terminal branch of the ICA and is not strictly part of the anastomotic ring itself."
    },
    {
      id: "brain-50", organId: "brain",
      question: "An acute occlusion of the Anterior Cerebral Artery (ACA) typically causes motor and sensory deficits that predominantly affect which anatomical area?",
      options: ["Contralateral lower limb and foot", "Contralateral face and upper limb", "Ipsilateral upper limb only", "Bilateral facial muscles"],
      correctAnswer: "Contralateral lower limb and foot",
      explanation: "The ACA supplies the medial surface of the frontal and parietal cortices, corresponding to the leg and foot areas of the motor and sensory homunculi."
    },
    {
      id: "brain-51", organId: "brain",
      question: "Occlusion of the Middle Cerebral Artery (MCA) trunk typically results in motor and sensory loss predominantly localized to which regions?",
      options: ["Contralateral face and upper extremity", "Contralateral lower extremity and foot", "Ipsilateral face and lower extremity", "Isolated bilateral lower extremities"],
      correctAnswer: "Contralateral face and upper extremity",
      explanation: "The MCA supplies the vast lateral convexity of the cerebral hemispheres, where the homunculus maps the face, mouth, hand, and upper extremity."
    },
    {
      id: "brain-52", organId: "brain",
      question: "Infarction of the occipital lobe supplied by the Posterior Cerebral Artery (PCA) commonly produces contralateral homonymous hemianopia with which notable visual sparing?",
      options: ["Macular sparing", "Monocular visual loss", "Bitemporal hemianopia", "Superior quadrantanopia only"],
      correctAnswer: "Macular sparing",
      explanation: "PCA territory strokes cause contralateral homonymous hemianopia with macular sparing due to collateral blood supply to the occipital pole provided by the middle cerebral artery."
    },
    {
      id: "brain-53", organId: "brain",
      question: "Occlusion of the Posterior Inferior Cerebellar Artery (PICA) leads to Lateral Medullary (Wallenberg) syndrome. Which structure's injury accounts for the associated dysphagia and hoarseness?",
      options: ["Nucleus ambiguus", "Hypoglossal nucleus", "Main sensory trigeminal nucleus", "Edinger-Westphal nucleus"],
      correctAnswer: "Nucleus ambiguus",
      explanation: "The nucleus ambiguus provides motor innervation (via CN IX and X) to the pharynx, larynx, and soft palate; its ischemic necrosis causes dysphagia, dysphonia (hoarseness), and diminished gag reflex."
    },
    {
      id: "brain-54", organId: "brain",
      question: "Lateral Pontine Syndrome, characterized by ipsilateral facial paralysis and deafness, results from occlusion of which cerebellar artery?",
      options: ["Anterior inferior cerebellar artery (AICA)", "Posterior inferior cerebellar artery (PICA)", "Superior cerebellar artery (SCA)", "Anterior spinal artery (ASA)"],
      correctAnswer: "Anterior inferior cerebellar artery (AICA)",
      explanation: "AICA infarction affects the lateral caudal pons, damaging the facial nucleus/nerve (ipsilateral facial droop) and vestibular/cochlear nuclei (ipsilateral hearing loss, vertigo, tinnitus) ('Facial droop = AICA's swoop')."
    },
    {
      id: "brain-55", organId: "brain",
      question: "Which cranial nerve travels completely free-floating inside the lumen of the cavernous sinus adjacent to the internal carotid artery, making it uniquely vulnerable to sinus pathology?",
      options: ["Abducens nerve (CN VI)", "Oculomotor nerve (CN III)", "Trochlear nerve (CN IV)", "Ophthalmic nerve (CN V1)"],
      correctAnswer: "Abducens nerve (CN VI)",
      explanation: "CN VI and the internal carotid artery travel directly through the center of the cavernous sinus lumen, while CN III, IV, V1, and V2 are embedded within the lateral dural wall."
    },
    {
      id: "brain-56", organId: "brain",
      question: "The confluence of sinuses (torcular Herophili) is located on the internal surface of the occipital bone and receives blood from which major venous channels?",
      options: ["Superior sagittal, straight, and occipital sinuses", "Inferior sagittal, cavernous, and petrosal sinuses", "Sigmoid, basilar, and sphenoparietal sinuses", "Great cerebral vein of Galen and basal veins only"],
      correctAnswer: "Superior sagittal, straight, and occipital sinuses",
      explanation: "The confluence of sinuses is the anatomical junction where the superior sagittal, straight, and occipital sinuses unite, draining laterally into the transverse sinuses."
    },
    {
      id: "brain-57", organId: "brain",
      question: "Which glial cells extend perivascular end-feet to support the blood-brain barrier and regulate extracellular ion concentrations and neurotransmitter reuptake?",
      options: ["Astrocytes", "Oligodendrocytes", "Microglia", "Ependymal cells"],
      correctAnswer: "Astrocytes",
      explanation: "Astrocytes have specialized perivascular end-feet (podocytes) that induce tight junction formation between endothelial cells, maintain extracellular potassium homeostasis, and recycle glutamate."
    },
    {
      id: "brain-58", organId: "brain",
      question: "Which glial cell type is responsible for the formation and maintenance of myelin sheaths around multiple axons within the Central Nervous System (CNS)?",
      options: ["Oligodendrocytes", "Schwann cells", "Microglia", "Radial glia"],
      correctAnswer: "Oligodendrocytes",
      explanation: "Oligodendrocytes myelinate multiple axon segments in the CNS (up to 30-50 axons each), whereas Schwann cells myelinate a single internode of a single axon in the PNS."
    },
    {
      id: "brain-59", organId: "brain",
      question: "What is the primary cellular structural component that forms the physical barrier restricting paracellular diffusion in the blood-brain barrier (BBB)?",
      options: ["Endothelial tight junctions (zonulae occludentes)", "Astrocyte gap junctions", "Fenestrated endothelial pores", "Pericyte desmosomes"],
      correctAnswer: "Endothelial tight junctions (zonulae occludentes)",
      explanation: "The fundamental structural basis of the BBB is the presence of continuous, non-fenestrated capillary endothelial cells joined by complex tight junctions (zonulae occludentes) containing claudins and occludins."
    },
    {
      id: "brain-60", organId: "brain",
      question: "Which circumventricular organ located on the dorsal surface of the medulla lacks a blood-brain barrier and functions as the chemoreceptor trigger zone for emesis (vomiting)?",
      options: ["Area postrema", "Subfornical organ", "Organum vasculosum of lamina terminalis (OVLT)", "Median eminence"],
      correctAnswer: "Area postrema",
      explanation: "The area postrema, located on the floor of the fourth ventricle in the caudal medulla, lacks a BBB, allowing it to detect blood-borne emetic toxins and trigger vomiting."
    },
  ],
  "lungs": [
    {
      id: "lungs-1", organId: "lungs",
      question: "How many lobes and fissures are present in a standard normal right lung?",
      options: ["Three lobes separated by two fissures (oblique and horizontal)", "Two lobes separated by one fissure (oblique)", "Three lobes separated by one fissure (horizontal)", "Four lobes separated by three fissures"],
      correctAnswer: "Three lobes separated by two fissures (oblique and horizontal)",
      explanation: "The right lung is divided into three lobes (superior, middle, and inferior) by two fissures: the oblique fissure (separating inferior from superior and middle) and the horizontal fissure (separating superior from middle)."
    },
    {
      id: "lungs-2", organId: "lungs",
      question: "Which anatomical structure of the left lung is considered the morphological and embryological homologue of the right lung's middle lobe?",
      options: ["Lingula", "Cardiac notch", "Cupula", "Pulmonary ligament"],
      correctAnswer: "Lingula",
      explanation: "The lingula is a tongue-shaped projection of the anteroinferior part of the left superior lobe, located immediately below the cardiac notch, corresponding morphologically to the middle lobe of the right lung."
    },
    {
      id: "lungs-3", organId: "lungs",
      question: "Along the midaxillary line, what are the normal surface anatomical lower limits of the lung and parietal pleura during quiet respiration, respectively?",
      options: ["8th rib for lung, 10th rib for pleura", "6th rib for lung, 8th rib for pleura", "10th rib for lung, 12th rib for pleura", "4th rib for lung, 6th rib for pleura"],
      correctAnswer: "8th rib for lung, 10th rib for pleura",
      explanation: "Following the 'rule of twos', the inferior margins of the lungs and parietal pleura cross the 6th and 8th ribs at the midclavicular line, the 8th and 10th ribs at the midaxillary line, and the 10th and 12th ribs at the scapular/paravertebral line."
    },
    {
      id: "lungs-4", organId: "lungs",
      question: "In the hilum of the right lung, which structure is typically located most superiorly?",
      options: ["Eparterial bronchus (superior lobar bronchus)", "Pulmonary artery", "Inferior pulmonary vein", "Phrenic nerve"],
      correctAnswer: "Eparterial bronchus (superior lobar bronchus)",
      explanation: "In the right hilum, the superior lobar bronchus arises above the pulmonary artery and is termed the eparterial bronchus, occupying the most superior position. In the left hilum, the pulmonary artery is most superior."
    },
    {
      id: "lungs-5", organId: "lungs",
      question: "What is the most superior major vascular structure in the hilum of the left lung?",
      options: ["Left pulmonary artery", "Superior left pulmonary vein", "Left main bronchus", "Left bronchial artery"],
      correctAnswer: "Left pulmonary artery",
      explanation: "In the left lung hilum, the left pulmonary artery occupies the most superior position (arching above the left principal bronchus), whereas the left main bronchus lies central and the pulmonary veins are anteroinferior."
    },
    {
      id: "lungs-6", organId: "lungs",
      question: "At what vertebral level does the trachea normally bifurcate into the right and left primary bronchi?",
      options: ["T4–T5 intervertebral disc (sternal angle of Louis)", "C6 vertebral body (cricoid cartilage)", "T2–T3 intervertebral disc (suprasternal notch)", "T7–T8 intervertebral disc (xiphisternal joint)"],
      correctAnswer: "T4–T5 intervertebral disc (sternal angle of Louis)",
      explanation: "The tracheal bifurcation (carina) is located at the level of the sternal angle of Louis, corresponding to the T4-T5 intervertebral disc in a supine adult."
    },
    {
      id: "lungs-7", organId: "lungs",
      question: "Why are aspirated foreign bodies more likely to enter the right main bronchus than the left?",
      options: ["The right main bronchus is wider, shorter, and runs more vertically", "The right main bronchus is narrower, longer, and more horizontal", "The right lung has higher negative intrapleural pressure", "The carina is angled sharply to the right"],
      correctAnswer: "The right main bronchus is wider, shorter, and runs more vertically",
      explanation: "The right main bronchus is wider, shorter (approx. 2.5 cm vs 5 cm), and descends more vertically in line with the trachea (approx. 25° angle vs 45° for the left), facilitating foreign body entry."
    },
    {
      id: "lungs-8", organId: "lungs",
      question: "How many bronchopulmonary segments are typically present in the normal right lung?",
      options: ["10 segments (3 superior, 2 middle, 5 inferior)", "8 segments (4 superior, 4 inferior)", "12 segments (4 superior, 4 middle, 4 inferior)", "7 segments (2 superior, 2 middle, 3 inferior)"],
      correctAnswer: "10 segments (3 superior, 2 middle, 5 inferior)",
      explanation: "The right lung typically has 10 bronchopulmonary segments: 3 in the superior lobe (apical, posterior, anterior), 2 in the middle lobe (lateral, medial), and 5 in the inferior lobe (superior, medial basal, anterior basal, lateral basal, posterior basal)."
    },
    {
      id: "lungs-9", organId: "lungs",
      question: "In the anatomical architecture of a bronchopulmonary segment, which vessels run intersegmentally within the connective tissue septa rather than intrasegmentally?",
      options: ["Pulmonary veins", "Pulmonary arteries", "Tertiary bronchi", "Bronchial arteries"],
      correctAnswer: "Pulmonary veins",
      explanation: "Each bronchopulmonary segment is functionally independent with a central/intrasegmental tertiary bronchus and pulmonary artery branch, while pulmonary veins and lymphatic vessels run intersegmentally within the surrounding connective tissue septa."
    },
    {
      id: "lungs-10", organId: "lungs",
      question: "What type of epithelium lines the lumen of the trachea and primary conducting bronchi?",
      options: ["Pseudostratified ciliated columnar epithelium with goblet cells", "Simple squamous epithelium", "Stratified non-keratinized squamous epithelium", "Simple cuboidal non-ciliated epithelium"],
      correctAnswer: "Pseudostratified ciliated columnar epithelium with goblet cells",
      explanation: "The conducting airways (trachea, principal bronchi, and lobar/segmental bronchi) are lined by pseudostratified ciliated columnar epithelium containing mucus-secreting goblet cells and basal stem cells."
    },
    {
      id: "lungs-11", organId: "lungs",
      question: "Which structural component is completely absent when transitioning from intrapulmonary bronchi to bronchioles?",
      options: ["Cartilage plates in the wall", "Smooth muscle layers", "Autonomic nerve fibers", "Elastic fiber networks"],
      correctAnswer: "Cartilage plates in the wall",
      explanation: "Bronchioles are defined by the complete absence of cartilage plates and submucosal glands in their walls, relying instead on smooth muscle and surrounding elastic fiber recoil to maintain patency."
    },
    {
      id: "lungs-12", organId: "lungs",
      question: "What is the primary histological feature and physiological function of Type I alveolar cells (pneumocytes)?",
      options: ["Extremely thin simple squamous cells covering ~95% of alveolar surface for gas diffusion", "Cuboidal cells with lamellar bodies synthesizing dipalmitoylphosphatidylcholine", "Ciliated columnar cells propelling the mucociliary escalator", "Mobile phagocytic cells clearing particulate matter from alveolar septa"],
      correctAnswer: "Extremely thin simple squamous cells covering ~95% of alveolar surface for gas diffusion",
      explanation: "Type I pneumocytes are extremely flattened simple squamous cells that cover approximately 90-95% of the total alveolar surface area, forming an ultra-thin barrier specialized for passive gas diffusion."
    },
    {
      id: "lungs-13", organId: "lungs",
      question: "Which cellular organelles characteristic of Type II pneumocytes store and secrete pulmonary surfactant?",
      options: ["Lamellar bodies", "Weibel-Palade bodies", "Zymogen granules", "Nissl bodies"],
      correctAnswer: "Lamellar bodies",
      explanation: "Type II pneumocytes contain membrane-bound lamellar bodies rich in concentric phospholipid whorls (dipalmitoylphosphatidylcholine), which are exocytosed to form the alveolar surfactant film."
    },
    {
      id: "lungs-14", organId: "lungs",
      question: "Which cells serve as the primary progenitor/stem cells for alveolar epithelium repair and regeneration following injury to Type I pneumocytes?",
      options: ["Type II pneumocytes", "Alveolar macrophages", "Goblet cells", "Capillary endothelial cells"],
      correctAnswer: "Type II pneumocytes",
      explanation: "Type II pneumocytes retain mitotic ability; after diffuse alveolar damage or destruction of Type I cells, Type II cells proliferate and differentiate into new Type I pneumocytes to restore the epithelial barrier."
    },
    {
      id: "lungs-15", organId: "lungs",
      question: "Which of the following correctly lists the layers of the blood-air (alveolocapillary) barrier from the alveolar lumen to the capillary lumen?",
      options: ["Surfactant layer, Type I pneumocyte cytoplasm, fused basal lamina, capillary endothelial cell", "Type II pneumocyte, elastic lamina, smooth muscle, endothelial cell", "Surfactant layer, Goblet cell, basement membrane, red blood cell membrane", "Pseudostratified epithelium, lamina propria, adventitia, capillary lumen"],
      correctAnswer: "Surfactant layer, Type I pneumocyte cytoplasm, fused basal lamina, capillary endothelial cell",
      explanation: "The blood-air barrier consists of: surfactant film, Type I alveolar cell cytoplasm, fused basal laminae of the alveolar epithelium and capillary endothelium, and capillary endothelial cell cytoplasm."
    },
    {
      id: "lungs-16", organId: "lungs",
      question: "What is the primary location and function of Club cells (formerly known as Clara cells)?",
      options: ["Located in bronchioles; secrete uteroglobin/CC16, detoxify harmful compounds, and act as progenitor cells", "Located in alveoli; engulf coal dust and hemosiderin pigments", "Located in trachea; secrete acidic mucins into the airway lumen", "Located in pulmonary capillaries; convert angiotensin II to angiotensin I"],
      correctAnswer: "Located in bronchioles; secrete uteroglobin/CC16, detoxify harmful compounds, and act as progenitor cells",
      explanation: "Club cells are non-ciliated dome-shaped cuboidal cells found in bronchioles that secrete protective proteins (CC16, surfactant-like glycosaminoglycans), contain cytochrome P450 for xenobiotic detoxification, and regenerate bronchiolar epithelium."
    },
    {
      id: "lungs-17", organId: "lungs",
      question: "What is the anatomical definition and physiological role of the Pores of Kohn?",
      options: ["Small openings in interalveolar septa allowing collateral air circulation between adjacent alveoli", "Fenestrations in pulmonary capillary endothelium allowing rapid gas transfer", "Apertures in the cricothyroid membrane for emergency airway access", "Openings in the secondary bronchial wall leading to submucosal glands"],
      correctAnswer: "Small openings in interalveolar septa allowing collateral air circulation between adjacent alveoli",
      explanation: "Pores of Kohn are microscopic apertures (interalveolar pores) in the interalveolar septa that facilitate collateral ventilation between neighboring alveoli, preventing atelectasis if a terminal bronchiole is obstructed."
    },
    {
      id: "lungs-18", organId: "lungs",
      question: "What do the accessory Canals of Lambert anatomically connect in the pulmonary parenchyma?",
      options: ["Terminal/respiratory bronchioles directly to adjacent alveoli", "Left pulmonary artery to the descending aorta", "Right and left principal bronchi across the carina", "Pulmonary veins directly to bronchial veins"],
      correctAnswer: "Terminal/respiratory bronchioles directly to adjacent alveoli",
      explanation: "Canals of Lambert are accessory branching pathways that directly connect preterminal/terminal bronchioles to surrounding alveoli, providing alternative collateral ventilation."
    },
    {
      id: "lungs-19", organId: "lungs",
      question: "Where do the left bronchial arteries typically take their origin?",
      options: ["Directly from the anterior aspect of the thoracic descending aorta", "Directly from the pulmonary trunk", "From the internal thoracic (mammary) artery", "From the right subclavian artery"],
      correctAnswer: "Directly from the anterior aspect of the thoracic descending aorta",
      explanation: "The left lung typically receives two bronchial arteries (superior and inferior left bronchial arteries) directly originating from the anterior surface of the thoracic descending aorta."
    },
    {
      id: "lungs-20", organId: "lungs",
      question: "What is the most common anatomical origin of the single right bronchial artery?",
      options: ["From the 3rd right posterior intercostal artery (or common intercostobronchial trunk)", "Directly from the ascending aorta", "From the right coronary artery", "From the pulmonary trunk"],
      correctAnswer: "From the 3rd right posterior intercostal artery (or common intercostobronchial trunk)",
      explanation: "The right bronchial artery most commonly arises from the 3rd posterior intercostal artery (or shares a common trunk with the superior left bronchial artery from the descending aorta)."
    },
    {
      id: "lungs-21", organId: "lungs",
      question: "Into which venous channel does the right bronchial vein primarily drain?",
      options: ["Azygos vein", "Accessory hemiazygos vein", "Inferior vena cava", "Left brachiocephalic vein"],
      correctAnswer: "Azygos vein",
      explanation: "The right bronchial vein drains deoxygenated blood from the larger extrapulmonary airways into the azygos vein, whereas the left bronchial vein drains into the accessory hemiazygos vein or left superior intercostal vein."
    },
    {
      id: "lungs-22", organId: "lungs",
      question: "What proportion of total cardiac output is conveyed by the pulmonary circulation compared to the bronchial circulation under resting conditions?",
      options: ["Pulmonary receives 100% of RV output; bronchial receives ~1–2% of LV output", "Pulmonary receives ~50%; bronchial receives ~50%", "Pulmonary receives ~80%; bronchial receives ~20%", "Pulmonary receives ~10%; bronchial receives ~90%"],
      correctAnswer: "Pulmonary receives 100% of RV output; bronchial receives ~1–2% of LV output",
      explanation: "The pulmonary circulation receives 100% of the right ventricular cardiac output for gas exchange, whereas the bronchial circulation receives only about 1-2% of the left ventricular systemic output to supply metabolic nutrition to airway walls."
    },
    {
      id: "lungs-23", organId: "lungs",
      question: "Why is the visceral pleura insensitive to sharp pain while the parietal pleura is highly sensitive to pain?",
      options: ["Visceral pleura lacks somatic sensory innervation (autonomic only), whereas parietal pleura is innervated by intercostal and phrenic nerves", "Visceral pleura has no nerve supply whatsoever", "Parietal pleura contains only parasympathetic pain receptors from CN X", "Visceral pleura is lined by thick non-innervated stratum corneum"],
      correctAnswer: "Visceral pleura lacks somatic sensory innervation (autonomic only), whereas parietal pleura is innervated by intercostal and phrenic nerves",
      explanation: "Visceral pleura receives only autonomic (visceral afferent) innervation sensitive to stretch but not cutting/pain. Parietal pleura is innervated by somatic nerves: costal/peripheral diaphragmatic by intercostal nerves, and mediastinal/central diaphragmatic by the phrenic nerve (C3-C5)."
    },
    {
      id: "lungs-24", organId: "lungs",
      question: "What is the clinical and anatomical significance of the costodiaphragmatic recess?",
      options: ["It is the most dependent pleural space where pleural effusions collect in an upright patient", "It is the site where the main bronchus enters the pulmonary parenchyma", "It contains the ligamentum arteriosum and left recurrent laryngeal nerve", "It is the primary site of surfactant secretion into the bloodstream"],
      correctAnswer: "It is the most dependent pleural space where pleural effusions collect in an upright patient",
      explanation: "The costodiaphragmatic recesses are slit-like potential spaces between the costal and diaphragmatic pleurae inferiorly. In an erect posture, gravity causes excess pleural fluid (effusion) to accumulate first in this dependent recess, blunting the costophrenic angle on chest radiographs."
    },
    {
      id: "lungs-25", organId: "lungs",
      question: "The cervical pleura (cupula) extends into the root of the neck above the 1st rib and is reinforced superiorly by which fibrous structure?",
      options: ["Suprapleural membrane (Sibson's fascia)", "Pulmonary ligament", "Pretracheal fascia", "Pericardiacophrenic ligament"],
      correctAnswer: "Suprapleural membrane (Sibson's fascia)",
      explanation: "The dome of the cervical pleura rises approximately 2-3 cm above the medial third of the clavicle and is reinforced and protected by the suprapleural membrane (Sibson's fascia), which attaches from the transverse process of C7 to the inner border of the first rib."
    },
    {
      id: "lungs-26", organId: "lungs",
      question: "During thoracocentesis performed along the midaxillary line to aspirate pleural fluid, where should the needle be inserted relative to the rib to avoid nerve and vessel damage?",
      options: ["Immediately above the superior border of the lower rib", "Immediately below the inferior border of the upper rib", "Directly through the middle of the intercostal muscle belly", "Directly through the costochondral junction"],
      correctAnswer: "Immediately above the superior border of the lower rib",
      explanation: "The intercostal vein, artery, and nerve (VAN) run in the subcostal groove along the inferior margin of each rib. Inserting the needle just superior to the rib below avoids damaging this neurovascular bundle."
    },
    {
      id: "lungs-27", organId: "lungs",
      question: "What physiological effect does activation of postganglionic sympathetic fibers (T2–T5) have on bronchial smooth muscle and pulmonary vessels?",
      options: ["Bronchodilation and pulmonary vasoconstriction", "Bronchoconstriction and pulmonary vasodilation", "Increased mucus secretion and bronchoconstriction", "Paralysis of the diaphragm and alveolar relaxation"],
      correctAnswer: "Bronchodilation and pulmonary vasoconstriction",
      explanation: "Sympathetic stimulation via T2-T5 postganglionic fibers causes relaxation of bronchial smooth muscle (bronchodilation via beta-2 adrenergic receptors), mild vasoconstriction of pulmonary vessels, and decreased glandular secretion."
    },
    {
      id: "lungs-28", organId: "lungs",
      question: "Which cranial nerve supplies parasympathetic preganglionic fibers to the pulmonary plexus, promoting bronchoconstriction and glandular secretion?",
      options: ["Vagus nerve (CN X)", "Glossopharyngeal nerve (CN IX)", "Accessory nerve (CN XI)", "Hypoglossal nerve (CN XII)"],
      correctAnswer: "Vagus nerve (CN X)",
      explanation: "The vagus nerve (CN X) provides preganglionic parasympathetic fibers that synapse in ganglia within the pulmonary plexuses and bronchial walls, mediating bronchoconstriction, pulmonary vasodilation, and mucus gland secretion."
    },
    {
      id: "lungs-29", organId: "lungs",
      question: "What is the correct sequential pathway of deep lymphatic drainage from the lung parenchyma toward the venous circulation?",
      options: ["Pulmonary (intrapulmonary) -> Bronchopulmonary (hilar) -> Tracheobronchial (carinal) -> Paratracheal -> Bronchomediastinal trunk", "Bronchomediastinal trunk -> Hilar -> Paratracheal -> Subpleural -> Intrapulmonary", "Subpleural -> Deep cervical nodes -> Axillary nodes -> Thoracic duct", "Intrapulmonary -> Celiac nodes -> Cisterna chyli -> Left subclavian vein"],
      correctAnswer: "Pulmonary (intrapulmonary) -> Bronchopulmonary (hilar) -> Tracheobronchial (carinal) -> Paratracheal -> Bronchomediastinal trunk",
      explanation: "Deep lymphatic drainage progresses from intrapulmonary nodes along secondary bronchi to hilar (bronchopulmonary) nodes, then to tracheobronchial (subcarinal/carinal) nodes, then paratracheal nodes, forming the bronchomediastinal trunks."
    },
    {
      id: "lungs-30", organId: "lungs",
      question: "Lymph from the inferior lobe of the left lung typically drains primarily through which lymphatic nodal station?",
      options: ["Inferior tracheobronchial (subcarinal) nodes crossing to the right paratracheal chain", "Directly into the thoracic duct without passing through hilar nodes", "Axillary lymph nodes via the anterior chest wall", "Left supraclavicular Virchow's node directly"],
      correctAnswer: "Inferior tracheobronchial (subcarinal) nodes crossing to the right paratracheal chain",
      explanation: "The left lower lobe lymph drains via the subcarinal nodes into the right paratracheal nodes and right bronchomediastinal trunk (draining into the right lymphatic duct), whereas the left upper lobe drains to the left bronchomediastinal trunk / thoracic duct."
    },
    {
      id: "lungs-31", organId: "lungs",
      question: "From which embryonic germ layer structure does the epithelial lining of the respiratory tract and alveoli originate during the 4th week?",
      options: ["Endoderm of the ventral wall of the foregut", "Ectoderm of the dorsal neural tube", "Mesoderm of the lateral somites", "Neural crest cells of the branchial arches"],
      correctAnswer: "Endoderm of the ventral wall of the foregut",
      explanation: "The respiratory diverticulum arises as an outgrowth from the ventral wall of the foregut endoderm. The endoderm gives rise to the epithelial lining of the trachea, bronchi, and alveoli, while surrounding splanchnic mesoderm forms the cartilage, muscle, and connective tissue."
    },
    {
      id: "lungs-32", organId: "lungs",
      question: "During which developmental stage of lung maturation (weeks 16 to 26) do respiratory bronchioles and primordial alveolar ducts form with extensive vascularization?",
      options: ["Canalicular period", "Pseudoglandular period", "Saccular period", "Alveolar period"],
      correctAnswer: "Canalicular period",
      explanation: "The canalicular stage (weeks 16-26) is marked by the enlargement of lumina of bronchi and terminal bronchioles, formation of respiratory bronchioles and alveolar ducts, and extensive vascularization with capillaries approaching the thinning epithelium."
    },
    {
      id: "lungs-33", organId: "lungs",
      question: "At what gestational age does pulmonary surfactant production by Type II pneumocytes typically reach levels adequate for extrauterine survival?",
      options: ["34 to 36 weeks of gestation", "12 to 14 weeks of gestation", "20 to 22 weeks of gestation", "At birth following the first crying breath"],
      correctAnswer: "34 to 36 weeks of gestation",
      explanation: "Surfactant synthesis starts around 20-24 weeks gestation, but sufficient quantities to prevent alveolar collapse upon breathing are typically reached around weeks 34-36."
    },
    {
      id: "lungs-34", organId: "lungs",
      question: "Tracheoesophageal fistula (TEF) is most commonly caused by failure of proper development of which embryonic structure?",
      options: ["Tracheoesophageal septum", "Pleuroperitoneal membrane", "Septum transversum", "Pharyngeal pouches"],
      correctAnswer: "Tracheoesophageal septum",
      explanation: "TEF results from abnormal partitioning of the foregut into anterior respiratory and posterior esophageal tubes due to incomplete or defective fusion of the lateral tracheoesophageal ridges (tracheoesophageal septum)."
    },
    {
      id: "lungs-35", organId: "lungs",
      question: "What is the primary muscle responsible for the majority of tidal volume change during quiet resting inspiration, and what is its motor nerve supply?",
      options: ["Diaphragm, innervated by the phrenic nerve (C3–C5)", "External intercostal muscles, innervated by the vagus nerve (CN X)", "Sternocleidomastoid, innervated by the accessory nerve (CN XI)", "Internal intercostal muscles, innervated by T1–T11 nerves"],
      correctAnswer: "Diaphragm, innervated by the phrenic nerve (C3–C5)",
      explanation: "The diaphragm is the primary inspiratory muscle, responsible for ~75% of tidal volume displacement during resting quiet breathing. It is exclusively innervated for motor function by the phrenic nerve originating from spinal roots C3, C4, and C5."
    },
    {
      id: "lungs-36", organId: "lungs",
      question: "What mechanical process accounts for normal quiet expiration in a healthy resting adult?",
      options: ["Passive elastic recoil of the lungs and chest wall", "Active contraction of the internal intercostal muscles", "Active contraction of the abdominal wall musculature", "Contraction of smooth muscle sphincters at the carina"],
      correctAnswer: "Passive elastic recoil of the lungs and chest wall",
      explanation: "Quiet expiration is entirely passive; it is driven by the relaxation of inspiratory muscles and the elastic recoil of stretched lung elastin fibers and alveolar surface tension."
    },
    {
      id: "lungs-37", organId: "lungs",
      question: "Which group of muscles serves as the most powerful active force generator during forced expiration (e.g., coughing or vigorous exercise)?",
      options: ["Anterior abdominal wall muscles (rectus abdominis, obliques, transversus abdominis)", "Scalene muscles (anterior, middle, posterior)", "Diaphragmatic crura", "External intercostal muscles"],
      correctAnswer: "Anterior abdominal wall muscles (rectus abdominis, obliques, transversus abdominis)",
      explanation: "Active/forced expiration relies primarily on the anterior abdominal wall muscles (rectus abdominis, external/internal obliques, transversus abdominis), which increase intra-abdominal pressure and push the relaxed diaphragm upward, aided by internal intercostal muscles."
    },
    {
      id: "lungs-38", organId: "lungs",
      question: "According to the Law of Laplace (P = 2T/r), what would happen to smaller alveoli relative to larger alveoli in the absence of pulmonary surfactant?",
      options: ["Smaller alveoli would develop higher collapsing pressure and empty into larger alveoli", "Smaller alveoli would expand excessively and rupture", "Smaller alveoli would generate zero surface tension", "Larger alveoli would collapse immediately into smaller ones"],
      correctAnswer: "Smaller alveoli would develop higher collapsing pressure and empty into larger alveoli",
      explanation: "According to Laplace's law for spherical bubbles (P = 2T/r), collapsing pressure (P) is inversely proportional to radius (r). Without surfactant, smaller alveoli generate higher inward collapsing pressures and empty into larger alveoli. Surfactant lowers surface tension (T) more in smaller alveoli, equalizing pressures across different radii."
    },
    {
      id: "lungs-39", organId: "lungs",
      question: "Which major venous vessel leaves a prominent arching impression superior to the hilum on the mediastinal surface of the right lung?",
      options: ["Azygos vein", "Hemiazygos vein", "Left superior vena cava", "Coronary sinus"],
      correctAnswer: "Azygos vein",
      explanation: "The azygos vein arches anteriorly over the superior aspect of the root of the right lung to empty into the superior vena cava, leaving a distinct groove on the mediastinal surface of the right lung."
    },
    {
      id: "lungs-40", organId: "lungs",
      question: "Which large vascular structure creates a prominent groove arching over the hilum and descending posteriorly along the mediastinal surface of the left lung?",
      options: ["Arch and thoracic descending aorta", "Superior and inferior vena cava", "Azygos venous arch", "Main pulmonary artery trunk"],
      correctAnswer: "Arch and thoracic descending aorta",
      explanation: "The mediastinal surface of the left lung features deep impressions from the cardiac apex (left ventricle), the arch of the aorta (arching over the left hilum), the descending thoracic aorta, and the left subclavian artery."
    },
    {
      id: "lungs-41", organId: "lungs",
      question: "A Pancoast tumor located at the apex of the lung can invade the inferior cervical (stellate) ganglion, leading to Horner syndrome. What is the classic triad of Horner syndrome?",
      options: ["Ipsilateral ptosis, miosis, and anhidrosis", "Contralateral proptosis, mydriasis, and hyperhidrosis", "Bilateral facial droop, hyperacusis, and ageusia", "Ipsilateral vocal cord fixation, dysphagia, and stridor"],
      correctAnswer: "Ipsilateral ptosis, miosis, and anhidrosis",
      explanation: "Invasion of the cervical sympathetic chain/inferior cervical (stellate) ganglion by an apical lung tumor interrupts sympathetic innervation to the eye and face, causing Horner syndrome: ptosis (drooping eyelid), miosis (constricted pupil), and anhidrosis (absence of sweating) on the ipsilateral side."
    },
    {
      id: "lungs-42", organId: "lungs",
      question: "In a tension pneumothorax involving the right hemithorax, how are the mediastinum and trachea displaced?",
      options: ["Shifted to the contralateral (left) side", "Shifted to the ipsilateral (right) side", "Pulled inferiorly into the peritoneal cavity", "Fixed without any displacement due to subcarinal ligaments"],
      correctAnswer: "Shifted to the contralateral (left) side",
      explanation: "In a tension pneumothorax, a one-way valve effect traps air under positive pressure inside the affected hemithorax, compressing the ipsilateral lung and pushing the mediastinum and trachea toward the opposite (contralateral) side, compromising venous return to the heart."
    },
    {
      id: "lungs-43", organId: "lungs",
      question: "Kartagener syndrome (primary ciliary dyskinesia) is characterized by bronchiectasis and situs inversus due to an inherited defect in which protein structure of cilia?",
      options: ["Dynein arms", "Actin microfilaments", "Keratin filaments", "Claudin tight junctions"],
      correctAnswer: "Dynein arms",
      explanation: "Kartagener syndrome involves autosomal recessive mutations causing defective outer or inner dynein arms in cilia and flagella. This results in immotile cilia, impaired mucociliary escalator clearance (leading to recurrent infections and bronchiectasis), and situs inversus."
    },
    {
      id: "lungs-44", organId: "lungs",
      question: "What is the anatomical structure known as the pulmonary ligament (ligamentum pulmonale)?",
      options: ["A double-layered sheet of mediastinal pleura extending inferiorly from the hilum to the diaphragm", "A remnant of the ductus arteriosus connecting pulmonary trunk to aorta", "A fibrous band anchoring the right bronchus to the pericardium", "A tendon connecting the diaphragm to the 6th costal cartilage"],
      correctAnswer: "A double-layered sheet of mediastinal pleura extending inferiorly from the hilum to the diaphragm",
      explanation: "The pulmonary ligament is a vertical, double-layered fold of pleura extending inferiorly from the lung root along the mediastinal surface to the diaphragm, allowing movement of pulmonary vessels and bronchi during respiration."
    },
    {
      id: "lungs-45", organId: "lungs",
      question: "At what anatomical level of the branching airway tree do mucus-secreting goblet cells completely disappear?",
      options: ["Terminal bronchioles", "Segmental (tertiary) bronchi", "Tracheal bifurcation", "Lobar bronchi"],
      correctAnswer: "Terminal bronchioles",
      explanation: "Goblet cells diminish progressively along the bronchial tree and are completely absent by the level of the terminal bronchioles. This prevents mucus plugging in narrow peripheral airways that lack a strong cough clearance mechanism."
    },
    {
      id: "lungs-46", organId: "lungs",
      question: "How many bronchopulmonary segments typically constitute the superior lobe of the left lung?",
      options: ["4 segments (apicoposterior, anterior, superior lingular, inferior lingular)", "2 segments (apical and anterior)", "5 segments (apical, posterior, anterior, medial, lateral)", "3 segments (superior, middle, basal)"],
      correctAnswer: "4 segments (apicoposterior, anterior, superior lingular, inferior lingular)",
      explanation: "In the left superior lobe, the apical and posterior segments are fused into a single apicoposterior segment, alongside the anterior segment, superior lingular segment, and inferior lingular segment (total of 4 segments)."
    },
    {
      id: "lungs-47", organId: "lungs",
      question: "What key histological feature marks the transition from a terminal bronchiole to a respiratory bronchiole?",
      options: ["Appearance of individual alveoli in the wall for gas exchange", "Complete ring of hyaline cartilage", "Appearance of stratified squamous epithelium", "Presence of large submucosal seromucous glands"],
      correctAnswer: "Appearance of individual alveoli in the wall for gas exchange",
      explanation: "A terminal bronchiole is purely a conducting airway. A respiratory bronchiole is marked by the initial appearance of individual alveoli interrupting its simple cuboidal wall, marking the beginning of the respiratory (gas-exchanging) zone."
    },
    {
      id: "lungs-48", organId: "lungs",
      question: "What anatomical structures together constitute a single pulmonary acinus?",
      options: ["A terminal bronchiole and its distal respiratory bronchioles, alveolar ducts, alveolar sacs, and alveoli", "A segmental bronchus and its associated bronchopulmonary segment", "The entire right middle lobe and its lobar bronchus", "An isolated alveolar sac with its capillary meshwork"],
      correctAnswer: "A terminal bronchiole and its distal respiratory bronchioles, alveolar ducts, alveolar sacs, and alveoli",
      explanation: "A pulmonary acinus (the functional anatomical unit of the lung) is defined as the lung parenchyma supplied by a single terminal bronchiole, comprising respiratory bronchioles, alveolar ducts, alveolar sacs, and alveoli."
    },
    {
      id: "lungs-49", organId: "lungs",
      question: "In what direction do the cilia of the respiratory tract beat to maintain airway clearance?",
      options: ["Cephalad (upward toward the pharynx/larynx)", "Caudal (downward toward the alveoli)", "Radially outward into the pleural space", "They oscillate symmetrically without directional propulsion"],
      correctAnswer: "Cephalad (upward toward the pharynx/larynx)",
      explanation: "The coordinated metachronal waving of cilia moves the overlying mucus layer upwards toward the pharynx, where it can be swallowed or expectorated (the mucociliary escalator)."
    },
    {
      id: "lungs-50", organId: "lungs",
      question: "Which cranial nerve transmits the sensory afferent signals for the cough reflex from the carina and lower respiratory tract mucosa?",
      options: ["Vagus nerve (CN X)", "Phrenic nerve (C3–C5)", "Glossopharyngeal nerve (CN IX)", "Hypoglossal nerve (CN XII)"],
      correctAnswer: "Vagus nerve (CN X)",
      explanation: "Sensory receptors in the larynx, carina, and tracheobronchial tree transmit afferent signals via the internal laryngeal and vagus (CN X) branches to the cough center in the medulla oblongata."
    },
    {
      id: "lungs-51", organId: "lungs",
      question: "What is the primary anatomical action of the external intercostal muscles during inhalation?",
      options: ["Elevate ribs to increase thoracic transverse and anteroposterior diameters", "Depress ribs to force air out of the lungs", "Constrict the bronchioles during expiration", "Flatten the central tendon of the diaphragm"],
      correctAnswer: "Elevate ribs to increase thoracic transverse and anteroposterior diameters",
      explanation: "External intercostal muscles run obliquely downward and forward. Their contraction elevates the ribs in 'bucket-handle' (transverse) and 'pump-handle' (anteroposterior) motions, increasing intrathoracic volume and reducing intrapleural pressure."
    },
    {
      id: "lungs-52", organId: "lungs",
      question: "At what vertebral level does the inferior vena cava pass through the central tendon of the diaphragm?",
      options: ["T8 level (caval opening)", "T10 level (esophageal hiatus)", "T12 level (aortic hiatus)", "L1 level (subcostal hiatus)"],
      correctAnswer: "T8 level (caval opening)",
      explanation: "The diaphragmatic apertures occur at: T8 for the vena cava (caval opening), T10 for the esophagus and vagus nerves (esophageal hiatus), and T12 for the descending aorta, azygos vein, and thoracic duct (aortic hiatus)."
    },
    {
      id: "lungs-53", organId: "lungs",
      question: "Which pharmacological receptors on bronchial smooth muscle cells mediate bronchodilation when stimulated?",
      options: ["Beta-2 adrenergic receptors", "Alpha-1 adrenergic receptors", "Muscarinic M3 receptors", "Nicotinic acetylcholine receptors"],
      correctAnswer: "Beta-2 adrenergic receptors",
      explanation: "Beta-2 adrenergic receptors on bronchial smooth muscle couple to Gs proteins, activating adenylyl cyclase, increasing cAMP, and causing smooth muscle relaxation (bronchodilation). M3 muscarinic receptors mediate bronchoconstriction."
    },
    {
      id: "lungs-54", organId: "lungs",
      question: "What is the average volume of anatomical dead space in a healthy adult weighing approximately 70 kg?",
      options: ["~150 mL", "~500 mL", "~50 mL", "~1000 mL"],
      correctAnswer: "~150 mL",
      explanation: "Anatomical dead space consists of the volume of conducting airways (from nose/mouth down to terminal bronchioles) where no gas exchange occurs, averaging roughly 150 mL (or ~2 mL/kg body weight)."
    },
    {
      id: "lungs-55", organId: "lungs",
      question: "Why can a tumor in the left pulmonary apex/hilum or aortopulmonary window lead to hoarseness of voice?",
      options: ["Compression of the left recurrent laryngeal nerve under the aortic arch", "Compression of the right phrenic nerve along the pericardium", "Invasion of the cervical sympathetic chain at C4", "Metastatic destruction of the epiglottic cartilage"],
      correctAnswer: "Compression of the left recurrent laryngeal nerve under the aortic arch",
      explanation: "The left recurrent laryngeal nerve branches from the vagus nerve, hooks under the aortic arch (near the ligamentum arteriosum and left lung hilum), and ascends in the tracheoesophageal groove. Hilum or subaortic nodal tumors can compress it, causing left vocal fold paralysis and hoarseness (Ortner's/cardiovocal syndrome)."
    },
    {
      id: "lungs-56", organId: "lungs",
      question: "What is the cellular lineage origin and primary elimination route of alveolar macrophages (dust cells)?",
      options: ["Derived from bone marrow monocytes; cleared via the mucociliary escalator or lymphatic drainage", "Derived from Type II pneumocytes; shed directly into pleural fluid", "Derived from Clara cells; degraded in bronchial cartilage", "Derived from airway goblet cells; absorbed by pulmonary venules"],
      correctAnswer: "Derived from bone marrow monocytes; cleared via the mucociliary escalator or lymphatic drainage",
      explanation: "Alveolar macrophages arise from circulating blood monocytes. After phagocytosing dust particles and debris in the alveolar spaces, they either migrate to the mucociliary escalator to be swallowed/expectorated, or enter interstitial lymphatic vessels."
    },
    {
      id: "lungs-57", organId: "lungs",
      question: "What is the normal mean pulmonary arterial pressure under resting physiological conditions in a healthy human?",
      options: ["~12–15 mmHg", "~90–100 mmHg", "~45–55 mmHg", "~0–4 mmHg"],
      correctAnswer: "~12–15 mmHg",
      explanation: "The pulmonary circulation is a low-pressure, low-resistance, highly compliant vascular bed. Normal resting pulmonary arterial pressure is approximately 25/10 mmHg with a mean of 12-15 mmHg, compared to systemic mean pressure of ~93 mmHg."
    },
    {
      id: "lungs-58", organId: "lungs",
      question: "Along which surface anatomical landmark does the horizontal fissure of the right lung typically run anteriorly?",
      options: ["Along the 4th costal cartilage and rib space", "Along the 2nd costal cartilage", "Along the 6th intercostal space at the midclavicular line", "Along the 8th rib posteriorly"],
      correctAnswer: "Along the 4th costal cartilage and rib space",
      explanation: "The horizontal fissure of the right lung follows the path of the 4th rib/costal cartilage anteriorly from the sternum to meet the oblique fissure near the 5th rib in the midaxillary line."
    },
    {
      id: "lungs-59", organId: "lungs",
      question: "What is the principal phospholipid constituent of pulmonary surfactant that prevents end-expiratory alveolar atelectasis?",
      options: ["Dipalmitoylphosphatidylcholine (DPPC / Lecithin)", "Sphingomyelin", "Phosphatidylinositol", "Phosphatidylglycerol only"],
      correctAnswer: "Dipalmitoylphosphatidylcholine (DPPC / Lecithin)",
      explanation: "Dipalmitoylphosphatidylcholine (DPPC), also known as lecithin, comprises roughly 70-80% of surfactant phospholipids. Its amphipathic structure allows it to form a monolayer at the air-liquid interface that dramatically reduces surface tension."
    },
    {
      id: "lungs-60", organId: "lungs",
      question: "In evaluating fetal lung maturity, what amniotic fluid lecithin-to-sphingomyelin (L/S) ratio generally signifies mature lungs with minimal risk of neonatal respiratory distress syndrome?",
      options: ["L/S ratio >= 2.0", "L/S ratio < 1.0", "L/S ratio between 0.1 and 0.5", "L/S ratio = 0.0"],
      correctAnswer: "L/S ratio >= 2.0",
      explanation: "A lecithin/sphingomyelin (L/S) ratio of 2.0 or greater in amniotic fluid signifies adequate mature surfactant production by fetal Type II pneumocytes, indicating mature lungs and a low risk of infant respiratory distress syndrome (NRDS)."
    },
  ],
  "liver": [
    {
      id: "liver-1", organId: "liver",
      question: "In which abdominal regions is the liver primarily located?",
      options: ["Right hypochondrium, epigastrium, and extending into the left hypochondrium", "Left hypochondrium, umbilical, and left lumbar regions", "Hypogastrium, right iliac fossa, and umbilical region", "Right lumbar, umbilical, and right iliac fossa"],
      correctAnswer: "Right hypochondrium, epigastrium, and extending into the left hypochondrium",
      explanation: "The liver occupies the right hypochondrium and epigastrium, extending into the left hypochondrium as far as the left midclavicular line."
    },
    {
      id: "liver-2", organId: "liver",
      question: "Which ribs provide thoracic skeletal protection to the liver on the right lateral and anterior thoracic wall?",
      options: ["Ribs 7 to 11", "Ribs 1 to 4", "Ribs 11 and 12 only", "Ribs 3 to 6"],
      correctAnswer: "Ribs 7 to 11",
      explanation: "The liver lies beneath the right hemidiaphragm and is protected by thoracic cage ribs 7 through 11 on the right side."
    },
    {
      id: "liver-3", organId: "liver",
      question: "Which of the following defines the anatomical boundaries of the bare area of the liver?",
      options: ["Superior and inferior layers of the coronary ligament and the groove for the inferior vena cava", "Falciform ligament and the ligamentum teres fissure", "Hepatogastric ligament and the hepatoduodenal ligament", "Fissure for ligamentum venosum and the porta hepatis"],
      correctAnswer: "Superior and inferior layers of the coronary ligament and the groove for the inferior vena cava",
      explanation: "The bare area of the liver is a triangular area on the posterior diaphragmatic surface devoid of peritoneum, bounded by the superior and inferior layers of the coronary ligament and the groove for the inferior vena cava."
    },
    {
      id: "liver-4", organId: "liver",
      question: "The falciform ligament attaches the diaphragmatic surface of the liver to which anatomical structures?",
      options: ["Anterior abdominal wall and inferior surface of the diaphragm", "Greater curvature of the stomach and transverse colon", "Posterior abdominal wall and lumbar vertebrae", "Duodenum and head of the pancreas"],
      correctAnswer: "Anterior abdominal wall and inferior surface of the diaphragm",
      explanation: "The falciform ligament is a double-layered peritoneal fold that connects the anterior diaphragmatic surface of the liver to the anterior abdominal wall (above the umbilicus) and the inferior surface of the diaphragm."
    },
    {
      id: "liver-5", organId: "liver",
      question: "What anatomical structure is contained within the free inferior border of the falciform ligament?",
      options: ["Ligamentum teres hepatis (round ligament)", "Ligamentum venosum", "Common bile duct", "Cystic artery"],
      correctAnswer: "Ligamentum teres hepatis (round ligament)",
      explanation: "The free inferior margin of the falciform ligament contains the ligamentum teres hepatis (round ligament of the liver), which is the fibrous remnant of the obliterated left umbilical vein, along with small paraumbilical veins."
    },
    {
      id: "liver-6", organId: "liver",
      question: "The ligamentum venosum represents the obliterated fibrous remnant of which fetal vascular channel?",
      options: ["Ductus venosus", "Ductus arteriosus", "Left umbilical vein", "Right umbilical artery"],
      correctAnswer: "Ductus venosus",
      explanation: "The ligamentum venosum is the fibrous remnant of the fetal ductus venosus, which shunted oxygenated blood from the umbilical vein directly into the inferior vena cava, bypassing the liver sinusoidal bed."
    },
    {
      id: "liver-7", organId: "liver",
      question: "How are the right and left triangular ligaments of the liver formed?",
      options: ["By the apposition and convergence of the superior and inferior layers of the coronary ligament at their lateral extremities", "By the fusion of the greater and lesser omenta", "By the reflections of the falciform ligament onto the anterior abdominal wall", "By the peritoneal coverings of the gallbladder and duodenum"],
      correctAnswer: "By the apposition and convergence of the superior and inferior layers of the coronary ligament at their lateral extremities",
      explanation: "The right and left triangular ligaments are formed where the superior and inferior layers of the coronary ligament meet and fuse at the right lateral and left lateral aspects of the liver."
    },
    {
      id: "liver-8", organId: "liver",
      question: "Which two anatomical ligaments constitute the lesser omentum?",
      options: ["Hepatogastric ligament and hepatoduodenal ligament", "Gastrosplenic ligament and splenorenal ligament", "Gastrocolic ligament and falciform ligament", "Phrenicocolic ligament and coronary ligament"],
      correctAnswer: "Hepatogastric ligament and hepatoduodenal ligament",
      explanation: "The lesser omentum consists of the hepatogastric ligament (connecting the liver to the lesser curvature of the stomach) and the hepatoduodenal ligament (connecting the liver to the first part of the duodenum)."
    },
    {
      id: "liver-9", organId: "liver",
      question: "The hepatoduodenal ligament forms the anterior boundary of which peritoneal opening?",
      options: ["Omental (epiploic) foramen of Winslow", "Foramen magnum", "Greater sciatic foramen", "Obturator canal"],
      correctAnswer: "Omental (epiploic) foramen of Winslow",
      explanation: "The free right margin of the lesser omentum (hepatoduodenal ligament) forms the anterior boundary of the omental (epiploic) foramen of Winslow, which provides communication between the greater peritoneal sac and the lesser sac (omental bursa)."
    },
    {
      id: "liver-10", organId: "liver",
      question: "In the porta hepatis and hepatoduodenal ligament, what is the typical anterior-to-posterior spatial relationship of the portal triad structures?",
      options: ["Bile duct (anterolateral/right), Hepatic artery (anteromedial/left), Portal vein (posterior)", "Portal vein (anterior), Hepatic artery (middle), Bile duct (posterior)", "Hepatic artery (anterior), Portal vein (middle), Bile duct (posterior)", "Bile duct (posterior), Hepatic artery (anterolateral), Portal vein (anteromedial)"],
      correctAnswer: "Bile duct (anterolateral/right), Hepatic artery (anteromedial/left), Portal vein (posterior)",
      explanation: "In the hepatoduodenal ligament and porta hepatis, the common bile duct lies anterolaterally to the right, the proper hepatic artery lies anteromedially to the left, and the large portal vein lies posteriorly."
    },
    {
      id: "liver-11", organId: "liver",
      question: "On gross morphological examination of the visceral surface, the liver is divided into which four anatomical lobes?",
      options: ["Right, Left, Caudate, and Quadrate lobes", "Anterior, Posterior, Superior, and Inferior lobes", "Medial, Lateral, Superior, and Basal lobes", "Central, Peripheral, Apical, and Basilar lobes"],
      correctAnswer: "Right, Left, Caudate, and Quadrate lobes",
      explanation: "Grossly, the external anatomical lobes of the liver are the right lobe, left lobe, caudate lobe (posteriorly on the visceral surface), and quadrate lobe (inferiorly/anteriorly on the visceral surface)."
    },
    {
      id: "liver-12", organId: "liver",
      question: "Which anatomical landmarks define the boundaries of the caudate lobe on the visceral surface of the liver?",
      options: ["Groove for the IVC on the right, fissure for ligamentum venosum on the left, and porta hepatis inferiorly", "Gallbladder fossa on the right, fissure for ligamentum teres on the left, and anterior margin inferiorly", "Falciform ligament anteriorly, bare area posteriorly, and right triangular ligament laterally", "Coronary ligament superiorly, pylorus inferiorly, and spleen laterally"],
      correctAnswer: "Groove for the IVC on the right, fissure for ligamentum venosum on the left, and porta hepatis inferiorly",
      explanation: "The caudate lobe (Segment I) is bounded on the right by the sulcus/groove for the inferior vena cava, on the left by the fissure for the ligamentum venosum, and inferiorly by the porta hepatis."
    },
    {
      id: "liver-13", organId: "liver",
      question: "Which anatomical structures form the lateral boundaries of the quadrate lobe?",
      options: ["Fossa for the gallbladder on the right and fissure for the ligamentum teres on the left", "Groove for the IVC on the right and fissure for the ligamentum venosum on the left", "Falciform ligament on the right and gastrohepatic ligament on the left", "Right triangular ligament on the right and left triangular ligament on the left"],
      correctAnswer: "Fossa for the gallbladder on the right and fissure for the ligamentum teres on the left",
      explanation: "The quadrate lobe is bounded laterally by the fossa for the gallbladder on its right side and the fissure for the ligamentum teres hepatis on its left side, and bounded posteriorly by the porta hepatis."
    },
    {
      id: "liver-14", organId: "liver",
      question: "What is the caudate process of the liver?",
      options: ["A narrow ridge of liver parenchyma connecting the caudate lobe to the right lobe between the IVC groove and the porta hepatis", "A peritoneal fold connecting the caudate lobe to the stomach", "An extension of the quadrate lobe into the gallbladder fossa", "A fibrous band attaching the liver to the right kidney"],
      correctAnswer: "A narrow ridge of liver parenchyma connecting the caudate lobe to the right lobe between the IVC groove and the porta hepatis",
      explanation: "The caudate process is a narrow bridge of hepatic tissue extending laterally from the lower right aspect of the caudate lobe to join the visceral surface of the right anatomical lobe, lying immediately behind the porta hepatis and in front of the IVC."
    },
    {
      id: "liver-15", organId: "liver",
      question: "From which anatomical lobe does the papillary process of the liver arise?",
      options: ["Inferior and medial aspect of the caudate lobe", "Superior apex of the quadrate lobe", "Anterior margin of the right lobe", "Left lateral tip of the left lobe"],
      correctAnswer: "Inferior and medial aspect of the caudate lobe",
      explanation: "The papillary process is a small rounded tubercle projecting from the inferior and medial (left) margin of the caudate lobe into the lesser sac toward the lesser curvature of the stomach."
    },
    {
      id: "liver-16", organId: "liver",
      question: "What is Cantlies line (the principal portal scissura) and how is it defined on the liver surface?",
      options: ["A plane running from the gallbladder fossa to the middle of the inferior vena cava fossa, dividing the liver into functional right and left hemilivers", "A line along the falciform ligament dividing anatomical right and left lobes", "A horizontal line separating the superior and inferior Couinaud segments", "A transverse plane through the porta hepatis dividing visceral from diaphragmatic surfaces"],
      correctAnswer: "A plane running from the gallbladder fossa to the middle of the inferior vena cava fossa, dividing the liver into functional right and left hemilivers",
      explanation: "Cantlies line is the principal anatomical plane running from the middle of the gallbladder fossa anteriorly to the groove for the IVC posteriorly; it corresponds to the path of the middle hepatic vein and divides the liver into true functional right and left hemilivers."
    },
    {
      id: "liver-17", organId: "liver",
      question: "The Couinaud classification divides the liver into eight functionally independent segments based on the distribution of which vascular structures?",
      options: ["Portal triads (portal vein, hepatic artery, bile duct) centrally and hepatic veins in the intersegmental planes", "Inferior mesenteric vein branches and splenic vein tributaries", "Direct branches of the celiac trunk and lumbar veins", "Renal arterial branches and diaphragmatic arteries"],
      correctAnswer: "Portal triads (portal vein, hepatic artery, bile duct) centrally and hepatic veins in the intersegmental planes",
      explanation: "Couinauds classification divides the liver into 8 functionally independent segments (I through VIII). Each segment has its own central portal triad branch and is drained peripherally by hepatic veins running in intersegmental scissurae."
    },
    {
      id: "liver-18", organId: "liver",
      question: "Which Couinaud segment corresponds to the caudate lobe, and why is it unique in its vascular drainage?",
      options: ["Segment I; it receives dual portal triad branches and drains directly into the IVC via small independent hepatic veins", "Segment IV; it drains exclusively via the right hepatic vein", "Segment VIII; it lacks biliary drainage", "Segment II; it drains into the left gastric vein directly"],
      correctAnswer: "Segment I; it receives dual portal triad branches and drains directly into the IVC via small independent hepatic veins",
      explanation: "Segment I corresponds to the caudate lobe. It is unique because it receives vascular inflow from both right and left portal pedicles and its venous drainage empties directly into the retrohepatic IVC via multiple small, independent hepatic venules (Spigelian veins)."
    },
    {
      id: "liver-19", organId: "liver",
      question: "Couinaud Segments II and III collectively constitute which functional sector of the liver?",
      options: ["Left lateral sector (superior and inferior segments, respectively)", "Left medial sector (quadrate lobe)", "Right anterior sector", "Right posterior sector"],
      correctAnswer: "Left lateral sector (superior and inferior segments, respectively)",
      explanation: "Segments II and III form the left lateral sector of the liver, located lateral to the falciform ligament and umbilical fissure. Segment II is the left lateral superior segment, and Segment III is the left lateral inferior segment."
    },
    {
      id: "liver-20", organId: "liver",
      question: "How is Couinaud Segment IV (left medial sector) subdivided in surgical anatomy?",
      options: ["Segment IVa (superior subsegment) and Segment IVb (inferior subsegment, corresponding to the quadrate lobe)", "Segment IV-left and Segment IV-right", "Segment IV-anterior and Segment IV-posterior", "Segment IV-apical and Segment IV-basal"],
      correctAnswer: "Segment IVa (superior subsegment) and Segment IVb (inferior subsegment, corresponding to the quadrate lobe)",
      explanation: "Segment IV comprises the left medial segment (between the umbilical fissure and Cantlies line). It is divided into Segment IVa (superior) and Segment IVb (inferior, which corresponds grossly to the quadrate lobe)."
    },
    {
      id: "liver-21", organId: "liver",
      question: "Which Couinaud segments constitute the anterior and posterior sectors of the right hemiliver?",
      options: ["Anterior sector: Segments V (inferior) and VIII (superior); Posterior sector: Segments VI (inferior) and VII (superior)", "Anterior sector: Segments II and III; Posterior sector: Segments IVa and IVb", "Anterior sector: Segments VI and VII; Posterior sector: Segments V and VIII", "Anterior sector: Segments I and II; Posterior sector: Segments III and IV"],
      correctAnswer: "Anterior sector: Segments V (inferior) and VIII (superior); Posterior sector: Segments VI (inferior) and VII (superior)",
      explanation: "The right functional liver is divided by the right hepatic vein into an anterior sector (Segment V inferiorly, Segment VIII superiorly) and a posterior sector (Segment VI inferiorly, Segment VII superiorly)."
    },
    {
      id: "liver-22", organId: "liver",
      question: "Trace the typical pathway of oxygenated arterial blood from the abdominal aorta to the proper hepatic artery:",
      options: ["Abdominal aorta -> Celiac trunk -> Common hepatic artery -> Proper hepatic artery", "Abdominal aorta -> Superior mesenteric artery -> Proper hepatic artery", "Abdominal aorta -> Left gastric artery -> Splenic artery -> Proper hepatic artery", "Abdominal aorta -> Inferior mesenteric artery -> Common hepatic artery -> Proper hepatic artery"],
      correctAnswer: "Abdominal aorta -> Celiac trunk -> Common hepatic artery -> Proper hepatic artery",
      explanation: "The proper hepatic artery typically arises as the continuation of the common hepatic artery (a major branch of the celiac trunk from the abdominal aorta) after the gastroduodenal artery branches off."
    },
    {
      id: "liver-23", organId: "liver",
      question: "The proper hepatic artery bifurcates near the porta hepatis into which vessels?",
      options: ["Right and left hepatic arteries", "Gastroduodenal and right gastric arteries", "Splenic and short gastric arteries", "Superior and inferior pancreaticoduodenal arteries"],
      correctAnswer: "Right and left hepatic arteries",
      explanation: "Near the porta hepatis, the proper hepatic artery divides into the right hepatic artery (supplying the right hemiliver and giving off the cystic artery) and the left hepatic artery (supplying the left hemiliver)."
    },
    {
      id: "liver-24", organId: "liver",
      question: "What are the anatomical boundaries of the cystohepatic triangle of Calot (modern surgical definition)?",
      options: ["Cystic duct inferiorly, common hepatic duct medially, and inferior border of the liver superiorly", "Common bile duct medially, portal vein laterally, and hepatic artery superiorly", "Gallbladder fundus anteriorly, duodenum posteriorly, and stomach medially", "Falciform ligament medially, diaphragm superiorly, and umbilical vein inferiorly"],
      correctAnswer: "Cystic duct inferiorly, common hepatic duct medially, and inferior border of the liver superiorly",
      explanation: "The cystohepatic triangle (of Calot) is bounded medially by the common hepatic duct, inferiorly/laterally by the cystic duct, and superiorly by the inferior visceral surface of liver segment V. It contains the cystic artery and the Calot node (Lunds node)."
    },
    {
      id: "liver-25", organId: "liver",
      question: "What is the most common anatomical variation of the right hepatic artery, known as a replaced right hepatic artery?",
      options: ["Originates from the superior mesenteric artery (SMA) and runs posterior to the portal vein", "Originates from the left gastric artery and runs in the lesser omentum", "Originates directly from the renal artery and ascends through the bare area", "Originates from the inferior mesenteric artery and traverses the mesocolon"],
      correctAnswer: "Originates from the superior mesenteric artery (SMA) and runs posterior to the portal vein",
      explanation: "A replaced right hepatic artery (Michels Type III variation, present in ~10-12% of individuals) arises from the superior mesenteric artery (SMA) and ascends toward the liver posterior to the head of the pancreas and portal vein."
    },
    {
      id: "liver-26", organId: "liver",
      question: "From which major arterial branch does a replaced left hepatic artery most commonly originate?",
      options: ["Left gastric artery (running in the pars flaccida of the lesser omentum)", "Splenic artery", "Gastroduodenal artery", "Inferior phrenic artery"],
      correctAnswer: "Left gastric artery (running in the pars flaccida of the lesser omentum)",
      explanation: "A replaced left hepatic artery (Michels Type II variation, occurring in ~10% of cases) arises directly from the left gastric artery and courses through the upper pars flaccida of the lesser omentum to enter the left liver lobe."
    },
    {
      id: "liver-27", organId: "liver",
      question: "Behind which anatomical structure is the hepatic portal vein formed, and by the union of which two major veins?",
      options: ["Behind the neck of the pancreas, by the union of the superior mesenteric vein and the splenic vein", "Behind the head of the pancreas, by the union of the inferior vena cava and renal vein", "Behind the first part of the duodenum, by the union of the left gastric vein and cystic vein", "Inside the porta hepatis, by the union of the right and left hepatic veins"],
      correctAnswer: "Behind the neck of the pancreas, by the union of the superior mesenteric vein and the splenic vein",
      explanation: "The hepatic portal vein is formed behind the neck of the pancreas by the confluence of the superior mesenteric vein (SMV) and the splenic vein (which typically receives the inferior mesenteric vein)."
    },
    {
      id: "liver-28", organId: "liver",
      question: "What proportion of total hepatic blood flow and total hepatic oxygen supply is delivered by the portal vein under normal resting conditions?",
      options: ["~75% of blood flow and ~50% of oxygen supply", "~25% of blood flow and ~10% of oxygen supply", "~50% of blood flow and ~90% of oxygen supply", "~95% of blood flow and ~10% of oxygen supply"],
      correctAnswer: "~75% of blood flow and ~50% of oxygen supply",
      explanation: "The liver exhibits a dual blood supply: the portal vein provides approximately 75-80% of total hepatic blood flow and 50% of the oxygen supply (due to its high volume), while the hepatic artery provides 20-25% of blood flow and 50% of the oxygen supply."
    },
    {
      id: "liver-29", organId: "liver",
      question: "How many major hepatic veins drain blood from the liver into the inferior vena cava, and what are their names?",
      options: ["Three: Right, Middle, and Left hepatic veins", "Two: Superior and Inferior hepatic veins", "Four: Anterior, Posterior, Medial, and Lateral hepatic veins", "Six: Segmental veins 1 through 6"],
      correctAnswer: "Three: Right, Middle, and Left hepatic veins",
      explanation: "The liver is drained into the retrohepatic inferior vena cava primarily by three major hepatic veins: the Right hepatic vein, the Middle hepatic vein, and the Left hepatic vein (the middle and left often join to form a common trunk before entering the IVC)."
    },
    {
      id: "liver-30", organId: "liver",
      question: "In which anatomical plane does the middle hepatic vein course, and which segments does it primarily drain?",
      options: ["The principal plane (Cantlies line); it drains segments IV, V, and VIII", "The left umbilical fissure; it drains segments II and III only", "The right lateral fissure; it drains segments VI and VII only", "The coronal plane; it drains segment I directly into the right atrium"],
      correctAnswer: "The principal plane (Cantlies line); it drains segments IV, V, and VIII",
      explanation: "The middle hepatic vein runs within the main portal scissura (Cantlies line) and drains blood from the central segments of the liver, specifically segments IV (left medial) and segments V and VIII (right anterior)."
    },
    {
      id: "liver-31", organId: "liver",
      question: "What is the central anatomical landmark of the classic hepatic lobule described by Kiernan?",
      options: ["Central vein (terminal hepatic venule)", "Portal triad (portal venule, hepatic arteriole, bile ductule)", "Interlobular bile duct", "Space of Mall"],
      correctAnswer: "Central vein (terminal hepatic venule)",
      explanation: "The classic hepatic lobule is a hexagonal prism centered on a central vein (terminal hepatic venule), with portal triads located at the periphery (the vertices of the hexagon). Blood flows centripetally from portal triads to the central vein."
    },
    {
      id: "liver-32", organId: "liver",
      question: "The portal lobule concept (proposed by Mall) emphasizes which physiological function of the liver, and what lies at its center?",
      options: ["Exocrine bile secretion; centered around a portal triad", "Endocrine hormone secretion; centered around the central vein", "Retinoid storage; centered around the central vein", "Urea synthesis; centered around the inferior vena cava"],
      correctAnswer: "Exocrine bile secretion; centered around a portal triad",
      explanation: "The portal lobule is a triangular unit centered on a portal triad (interlobular bile ductule) with its vertices at three surrounding central veins. It emphasizes the exocrine drainage of bile flowing centrifugally from hepatocytes toward the central portal canal."
    },
    {
      id: "liver-33", organId: "liver",
      question: "How is the hepatic acinus of Rappaport defined and oriented?",
      options: ["A diamond-shaped or oval parenchymal unit oriented around the terminal distributing vessels (arteriole and venule) between two adjacent central veins", "A spherical unit surrounding the gallbladder fossa", "A hexagonal unit centered on the central vein", "A linear band of hepatocytes surrounding the falciform ligament"],
      correctAnswer: "A diamond-shaped or oval parenchymal unit oriented around the terminal distributing vessels (arteriole and venule) between two adjacent central veins",
      explanation: "The hepatic acinus of Rappaport is a diamond/elliptical functional unit centered around the terminal distributing branches of the portal vein and hepatic artery that run along the border between two classic lobules, with its two poles at adjacent central veins."
    },
    {
      id: "liver-34", organId: "liver",
      question: "What are the metabolic characteristics of Zone 1 (periportal zone) in the Rappaport hepatic acinus?",
      options: ["Highest oxygen, nutrient, and toxin exposure; highest rate of gluconeogenesis, beta-oxidation, and urea synthesis; first to regenerate", "Lowest oxygen tension; primary site of glycolysis and lipogenesis; first to die in ischemia", "High concentration of CYP450 enzymes; major site of acetaminophen bioactivation", "Avascular zone containing only Kupffer cells and extracellular matrix"],
      correctAnswer: "Highest oxygen, nutrient, and toxin exposure; highest rate of gluconeogenesis, beta-oxidation, and urea synthesis; first to regenerate",
      explanation: "Zone 1 (periportal) is closest to the afferent vascular supply (portal venules and hepatic arterioles), receiving the highest concentrations of oxygen and nutrients. It specializes in oxidative metabolism (gluconeogenesis, beta-oxidation, cholesterol synthesis, urea cycle) and is the last to undergo ischemic necrosis but the first to show damage from direct hepatotoxins."
    },
    {
      id: "liver-35", organId: "liver",
      question: "Why is Zone 3 (perivenular / centrilobular zone) of the hepatic acinus most susceptible to ischemic injury and toxic damage from acetaminophen?",
      options: ["It receives blood lowest in oxygen tension and contains the highest concentration of Cytochrome P450 (CYP450) enzymes", "It has no sinusoidal capillary perfusion and lacks hepatocytes", "It contains the thickest basement membrane which prevents oxygen diffusion", "It receives exclusively unoxygenated blood from the spleen"],
      correctAnswer: "It receives blood lowest in oxygen tension and contains the highest concentration of Cytochrome P450 (CYP450) enzymes",
      explanation: "Zone 3 is farthest from the distributing portal vessels and closest to the central vein. It has the lowest oxygen tension (making it highly vulnerable to ischemia/hypoperfusion -> ischemic hepatitis) and the highest concentration of CYP450 enzymes (e.g., CYP2E1), which metabolize acetaminophen to toxic NAPQI."
    },
    {
      id: "liver-36", organId: "liver",
      question: "What is the defining structural feature of hepatic sinusoidal capillaries that facilitates molecular exchange?",
      options: ["Discontinuous endothelial lining with large fenestrae (lacking diaphragms) and an incomplete or absent basement membrane", "Continuous non-fenestrated endothelium with tight junctions and a thick basement membrane", "Stratified squamous lining supported by dense regular collagenous matrix", "Fenestrated endothelium with closed diaphragms resting on an impervious elastic lamina"],
      correctAnswer: "Discontinuous endothelial lining with large fenestrae (lacking diaphragms) and an incomplete or absent basement membrane",
      explanation: "Hepatic sinusoids are low-pressure discontinuous capillaries lined by fenestrated endothelial cells (sieve plates) that lack a continuous basal lamina. This allows plasma to freely enter the space of Disse and directly bathe hepatocyte microvilli."
    },
    {
      id: "liver-37", organId: "liver",
      question: "What is the space of Disse (perisinusoidal space) and what is its physiological role?",
      options: ["The microscopic gap between sinusoidal endothelial cells and hepatocyte basolateral surfaces; site of lymph formation and plasma-hepatocyte exchange", "The space within the lumen of the bile canaliculus", "The potential space between the liver and the diaphragm", "The tunnel through which the hepatic veins exit into the IVC"],
      correctAnswer: "The microscopic gap between sinusoidal endothelial cells and hepatocyte basolateral surfaces; site of lymph formation and plasma-hepatocyte exchange",
      explanation: "The space of Disse (perisinusoidal space) lies between the sinusoidal endothelium and the microvilli-covered basolateral membrane of hepatocytes. Plasma filters through sinusoidal fenestrae into this space, allowing extensive metabolic exchange and generating a large portion of the bodys lymph."
    },
    {
      id: "liver-38", organId: "liver",
      question: "Where are Kupffer cells located, and what is their primary lineage and function?",
      options: ["Luminal surface of hepatic sinusoids; resident tissue macrophages derived from monocytes that phagocytose debris and old RBCs", "Space of Disse; vitamin A-storing fibroblasts", "Bile ducts; simple columnar epithelial cells secreting bicarbonate", "Portal stroma; neural crest-derived autonomic ganglion cells"],
      correctAnswer: "Luminal surface of hepatic sinusoids; resident tissue macrophages derived from monocytes that phagocytose debris and old RBCs",
      explanation: "Kupffer cells are specialized resident tissue macrophages attached to the luminal surface of sinusoidal endothelial cells. They clear gut-derived bacteria, endotoxins, particulate matter, and aged/damaged erythrocytes from the bloodstream."
    },
    {
      id: "liver-39", organId: "liver",
      question: "In which hepatic microcompartment are hepatic stellate cells (Ito cells) located, and what is their role in liver fibrosis?",
      options: ["In the space of Disse; they store Vitamin A (retinoids) in quiescence and differentiate into collagen-producing myofibroblasts upon activation", "Inside the bile canaliculi; they pump bile acids into bile ducts", "In the central vein lumen; they contract to regulate venous outflow resistance", "In the capsule of Glisson; they secrete serous peritoneal fluid"],
      correctAnswer: "In the space of Disse; they store Vitamin A (retinoids) in quiescence and differentiate into collagen-producing myofibroblasts upon activation",
      explanation: "Hepatic stellate cells (Ito cells / perisinusoidal cells) reside in the space of Disse. In healthy liver, they store lipids and ~80% of the bodys vitamin A (retinoids). Following liver injury or inflammation, they activate into contractile myofibroblasts that synthesize extracellular matrix (Type I and III collagen), driving hepatic fibrosis and cirrhosis."
    },
    {
      id: "liver-40", organId: "liver",
      question: "What are hepatic Pit cells histologically and functionally?",
      options: ["Liver-associated Natural Killer (NK) cells located within sinusoidal lumens that provide innate immune defense", "Modified hepatocytes that produce bile pigments", "Endocrine cells that secrete erythropoietin in response to hypoxia", "Ciliated cells in the interlobular bile ducts that propel bile"],
      correctAnswer: "Liver-associated Natural Killer (NK) cells located within sinusoidal lumens that provide innate immune defense",
      explanation: "Pit cells are liver-specific Natural Killer (NK) lymphocytes adhering to the sinusoidal endothelium, characterized by electron-dense cytoplasmic granules. They play a vital role in innate tumor surveillance and viral defense."
    },
    {
      id: "liver-41", organId: "liver",
      question: "How are bile canaliculi formed and bounded at the cellular level?",
      options: ["By apical membrane invaginations of adjacent hepatocytes sealed by tight junctions (zonula occludens)", "By a continuous layer of simple cuboidal cholangiocytes", "By the basal membranes of endothelial cells in the sinusoid", "By invaginations of the hepatic capsule of Glisson"],
      correctAnswer: "By apical membrane invaginations of adjacent hepatocytes sealed by tight junctions (zonula occludens)",
      explanation: "Bile canaliculi are submicroscopic channels formed by grooves in the apical membranes of adjacent hepatocytes. They have no independent cellular wall; tight junctions (zonulae occludentes) seal the canalicular lumen from the surrounding intercellular space and sinusoidal circulation."
    },
    {
      id: "liver-42", organId: "liver",
      question: "What are the Canals of Hering (intrahepatic bile ductules) and what important cellular niche do they harbor?",
      options: ["The transitional conduits connecting bile canaliculi to interlobular bile ducts, lined by both hepatocytes and cholangiocytes, harboring hepatic stem/progenitor cells", "The vascular anastomoses between hepatic arterioles and portal venules", "The lymphatic channels within the portal tract", "The venous shunts connecting the central vein directly to the IVC"],
      correctAnswer: "The transitional conduits connecting bile canaliculi to interlobular bile ducts, lined by both hepatocytes and cholangiocytes, harboring hepatic stem/progenitor cells",
      explanation: "The canals of Hering (terminal bile ductules) serve as the transitional junction between bile canaliculi and interlobular bile ducts in portal triads. They are lined partly by hepatocytes and partly by cuboidal cholangiocytes and contain the hepatic progenitor/stem cell niche (oval cells) essential for liver regeneration."
    },
    {
      id: "liver-43", organId: "liver",
      question: "Which autonomic nerve fibers innervate the liver parenchymal vessels and biliary tree, and where do they form plexuses?",
      options: ["Sympathetic fibers from the celiac plexus (T7-T10) and parasympathetic fibers from the anterior and posterior vagal trunks, forming the hepatic plexus", "Sympathetic fibers from lumbar splanchnic nerves (L1-L2) and parasympathetic fibers from pelvic splanchnic nerves (S2-S4)", "Phrenic nerves exclusively supplying motor and parasympathetic innervation", "Somatic intercostal nerves T1-T6 forming the splenic plexus"],
      correctAnswer: "Sympathetic fibers from the celiac plexus (T7-T10) and parasympathetic fibers from the anterior and posterior vagal trunks, forming the hepatic plexus",
      explanation: "The liver is innervated by the hepatic plexus, which accompanies the hepatic artery and portal vein. It receives sympathetic postganglionic fibers from the celiac plexus (T7-T10 preganglionic segments) and parasympathetic preganglionic fibers from the anterior (primarily) and posterior vagal trunks."
    },
    {
      id: "liver-44", organId: "liver",
      question: "Irritation of the diaphragmatic peritoneum covering the liver or stretching of Glissons capsule against the diaphragm typically produces referred pain to which somatic region, and via which nerve?",
      options: ["Right shoulder / right supraclavicular region via the right phrenic nerve (C3-C5 dermatomes)", "Left groin and medial thigh via the genitofemoral nerve (L1-L2)", "Umbilicus via the tenth intercostal nerve (T10)", "Perineum via the pudendal nerve (S2-S4)"],
      correctAnswer: "Right shoulder / right supraclavicular region via the right phrenic nerve (C3-C5 dermatomes)",
      explanation: "The central diaphragmatic peritoneum and Glissons capsule superiorly receive sensory innervation via sensory fibers of the right phrenic nerve (C3, C4, C5). Irritation or inflammation refers pain somatically to the right shoulder tip and neck (supraclavicular nerves share C3-C4 roots)."
    },
    {
      id: "liver-45", organId: "liver",
      question: "What is Glissons capsule of the liver?",
      options: ["A thin, fibroelastic connective tissue layer that envelopes the liver parenchyma and extends into portal tracts as perivascular fibrous sheaths", "A rigid calcified outer shell protecting the caudate lobe", "The endothelial monolayer lining the inferior vena cava groove", "A synovial sheath surrounding the falciform ligament"],
      correctAnswer: "A thin, fibroelastic connective tissue layer that envelopes the liver parenchyma and extends into portal tracts as perivascular fibrous sheaths",
      explanation: "Glissons capsule (fibrous capsule of the liver) is a fibroelastic connective tissue coat that completely surrounds the liver underneath the serosa (peritoneum). At the porta hepatis, it invaginates along the branches of the portal triad, forming perivascular fibrous sheaths."
    },
    {
      id: "liver-46", organId: "liver",
      question: "Which lymph nodes receive the primary lymphatic drainage from the posterior bare area of the liver and diaphragm?",
      options: ["Phrenic and posterior mediastinal lymph nodes", "Inguinal lymph nodes", "Mesenteric lymph nodes", "Iliac lymph nodes"],
      correctAnswer: "Phrenic and posterior mediastinal lymph nodes",
      explanation: "Lymphatics from the bare area of the liver communicate across the diaphragm with diaphragmatic (phrenic) lymph nodes and drain into posterior mediastinal lymph nodes, ascending directly toward the thoracic duct without passing through the porta hepatis."
    },
    {
      id: "liver-47", organId: "liver",
      question: "During embryonic development, the liver parenchymal cells (hepatocytes and cholangiocytes) arise from which germ layer and embryological structure?",
      options: ["Endoderm of the ventral wall of the distal foregut (hepatic diverticulum)", "Ectoderm of the neural crest", "Lateral plate mesoderm only", "Intermediate mesoderm of the urogenital ridge"],
      correctAnswer: "Endoderm of the ventral wall of the distal foregut (hepatic diverticulum)",
      explanation: "The liver develops during the 4th week of gestation as an outpocketing (the hepatic diverticulum or liver bud) from the ventral endodermal lining of the distal foregut. The endodermal cords differentiate into hepatocytes and bile duct epithelial cells (cholangiocytes)."
    },
    {
      id: "liver-48", organId: "liver",
      question: "What anatomical structures of the liver are derived from the mesoderm of the septum transversum?",
      options: ["Fibrous connective tissue stroma, hematopoietic cells, and Kupffer cells", "Hepatocytes and bile duct epithelium", "Portal vein and inferior vena cava endothelium", "Hepatic acinar secretory enzymes"],
      correctAnswer: "Fibrous connective tissue stroma, hematopoietic cells, and Kupffer cells",
      explanation: "The endodermal cords of the hepatic diverticulum grow into the mesenchyme of the septum transversum, which gives rise to the hepatic stroma, Glissons capsule, sinusoidal Kupffer cells, and hematopoietic connective tissue."
    },
    {
      id: "liver-49", organId: "liver",
      question: "During which gestational period does the fetal liver serve as the primary organ of hematopoiesis?",
      options: ["From approximately week 6 of gestation until the third trimester (peaking around months 3-6)", "Exclusively during the first 2 weeks after fertilization", "From birth until puberty", "Exclusively in the third trimester after bone marrow involutes"],
      correctAnswer: "From approximately week 6 of gestation until the third trimester (peaking around months 3-6)",
      explanation: "Fetal hematopoiesis begins in the yolk sac, shifts to the liver around week 6 of gestation (peaking between months 3 and 6), and then gradually transitions to the bone marrow in the third trimester."
    },
    {
      id: "liver-50", organId: "liver",
      question: "In portal hypertension, life-threatening esophageal varices develop due to dilation of anastomoses between which two venous systems?",
      options: ["Left gastric (coronary) vein [portal] and esophageal tributaries of the azygos/hemiazygos veins [systemic]", "Superior mesenteric vein [portal] and renal vein [systemic]", "Splenic vein [portal] and left gonadal vein [systemic]", "Right gastroepiploic vein [portal] and femoral vein [systemic]"],
      correctAnswer: "Left gastric (coronary) vein [portal] and esophageal tributaries of the azygos/hemiazygos veins [systemic]",
      explanation: "At the lower third of the esophagus, tributaries of the left gastric (coronary) vein (portal system) anastomose with esophageal veins that drain into the azygos and hemiazygos systems (systemic circulation). Elevated portal pressures dilate these submucosal veins into esophageal varices."
    },
    {
      id: "liver-51", organId: "liver",
      question: "Caput medusae (dilated radiating periumbilical veins) in portal hypertension is caused by retrograde blood flow through which anatomical vessels?",
      options: ["Paraumbilical veins (in ligamentum teres) anastomosing with superficial and inferior epigastric veins", "Splenic vein anastomosing with the left colic vein", "Superior rectal vein anastomosing with internal pudendal vein", "Hepatic veins anastomosing with intercostal veins"],
      correctAnswer: "Paraumbilical veins (in ligamentum teres) anastomosing with superficial and inferior epigastric veins",
      explanation: "The paraumbilical veins (running in the round ligament/falciform ligament from the left portal vein branch) communicate with superficial epigastric, superior epigastric, and inferior epigastric veins on the anterior abdominal wall. Portal hypertension recanalizes these veins, producing radiating superficial veins known as caput medusae."
    },
    {
      id: "liver-52", organId: "liver",
      question: "Anorectal varices in portal hypertension occur at the anastomosis between which portal and systemic veins?",
      options: ["Superior rectal vein (portal) and middle/inferior rectal veins (systemic)", "Inferior mesenteric vein (portal) and testicular vein (systemic)", "Left colic vein (portal) and iliolumbar vein (systemic)", "Ileocolic vein (portal) and internal thoracic vein (systemic)"],
      correctAnswer: "Superior rectal vein (portal) and middle/inferior rectal veins (systemic)",
      explanation: "In the rectal submucosa, the superior rectal vein (a tributary of the inferior mesenteric vein -> portal system) anastomoses with the middle rectal vein (branch of internal iliac) and inferior rectal vein (branch of internal pudendal vein -> IVC systemic system)."
    },
    {
      id: "liver-53", organId: "liver",
      question: "What are the veins of Retzius in the context of portosystemic collateral circulation?",
      options: ["Retroperitoneal anastomoses between colic/mesenteric veins (portal) and retroperitoneal/lumbar/renal veins (systemic)", "Superficial veins of the lower extremities", "Intracranial dural venous sinuses connecting to the jugular vein", "Mediastinal veins connecting the superior vena cava to bronchial veins"],
      correctAnswer: "Retroperitoneal anastomoses between colic/mesenteric veins (portal) and retroperitoneal/lumbar/renal veins (systemic)",
      explanation: "The veins of Retzius are retroperitoneal portosystemic anastomoses where subperitoneal veins of the ascending and descending colon, duodenum, and bare area of the liver (portal) communicate with retroperitoneal parietal veins, lumbar veins, and azygos tributaries (systemic)."
    },
    {
      id: "liver-54", organId: "liver",
      question: "What is the surgical Pringle maneuver, and which specific vascular structures are occluded during this procedure?",
      options: ["Clamping of the hepatoduodenal ligament to occlude the proper hepatic artery and hepatic portal vein", "Ligation of the inferior vena cava above the renal veins", "Direct cross-clamping of the abdominal aorta superior to the celiac axis", "Occlusion of the splenic vein at the splenic hilum"],
      correctAnswer: "Clamping of the hepatoduodenal ligament to occlude the proper hepatic artery and hepatic portal vein",
      explanation: "The Pringle maneuver is a surgical technique used to control acute liver parenchymal hemorrhage during trauma or liver resection. An atraumatic vascular clamp is placed across the hepatoduodenal ligament (foramen of Winslow), occluding the hepatic inflow (proper hepatic artery and portal vein)."
    },
    {
      id: "liver-55", organId: "liver",
      question: "If profuse hemorrhage from a deep liver laceration continues despite an effective Pringle maneuver, what is the most likely source of bleeding?",
      options: ["Retrohepatic inferior vena cava or major hepatic veins", "Proper hepatic artery", "Portal vein main trunk", "Common bile duct mucosal plexus"],
      correctAnswer: "Retrohepatic inferior vena cava or major hepatic veins",
      explanation: "The Pringle maneuver occludes hepatic inflow (hepatic artery and portal vein). If brisk bleeding persists, it originates from hepatic outflow vessels (major hepatic veins) or the retrohepatic inferior vena cava, which are not occluded by the clamp."
    },
    {
      id: "liver-56", organId: "liver",
      question: "What is Budd-Chiari syndrome and why is Couinaud Segment I (caudate lobe) frequently spared or hypertrophied?",
      options: ["Thrombosis or occlusion of major hepatic veins; segment I is spared because it drains independently via direct Spigelian venules into the IVC", "Occlusion of the celiac trunk; segment I is spared because it is supplied by the renal artery", "Congenital absence of the portal vein; segment I is spared because it receives systemic lymphatic drainage", "Fibrosis of the bile duct; segment I is spared because it has no biliary canaliculi"],
      correctAnswer: "Thrombosis or occlusion of major hepatic veins; segment I is spared because it drains independently via direct Spigelian venules into the IVC",
      explanation: "Budd-Chiari syndrome results from obstruction/thrombosis of the hepatic venous outflow (the three main hepatic veins). Because the caudate lobe (Segment I) possesses independent small accessory hepatic veins (Spigelian veins) draining directly into the retrohepatic IVC, its outflow is preserved, often leading to compensatory hypertrophy of segment I while the rest of the liver congests and atrophies."
    },
    {
      id: "liver-57", organId: "liver",
      question: "What is the standard anatomical surface landmark for performing a transthoracic percutaneous liver biopsy, and in what respiratory phase is the needle advanced?",
      options: ["Right 8th, 9th, or 10th intercostal space in the midaxillary line, during full expiration", "Left 5th intercostal space in the midclavicular line, during deep inspiration", "Right 2nd intercostal space in the parasternal line, during tidal breathing", "Right 12th intercostal space at the mid-scapular line, during maximal inspiration"],
      correctAnswer: "Right 8th, 9th, or 10th intercostal space in the midaxillary line, during full expiration",
      explanation: "Transthoracic percutaneous liver biopsy is conventionally performed in the right 8th, 9th, or 10th intercostal space along the midaxillary line. The needle is inserted during full held expiration to elevate the diaphragm and lung base, minimizing the risk of penetrating the inferior border of the lung or pleural recess (costodiaphragmatic recess)."
    },
    {
      id: "liver-58", organId: "liver",
      question: "Trace the normal anatomical confluence of the extrahepatic biliary system leading to the duodenum:",
      options: ["Right and Left hepatic ducts -> Common hepatic duct; joined by Cystic duct -> Common bile duct (CBD) -> joins Main pancreatic duct at the Ampulla of Vater", "Cystic duct -> Left hepatic duct -> Right hepatic duct -> Pancreatic duct -> Duodenum", "Common bile duct -> Cystic duct -> Common hepatic duct -> Ampulla of Vater", "Left hepatic duct -> Cystic duct -> Thoracic duct -> Duodenum"],
      correctAnswer: "Right and Left hepatic ducts -> Common hepatic duct; joined by Cystic duct -> Common bile duct (CBD) -> joins Main pancreatic duct at the Ampulla of Vater",
      explanation: "Intrahepatic ducts drain into the Right and Left hepatic ducts, which unite outside the liver to form the Common Hepatic Duct. The Cystic duct from the gallbladder joins the common hepatic duct to form the Common Bile Duct (CBD), which unites with the main pancreatic duct (Wirsung) at the hepatopancreatic ampulla (of Vater) and opens into the major duodenal papilla."
    },
    {
      id: "liver-59", organId: "liver",
      question: "Which of the following sets of organs leaves distinct anatomical impressions on the visceral surface of the liver?",
      options: ["Stomach (gastric impression), Duodenum (duodenal impression), Right kidney (renal impression), and Right colic flexure (colic impression)", "Spleen, Left kidney, Descending colon, and Urinary bladder", "Cecum, Appendix, Sigmoid colon, and Ileum", "Heart, Left lung, Aortic arch, and Esophagus"],
      correctAnswer: "Stomach (gastric impression), Duodenum (duodenal impression), Right kidney (renal impression), and Right colic flexure (colic impression)",
      explanation: "The visceral surface of the liver presents shallow fossae/impressions from adjacent organs: the gastric and esophageal impressions on the left lobe, and the duodenal, colic (hepatic flexure), renal (right kidney), and suprarenal impressions on the right lobe."
    },
    {
      id: "liver-60", organId: "liver",
      question: "Which statement accurately describes the anatomical and physiological regenerative response of the liver following a 70% partial hepatectomy?",
      options: ["Existing quiescent mature hepatocytes enter the cell cycle (hyperplasia) and enlarge (hypertrophy) to restore original liver mass without regrowing the resected anatomical lobes", "The resected anatomical lobes regrow from their original stumps through true blastema formation", "The remaining liver undergoes scar formation and contracts without increasing total hepatocyte mass", "Regeneration occurs exclusively via migration of bone marrow-derived stem cells without division of resident hepatocytes"],
      correctAnswer: "Existing quiescent mature hepatocytes enter the cell cycle (hyperplasia) and enlarge (hypertrophy) to restore original liver mass without regrowing the resected anatomical lobes",
      explanation: "In mammals, liver regeneration after partial hepatectomy is compensatory hyperplasia and hypertrophy rather than true epimorphic regeneration. Quiescent mature hepatocytes (G0 phase) rapidly re-enter the cell cycle (G1/S phase), expanding the remaining intact segments until the original liver mass and functional capacity are restored; the resected lobes do not regrow."
    },
  ],
  "kidneys": [
    {
      id: "kidneys-1", organId: "kidneys",
      question: "In a healthy adult in the supine position, what are the typical vertebral levels spanned by the kidneys?",
      options: ["T10 to L1", "T12 to L3", "L2 to L5", "C7 to T3"],
      correctAnswer: "T12 to L3",
      explanation: "The kidneys are retroperitoneal organs that typically extend from the level of the T12 vertebra superiorly to the L3 vertebra inferiorly, with the right kidney lying slightly lower than the left."
    },
    {
      id: "kidneys-2", organId: "kidneys",
      question: "Why is the right kidney normally positioned approximately 1 to 2 cm lower than the left kidney?",
      options: ["Downward displacement by the right lobe of the liver", "Displacement by the inferior vena cava", "Traction from the right renal artery", "Presence of the ascending colon"],
      correctAnswer: "Downward displacement by the right lobe of the liver",
      explanation: "The substantial mass of the right lobe of the liver in the right upper quadrant displaces the right kidney inferiorly compared to the left kidney."
    },
    {
      id: "kidneys-3", organId: "kidneys",
      question: "From anterior to posterior, what is the classic anatomical arrangement of the major structures at the renal hilum?",
      options: ["Renal vein, renal artery, renal pelvis", "Renal artery, renal vein, renal pelvis", "Renal pelvis, renal artery, renal vein", "Renal artery, renal pelvis, renal vein"],
      correctAnswer: "Renal vein, renal artery, renal pelvis",
      explanation: "At the renal hilum, the major structures from anterior to posterior are arranged as Renal Vein, Renal Artery, and Renal Pelvis (mnemonic: V-A-P)."
    },
    {
      id: "kidneys-4", organId: "kidneys",
      question: "Which fascial sheath encloses the kidney, perinephric fat, and ipsilateral suprarenal gland?",
      options: ["Transversalis fascia", "Renal fascia (Gerota's fascia)", "Fibrous renal capsule", "Pararenal adipose layer"],
      correctAnswer: "Renal fascia (Gerota's fascia)",
      explanation: "The renal fascia (Gerota's fascia) is a collagenous fibroareolar envelope that encloses the perinephric adipose tissue, the kidney, and the suprarenal gland, separating them from the pararenal fat."
    },
    {
      id: "kidneys-5", organId: "kidneys",
      question: "Where is the pararenal (paranephric) fat located relative to the renal fascia (Gerota's fascia)?",
      options: ["Deep to the fibrous renal capsule", "Between the fibrous capsule and renal fascia", "External (posterior and posterolateral) to the renal fascia", "Exclusively inside the renal sinus"],
      correctAnswer: "External (posterior and posterolateral) to the renal fascia",
      explanation: "Pararenal fat is the outermost layer of retroperitoneal fat, situated external (chiefly posterior and posterolateral) to the posterior layer of the renal fascia."
    },
    {
      id: "kidneys-6", organId: "kidneys",
      question: "What is the surgical significance of Brödel's line along the posterolateral border of the kidney?",
      options: ["It is an avascular plane between the anterior and posterior arterial divisions", "It represents the junction between the renal cortex and renal medulla", "It marks the attachment of the renal capsule to the hilum", "It is where the ureter transitions into the renal pelvis"],
      correctAnswer: "It is an avascular plane between the anterior and posterior arterial divisions",
      explanation: "Brödel's line is an avascular longitudinal plane on the posterolateral surface of the kidney situated between the branches of the anterior and posterior renal arteries, making it an ideal site for nephrolithotomy incisions."
    },
    {
      id: "kidneys-7", organId: "kidneys",
      question: "The left renal vein travels horizontally across the midline between which two major arterial vessels to reach the inferior vena cava?",
      options: ["Celiac trunk and splenic artery", "Superior mesenteric artery and abdominal aorta", "Inferior mesenteric artery and aorta", "Right and left common iliac arteries"],
      correctAnswer: "Superior mesenteric artery and abdominal aorta",
      explanation: "The left renal vein crosses anterior to the abdominal aorta and immediately posterior to the superior mesenteric artery (SMA). Compression within this vascular angle causes nutcracker syndrome."
    },
    {
      id: "kidneys-8", organId: "kidneys",
      question: "Which of the following vessels typically empties directly into the left renal vein rather than directly into the inferior vena cava?",
      options: ["Left gonadal (testicular or ovarian) vein", "Right gonadal vein", "Right suprarenal vein", "Left hepatic vein"],
      correctAnswer: "Left gonadal (testicular or ovarian) vein",
      explanation: "The left gonadal vein and left suprarenal vein both drain into the left renal vein, whereas the corresponding veins on the right side drain directly into the inferior vena cava."
    },
    {
      id: "kidneys-9", organId: "kidneys",
      question: "Which three muscles form the posterior muscular bed upon which each kidney rests?",
      options: ["Psoas major, quadratus lumborum, and transversus abdominis", "Rectus abdominis, external oblique, and internal oblique", "Iliacus, piriformis, and obturator internus", "Latissimus dorsi, serratus posterior inferior, and erector spinae"],
      correctAnswer: "Psoas major, quadratus lumborum, and transversus abdominis",
      explanation: "Posteriorly, from medial to lateral, each kidney rests against the diaphragm superiorly, and the psoas major, quadratus lumborum, and aponeurosis of the transversus abdominis inferiorly."
    },
    {
      id: "kidneys-10", organId: "kidneys",
      question: "Which nerves run inferolaterally across the posterior abdominal wall directly posterior to the kidneys?",
      options: ["Subcostal, iliohypogastric, and ilioinguinal nerves", "Femoral, obturator, and genitofemoral nerves", "Vagus, phrenic, and sympathetic trunk nerves", "Pudendal, sciatic, and lateral femoral cutaneous nerves"],
      correctAnswer: "Subcostal, iliohypogastric, and ilioinguinal nerves",
      explanation: "The subcostal (T12), iliohypogastric (L1), and ilioinguinal (L1) nerves travel obliquely downward across the posterior aspect of the renal fascia against the quadratus lumborum muscle."
    },
    {
      id: "kidneys-11", organId: "kidneys",
      question: "Which portion of the gastrointestinal tract lies directly anterior to the medial border and hilum of the right kidney without intervening peritoneum?",
      options: ["Descending (second) part of the duodenum", "Stomach fundus", "Transverse colon", "First part of the jejunum"],
      correctAnswer: "Descending (second) part of the duodenum",
      explanation: "The second (descending) part of the duodenum is retroperitoneal and is directly related to the anterior surface of the medial border and hilum of the right kidney."
    },
    {
      id: "kidneys-12", organId: "kidneys",
      question: "Which of the following organs is NOT in direct anterior relationship with the left kidney?",
      options: ["Head of the pancreas", "Stomach (posterior wall)", "Spleen", "Body and tail of the pancreas"],
      correctAnswer: "Head of the pancreas",
      explanation: "The body and tail of the pancreas, stomach, spleen, splenic flexure of colon, and jejunum are anterior relations of the left kidney; the head of the pancreas lies in the duodenal C-loop related to the right kidney and midline structures."
    },
    {
      id: "kidneys-13", organId: "kidneys",
      question: "How many independent vascular (arterial) segments are typically described in the human kidney?",
      options: ["Three (3)", "Four (4)", "Five (5)", "Eight (8)"],
      correctAnswer: "Five (5)",
      explanation: "The human kidney is divided into five independent vascular segments: apical (superior), anterior superior, anterior inferior, inferior, and posterior."
    },
    {
      id: "kidneys-14", organId: "kidneys",
      question: "What is the unique anatomical course of the posterior branch of the renal artery?",
      options: ["It passes posterior to the renal pelvis to supply the posterior segment alone", "It supplies all four anterior segments", "It crosses anterior to the renal vein to supply the upper pole", "It forms direct anastomoses with the superior mesenteric artery"],
      correctAnswer: "It passes posterior to the renal pelvis to supply the posterior segment alone",
      explanation: "The posterior branch is the only segmental branch that passes behind (posterior to) the renal pelvis, supplying exclusively the posterior vascular segment."
    },
    {
      id: "kidneys-15", organId: "kidneys",
      question: "Why does occlusion of an individual renal segmental artery consistently result in wedge-shaped tissue infarction?",
      options: ["Renal segmental arteries are anatomical end arteries lacking collateral anastomoses", "The renal veins possess valves that prevent retrograde perfusion", "Renal lobules have independent sympathetic vasoconstrictor tone", "Perirenal fat prevents vascular collateralization"],
      correctAnswer: "Renal segmental arteries are anatomical end arteries lacking collateral anastomoses",
      explanation: "Renal segmental arteries do not form functional arterial anastomoses with adjacent segmental branches; occlusion of one artery therefore deprives that segment entirely of blood supply, causing infarction."
    },
    {
      id: "kidneys-16", organId: "kidneys",
      question: "What is the anatomical name for the cortical tissue that extends inward between adjacent medullary pyramids?",
      options: ["Renal columns of Bertin", "Medullary rays of Ferrein", "Ducts of Bellini", "Minor calyces"],
      correctAnswer: "Renal columns of Bertin",
      explanation: "Renal columns (columns of Bertin) are extensions of the renal cortex that project deep into the medulla, separating adjacent renal pyramids and conveying interlobar blood vessels."
    },
    {
      id: "kidneys-17", organId: "kidneys",
      question: "Urine discharging from the papillary collecting ducts passes through the area cribrosa of which structure before entering a minor calyx?",
      options: ["Renal papilla", "Renal column", "Renal capsule", "Major calyx"],
      correctAnswer: "Renal papilla",
      explanation: "The apex of each medullary pyramid forms a renal papilla, whose perforated surface (area cribrosa) discharges urine directly into the receiving minor calyx."
    },
    {
      id: "kidneys-18", organId: "kidneys",
      question: "In the human kidney, minor calyces coalesce into major calyces. How many major calyces are typically present per kidney?",
      options: ["2 to 3", "7 to 9", "12 to 14", "18 to 20"],
      correctAnswer: "2 to 3",
      explanation: "Typically, 7 to 14 minor calyces converge to form 2 to 3 major calyces (superior, middle, and inferior), which then unite to form the renal pelvis."
    },
    {
      id: "kidneys-19", organId: "kidneys",
      question: "Which of the following structures is housed within the fat-filled cavity of the renal sinus?",
      options: ["Renal pelvis, calyces, and branches of renal neurovascular bundles", "Bowman's capsules and proximal convoluted tubules", "Loops of Henle and collecting ducts", "Suprarenal gland and celiac plexus"],
      correctAnswer: "Renal pelvis, calyces, and branches of renal neurovascular bundles",
      explanation: "The renal sinus is the central cavity within the medial border of the kidney that contains adipose tissue, the renal pelvis, calyces, branches of the renal artery, tributaries of the renal vein, lymphatics, and nerves."
    },
    {
      id: "kidneys-20", organId: "kidneys",
      question: "What is the fundamental microscopic structural and functional unit of the kidney responsible for urine formation?",
      options: ["Nephron", "Glomerulus alone", "Collecting duct", "Renal lobule"],
      correctAnswer: "Nephron",
      explanation: "The nephron is the basic structural and functional unit of the kidney, consisting of the renal corpuscle (glomerulus and Bowman's capsule) and the renal tubular system (PCT, loop of Henle, and DCT)."
    },
    {
      id: "kidneys-21", organId: "kidneys",
      question: "How do juxtamedullary nephrons structurally differ from superficial cortical nephrons?",
      options: ["They have long loops of Henle that extend deep into the inner medulla", "They have short loops of Henle confined strictly to the outer cortex", "They lack a glomerulus and Bowman's capsule", "Their renal corpuscles reside within the renal papilla"],
      correctAnswer: "They have long loops of Henle that extend deep into the inner medulla",
      explanation: "Juxtamedullary nephrons (~15% of all nephrons) have glomeruli located near the corticomedullary junction and possess long loops of Henle that penetrate deep into the inner medulla, critical for establishing the corticomedullary osmotic gradient."
    },
    {
      id: "kidneys-22", organId: "kidneys",
      question: "From which vessels do the hairpin-shaped medullary capillaries known as the vasa recta directly originate?",
      options: ["Efferent arterioles of juxtamedullary nephrons", "Afferent arterioles of cortical nephrons", "Arcuate arteries directly", "Interlobar veins"],
      correctAnswer: "Efferent arterioles of juxtamedullary nephrons",
      explanation: "The vasa recta arise from the efferent arterioles of juxtamedullary nephrons and descend into the renal medulla to function as countercurrent exchangers."
    },
    {
      id: "kidneys-23", organId: "kidneys",
      question: "Which of the following correctly lists the three structural layers of the glomerular filtration barrier from capillary lumen to urinary space?",
      options: ["Fenestrated endothelium, glomerular basement membrane, podocyte slit diaphragms", "Podocyte foot processes, glomerular basement membrane, fenestrated endothelium", "Glomerular basement membrane, fenestrated endothelium, mesangial matrix", "Parietal epithelium, glomerular basement membrane, endothelial cells"],
      correctAnswer: "Fenestrated endothelium, glomerular basement membrane, podocyte slit diaphragms",
      explanation: "From the vascular lumen outward into Bowman's space, the filtration barrier comprises: (1) fenestrated capillary endothelium, (2) the thick trilaminar glomerular basement membrane, and (3) podocyte foot processes bridged by slit diaphragms."
    },
    {
      id: "kidneys-24", organId: "kidneys",
      question: "Which macromolecular component provides the primary negative electrostatic charge to the glomerular basement membrane, repelling plasma albumin?",
      options: ["Heparan sulfate proteoglycans", "Type I collagen fibrils", "Keratan sulfate", "Elastin fibers"],
      correctAnswer: "Heparan sulfate proteoglycans",
      explanation: "Heparan sulfate proteoglycans (such as agrin and perlecan) give the glomerular basement membrane a high density of fixed negative charges, establishing a charge-selective barrier that repels polyanionic proteins like albumin."
    },
    {
      id: "kidneys-25", organId: "kidneys",
      question: "Which essential transmembrane protein forms the porous molecular zipper of the podocyte filtration slit diaphragm?",
      options: ["Nephrin", "E-cadherin", "Desmin", "Claudin-1"],
      correctAnswer: "Nephrin",
      explanation: "Nephrin is a transmembrane immunoglobulin superfamily protein that forms the core structural component of the podocyte slit diaphragm; its defect causes congenital nephrotic syndrome of the Finnish type."
    },
    {
      id: "kidneys-26", organId: "kidneys",
      question: "Which of the following is a primary physiological function of intraglomerular mesangial cells?",
      options: ["Structural support of capillary loops and phagocytosis of trapped macromolecules", "Production of primary ultrafiltrate in Bowman's space", "Synthesis and secretion of antidiuretic hormone", "Active secretion of sodium into the tubular lumen"],
      correctAnswer: "Structural support of capillary loops and phagocytosis of trapped macromolecules",
      explanation: "Intraglomerular mesangial cells provide mechanical architecture to the capillary tuft, possess contractile properties to regulate surface area, and phagocytose immune complexes and cellular debris from the basement membrane."
    },
    {
      id: "kidneys-27", organId: "kidneys",
      question: "Which three structures collectively constitute the Juxtaglomerular Apparatus (JGA)?",
      options: ["Macula densa, juxtaglomerular (granular) cells, and extraglomerular mesangial (Lacis) cells", "Podocytes, Bowman's capsule, and proximal tubule", "Loop of Henle, collecting duct, and vasa recta", "Renal papilla, minor calyx, and major calyx"],
      correctAnswer: "Macula densa, juxtaglomerular (granular) cells, and extraglomerular mesangial (Lacis) cells",
      explanation: "The JGA consists of the macula densa (specialized cells of the thick ascending limb/early DCT), juxtaglomerular cells (renin-producing modified vascular smooth muscle of the afferent arteriole), and extraglomerular mesangial cells (Lacis cells)."
    },
    {
      id: "kidneys-28", organId: "kidneys",
      question: "What luminal parameter is specifically detected by the macula densa cells to mediate tubuloglomerular feedback?",
      options: ["Sodium chloride (NaCl) delivery and concentration in the thick ascending limb", "Oxygen saturation of renal venous blood", "Glucose concentration in the proximal tubule", "Urea concentration in the medullary collecting duct"],
      correctAnswer: "Sodium chloride (NaCl) delivery and concentration in the thick ascending limb",
      explanation: "Macula densa cells detect changes in luminal NaCl concentration via their apical Na+-K+-2Cl- cotransporters, signaling the afferent arteriole to constrict or dilate and modulating renin secretion."
    },
    {
      id: "kidneys-29", organId: "kidneys",
      question: "Which specific cell type synthesizes, stores, and secretes the enzyme renin in response to decreased renal perfusion pressure?",
      options: ["Juxtaglomerular (granular) cells of the afferent arteriole", "Podocytes of the visceral layer of Bowman's capsule", "Principal cells of the collecting duct", "Type A intercalated cells of the cortical collecting duct"],
      correctAnswer: "Juxtaglomerular (granular) cells of the afferent arteriole",
      explanation: "Juxtaglomerular cells are modified smooth muscle cells located primarily in the wall of the afferent arteriole that synthesize, store in granules, and release renin into the circulation."
    },
    {
      id: "kidneys-30", organId: "kidneys",
      question: "What is the primary cellular source of erythropoietin (EPO) production in the adult human kidney?",
      options: ["Peritubular interstitial fibroblasts in the cortex and outer medulla", "Glomerular endothelial cells", "Simple cuboidal epithelial cells of the thin loop of Henle", "Medullary collecting duct epithelial cells"],
      correctAnswer: "Peritubular interstitial fibroblasts in the cortex and outer medulla",
      explanation: "Erythropoietin (EPO) is synthesized by specialized peritubular interstitial fibroblasts (renal interstitial cells) located in the renal cortex and outer stripe of the outer medulla in response to tissue hypoxia."
    },
    {
      id: "kidneys-31", organId: "kidneys",
      question: "In which nephron segment is the enzyme 1-alpha-hydroxylase located to convert 25-hydroxyvitamin D3 into active 1,25-dihydroxyvitamin D3 (calcitriol)?",
      options: ["Proximal convoluted tubule", "Thick ascending limb of Henle", "Distal convoluted tubule", "Inner medullary collecting duct"],
      correctAnswer: "Proximal convoluted tubule",
      explanation: "The mitochondrial enzyme 1-alpha-hydroxylase (CYP27B1) is expressed predominantly in the proximal convoluted tubule cells, where it catalyzes the final bioactivation of vitamin D to form calcitriol."
    },
    {
      id: "kidneys-32", organId: "kidneys",
      question: "Which histological feature clearly distinguishes proximal convoluted tubules (PCT) from distal convoluted tubules (DCT) under light microscopy?",
      options: ["A prominent, dense apical brush border of microvilli in PCT", "Total absence of mitochondria in PCT epithelial cells", "Stratified squamous epithelium lining the PCT", "A much wider, sharply delineated round lumen with flat cells in PCT"],
      correctAnswer: "A prominent, dense apical brush border of microvilli in PCT",
      explanation: "PCT cells have an extensive, tall apical brush border of microvilli that increases apical surface area for reabsorption, often giving the PCT lumen a hazy or occluded appearance compared to the clean, distinct lumen of the DCT."
    },
    {
      id: "kidneys-33", organId: "kidneys",
      question: "Under normal physiological conditions, approximately what percentage of filtered sodium, chloride, and water is reabsorbed by the proximal convoluted tubule?",
      options: ["10% to 15%", "30% to 40%", "65% to 70%", "95% to 99%"],
      correctAnswer: "65% to 70%",
      explanation: "The proximal convoluted tubule is responsible for the bulk reabsorption of approximately 65-70% of the filtered sodium, chloride, and water, along with 100% of filtered glucose and amino acids."
    },
    {
      id: "kidneys-34", organId: "kidneys",
      question: "Where is the Sodium-Glucose Cotransporter 2 (SGLT2) primarily expressed along the nephron?",
      options: ["Apical membrane of the S1 and S2 segments of the proximal convoluted tubule", "Basolateral membrane of the thick ascending limb", "Apical membrane of the distal convoluted tubule", "Luminal surface of the medullary collecting duct"],
      correctAnswer: "Apical membrane of the S1 and S2 segments of the proximal convoluted tubule",
      explanation: "SGLT2 is a high-capacity, low-affinity sodium-glucose cotransporter located on the apical (luminal) membrane of early proximal tubule cells (S1 and S2 segments), reabsorbing roughly 90% of filtered glucose."
    },
    {
      id: "kidneys-35", organId: "kidneys",
      question: "What is the permeability profile of the thin descending limb of the loop of Henle?",
      options: ["Highly permeable to water via constitutive AQP1, but poorly permeable to NaCl and urea", "Impermeable to water, but actively transports NaCl into the interstitium", "Completely impermeable to both water and all dissolved solutes", "Freely permeable to NaCl and urea, but totally impermeable to water"],
      correctAnswer: "Highly permeable to water via constitutive AQP1, but poorly permeable to NaCl and urea",
      explanation: "The thin descending limb expresses high levels of Aquaporin-1 (AQP1), making it water-permeable; because it has low permeability to ions, tubular fluid becomes increasingly concentrated as it descends into the hypertonic medullary interstitium."
    },
    {
      id: "kidneys-36", organId: "kidneys",
      question: "Which apical transporter in the thick ascending limb of the loop of Henle is selectively inhibited by loop diuretics such as furosemide?",
      options: ["Na+-K+-2Cl- cotransporter (NKCC2)", "Na+-Cl- cotransporter (NCC)", "Epithelial Sodium Channel (ENaC)", "Sodium-hydrogen exchanger 3 (NHE3)"],
      correctAnswer: "Na+-K+-2Cl- cotransporter (NKCC2)",
      explanation: "NKCC2 is located on the luminal membrane of thick ascending limb cells; loop diuretics (furosemide, bumetanide, torsemide) compete for the chloride binding site of NKCC2, preventing solute reabsorption."
    },
    {
      id: "kidneys-37", organId: "kidneys",
      question: "Why is the thick ascending limb of the loop of Henle referred to as the 'diluting segment' of the nephron?",
      options: ["It actively reabsorbs solutes while remaining impermeable to water, decreasing luminal osmolarity", "It actively secretes large volumes of water into the tubule lumen", "It converts urea into water and ammonia", "It absorbs water without moving any electrolytes"],
      correctAnswer: "It actively reabsorbs solutes while remaining impermeable to water, decreasing luminal osmolarity",
      explanation: "Because the thick ascending limb actively extracts NaCl via NKCC2 but possesses no water channels (impermeable to water), the tubular fluid exiting this segment is hypotonic (diluted) relative to plasma (~100-150 mOsm/L)."
    },
    {
      id: "kidneys-38", organId: "kidneys",
      question: "Which apical cotransporter located in the early distal convoluted tubule is the primary target of thiazide diuretics?",
      options: ["Na+-Cl- cotransporter (NCC)", "Na+-K+-2Cl- cotransporter (NKCC2)", "Na+/H+ antiporter (NHE3)", "SGLT2 transporter"],
      correctAnswer: "Na+-Cl- cotransporter (NCC)",
      explanation: "The thiazide-sensitive NaCl cotransporter (NCC) is expressed on the apical membrane of early distal convoluted tubule epithelial cells and is specifically blocked by thiazide and thiazide-like diuretics."
    },
    {
      id: "kidneys-39", organId: "kidneys",
      question: "Which two luminal ion transport proteins in the principal cells of the late DCT and collecting duct are upregulated by aldosterone?",
      options: ["Epithelial Sodium Channel (ENaC) and ROMK potassium channels", "SGLT2 and GLUT2", "NKCC2 and Barttin chloride channels", "NHE3 and Aquaporin-1"],
      correctAnswer: "Epithelial Sodium Channel (ENaC) and ROMK potassium channels",
      explanation: "Aldosterone binds to mineralocorticoid receptors in principal cells, increasing the synthesis and apical membrane density of ENaC (promoting Na+ reabsorption) and ROMK (promoting K+ secretion)."
    },
    {
      id: "kidneys-40", organId: "kidneys",
      question: "What is the primary acid-base role of Type A (alpha) intercalated cells in the cortical collecting duct during systemic acidosis?",
      options: ["Active secretion of H+ into the lumen via apical H+-ATPase and basolateral reabsorption of HCO3-", "Secretion of HCO3- into the lumen via apical pendrin and H+ reabsorption", "Reabsorption of filtered glucose to generate lactic acid", "Direct conversion of ammonia to ammonium in the bloodstream"],
      correctAnswer: "Active secretion of H+ into the lumen via apical H+-ATPase and basolateral reabsorption of HCO3-",
      explanation: "Type A intercalated cells eliminate excess acid by pumping protons (H+) into the lumen via apical H+-ATPase and H+/K+-ATPase, while exporting newly generated bicarbonate (HCO3-) into the blood via basolateral AE1 exchangers."
    },
    {
      id: "kidneys-41", organId: "kidneys",
      question: "Which apical transport protein is utilized by Type B (beta) intercalated cells to secrete bicarbonate into the urine during metabolic alkalosis?",
      options: ["Pendrin (Cl-/HCO3- exchanger)", "Anion Exchanger 1 (AE1)", "Epithelial Sodium Channel (ENaC)", "SGLT1 cotransporter"],
      correctAnswer: "Pendrin (Cl-/HCO3- exchanger)",
      explanation: "Type B intercalated cells express Pendrin (an apical Cl-/HCO3- exchanger) that secretes bicarbonate into the tubular fluid in exchange for chloride, helping correct systemic alkalosis."
    },
    {
      id: "kidneys-42", organId: "kidneys",
      question: "Which hormone promotes the apical insertion of Aquaporin-2 (AQP2) water channels in collecting duct principal cells?",
      options: ["Antidiuretic hormone (ADH / Arginine Vasopressin)", "Aldosterone", "Atrial natriuretic peptide (ANP)", "Parathyroid hormone (PTH)"],
      correctAnswer: "Antidiuretic hormone (ADH / Arginine Vasopressin)",
      explanation: "ADH binds to basolateral V2 receptors on principal cells, activating cAMP/PKA signaling to induce the trafficking and insertion of Aquaporin-2 storage vesicles into the apical membrane, increasing water reabsorption."
    },
    {
      id: "kidneys-43", organId: "kidneys",
      question: "Where do the large papillary collecting ducts of Bellini terminate to discharge concentrated urine?",
      options: ["At the area cribrosa on the apex of the renal papilla into a minor calyx", "Directly into the segmental renal veins", "Into the cortical labyrinth near the renal capsule", "Directly into the vasa recta network"],
      correctAnswer: "At the area cribrosa on the apex of the renal papilla into a minor calyx",
      explanation: "The ducts of Bellini represent the final coalesced collecting ducts that empty urine through the area cribrosa at the tip of the renal papilla directly into a minor calyx."
    },
    {
      id: "kidneys-44", organId: "kidneys",
      question: "Which embryological structure gives rise to the ureter, renal pelvis, major and minor calyces, and collecting ducts?",
      options: ["Ureteric bud (metanephric diverticulum)", "Metanephric blastema (mesenchyme)", "Pronephric duct", "Allantois"],
      correctAnswer: "Ureteric bud (metanephric diverticulum)",
      explanation: "The ureteric bud, an outgrowth of the mesonephric duct, undergoes repeated dichotomous branching to form the entire renal collecting system: ureter, pelvis, major calyces, minor calyces, and collecting ducts."
    },
    {
      id: "kidneys-45", organId: "kidneys",
      question: "Which embryological tissue differentiates into the nephrons proper (Bowman's capsules, PCT, loops of Henle, and DCT)?",
      options: ["Metanephric blastema (mesenchyme)", "Ureteric bud", "Neural crest mesenchyme", "Lateral plate splanchnic mesoderm"],
      correctAnswer: "Metanephric blastema (mesenchyme)",
      explanation: "The metanephric blastema (mesenchyme) undergoes mesenchymal-to-epithelial transition upon induction by the ureteric bud to form the nephrons (from Bowman's capsule through the distal convoluted tubule)."
    },
    {
      id: "kidneys-46", organId: "kidneys",
      question: "From which anatomical location do the definitive metanephric kidneys originate during embryonic development before ascending to the lumbar region?",
      options: ["Pelvic (sacral) region", "Thoracic cavity", "Anterior abdominal wall near the umbilicus", "Lateral hypochondrium"],
      correctAnswer: "Pelvic (sacral) region",
      explanation: "The definitive kidneys form in the sacral/pelvic cavity opposite the sacral somites and subsequently ascend during weeks 6 to 9 of development to reach their permanent position at T12-L3."
    },
    {
      id: "kidneys-47", organId: "kidneys",
      question: "What vascular structure arrests the normal cranial ascent of a horseshoe kidney, keeping it located in the lower abdomen?",
      options: ["Inferior mesenteric artery (IMA)", "Superior mesenteric artery (SMA)", "Celiac trunk", "Median sacral artery"],
      correctAnswer: "Inferior mesenteric artery (IMA)",
      explanation: "In horseshoe kidney, fusion of the lower poles creates an isthmus that hooks beneath the origin of the inferior mesenteric artery (IMA at L3) during ascent, arresting the kidney in the lower lumbar region."
    },
    {
      id: "kidneys-48", organId: "kidneys",
      question: "What is the correct anatomical branching sequence of the intrarenal arterial tree from the main renal artery to the glomerulus?",
      options: ["Main renal artery -> Segmental -> Interlobar -> Arcuate -> Interlobular (Cortical radiate) -> Afferent arteriole", "Main renal artery -> Arcuate -> Interlobar -> Segmental -> Interlobular -> Afferent arteriole", "Main renal artery -> Interlobular -> Arcuate -> Interlobar -> Segmental -> Afferent arteriole", "Main renal artery -> Segmental -> Arcuate -> Interlobar -> Cortical radiate -> Afferent arteriole"],
      correctAnswer: "Main renal artery -> Segmental -> Interlobar -> Arcuate -> Interlobular (Cortical radiate) -> Afferent arteriole",
      explanation: "The renal arterial hierarchy is: Main Renal Artery -> Segmental arteries -> Interlobar arteries (in renal columns) -> Arcuate arteries (at corticomedullary junction) -> Interlobular/Cortical radiate arteries -> Afferent arterioles."
    },
    {
      id: "kidneys-49", organId: "kidneys",
      question: "Where are the arcuate arteries located within the renal parenchyma?",
      options: ["At the corticomedullary junction, arching over the bases of the renal pyramids", "Within the fibrous capsule on the outer renal cortex", "Inside the renal sinus encircling the major calyces", "At the apices of the renal papillae"],
      correctAnswer: "At the corticomedullary junction, arching over the bases of the renal pyramids",
      explanation: "Arcuate arteries branch from interlobar arteries and run curved courses along the corticomedullary boundary, arching over the broad bases of the medullary pyramids."
    },
    {
      id: "kidneys-50", organId: "kidneys",
      question: "What are the stellate veins (venulae stellatae) of the kidney?",
      options: ["Star-shaped superficial cortical venules beneath the fibrous capsule draining into cortical radiate veins", "Deep medullary venous rings around the renal papillae", "Anastomotic venous channels connecting the left renal vein directly to the splenic vein", "Lymphatic plexuses surrounding the renal pelvis"],
      correctAnswer: "Star-shaped superficial cortical venules beneath the fibrous capsule draining into cortical radiate veins",
      explanation: "Stellate veins are star-like clusters of superficial subcapsular venules that drain the outermost renal cortex and empty inward into the cortical radiate (interlobular) veins."
    },
    {
      id: "kidneys-51", organId: "kidneys",
      question: "What clinical syndrome is caused by entrapment of the left renal vein between the superior mesenteric artery and the abdominal aorta?",
      options: ["Nutcracker syndrome (mesoaortic compression)", "Budd-Chiari syndrome", "May-Thurner syndrome", "Thoracic outlet syndrome"],
      correctAnswer: "Nutcracker syndrome (mesoaortic compression)",
      explanation: "Nutcracker syndrome occurs when the left renal vein is compressed between the SMA and the abdominal aorta, resulting in venous hypertension, left flank pain, hematuria, and left-sided varicocele."
    },
    {
      id: "kidneys-52", organId: "kidneys",
      question: "Which two intrinsic mechanisms are primarily responsible for renal autoregulation of blood flow and GFR over mean arterial pressures of 80 to 180 mmHg?",
      options: ["Myogenic response and tubuloglomerular feedback", "Central baroreceptor reflex and vagal stimulation", "Adrenal epinephrine release and cortisol secretion", "Renal capsule compliance and pararenal fat padding"],
      correctAnswer: "Myogenic response and tubuloglomerular feedback",
      explanation: "Renal autoregulation is intrinsically mediated by the myogenic mechanism (smooth muscle contraction in response to stretch in the afferent arteriole) and tubuloglomerular feedback (macula densa sensing NaCl)."
    },
    {
      id: "kidneys-53", organId: "kidneys",
      question: "To which primary lymph node group does the lymphatic drainage of both kidneys directly travel?",
      options: ["Lateral aortic (para-aortic / lumbar) lymph nodes", "Superficial inguinal lymph nodes", "Celiac lymph nodes", "Superior mesenteric lymph nodes"],
      correctAnswer: "Lateral aortic (para-aortic / lumbar) lymph nodes",
      explanation: "Renal lymphatic channels accompany the renal blood vessels in the pedicle and drain into the lateral aortic (lumbar / para-aortic) lymph nodes located along the aorta and IVC."
    },
    {
      id: "kidneys-54", organId: "kidneys",
      question: "Preganglionic sympathetic innervation to the renal plexus originates primarily from which spinal cord segments?",
      options: ["T10 to L1", "C5 to T1", "L4 to S2", "S2 to S4"],
      correctAnswer: "T10 to L1",
      explanation: "Preganglionic sympathetic fibers supplying the kidneys arise from the T10 to L1 segments of the spinal cord and travel via the lesser, least, and lumbar splanchnic nerves to the renal plexus."
    },
    {
      id: "kidneys-55", organId: "kidneys",
      question: "Why does renal colic from a kidney stone typically produce referred pain radiating to the flank, groin, and scrotum or labia majora?",
      options: ["Visceral afferents travel along sympathetic nerves into the T10 to L1 spinal cord segments sharing dermatomes with iliohypogastric, ilioinguinal, and genitofemoral nerves", "The renal capsule directly attaches to the pelvic floor musculature", "Somatic motor nerves of the sciatic plexus become compressed", "The stone directly compresses the pudendal nerve in Alcock's canal"],
      correctAnswer: "Visceral afferents travel along sympathetic nerves into the T10 to L1 spinal cord segments sharing dermatomes with iliohypogastric, ilioinguinal, and genitofemoral nerves",
      explanation: "Visceral sensory fibers from the renal pelvis and upper ureter accompany sympathetic nerves to T10-L1 spinal segments, leading to dermatomal referred pain along the flank, inguinal canal, and external genitalia (supplied by iliohypogastric, ilioinguinal, and genitofemoral nerves)."
    },
    {
      id: "kidneys-56", organId: "kidneys",
      question: "Which major vascular structure lies directly anterior to the right renal artery along its course from the aorta to the right kidney?",
      options: ["Inferior vena cava (IVC)", "Left renal vein", "Splenic vein", "Descending aorta"],
      correctAnswer: "Inferior vena cava (IVC)",
      explanation: "Because the aorta is situated to the left of the midline, the right renal artery is longer than the left and must pass posterior to the Inferior Vena Cava (IVC) to reach the right kidney."
    },
    {
      id: "kidneys-57", organId: "kidneys",
      question: "Which organic solute contributes roughly 40% to 50% of the high interstitial osmolarity in the inner renal medulla during maximal urinary concentration?",
      options: ["Urea", "Glucose", "Creatinine", "Uric acid"],
      correctAnswer: "Urea",
      explanation: "Urea recycling mediated by UT-A1/UT-A3 transporters in the inner medullary collecting duct contributes nearly half of the total solute concentration of the hypertonic medullary interstitium during antidiuresis."
    },
    {
      id: "kidneys-58", organId: "kidneys",
      question: "How do the renal hila relate anatomically to the transpyloric plane (L1 vertebral level)?",
      options: ["The transpyloric plane intersects the left hilum, while the right hilum lies slightly inferior to it", "Both hila lie exactly 5 cm above the transpyloric plane", "Both hila lie at the L4 vertebral level below the transpyloric plane", "The transpyloric plane passes below both inferior poles of the kidneys"],
      correctAnswer: "The transpyloric plane intersects the left hilum, while the right hilum lies slightly inferior to it",
      explanation: "The transpyloric plane (L1 level) passes directly through the hilum of the left kidney (roughly 5 cm from the midline) and through the superior border of the hilum of the slightly lower right kidney."
    },
    {
      id: "kidneys-59", organId: "kidneys",
      question: "What histological components constitute the 'medullary rays of Ferrein' seen radiating from the medullary bases into the renal cortex?",
      options: ["Parallel straight tubules (loops of Henle and collecting ducts)", "Interlobar arteries and veins", "Capsular lymphatic sinuses", "Clusters of renal corpuscles"],
      correctAnswer: "Parallel straight tubules (loops of Henle and collecting ducts)",
      explanation: "Medullary rays (of Ferrein) are radially oriented cortical structures composed of straight portions of proximal and distal tubules and collecting ducts extending upward from the base of the medullary pyramids."
    },
    {
      id: "kidneys-60", organId: "kidneys",
      question: "Autosomal Recessive Polycystic Kidney Disease (ARPKD) is caused by mutations in which gene, leading to fusiform dilation of which renal segment?",
      options: ["PKHD1 (fibrocystin); collecting ducts", "PKD1 (polycystin-1); glomeruli exclusively", "WT1; proximal convoluted tubules", "RET; thick ascending limbs"],
      correctAnswer: "PKHD1 (fibrocystin); collecting ducts",
      explanation: "ARPKD is caused by mutations in the PKHD1 gene encoding fibrocystin (polyductin), characteristically causing diffuse, symmetrical cylindrical/fusiform dilation of the renal collecting ducts and hepatic biliary dysgenesis."
    },
  ],
  "eyeball": [
    {
      id: "eyeball-1", organId: "eyeball",
      question: "What are the three primary concentric tunics (layers) that compose the wall of the human eyeball from outermost to innermost?",
      options: ["Fibrous tunic, vascular tunic (uvea), and nervous tunic (retina)", "Corneal tunic, choroidal tunic, and scleral tunic", "Serous tunic, muscular tunic, and mucosal tunic", "Dural tunic, arachnoid tunic, and pial tunic"],
      correctAnswer: "Fibrous tunic, vascular tunic (uvea), and nervous tunic (retina)",
      explanation: "The wall of the eyeball is composed of three concentric tunics: the outer fibrous tunic (sclera and cornea), the middle vascular tunic or uvea (choroid, ciliary body, and iris), and the inner nervous tunic (retina)."
    },
    {
      id: "eyeball-2", organId: "eyeball",
      question: "Which structure constitutes the transparent anterior one-sixth of the eyeball's fibrous tunic?",
      options: ["Cornea", "Sclera", "Choroid", "Crystalline lens"],
      correctAnswer: "Cornea",
      explanation: "The cornea forms the transparent anterior one-sixth of the fibrous tunic, while the opaque white sclera forms the posterior five-sixths."
    },
    {
      id: "eyeball-3", organId: "eyeball",
      question: "What is the approximate total refractive power of the human eye in the unaccommodated state, and how much of it is contributed by the cornea?",
      options: ["Total ~60 diopters; cornea contributes ~40–43 diopters", "Total ~40 diopters; cornea contributes ~15–20 diopters", "Total ~80 diopters; cornea contributes ~60 diopters", "Total ~20 diopters; cornea contributes ~10 diopters"],
      correctAnswer: "Total ~60 diopters; cornea contributes ~40–43 diopters",
      explanation: "The total refractive power of the relaxed human eye is approximately +60 diopters. The cornea accounts for roughly two-thirds (+40 to +43 diopters) of this total optical power due to the marked difference in refractive index between air and the corneal tear film."
    },
    {
      id: "eyeball-4", organId: "eyeball",
      question: "Which sequence correctly lists the five classical histological layers of the human cornea from anterior (external) to posterior (internal)?",
      options: ["Epithelium, Bowman's layer, Stroma, Descemet's membrane, Endothelium", "Epithelium, Descemet's membrane, Stroma, Bowman's layer, Endothelium", "Endothelium, Bowman's layer, Stroma, Descemet's membrane, Epithelium", "Epithelium, Stroma, Bowman's layer, Endothelium, Descemet's membrane"],
      correctAnswer: "Epithelium, Bowman's layer, Stroma, Descemet's membrane, Endothelium",
      explanation: "From anterior to posterior, the five classical layers of the cornea are: stratified squamous non-keratinized epithelium, Bowman's layer (anterior limiting lamina), stroma (substantia propria, making up ~90% of thickness), Descemet's membrane (posterior limiting lamina), and the single-layered endothelium."
    },
    {
      id: "eyeball-5", organId: "eyeball",
      question: "Which corneal layer is a true, thick basement membrane that continuously thickens throughout life and is secreted by the corneal endothelium?",
      options: ["Descemet's membrane", "Bowman's layer", "Corneal stroma", "Dua's layer"],
      correctAnswer: "Descemet's membrane",
      explanation: "Descemet's membrane is the basement membrane of the corneal endothelium. Unlike Bowman's layer (an acellular condensed stromal modification that cannot regenerate), Descemet's membrane is a true basement membrane that thickens from ~3 μm at birth to ~10–12 μm in adulthood."
    },
    {
      id: "eyeball-6", organId: "eyeball",
      question: "How does the corneal endothelium maintain the optical clarity and deturgescence of the corneal stroma?",
      options: ["Active transport of fluid out of the stroma via Na+/K+-ATPase and bicarbonate-dependent pumps", "Phagocytosis of metabolic waste products by endothelial lysosomes", "Continuous secretion of keratin sulfate into the anterior chamber", "Rapid mitotic division replacing hydrated stromal collagen fibers"],
      correctAnswer: "Active transport of fluid out of the stroma via Na+/K+-ATPase and bicarbonate-dependent pumps",
      explanation: "The corneal endothelium functions as a metabolic pump. Active Na+/K+-ATPase and carbonic anhydrase/bicarbonate-dependent fluid pumps continuously move ions and water from the hydrophilic stroma back into the anterior chamber, maintaining a state of relative dehydration (~78% hydration) essential for optical transparency."
    },
    {
      id: "eyeball-7", organId: "eyeball",
      question: "Sensory innervation to the human cornea is primarily supplied by branches of which nerve?",
      options: ["Ophthalmic nerve (CN V1) via long ciliary nerves", "Maxillary nerve (CN V2) via zygomaticotemporal nerves", "Oculomotor nerve (CN III) via motor root of ciliary ganglion", "Facial nerve (CN VII) via greater petrosal nerve"],
      correctAnswer: "Ophthalmic nerve (CN V1) via long ciliary nerves",
      explanation: "Corneal sensory innervation is provided by the long ciliary nerves, which are branches of the nasociliary nerve (a division of the ophthalmic nerve, CN V1). The cornea is one of the most densely innervated tissues in the human body."
    },
    {
      id: "eyeball-8", organId: "eyeball",
      question: "Where are the limbal epithelial stem cells (LESCs) that regenerate the corneal epithelium located anatomically?",
      options: ["Palisades of Vogt at the corneoscleral junction", "Canal of Schlemm in the scleral sulcus", "Basal layer of the central corneal epithelium", "Non-pigmented epithelium of the pars plana"],
      correctAnswer: "Palisades of Vogt at the corneoscleral junction",
      explanation: "Limbal epithelial stem cells are housed within specialized crypt-like microenvironments called the Palisades of Vogt at the corneoscleral limbus. They continuously divide and migrate centripetally to replenish the corneal epithelium."
    },
    {
      id: "eyeball-9", organId: "eyeball",
      question: "Where is the human sclera at its thinnest point, making it most vulnerable to surgical or traumatic perforation?",
      options: ["Immediately posterior to the rectus muscle insertions (~0.3 mm)", "At the posterior pole surrounding the optic nerve (~1.0 mm)", "At the corneoscleral limbus (~0.8 mm)", "At the equatorial region midway between rectus muscles (~0.6 mm)"],
      correctAnswer: "Immediately posterior to the rectus muscle insertions (~0.3 mm)",
      explanation: "The sclera is thinnest (~0.3 mm) directly posterior to the insertions of the four extraocular rectus muscles. In contrast, it is thickest (~1.0 mm) at the posterior pole near the optic nerve."
    },
    {
      id: "eyeball-10", organId: "eyeball",
      question: "What is the name of the sieve-like, fenestrated collagenous region of the posterior sclera through which retinal ganglion cell axons exit the globe?",
      options: ["Lamina cribrosa", "Scleral spur", "Canal of Cloquet", "Trabecular meshwork"],
      correctAnswer: "Lamina cribrosa",
      explanation: "The lamina cribrosa is a mesh-like fenestrated continuation of the sclera at the posterior pole of the eyeball that allows the unmyelinated axons of the retinal ganglion cells and central retinal vessels to pass through."
    },
    {
      id: "eyeball-11", organId: "eyeball",
      question: "Which three structures collectively constitute the uveal tract (vascular tunic) of the eyeball?",
      options: ["Iris, ciliary body, and choroid", "Cornea, sclera, and episclera", "Retina, optic disc, and macula", "Lens, zonules, and vitreous body"],
      correctAnswer: "Iris, ciliary body, and choroid",
      explanation: "The uveal tract (middle vascular tunic) consists of three continuous structures: the anterior uvea (iris and ciliary body) and the posterior uvea (choroid)."
    },
    {
      id: "eyeball-12", organId: "eyeball",
      question: "What is Bruch's membrane (lamina basalis choroideae)?",
      options: ["The five-layered semipermeable membrane between the choriocapillaris and the retinal pigment epithelium", "The collagenous capsule encasing the crystalline lens", "The basement membrane underlying the corneal epithelium", "The fibrous band anchoring the lateral rectus muscle"],
      correctAnswer: "The five-layered semipermeable membrane between the choriocapillaris and the retinal pigment epithelium",
      explanation: "Bruch's membrane is a specialized 2–4 μm thick pentalaminar extracellular matrix located between the choriocapillaris of the choroid and the retinal pigment epithelium (RPE), regulating nutrient and waste exchange between them."
    },
    {
      id: "eyeball-13", organId: "eyeball",
      question: "In the vascular architecture of the choroid, which layer is composed predominantly of large-caliber vessels situated outermost near the suprachoroid?",
      options: ["Haller's layer", "Sattler's layer", "Choriocapillaris", "Bruch's membrane"],
      correctAnswer: "Haller's layer",
      explanation: "The vascular choroid consists of three vascular tiers: Haller's layer (outermost layer of large-diameter blood vessels), Sattler's layer (middle layer of medium-diameter arterioles and venules), and the choriocapillaris (innermost capillary layer)."
    },
    {
      id: "eyeball-14", organId: "eyeball",
      question: "What anatomical structure is the primary site of aqueous humor secretion in the eye?",
      options: ["Non-pigmented ciliary epithelium of the pars plicata", "Pigmented epithelium of the pars plana", "Endothelium of the trabecular meshwork", "Stromal capillaries of the posterior iris"],
      correctAnswer: "Non-pigmented ciliary epithelium of the pars plicata",
      explanation: "Aqueous humor is actively secreted by the non-pigmented ciliary epithelium (NPCE) located on the ciliary processes of the pars plicata (the anterior pleated region of the ciliary body)."
    },
    {
      id: "eyeball-15", organId: "eyeball",
      question: "Which enzyme located in the ciliary epithelium plays a vital role in aqueous humor production by catalyzing the hydration of carbon dioxide?",
      options: ["Carbonic anhydrase", "Superoxide dismutase", "Acetylcholinesterase", "Lactate dehydrogenase"],
      correctAnswer: "Carbonic anhydrase",
      explanation: "Carbonic anhydrase (specifically isoenzyme II) catalyzes the reversible hydration of CO2 to HCO3- and H+ in ciliary epithelial cells. Bicarbonate generation drives active sodium and water transport into the posterior chamber, forming aqueous humor."
    },
    {
      id: "eyeball-16", organId: "eyeball",
      question: "What is the ora serrata?",
      options: ["The scalloped junction marking the transition between the peripheral retina and the pars plana of the ciliary body", "The border between the anterior and posterior chambers of the eye", "The circular junction between the iris and the ciliary body", "The anatomical ring marking the border between the cornea and sclera"],
      correctAnswer: "The scalloped junction marking the transition between the peripheral retina and the pars plana of the ciliary body",
      explanation: "The ora serrata is the serrated anterior boundary of the multi-layered neural retina, marking where the light-sensitive retina terminates and continues anteriorly as the two-layered non-photosensitive ciliary epithelium over the pars plana."
    },
    {
      id: "eyeball-17", organId: "eyeball",
      question: "According to the Helmholtz theory of accommodation, what occurs during accommodation for near vision?",
      options: ["Ciliary muscle contracts, zonular tension decreases, and the lens becomes more convex", "Ciliary muscle relaxes, zonular tension increases, and the lens flattens", "Ciliary muscle contracts, zonular tension increases, and the lens flattens", "Ciliary muscle relaxes, zonular tension decreases, and the lens moves anteriorly"],
      correctAnswer: "Ciliary muscle contracts, zonular tension decreases, and the lens becomes more convex",
      explanation: "During near accommodation, the ciliary muscle contracts, which moves the ciliary ring forward and inward toward the lens axis. This releases tension on the zonular fibers, allowing the elastic lens capsule to increase its anterior and posterior curvature (rounding up), thereby increasing refractive power."
    },
    {
      id: "eyeball-18", organId: "eyeball",
      question: "Which autonomic motor pathway innervates the sphincter pupillae muscle to mediate pupillary constriction (miosis)?",
      options: ["Parasympathetic postganglionic fibers from the ciliary ganglion via short ciliary nerves", "Sympathetic postganglionic fibers from the superior cervical ganglion via long ciliary nerves", "Somatic motor fibers from the abducens nerve (CN VI)", "Sensory afferents from the trigeminal ganglion via the nasociliary nerve"],
      correctAnswer: "Parasympathetic postganglionic fibers from the ciliary ganglion via short ciliary nerves",
      explanation: "Pupillary constriction is mediated by the parasympathetic pathway: preganglionic fibers travel from the Edinger-Westphal nucleus via CN III to synapse in the ciliary ganglion; postganglionic parasympathetic fibers travel via short ciliary nerves to innervate the circular sphincter pupillae muscle."
    },
    {
      id: "eyeball-19", organId: "eyeball",
      question: "Which muscle in the iris causes pupillary dilation (mydriasis) upon sympathetic stimulation?",
      options: ["Dilator pupillae muscle", "Sphincter pupillae muscle", "Ciliary muscle", "Müller's superior tarsal muscle"],
      correctAnswer: "Dilator pupillae muscle",
      explanation: "The dilator pupillae (radial pupillary muscle) is arranged radially in the iris stroma. Sympathetic postganglionic fibers from the superior cervical ganglion stimulate alpha-1 adrenergic receptors on this muscle, causing pupillary dilation."
    },
    {
      id: "eyeball-20", organId: "eyeball",
      question: "From which embryonic germ layer are the sphincter pupillae and dilator pupillae muscles uniquely derived?",
      options: ["Neuroectoderm of the optic cup", "Cranial neural crest mesenchyme", "Head paraxial mesoderm", "Surface ectoderm"],
      correctAnswer: "Neuroectoderm of the optic cup",
      explanation: "Uniquely among smooth muscles (which are typically mesodermal), the sphincter pupillae and dilator pupillae muscles develop directly from the anterior epithelial layer of the iris, which is derived from the neuroectoderm of the embryonic optic cup."
    },
    {
      id: "eyeball-21", organId: "eyeball",
      question: "What is the thickest basement membrane in the human body, encapsulating the entire crystalline lens?",
      options: ["Lens capsule", "Descemet's membrane", "Bruch's membrane", "Internal limiting membrane"],
      correctAnswer: "Lens capsule",
      explanation: "The lens capsule is a transparent, elastic, collagenous (type IV) basement membrane completely enveloping the crystalline lens. It is the thickest basement membrane in the human body, reaching up to 20 μm at the anterior/posterior pre-equatorial regions."
    },
    {
      id: "eyeball-22", organId: "eyeball",
      question: "Where is the single layer of metabolically active cuboidal epithelial cells located in the crystalline lens?",
      options: ["Exclusively beneath the anterior lens capsule", "Exclusively beneath the posterior lens capsule", "Uniformly lining both anterior and posterior capsules", "Deep within the embryonic central lens nucleus"],
      correctAnswer: "Exclusively beneath the anterior lens capsule",
      explanation: "The lens epithelium is a single monolayer of cuboidal cells located exclusively beneath the anterior and equatorial lens capsule. During embryonic development, posterior epithelial cells elongated into primary lens fibers, leaving the posterior capsule devoid of an epithelial monolayer."
    },
    {
      id: "eyeball-23", organId: "eyeball",
      question: "Which family of structural proteins constitutes roughly 90% of the water-soluble protein content of the human lens, maintaining its high transparency and refractive index?",
      options: ["Crystallins (alpha, beta, and gamma crystallins)", "Rhodopsins", "Collagens type I and II", "Keratins"],
      correctAnswer: "Crystallins (alpha, beta, and gamma crystallins)",
      explanation: "Crystallins (alpha, beta, and gamma) comprise ~90% of total lens protein. Their tightly packed, short-range paracrystalline spatial ordering minimizes light scattering and provides the high refractive index necessary for focusing light."
    },
    {
      id: "eyeball-24", organId: "eyeball",
      question: "What are the Zonules of Zinn (ciliary zonules)?",
      options: ["A network of microfibrillar suspensory ligaments that anchor the crystalline lens to the ciliary body", "Small collagen bridges spanning the anterior chamber angle", "Venous anastomoses connecting choroidal veins to the episcleral plexus", "Fibrous bands connecting the optic nerve sheath to the bony orbital apex"],
      correctAnswer: "A network of microfibrillar suspensory ligaments that anchor the crystalline lens to the ciliary body",
      explanation: "The Zonules of Zinn (suspensory apparatus of the lens) consist of fibrillin-rich microfibrils extending from the ciliary processes and valleys of the pars plicata/pars plana to insert into the equatorial lens capsule, suspending the lens and transmitting ciliary muscle tension."
    },
    {
      id: "eyeball-25", organId: "eyeball",
      question: "Which sequence correctly traces the conventional (trabecular) outflow pathway of aqueous humor from the anterior chamber?",
      options: ["Trabecular meshwork -> Schlemm's canal -> Collector channels -> Episcleral veins", "Schlemm's canal -> Trabecular meshwork -> Vortex veins -> Ophthalmic vein", "Trabecular meshwork -> Suprachoroidal space -> Ciliary body -> Episcleral veins", "Pupillary margin -> Posterior chamber -> Hyaloid canal -> Central retinal vein"],
      correctAnswer: "Trabecular meshwork -> Schlemm's canal -> Collector channels -> Episcleral veins",
      explanation: "In the conventional outflow pathway (which handles 70–90% of aqueous drainage), aqueous humor flows from the anterior chamber angle through the trabecular meshwork (uveal, corneoscleral, and juxtacanalicular tissue) into Schlemm's canal, then via 25–30 collector channels into aqueous veins and the episcleral venous plexus."
    },
    {
      id: "eyeball-26", organId: "eyeball",
      question: "What anatomical structures form the anterior and posterior boundaries of the anterior chamber of the eyeball?",
      options: ["Anterior: corneal endothelium; Posterior: anterior surface of iris and central pupillary area of lens", "Anterior: corneal epithelium; Posterior: ciliary body and vitreous face", "Anterior: iris stroma; Posterior: retina and choroid", "Anterior: lens capsule; Posterior: fovea centralis"],
      correctAnswer: "Anterior: corneal endothelium; Posterior: anterior surface of iris and central pupillary area of lens",
      explanation: "The anterior chamber is bounded anteriorly by the posterior surface of the cornea (corneal endothelium), posteriorly by the anterior surface of the iris and the central anterior surface of the lens (within the pupil), and peripherally by the trabecular meshwork at the iridocorneal angle."
    },
    {
      id: "eyeball-27", organId: "eyeball",
      question: "What is the approximate volume of the adult vitreous chamber, and what are its two primary structural biochemical components?",
      options: ["~4.0 mL; composed of Type II collagen fibrils and hyaluronic acid", "~1.0 mL; composed of Type I collagen fibrils and elastin", "~8.0 mL; composed of Type IV collagen fibrils and chondroitin sulfate", "~2.5 mL; composed of albumin and keratin"],
      correctAnswer: "~4.0 mL; composed of Type II collagen fibrils and hyaluronic acid",
      explanation: "The vitreous body occupies approximately 4.0 mL (~80% of ocular volume). It is a transparent hydrophilic gel consisting of ~99% water and a structural framework composed of Type II collagen fibrils interspersed with hydrated hyaluronic acid (glycosaminoglycan) polymers."
    },
    {
      id: "eyeball-28", organId: "eyeball",
      question: "What is Cloquet's canal (hyaloid canal)?",
      options: ["An S-shaped central vitreous channel that marks the path of the embryonic hyaloid artery", "A drainage canal in the scleral spur that collects aqueous humor", "The bony opening in the sphenoid through which the optic nerve passes", "The space separating the choroid from the sclera"],
      correctAnswer: "An S-shaped central vitreous channel that marks the path of the embryonic hyaloid artery",
      explanation: "Cloquet's canal (hyaloid canal) is an optically clear, S-shaped tubular channel traversing the central vitreous from the posterior lens pole (patellar fossa) to the optic disc (area of Martegiani). It represents the former pathway of the embryonic hyaloid artery."
    },
    {
      id: "eyeball-29", organId: "eyeball",
      question: "What circular anatomical adhesion firmly attaches the anterior vitreous face to the posterior lens capsule in young individuals?",
      options: ["Weigert's ligament (Egger's line)", "Spiral of Tillaux", "Ligament of Lockwood", "Annulus of Zinn"],
      correctAnswer: "Weigert's ligament (Egger's line)",
      explanation: "Weigert's ligament (ligamentum hyaloideocapsulare or Egger's line) is a firm circular adhesion (8–9 mm in diameter) attaching the anterior hyaloid membrane of the vitreous to the posterior lens capsule, surrounding the potential space of Berger."
    },
    {
      id: "eyeball-30", organId: "eyeball",
      question: "Which is the outermost layer (Layer 1) of the neural retina, situated immediately adjacent to Bruch's membrane?",
      options: ["Retinal pigment epithelium (RPE)", "Photoreceptor outer segment layer", "External limiting membrane", "Outer nuclear layer"],
      correctAnswer: "Retinal pigment epithelium (RPE)",
      explanation: "The retinal pigment epithelium (RPE) is a single monolayer of hexagonally packed, melanin-containing cuboidal cells that forms Layer 1 (the outermost layer) of the retina, resting directly on Bruch's membrane of the choroid."
    },
    {
      id: "eyeball-31", organId: "eyeball",
      question: "Which vital physiological function is performed by the retinal pigment epithelium (RPE) to sustain photoreceptor function?",
      options: ["Phagocytosis of shed outer segment discs and reisomerization of all-trans-retinal to 11-cis-retinal", "Direct propagation of action potentials along the optic tract", "Synthesis of myelin sheaths around photoreceptor inner segments", "Filtration of aqueous humor from the posterior chamber into the vitreous"],
      correctAnswer: "Phagocytosis of shed outer segment discs and reisomerization of all-trans-retinal to 11-cis-retinal",
      explanation: "The RPE performs crucial roles including daily phagocytosis of shed rod and cone photoreceptor outer segment discs, recycling visual chromophore (converting all-trans-retinal back to 11-cis-retinal via the visual retinoid cycle), absorbing scattered light via melanosomes, and forming the outer blood-retinal barrier."
    },
    {
      id: "eyeball-32", organId: "eyeball",
      question: "What structures form the external limiting membrane (ELM) of the retina?",
      options: ["Zonula adherens junctional complexes between photoreceptor inner segments and Müller cell apical processes", "A true continuous basement membrane secreted by rod and cone nuclei", "Tight junctions between retinal capillary endothelial cells", "Desmosomal attachments between horizontal and amacrine cells"],
      correctAnswer: "Zonula adherens junctional complexes between photoreceptor inner segments and Müller cell apical processes",
      explanation: "The external limiting membrane (ELM, Layer 3) is not a true anatomical membrane, but rather a fenestrated sheet of intercellular adhering junctions (zonulae adherentes) linking the inner segments of photoreceptor cells to the apical microvilli of Müller glial cells."
    },
    {
      id: "eyeball-33", organId: "eyeball",
      question: "Which retinal layer contains the cell bodies and nuclei of the rod and cone photoreceptors?",
      options: ["Outer nuclear layer (ONL)", "Inner nuclear layer (INL)", "Outer plexiform layer (OPL)", "Ganglion cell layer (GCL)"],
      correctAnswer: "Outer nuclear layer (ONL)",
      explanation: "The outer nuclear layer (ONL, Layer 4) contains the cell bodies and nuclei of the rod and cone photoreceptor cells."
    },
    {
      id: "eyeball-34", organId: "eyeball",
      question: "In which retinal layer do photoreceptor synaptic terminals (spherules and pedicles) synapse with the dendrites of bipolar and horizontal cells?",
      options: ["Outer plexiform layer (OPL)", "Inner plexiform layer (IPL)", "Inner nuclear layer (INL)", "Nerve fiber layer (NFL)"],
      correctAnswer: "Outer plexiform layer (OPL)",
      explanation: "The outer plexiform layer (OPL, Layer 5) is a synaptic layer where rod spherules and cone pedicles form synapses with the dendritic processes of bipolar neurons and horizontal cells."
    },
    {
      id: "eyeball-35", organId: "eyeball",
      question: "Which cell nuclei are located within the inner nuclear layer (INL, Layer 6) of the human retina?",
      options: ["Bipolar cells, horizontal cells, amacrine cells, and Müller glial cells", "Rods, cones, and pigment epithelial cells", "Ganglion cells, astrocytes, and microglia only", "Oligodendrocytes and Schwann cells only"],
      correctAnswer: "Bipolar cells, horizontal cells, amacrine cells, and Müller glial cells",
      explanation: "The inner nuclear layer (INL) contains the cell bodies and nuclei of four distinct cell types: bipolar interneurons, horizontal association cells, amacrine interneurons, and the primary retinal glial cells (Müller cells)."
    },
    {
      id: "eyeball-36", organId: "eyeball",
      question: "Which specialized radial glial cell spans the entire histological thickness of the neural retina, from the internal limiting membrane to the external limiting membrane?",
      options: ["Müller cell", "Microglial cell", "Astrocyte", "Bergmann glia"],
      correctAnswer: "Müller cell",
      explanation: "Müller cells are the principal structural and metabolic glial cells of the retina. Their elongated cellular processes span the full depth of the neural retina, extending from their basal footplates at the internal limiting membrane to their apical processes at the external limiting membrane."
    },
    {
      id: "eyeball-37", organId: "eyeball",
      question: "What anatomical structures constitute the nerve fiber layer (Layer 9, stratum opticum) of the retina?",
      options: ["Unmyelinated axons of retinal ganglion cells", "Dendrites of bipolar neurons", "Axons of photoreceptors projecting to the LGN", "Myelinated fibers of the ophthalmic nerve"],
      correctAnswer: "Unmyelinated axons of retinal ganglion cells",
      explanation: "The nerve fiber layer (NFL) is composed of the unmyelinated axons of retinal ganglion cells that travel parallel to the retinal surface toward the optic disc, where they converge to form the optic nerve."
    },
    {
      id: "eyeball-38", organId: "eyeball",
      question: "What forms the internal limiting membrane (ILM, Layer 10) that separates the neural retina from the vitreous body?",
      options: ["The basal lamina (basement membrane) formed by the footplates of Müller glial cells", "A continuous sheet of endothelial tight junctions", "The posterior cortical collagen fibrils of the vitreous only", "The fused plasma membranes of retinal ganglion cells"],
      correctAnswer: "The basal lamina (basement membrane) formed by the footplates of Müller glial cells",
      explanation: "The internal limiting membrane (ILM) is the innermost boundary of the retina, formed by the basement membrane elaborated by the expanded basal endfeet of Müller cells, covered internally by vitreous proteoglycans."
    },
    {
      id: "eyeball-39", organId: "eyeball",
      question: "What structural and cellular specialization characterizes the foveola at the central core of the fovea centralis?",
      options: ["Exclusively slender cone photoreceptors, complete absence of inner retinal layers, and absence of retinal capillaries", "High density of rod photoreceptors surrounded by multiple ganglion cell layers", "A thick nerve fiber layer and prominent choriocapillaris infiltration", "Absence of photoreceptors with abundant horizontal and amacrine cells"],
      correctAnswer: "Exclusively slender cone photoreceptors, complete absence of inner retinal layers, and absence of retinal capillaries",
      explanation: "The foveola (~0.35 mm diameter, center of fovea) is specialized for maximum visual acuity: it contains only elongated cone photoreceptors (no rods), has inner retinal layers laterally displaced to minimize light scattering, and is completely avascular (foveal avascular zone)."
    },
    {
      id: "eyeball-40", organId: "eyeball",
      question: "Which dietary carotenoid pigments are concentrated in the Henle fiber layer of the macula lutea to absorb harmful high-energy blue light?",
      options: ["Lutein and zeaxanthin", "Beta-carotene and lycopene", "Astaxanthin and fucoxanthin", "Rhodopsin and iodopsin"],
      correctAnswer: "Lutein and zeaxanthin",
      explanation: "The macula lutea contains high concentrations of the macular xanthophyll pigments lutein, zeaxanthin, and meso-zeaxanthin, primarily in the outer plexiform (Henle fiber) layer, which filter blue light and act as potent antioxidants."
    },
    {
      id: "eyeball-41", organId: "eyeball",
      question: "Why does the optic disc (optic nerve head) produce a physiological blind spot (scotoma) in the human visual field?",
      options: ["It completely lacks photoreceptor cells (rods and cones)", "It is covered by an opaque fibrovascular pannus", "Light is totally absorbed by the dense myelin sheath at that site", "It contains only inhibitory horizontal interneurons"],
      correctAnswer: "It completely lacks photoreceptor cells (rods and cones)",
      explanation: "The optic disc is the exit site where ganglion cell axons gather to form the optic nerve. Because there are no rod or cone photoreceptor cells overlying the optic disc, light falling on this region cannot be transduced, creating a physiological blind spot ~15 degrees temporal to fixation."
    },
    {
      id: "eyeball-42", organId: "eyeball",
      question: "Where does the myelin sheath around optic nerve axons normally begin anatomically?",
      options: ["Immediately posterior to the lamina cribrosa", "At the internal limiting membrane of the retina", "At the optic chiasm", "Within the inner plexiform layer"],
      correctAnswer: "Immediately posterior to the lamina cribrosa",
      explanation: "Intraocular retinal ganglion cell axons remain unmyelinated to preserve optical clarity of the overlying retina. Oligodendrocyte-mediated myelination begins abruptly just as the axons pass through and emerge posterior to the lamina cribrosa."
    },
    {
      id: "eyeball-43", organId: "eyeball",
      question: "The meningeal sheath surrounding the intraorbital optic nerve contains a subarachnoid space that is continuous with which intracranial compartment?",
      options: ["Intracranial subarachnoid space containing cerebrospinal fluid (CSF)", "Subdural space of the cavernous sinus", "Epidural space of the middle cranial fossa", "Ventricular system via the central canal of Cloquet"],
      correctAnswer: "Intracranial subarachnoid space containing cerebrospinal fluid (CSF)",
      explanation: "The optic nerve is an extension of the central nervous system enveloped by all three meninges (dura, arachnoid, and pia). The perineural subarachnoid space is directly continuous with the intracranial subarachnoid space, explaining why elevated intracranial pressure transmits to the optic disc to produce papilledema."
    },
    {
      id: "eyeball-44", organId: "eyeball",
      question: "Which artery provides the arterial blood supply to the inner two-thirds of the neural retina?",
      options: ["Central retinal artery", "Short posterior ciliary arteries", "Long posterior ciliary arteries", "Anterior ciliary arteries"],
      correctAnswer: "Central retinal artery",
      explanation: "The central retinal artery (a branch of the ophthalmic artery) pierces the optic nerve sheath ~10–12 mm posterior to the globe and enters at the optic disc to supply the inner two-thirds of the retina (from internal limiting membrane to inner nuclear layer)."
    },
    {
      id: "eyeball-45", organId: "eyeball",
      question: "How do the outer layers of the retina (photoreceptors and retinal pigment epithelium) receive their oxygen and nutrients?",
      options: ["Diffusion from the choriocapillaris of the choroid", "Direct perfusion by retinal capillary networks in the nerve fiber layer", "Active filtration of aqueous humor through the ora serrata", "Diffusion from blood vessels running in the hyaloid canal"],
      correctAnswer: "Diffusion from the choriocapillaris of the choroid",
      explanation: "The outer one-third of the retina (photoreceptors and RPE) is avascular and relies entirely on oxygen and nutrients diffusing across Bruch's membrane from the underlying choriocapillaris, which has the highest blood flow rate per unit weight of any tissue in the body."
    },
    {
      id: "eyeball-46", organId: "eyeball",
      question: "What is the arterial ring of Zinn-Haller (circle of Zinn-Haller)?",
      options: ["An intrascleral arterial anastomosis around the optic nerve head formed by branches of the short posterior ciliary arteries", "A vascular ring located in the ciliary body supplying the iris stroma", "A venous ring encircling the corneoscleral limbus", "A circular collateral network surrounding the macula lutea"],
      correctAnswer: "An intrascleral arterial anastomosis around the optic nerve head formed by branches of the short posterior ciliary arteries",
      explanation: "The circle of Zinn-Haller is an intrascleral arterial circle formed by anastomosing branches of the short posterior ciliary arteries around the optic nerve at the level of the lamina cribrosa, supplying the optic nerve head and adjacent choroid."
    },
    {
      id: "eyeball-47", organId: "eyeball",
      question: "The major arterial circle of the iris (circulus arteriosus iridis major) is located within the ciliary body near the iris root and is formed by anastomoses between which vessels?",
      options: ["Long posterior ciliary arteries and anterior ciliary arteries", "Short posterior ciliary arteries and central retinal artery", "Vortex veins and anterior ciliary veins", "Lacrimal artery and supraorbital artery"],
      correctAnswer: "Long posterior ciliary arteries and anterior ciliary arteries",
      explanation: "The major arterial circle of the iris is formed in the anterior ciliary body near the iris root by anastomoses between the two long posterior ciliary arteries (nasal and temporal) and the seven anterior ciliary arteries (derived from muscular branches of rectus muscles)."
    },
    {
      id: "eyeball-48", organId: "eyeball",
      question: "Which veins provide the primary venous drainage for the choroid, ciliary body, and iris, typically exiting the sclera in four quadrants posterior to the equator?",
      options: ["Vortex veins (venae vorticosae)", "Central retinal vein", "Anterior facial veins", "Superior sagittal sinus"],
      correctAnswer: "Vortex veins (venae vorticosae)",
      explanation: "The vortex veins (usually 4 to 5, at least one in each quadrant) drain the extensive venous networks of the uveal tract (choroid, ciliary body, iris) and exit the sclera obliquely behind the equator to drain into the superior and inferior ophthalmic veins."
    },
    {
      id: "eyeball-49", organId: "eyeball",
      question: "What is the typical average anteroposterior axial length of a normal adult human emmetropic eyeball?",
      options: ["Approximately 24 mm", "Approximately 18 mm", "Approximately 30 mm", "Approximately 12 mm"],
      correctAnswer: "Approximately 24 mm",
      explanation: "The normal average axial length (anteroposterior diameter) of an adult human emmetropic eye is approximately 24 mm (typically ranging between 23.5 and 24.5 mm). Values >25 mm often correspond to axial myopia, while <22 mm correspond to hyperopia."
    },
    {
      id: "eyeball-50", organId: "eyeball",
      question: "Which extraocular muscle originates from the anteromedial orbital floor (orbital surface of the maxilla) rather than the common tendinous ring (annulus of Zinn)?",
      options: ["Inferior oblique muscle", "Superior oblique muscle", "Inferior rectus muscle", "Medial rectus muscle"],
      correctAnswer: "Inferior oblique muscle",
      explanation: "The inferior oblique is the only extraocular muscle that originates from the anterior part of the orbit—specifically from a shallow depression on the anteromedial floor of the maxilla, lateral to the nasolacrimal canal."
    },
    {
      id: "eyeball-51", organId: "eyeball",
      question: "Which cranial nerve innervates the superior oblique muscle, and what is its primary physiological action in the primary position of gaze?",
      options: ["Trochlear nerve (CN IV); primary action is intorsion (incyclotorsion)", "Oculomotor nerve (CN III); primary action is elevation", "Abducens nerve (CN VI); primary action is abduction", "Trigeminal nerve (CN V1); primary action is depression"],
      correctAnswer: "Trochlear nerve (CN IV); primary action is intorsion (incyclotorsion)",
      explanation: "The superior oblique muscle is innervated exclusively by the trochlear nerve (CN IV). From the primary position of gaze, its primary action is intorsion (internal rotation of the top of the vertical meridian), with secondary actions of depression and abduction."
    },
    {
      id: "eyeball-52", organId: "eyeball",
      question: "What is the clinical and anatomical significance of the 'Spiral of Tillaux'?",
      options: ["It represents a spiral line connecting the scleral insertions of the four rectus muscles at progressively increasing distances from the limbus", "It describes the curved path of the optic radiation in the temporal lobe", "It is the spiral pattern of corneal endothelial cell migration during healing", "It marks the circular vascular border of the foveal avascular zone"],
      correctAnswer: "It represents a spiral line connecting the scleral insertions of the four rectus muscles at progressively increasing distances from the limbus",
      explanation: "The Spiral of Tillaux is an imaginary spiral curve connecting the insertions of the four rectus muscles into the sclera at increasing distances from the corneoscleral limbus: Medial Rectus (~5.5 mm), Inferior Rectus (~6.5 mm), Lateral Rectus (~6.9 mm), and Superior Rectus (~7.7 mm)."
    },
    {
      id: "eyeball-53", organId: "eyeball",
      question: "According to the Spiral of Tillaux, which extraocular rectus muscle has its scleral insertion closest to the corneoscleral limbus?",
      options: ["Medial rectus muscle (~5.5 mm from limbus)", "Inferior rectus muscle (~6.5 mm from limbus)", "Lateral rectus muscle (~6.9 mm from limbus)", "Superior rectus muscle (~7.7 mm from limbus)"],
      correctAnswer: "Medial rectus muscle (~5.5 mm from limbus)",
      explanation: "The medial rectus inserts closest to the limbus (~5.5 mm), followed by inferior rectus (~6.5 mm), lateral rectus (~6.9 mm), and superior rectus (~7.7 mm)."
    },
    {
      id: "eyeball-54", organId: "eyeball",
      question: "What is Tenon's capsule (fascia bulbi)?",
      options: ["A fibroelastic membrane that envelops the globe from the optic nerve to the ciliary limbus, separating it from orbital fat", "The periosteal lining of the bony orbit", "The anterior sheath covering the tarsal plate of the eyelid", "The capsule enclosing the lacrimal gland"],
      correctAnswer: "A fibroelastic membrane that envelops the globe from the optic nerve to the ciliary limbus, separating it from orbital fat",
      explanation: "Tenon's capsule (fascia bulbi) is a dense fibroelastic fascial membrane that encases the eyeball from the optic nerve to the corneoscleral junction, separating the globe from the surrounding retrobulbar orbital fat and forming a socket in which the globe moves."
    },
    {
      id: "eyeball-55", organId: "eyeball",
      question: "What structures form the physiological inner blood-retinal barrier (iBRB)?",
      options: ["Non-fenestrated retinal capillary endothelial cells with intercellular tight junctions (zonula occludens)", "Fenestrated choriocapillaris endothelial cells", "Desmosomes between Müller cells and ganglion cell bodies", "The basal lamina of the internal limiting membrane"],
      correctAnswer: "Non-fenestrated retinal capillary endothelial cells with intercellular tight junctions (zonula occludens)",
      explanation: "The inner blood-retinal barrier (iBRB) is formed by tight junctions (zonula occludens) connecting adjacent non-fenestrated endothelial cells of the retinal blood vessels, supported by pericytes and astrocyte foot processes."
    },
    {
      id: "eyeball-56", organId: "eyeball",
      question: "What structures establish and maintain the outer blood-retinal barrier (oBRB)?",
      options: ["Intercellular tight junctions (zonulae occludentes) between neighboring retinal pigment epithelial (RPE) cells", "Collagen fibrils of the lamina cribrosa", "Astrocyte foot processes covering the choroidal capillaries", "Zonular fibers connecting the ciliary body to the lens"],
      correctAnswer: "Intercellular tight junctions (zonulae occludentes) between neighboring retinal pigment epithelial (RPE) cells",
      explanation: "The outer blood-retinal barrier (oBRB) is established by continuous bands of tight junctions (zonulae occludentes) encircling the apicolateral borders of retinal pigment epithelial (RPE) cells, preventing unregulated passage of solutes from the fenestrated choriocapillaris into the subretinal space."
    },
    {
      id: "eyeball-57", organId: "eyeball",
      question: "Failure of which embryological structure to close completely during the 6th to 7th week of development results in an ocular coloboma (e.g., iris or chorioretinal coloboma)?",
      options: ["Optic (choroidal) fissure", "Lens pit", "Neural tube anterior neuropore", "Nasolacrimal groove"],
      correctAnswer: "Optic (choroidal) fissure",
      explanation: "Colobomas (typically located in the inferonasal quadrant of the iris, ciliary body, choroid, or optic nerve) result from defective or incomplete closure of the embryonic optic (choroidal) fissure along the ventral aspect of the optic stalk and optic cup."
    },
    {
      id: "eyeball-58", organId: "eyeball",
      question: "Which ocular structure is derived entirely from embryonic surface ectoderm?",
      options: ["Crystalline lens", "Neural retina", "Choroid", "Sclera"],
      correctAnswer: "Crystalline lens",
      explanation: "The crystalline lens develops from the lens placode, a thickening of the surface ectoderm overlying the optic vesicle. In contrast, the retina arises from neuroectoderm, and the sclera/choroid arise from neural crest mesenchyme and mesoderm."
    },
    {
      id: "eyeball-59", organId: "eyeball",
      question: "Which specialized retinal cells contain the photopigment melanopsin and project axons directly to the suprachiasmatic nucleus (SCN) for photoentrainment of circadian rhythms?",
      options: ["Intrinsically photosensitive retinal ganglion cells (ipRGCs)", "M-cone photoreceptors", "Amacrine cells", "Horizontal cells"],
      correctAnswer: "Intrinsically photosensitive retinal ganglion cells (ipRGCs)",
      explanation: "Intrinsically photosensitive retinal ganglion cells (ipRGCs) express the photopigment melanopsin (peak sensitivity ~480 nm, blue light). They depolarize directly in response to light and project via the retinohypothalamic tract to the suprachiasmatic nucleus (circadian clock) and the pretectal nuclei (pupillary light reflex)."
    },
    {
      id: "eyeball-60", organId: "eyeball",
      question: "What is the uveoscleral outflow pathway for aqueous humor drainage?",
      options: ["Drainage from the anterior chamber angle through the ciliary muscle interstitial spaces into the suprachoroidal and supraciliary spaces", "Passage through the iris crypts directly into the central retinal vein", "Diffusion across the posterior lens capsule into the optic nerve subarachnoid space", "Direct filtration through the central corneal endothelium into tears"],
      correctAnswer: "Drainage from the anterior chamber angle through the ciliary muscle interstitial spaces into the suprachoroidal and supraciliary spaces",
      explanation: "The uveoscleral (non-conventional) pathway accounts for ~10–30% of normal aqueous outflow. Aqueous passes through the ciliary body face and between ciliary muscle bundles into the suprachoroidal space, eventually leaving the eye through the scleral substance or along emissary canals of vortex vessels/nerves."
    },
  ],
  "intestine": [
    {
      id: "intestine-1", organId: "intestine",
      question: "Which anatomical landmark marks the junction between the duodenum and jejunum and serves as the clinical boundary between upper and lower gastrointestinal bleeding?",
      options: ["Ligament of Treitz (suspensory muscle of the duodenum)", "Ileocecal valve", "Pyloric sphincter", "Major duodenal papilla"],
      correctAnswer: "Ligament of Treitz (suspensory muscle of the duodenum)",
      explanation: "The ligament of Treitz, or suspensory muscle of the duodenum, suspends the duodenojejunal flexure from the right crus of the diaphragm and defines the dividing line between upper and lower gastrointestinal bleeding."
    },
    {
      id: "intestine-2", organId: "intestine",
      question: "The major duodenal papilla (Ampulla of Vater) is anatomically located in which segment of the duodenum?",
      options: ["Second (descending) part", "First (superior) part", "Third (horizontal) part", "Fourth (ascending) part"],
      correctAnswer: "Second (descending) part",
      explanation: "The major duodenal papilla (Ampulla of Vater), where the common bile duct and the main pancreatic duct unite and empty, is situated on the posteromedial wall of the second (descending) part of the duodenum."
    },
    {
      id: "intestine-3", organId: "intestine",
      question: "Which characteristic histological structure is exclusively found in the submucosa of the duodenum to produce an alkaline, bicarbonate-rich mucus?",
      options: ["Brunner's glands", "Peyer's patches", "Paneth cells", "Crypts of Lieberkühn"],
      correctAnswer: "Brunner's glands",
      explanation: "Brunner's (duodenal) glands are compound branched tubular glands confined to the submucosa of the duodenum; their alkaline secretion protects the mucosal lining from gastric acid."
    },
    {
      id: "intestine-4", organId: "intestine",
      question: "Superior mesenteric artery (SMA) syndrome results from extrinsic vascular compression of which specific part of the gastrointestinal tract?",
      options: ["Third (horizontal) part of the duodenum", "First (superior) part of the duodenum", "Duodenojejunal junction", "Terminal ileum"],
      correctAnswer: "Third (horizontal) part of the duodenum",
      explanation: "SMA syndrome occurs when the third (horizontal) part of the duodenum is compressed between the abdominal aorta posteriorly and the superior mesenteric artery anteriorly due to loss of the intervening mesenteric fat pad."
    },
    {
      id: "intestine-5", organId: "intestine",
      question: "Aggregated lymphoid nodules known as Peyer's patches are most numerous and prominent in which region of the small intestine?",
      options: ["Ileum", "Duodenum", "Jejunum", "Appendix"],
      correctAnswer: "Ileum",
      explanation: "Peyer's patches are prominent clusters of lymphoid follicles located primarily in the lamina propria and submucosa of the ileum, especially the terminal ileum, where they play a key role in gut immune surveillance via M cells."
    },
    {
      id: "intestine-6", organId: "intestine",
      question: "When comparing the vascular anatomy of the jejunum and ileum, which description accurately characterizes the jejunum?",
      options: ["Few, simple arterial arcades with long vasa recta", "Numerous, complex arterial arcades with short vasa recta", "Complete absence of arterial arcades", "A single straight arcade with no branching vasa recta"],
      correctAnswer: "Few, simple arterial arcades with long vasa recta",
      explanation: "The jejunal mesentery features only 1-2 simple arterial arcades from which long, straight arteries (vasa recta) arise, whereas the ileum has multiple tiers of complex arcades and very short vasa recta."
    },
    {
      id: "intestine-7", organId: "intestine",
      question: "Circular mucosal folds called plicae circulares (valves of Kerckring) are most dense and prominent in which segment of the small intestine?",
      options: ["Proximal jejunum", "Distal ileum", "First part of the duodenum", "Cecum"],
      correctAnswer: "Proximal jejunum",
      explanation: "Plicae circulares (valves of Kerckring) are permanent crescentic folds of mucosa and submucosa that are most pronounced and densely packed in the jejunum, progressively diminishing and largely disappearing in the distal ileum."
    },
    {
      id: "intestine-8", organId: "intestine",
      question: "Which specialized cells located at the base of the intestinal crypts of Lieberkühn secrete antimicrobial peptides such as lysozyme, defensins, and phospholipase A2?",
      options: ["Paneth cells", "Goblet cells", "Enteroendocrine I-cells", "Tuft cells"],
      correctAnswer: "Paneth cells",
      explanation: "Paneth cells reside at the base of the crypts of Lieberkühn throughout the small intestine and contain prominent eosinophilic granules packed with antimicrobial agents including lysozymes and alpha-defensins (cryptdins)."
    },
    {
      id: "intestine-9", organId: "intestine",
      question: "Active absorption of vitamin B12 bound to intrinsic factor occurs predominantly in which anatomical region?",
      options: ["Terminal ileum", "Duodenal bulb", "Proximal jejunum", "Ascending colon"],
      correctAnswer: "Terminal ileum",
      explanation: "The intrinsic factor-cobalamin (vitamin B12) complex is actively absorbed in the terminal ileum via receptor-mediated endocytosis involving the cubam receptor complex."
    },
    {
      id: "intestine-10", organId: "intestine",
      question: "The primary anatomical site for the active reabsorption of conjugated bile acids via the apical sodium-dependent bile acid transporter (ASBT) in the enterohepatic circulation is the:",
      options: ["Terminal ileum", "Second part of the duodenum", "Proximal jejunum", "Sigmoid colon"],
      correctAnswer: "Terminal ileum",
      explanation: "Over 95% of bile acids are actively reabsorbed in the terminal ileum through the ASBT transporter and returned to the liver via the portal venous circulation."
    },
    {
      id: "intestine-11", organId: "intestine",
      question: "What is the primary site of dietary iron absorption in the human digestive system?",
      options: ["Duodenum and upper jejunum", "Terminal ileum", "Stomach antrum", "Cecum"],
      correctAnswer: "Duodenum and upper jejunum",
      explanation: "Dietary iron (in both heme and non-heme ferrous Fe2+ forms) is predominantly absorbed in the enterocytes of the duodenum and upper jejunum through divalent metal transporter 1 (DMT1) and ferroportin."
    },
    {
      id: "intestine-12", organId: "intestine",
      question: "Meckel's diverticulum is a congenital anomaly representing the persistence of which embryological structure?",
      options: ["Vitelline duct (omphalomesenteric duct)", "Urachus", "Allantois", "Thyroglossal duct"],
      correctAnswer: "Vitelline duct (omphalomesenteric duct)",
      explanation: "Meckel's diverticulum arises from incomplete obliteration of the vitelline (omphalomesenteric) duct, creating a true diverticulum on the antimesenteric border of the ileum roughly 2 feet proximal to the ileocecal valve."
    },
    {
      id: "intestine-13", organId: "intestine",
      question: "Which enteric nervous system plexus is situated between the inner circular and outer longitudinal smooth muscle layers of the intestinal wall, primarily controlling gastrointestinal motility?",
      options: ["Myenteric (Auerbach's) plexus", "Submucosal (Meissner's) plexus", "Subserosal plexus", "Mucosal plexus"],
      correctAnswer: "Myenteric (Auerbach's) plexus",
      explanation: "The myenteric (Auerbach's) plexus lies in the muscularis externa between the circular and longitudinal muscle layers and regulates rhythmic peristalsis and intestinal motility."
    },
    {
      id: "intestine-14", organId: "intestine",
      question: "The submucosal (Meissner's) plexus is located in which layer of the intestinal wall, and what is its primary function?",
      options: ["Submucosa; regulates local secretions, absorption, and mucosal blood flow", "Muscularis externa; coordinates migrating motor complexes", "Lamina propria; triggers immune cell migration", "Serosa; senses visceral distention and peritoneal friction"],
      correctAnswer: "Submucosa; regulates local secretions, absorption, and mucosal blood flow",
      explanation: "Meissner's plexus resides within the submucosa and is primarily responsible for regulating epithelial ion/water secretion, glandular activity, and local submucosal blood flow."
    },
    {
      id: "intestine-15", organId: "intestine",
      question: "Enteropeptidase (enterokinase), an essential brush border enzyme responsible for cleaving trypsinogen to active trypsin, is produced by the enterocytes of which organ?",
      options: ["Duodenum", "Pancreas", "Stomach", "Ileum"],
      correctAnswer: "Duodenum",
      explanation: "Enteropeptidase (enterokinase) is tethered to the brush border of duodenal mucosal cells; it cleaves pancreatic trypsinogen into active trypsin, initiating the cascade of digestive enzyme activation."
    },
    {
      id: "intestine-16", organId: "intestine",
      question: "What is the dual arterial blood supply of the duodenum?",
      options: ["Superior pancreaticoduodenal artery (from celiac trunk) and inferior pancreaticoduodenal artery (from SMA)", "Left gastric artery and splenic artery", "Right gastric artery and right gastroepiploic artery", "Ileocolic artery and middle colic artery"],
      correctAnswer: "Superior pancreaticoduodenal artery (from celiac trunk) and inferior pancreaticoduodenal artery (from SMA)",
      explanation: "The duodenum sits at the junction of the foregut and midgut, receiving dual arterial supply from the superior pancreaticoduodenal artery (branch of gastroduodenal artery via celiac trunk) and inferior pancreaticoduodenal artery (branch of the superior mesenteric artery)."
    },
    {
      id: "intestine-17", organId: "intestine",
      question: "What specialized lymphatic capillaries located in the core of small intestinal villi are dedicated to the uptake of dietary lipids packaged into chylomicrons?",
      options: ["Lacteals", "Sinusoids", "Crypt venules", "Peyer's sinuses"],
      correctAnswer: "Lacteals",
      explanation: "Lacteals are blind-ended central lymphatic capillaries within intestinal villi that absorb emulsified dietary fats packaged as chylomicrons, transporting milky chyle to the mesenteric lymphatics and cisterna chyli."
    },
    {
      id: "intestine-18", organId: "intestine",
      question: "During normal embryonic development, how many total degrees of counterclockwise rotation does the midgut loop undergo around the superior mesenteric artery axis?",
      options: ["270 degrees", "90 degrees", "180 degrees", "360 degrees"],
      correctAnswer: "270 degrees",
      explanation: "The midgut loop herniates into the umbilical cord, rotates 90 degrees counterclockwise, and upon physiological reduction back into the abdominal cavity rotates another 180 degrees, totaling 270 degrees of counterclockwise rotation around the SMA."
    },
    {
      id: "intestine-19", organId: "intestine",
      question: "Peritoneal fibrous bands known as Ladd's bands are associated with intestinal malrotation and cause extrinsic obstruction of which structure?",
      options: ["Duodenum", "Terminal ileum", "Sigmoid colon", "Esophagogastric junction"],
      correctAnswer: "Duodenum",
      explanation: "In intestinal malrotation, Ladd's bands (anomalous peritoneal bands extending from the abnormally positioned cecum across to the posterior abdominal wall) compress and obstruct the second and third parts of the duodenum."
    },
    {
      id: "intestine-20", organId: "intestine",
      question: "Which congenital condition is characterized by failure of duodenal recanalization during the 8th to 10th gestational week, producing the classic 'double bubble' sign on abdominal radiographs?",
      options: ["Duodenal atresia", "Pyloric stenosis", "Intussusception", "Meconium ileus"],
      correctAnswer: "Duodenal atresia",
      explanation: "Duodenal atresia is caused by failure of lumen recanalization in early embryogenesis, resulting in complete duodenal obstruction, prominent polyhydramnios, and a radiographic 'double bubble' appearance (gastric and duodenal bulb distention)."
    },
    {
      id: "intestine-21", organId: "intestine",
      question: "Which intestinal hormone is secreted by S-cells in the duodenal mucosa in response to acidic chyme (pH < 4.5), stimulating pancreatic ductal secretion of bicarbonate?",
      options: ["Secretin", "Cholecystokinin (CCK)", "Motilin", "Gastric inhibitory polypeptide (GIP)"],
      correctAnswer: "Secretin",
      explanation: "Secretin is released by S-cells of the duodenum into the bloodstream when luminal pH drops below 4.5, stimulating biliary and pancreatic duct cells to secrete water and bicarbonate."
    },
    {
      id: "intestine-22", organId: "intestine",
      question: "Cholecystokinin (CCK) is synthesized and secreted primarily by which enteroendocrine cells, and what is its main physiological trigger?",
      options: ["I-cells of the duodenum and jejunum; stimulated by luminal fatty acids and amino acids", "S-cells of the ileum; stimulated by hypertonic saline", "K-cells of the colon; stimulated by short-chain fatty acids", "G-cells of the jejunum; stimulated by gastric distention"],
      correctAnswer: "I-cells of the duodenum and jejunum; stimulated by luminal fatty acids and amino acids",
      explanation: "I-cells in the mucosal epithelium of the duodenum and upper jejunum secrete CCK in response to monoglycerides, fatty acids, and peptides, which stimulates gallbladder contraction and pancreatic acinar enzyme secretion."
    },
    {
      id: "intestine-23", organId: "intestine",
      question: "The suspensory muscle of the duodenum (ligament of Treitz) originates anatomically from which structure?",
      options: ["Right crus of the diaphragm", "Left crus of the diaphragm", "Median arcuate ligament", "Transversus abdominis muscle"],
      correctAnswer: "Right crus of the diaphragm",
      explanation: "The ligament of Treitz is a fibromuscular slip of tissue that originates from the right crus of the diaphragm as it encircles the esophagus and inserts onto the third and fourth parts of the duodenum and duodenojejunal flexure."
    },
    {
      id: "intestine-24", organId: "intestine",
      question: "Which of the following features accurately distinguishes the ileum from the jejunum upon gross anatomical examination?",
      options: ["More mesenteric fat extending onto the serosal surface ('creeping fat')", "Thicker wall with wider luminal diameter", "Higher concentration and taller height of plicae circulares", "Longer vasa recta with fewer arcade layers"],
      correctAnswer: "More mesenteric fat extending onto the serosal surface ('creeping fat')",
      explanation: "The ileum has an abundance of mesenteric fat that encroaches onto the intestinal wall ('creeping fat'), leaving no translucent windows in the mesentery, whereas the jejunal mesentery has less fat and clear translucent windows."
    },
    {
      id: "intestine-25", organId: "intestine",
      question: "What is the most common anatomical location where intussusception (telescoping of one bowel segment into another) occurs in infants and young children?",
      options: ["Ileocecal junction", "Duodenojejunal flexure", "Splenic flexure", "Rectosigmoid junction"],
      correctAnswer: "Ileocecal junction",
      explanation: "The vast majority (approx. 90%) of pediatric intussusceptions are ileocolic, where the terminal ileum invaginates through the ileocecal valve into the cecum and ascending colon."
    },
    {
      id: "intestine-26", organId: "intestine",
      question: "Venous blood from the entire small intestine is collected into which major vessel that subsequently joins the splenic vein to form the hepatic portal vein?",
      options: ["Superior mesenteric vein (SMV)", "Inferior mesenteric vein (IMV)", "Left gastric vein", "Internal iliac vein"],
      correctAnswer: "Superior mesenteric vein (SMV)",
      explanation: "The superior mesenteric vein drains venous blood from the small intestine, cecum, ascending colon, and transverse colon, joining posterior to the neck of the pancreas with the splenic vein to form the hepatic portal vein."
    },
    {
      id: "intestine-27", organId: "intestine",
      question: "Parasympathetic preganglionic innervation to the small intestine is mediated exclusively by which cranial nerve?",
      options: ["Vagus nerve (CN X)", "Glossopharyngeal nerve (CN IX)", "Pelvic splanchnic nerves (S2-S4)", "Greater splanchnic nerve"],
      correctAnswer: "Vagus nerve (CN X)",
      explanation: "The vagus nerve (CN X) supplies all parasympathetic preganglionic fibers to the digestive tract from the esophagus down to the distal third of the transverse colon, including the entire small intestine."
    },
    {
      id: "intestine-28", organId: "intestine",
      question: "The minor duodenal papilla serves as the entrance into the duodenum for which anatomical duct?",
      options: ["Accessory pancreatic duct (duct of Santorini)", "Main pancreatic duct (duct of Wirsung)", "Common bile duct", "Cystic duct"],
      correctAnswer: "Accessory pancreatic duct (duct of Santorini)",
      explanation: "The minor duodenal papilla, located approximately 2 cm superior to the major papilla, is the opening site of the accessory pancreatic duct (duct of Santorini)."
    },
    {
      id: "intestine-29", organId: "intestine",
      question: "Sympathetic preganglionic fibers supplying the small intestine travel in the greater and lesser splanchnic nerves and synapse primarily in which autonomic ganglia?",
      options: ["Celiac and superior mesenteric ganglia", "Inferior mesenteric ganglion", "Hypogastric plexus", "Paravertebral sympathetic chain ganglia only"],
      correctAnswer: "Celiac and superior mesenteric ganglia",
      explanation: "Splanchnic nerves carrying preganglionic sympathetic fibers (T5-T11) pass through the sympathetic chain without synapsing and synapse in the celiac and superior mesenteric prevertebral ganglia."
    },
    {
      id: "intestine-30", organId: "intestine",
      question: "In the microanatomy of the small intestine, what is the turnover rate of the enterocyte epithelial lining?",
      options: ["Every 3 to 5 days", "Every 24 hours", "Every 30 to 45 days", "Every 6 months"],
      correctAnswer: "Every 3 to 5 days",
      explanation: "Intestinal stem cells located in the crypts of Lieberkühn continuously proliferate and differentiate into mature enterocytes, which migrate up the villus and are shed into the lumen, renewing the epithelium every 3 to 5 days."
    },
    {
      id: "intestine-31", organId: "intestine",
      question: "Which three macroscopic anatomical features distinguish the colon from the small intestine?",
      options: ["Taeniae coli, haustra, and epiploic appendages", "Plicae circulares, villi, and microvilli", "Brunner's glands, Peyer's patches, and lacteals", "Mesenteric windows, long vasa recta, and rugae"],
      correctAnswer: "Taeniae coli, haustra, and epiploic appendages",
      explanation: "The large intestine is distinguished by: (1) taeniae coli (three longitudinal smooth muscle bands), (2) haustra (sacculations caused by shortening of the taeniae), and (3) epiploic appendages (fat-filled peritoneal pouches)."
    },
    {
      id: "intestine-32", organId: "intestine",
      question: "The three longitudinal muscular bands of the colon (taeniae coli) converge at which specific anatomical structure?",
      options: ["Base of the vermiform appendix", "Ileocecal valve", "Hepatic flexure", "Rectosigmoid junction"],
      correctAnswer: "Base of the vermiform appendix",
      explanation: "All three taeniae coli (taenia libera, taenia mesocolica, and taenia omentalis) converge at the base of the vermiform appendix on the cecum, serving as a reliable surgical guide to locate the appendix."
    },
    {
      id: "intestine-33", organId: "intestine",
      question: "What is the most common anatomical position of the vermiform appendix relative to the cecum in the general population?",
      options: ["Retrocecal (approx. 65%)", "Pelvic (approx. 30%)", "Subcecal", "Pre-ileal"],
      correctAnswer: "Retrocecal (approx. 65%)",
      explanation: "The retrocecal position is the most common anatomic variation, occurring in roughly 65% of individuals, followed by the pelvic position (around 30%)."
    },
    {
      id: "intestine-34", organId: "intestine",
      question: "McBurney's point is clinically utilized to evaluate appendicitis. Where is McBurney's point located on the anterior abdominal wall?",
      options: ["One-third of the distance from the right anterior superior iliac spine to the umbilicus", "One-third of the distance from the umbilicus to the pubic tubercle", "Midway between the xiphoid process and the umbilicus", "Two-thirds of the distance from the right anterior superior iliac spine to the right costal margin"],
      correctAnswer: "One-third of the distance from the right anterior superior iliac spine to the umbilicus",
      explanation: "McBurney's point lies one-third of the distance along a line drawn from the right anterior superior iliac spine (ASIS) to the umbilicus; tenderness here corresponds to the inflamed base of the appendix."
    },
    {
      id: "intestine-35", organId: "intestine",
      question: "The appendicular artery, which supplies blood to the vermiform appendix, is a direct branch of which artery?",
      options: ["Ileocolic artery (branch of SMA)", "Right colic artery", "Middle colic artery", "Inferior mesenteric artery"],
      correctAnswer: "Ileocolic artery (branch of SMA)",
      explanation: "The appendicular artery is a terminal branch of the inferior division of the ileocolic artery (from the superior mesenteric artery); it travels within the mesoappendix to reach the appendix."
    },
    {
      id: "intestine-36", organId: "intestine",
      question: "Which segments of the large intestine are located retroperitoneally (secondarily retroperitoneal)?",
      options: ["Ascending colon and descending colon", "Transverse colon and sigmoid colon", "Cecum and vermiform appendix", "Transverse colon and cecum"],
      correctAnswer: "Ascending colon and descending colon",
      explanation: "The ascending colon and descending colon are fixed to the posterior abdominal wall and are secondarily retroperitoneal, whereas the cecum, transverse colon, and sigmoid colon possess mesenteries and are intraperitoneal."
    },
    {
      id: "intestine-37", organId: "intestine",
      question: "The left colic flexure (splenic flexure) is attached to the diaphragm and supported by which ligament?",
      options: ["Phrenicocolic ligament (sustentaculum lienis)", "Gastrocolic ligament", "Hepatoduodenal ligament", "Falciform ligament"],
      correctAnswer: "Phrenicocolic ligament (sustentaculum lienis)",
      explanation: "The phrenicocolic ligament connects the left colic flexure to the diaphragm at the level of the 10th and 11th ribs, supporting the splenic flexure and forming a shelf for the spleen (sustentaculum lienis)."
    },
    {
      id: "intestine-38", organId: "intestine",
      question: "Which landmark region in the colon is known as 'Griffiths' point' and is particularly vulnerable to ischemic colitis?",
      options: ["Splenic flexure (junction of SMA and IMA territories)", "Rectosigmoid junction", "Ileocecal valve", "Hepatic flexure"],
      correctAnswer: "Splenic flexure (junction of SMA and IMA territories)",
      explanation: "Griffiths' point at the splenic flexure is a watershed area representing the junction between the superior mesenteric artery (middle colic) and inferior mesenteric artery (left colic) perfusion zones, making it highly susceptible to low-flow ischemia."
    },
    {
      id: "intestine-39", organId: "intestine",
      question: "The watershed area known as 'Sudeck's point' is located at which anatomical transition?",
      options: ["Rectosigmoid junction (between lowest sigmoid branch and superior rectal artery)", "Duodenojejunal junction", "Hepatosplenic junction", "Cecal-appendiceal junction"],
      correctAnswer: "Rectosigmoid junction (between lowest sigmoid branch and superior rectal artery)",
      explanation: "Sudeck's point (critical point of Sudeck) is a watershed area at the rectosigmoid junction, situated between the territory of the lowest sigmoid artery and the superior rectal artery."
    },
    {
      id: "intestine-40", organId: "intestine",
      question: "The continuous arterial channel that runs along the inner mesenteric border of the colon, providing collateral circulation between the SMA and IMA, is the:",
      options: ["Marginal artery of Drummond", "Arc of Riolan", "Internal pudendal artery", "Celiac arterial arcade"],
      correctAnswer: "Marginal artery of Drummond",
      explanation: "The marginal artery of Drummond is a continuous arterial arcade formed by anastomoses between branches of the ileocolic, right colic, middle colic, left colic, and sigmoid arteries along the inner margin of the colon."
    },
    {
      id: "intestine-41", organId: "intestine",
      question: "The Arc of Riolan (meandering mesenteric artery) provides a direct collateral channel between which two vessels?",
      options: ["Middle colic artery (from SMA) and left colic artery (from IMA)", "Ileocolic artery and appendicular artery", "Celiac trunk and superior mesenteric artery", "Inferior mesenteric artery and internal iliac artery"],
      correctAnswer: "Middle colic artery (from SMA) and left colic artery (from IMA)",
      explanation: "The Arc of Riolan (meandering mesenteric artery) is an inconstant but important central collateral connection between the proximal middle colic branch of the SMA and the left colic branch of the IMA."
    },
    {
      id: "intestine-42", organId: "intestine",
      question: "At which anatomical point along the gastrointestinal tract does parasympathetic innervation switch from the Vagus nerve (CN X) to the pelvic splanchnic nerves (S2-S4)?",
      options: ["Distal one-third of the transverse colon (Cannon-Böhm point)", "Ileocecal valve", "Duodenojejunal flexure", "Rectosigmoid junction"],
      correctAnswer: "Distal one-third of the transverse colon (Cannon-Böhm point)",
      explanation: "The Cannon-Böhm point, located at the junction between the proximal two-thirds and distal one-third of the transverse colon, marks the embryological midgut-hindgut junction where parasympathetic supply transitions from CN X to pelvic splanchnic nerves (S2-S4)."
    },
    {
      id: "intestine-43", organId: "intestine",
      question: "Hirschsprung disease is characterized pathologically by the congenital absence of ganglion cells in the myenteric and submucosal plexuses due to failure of which embryonic cells to migrate?",
      options: ["Neural crest cells", "Mesodermal somites", "Endodermal stem cells", "Lateral plate mesoderm"],
      correctAnswer: "Neural crest cells",
      explanation: "Hirschsprung disease (congenital aganglionic megacolon) results from the failure of neural crest cells to migrate craniocaudally into the distal intestinal wall during weeks 5 to 12 of gestation."
    },
    {
      id: "intestine-44", organId: "intestine",
      question: "What is the primary histological feature that distinguishes the mucosal epithelium of the colon from that of the small intestine?",
      options: ["Abundant straight tubular crypts rich in goblet cells without villi or plicae circulares", "Presence of tall villi lined by ciliated columnar cells", "Prominent Paneth cells throughout the surface epithelium", "Stratified squamous non-keratinized epithelium with deep glands"],
      correctAnswer: "Abundant straight tubular crypts rich in goblet cells without villi or plicae circulares",
      explanation: "The large intestinal mucosa lacks villi and plicae circulares, possessing instead a flat surface indented by numerous straight, parallel crypts of Lieberkühn packed with mucus-secreting goblet cells."
    },
    {
      id: "intestine-45", organId: "intestine",
      question: "What is the primary mechanism of water absorption in the colon?",
      options: ["Active sodium absorption via apical ENaC and Na+/H+ exchangers, creating an osmotic gradient for water", "Primary active water transport by ATP-driven water pumps", "Passive diffusion across tight junctions without ion movement", "Receptor-mediated endocytosis of fluid vesicles"],
      correctAnswer: "Active sodium absorption via apical ENaC and Na+/H+ exchangers, creating an osmotic gradient for water",
      explanation: "In the colon, sodium is actively absorbed via apical epithelial sodium channels (ENaC, stimulated by aldosterone) and Na+/H+ exchangers, followed by passive paracellular and transcellular movement of water along the osmotic gradient."
    },
    {
      id: "intestine-46", organId: "intestine",
      question: "The rectum is distinguished anatomically from the colon by which of the following features?",
      options: ["Absence of taeniae coli, haustra, and epiploic appendages", "Presence of prominent Peyer's patches", "Triple layer of muscularis mucosae", "Continuous mesentery and prominent haustrations"],
      correctAnswer: "Absence of taeniae coli, haustra, and epiploic appendages",
      explanation: "The rectum lacks the three characteristic colonic features: its longitudinal muscle layer forms a complete continuous outer coat (no distinct taeniae coli), and it contains no haustra or epiploic appendages."
    },
    {
      id: "intestine-47", organId: "intestine",
      question: "What are the three transverse internal folds of the rectum that support the weight of the fecal column called?",
      options: ["Valves of Houston (transverse rectal folds)", "Valves of Kerckring", "Crypts of Morgagni", "Columns of Morgagni"],
      correctAnswer: "Valves of Houston (transverse rectal folds)",
      explanation: "The transverse rectal folds (valves of Houston) are three permanent semilunar transverse shelf-like folds within the rectal ampulla that help maintain fecal continence by supporting rectal contents."
    },
    {
      id: "intestine-48", organId: "intestine",
      question: "Regarding the peritoneal coverage of the rectum, which statement is anatomically correct?",
      options: ["The upper third is covered anteriorly and laterally; middle third anteriorly only; lower third is completely extraperitoneal", "The entire rectum is fully enclosed within the peritoneal cavity (intraperitoneal)", "The rectum is entirely retroperitoneal with no peritoneal covering", "The upper third has no peritoneum; lower two-thirds are covered anteriorly"],
      correctAnswer: "The upper third is covered anteriorly and laterally; middle third anteriorly only; lower third is completely extraperitoneal",
      explanation: "The upper 1/3 of the rectum has peritoneum on its anterior and lateral surfaces; the middle 1/3 has peritoneum only on its anterior surface; and the lower 1/3 is entirely subperitoneal/extraperitoneal."
    },
    {
      id: "intestine-49", organId: "intestine",
      question: "In males, the reflection of peritoneum from the anterior surface of the middle third of the rectum onto the bladder base forms the:",
      options: ["Rectovesical pouch", "Rectouterine pouch (Pouch of Douglas)", "Vesicouterine pouch", "Hepatorenal recess (Morison's pouch)"],
      correctAnswer: "Rectovesical pouch",
      explanation: "In males, the peritoneum reflects from the rectum forward onto the posterior bladder and seminal vesicles, creating the rectovesical pouch (the lowest peritoneal space in the male pelvis)."
    },
    {
      id: "intestine-50", organId: "intestine",
      question: "In females, the deep peritoneal pouch formed between the anterior rectum and the posterior wall of the uterus is the:",
      options: ["Rectouterine pouch (Pouch of Douglas)", "Rectovesical pouch", "Vesicouterine pouch", "Retropubic space of Retzius"],
      correctAnswer: "Rectouterine pouch (Pouch of Douglas)",
      explanation: "The rectouterine pouch (pouch of Douglas) is the lowest extension of the peritoneal cavity in females, located between the anterior surface of the rectum and the posterior surface of the uterus."
    },
    {
      id: "intestine-51", organId: "intestine",
      question: "The superior rectal artery, the chief arterial supply to the proximal rectum, arises directly as the continuation of which vessel?",
      options: ["Inferior mesenteric artery (IMA)", "Internal iliac artery", "Superior mesenteric artery (SMA)", "Middle rectal artery"],
      correctAnswer: "Inferior mesenteric artery (IMA)",
      explanation: "The superior rectal artery is the direct terminal branch and continuation of the inferior mesenteric artery as it crosses the left common iliac vessels into the pelvis."
    },
    {
      id: "intestine-52", organId: "intestine",
      question: "An important portosystemic venous anastomosis in the anal canal exists between which two venous drainage systems?",
      options: ["Superior rectal vein (portal) and middle/inferior rectal veins (systemic)", "Left gastric vein and azygos vein", "Paraumbilical veins and epigastric veins", "Colic veins and retroperitoneal lumbar veins"],
      correctAnswer: "Superior rectal vein (portal) and middle/inferior rectal veins (systemic)",
      explanation: "The superior rectal vein drains into the inferior mesenteric vein (portal system), while the middle and inferior rectal veins drain into the internal iliac and internal pudendal veins (systemic venous system / IVC), forming a critical portosystemic anastomosis."
    },
    {
      id: "intestine-53", organId: "intestine",
      question: "Internal hemorrhoids originate above the pectinate (dentate) line. Why are they typically painless compared to external hemorrhoids?",
      options: ["They are covered by visceral mucosa innervated by autonomic sensory fibers insensitive to sharp pain", "They lack any nerve fibers or sensory receptors", "They are located in a tissue layer devoid of blood vessels", "They are anesthetized by alkaline rectal secretions"],
      correctAnswer: "They are covered by visceral mucosa innervated by autonomic sensory fibers insensitive to sharp pain",
      explanation: "Above the pectinate line, the mucosa is innervated by visceral autonomic nerves (sympathetic and parasympathetic) that only sense stretch/distention and are insensitive to sharp pain, cutting, or burning."
    },
    {
      id: "intestine-54", organId: "intestine",
      question: "External hemorrhoids develop below the pectinate line and are excruciatingly painful when thrombosed because they are innervated by somatic branches of which nerve?",
      options: ["Inferior rectal nerve (branch of pudendal nerve, S2-S4)", "Ilioinguinal nerve", "Genitofemoral nerve", "Obturator nerve"],
      correctAnswer: "Inferior rectal nerve (branch of pudendal nerve, S2-S4)",
      explanation: "Structures below the pectinate line, including the perianal skin and external hemorrhoids, are somatically innervated by the inferior rectal nerve (branch of the pudendal nerve, S2-S4), making them highly sensitive to pain, temperature, and touch."
    },
    {
      id: "intestine-55", organId: "intestine",
      question: "The pectinate (dentate) line represents the embryological junction between which two germ layer derivatives?",
      options: ["Hindgut endoderm and proctodeal ectoderm", "Foregut endoderm and midgut mesoderm", "Neural crest neuroectoderm and somatic mesoderm", "Amniotic ectoderm and yolk sac endoderm"],
      correctAnswer: "Hindgut endoderm and proctodeal ectoderm",
      explanation: "The pectinate line marks the embryological boundary where the endodermal lining of the hindgut meets the ectodermal lining of the invaginating proctodeum (anal pit)."
    },
    {
      id: "intestine-56", organId: "intestine",
      question: "What epithelial transition occurs across the anal canal from proximal to distal?",
      options: ["Simple columnar -> stratified squamous non-keratinized -> stratified squamous keratinized", "Pseudostratified ciliated columnar -> transitional -> simple cuboidal", "Stratified squamous keratinized -> simple columnar -> transitional", "Simple cuboidal -> simple columnar -> stratified columnar"],
      correctAnswer: "Simple columnar -> stratified squamous non-keratinized -> stratified squamous keratinized",
      explanation: "Above the pectinate line, the mucosa is simple columnar; in the anal transition zone/pecten below the line, it becomes non-keratinized stratified squamous; and near the anal verge (perianal skin), it transitions into keratinized stratified squamous epithelium."
    },
    {
      id: "intestine-57", organId: "intestine",
      question: "The internal anal sphincter is an involuntary smooth muscle ring that represents the thickened distal continuation of which muscular layer?",
      options: ["Inner circular smooth muscle layer of the rectum", "Outer longitudinal smooth muscle layer of the rectum", "Levator ani (puborectalis muscle)", "Transversus perinei profundus muscle"],
      correctAnswer: "Inner circular smooth muscle layer of the rectum",
      explanation: "The internal anal sphincter is an involuntary smooth muscle sphincter formed by the thickening and specialization of the circular smooth muscle layer of the rectum."
    },
    {
      id: "intestine-58", organId: "intestine",
      question: "The external anal sphincter is composed of striated muscle and receives voluntary somatic motor innervation primarily from which nerve?",
      options: ["Inferior rectal nerve and perineal branch of S4", "Sciatic nerve", "Pelvic splanchnic nerve", "Femoral nerve"],
      correctAnswer: "Inferior rectal nerve and perineal branch of S4",
      explanation: "The external anal sphincter is a skeletal muscle cylinder under voluntary control innervated by somatic fibers from the inferior rectal branch of the pudendal nerve (S2-S4) and the perineal branch of S4."
    },
    {
      id: "intestine-59", organId: "intestine",
      question: "Small pocket-like depressions at the distal ends of the anal columns of Morgagni that house the openings of anal glands are termed:",
      options: ["Anal crypts (crypts of Morgagni)", "Anal papillae", "Peyer's pouches", "Valves of Houston"],
      correctAnswer: "Anal crypts (crypts of Morgagni)",
      explanation: "Anal crypts (crypts of Morgagni) are small recesses located at the level of the pectinate line where branching anal glands drain; blockage and infection of these glands lead to perianal abscesses and fistulae-in-ano."
    },
    {
      id: "intestine-60", organId: "intestine",
      question: "Lymphatic drainage from the anal canal ABOVE the pectinate line drains primarily to which lymph nodes, whereas drainage BELOW the pectinate line flows to which nodes?",
      options: ["Above: Internal iliac and inferior mesenteric nodes; Below: Superficial inguinal nodes", "Above: Superficial inguinal nodes; Below: Para-aortic nodes", "Above: Deep inguinal nodes; Below: Celiac nodes", "Above: Cisterna chyli directly; Below: Internal iliac nodes"],
      correctAnswer: "Above: Internal iliac and inferior mesenteric nodes; Below: Superficial inguinal nodes",
      explanation: "Above the pectinate line, lymph drains into internal iliac and inferior mesenteric (retroperitoneal) lymph nodes; below the pectinate line, somatic lymph flows to the superficial inguinal lymph nodes."
    },
  ],
  "pancreas": [
    {
      id: "pancreas-1", organId: "pancreas",
      question: "Which part of the pancreas is the only component situated intraperitoneally within a peritoneal ligament?",
      options: ["Head", "Neck", "Body", "Tail"],
      correctAnswer: "Tail",
      explanation: "The tail of the pancreas is the only intraperitoneal part of the organ, lying within the splenorenal (lienorenal) ligament alongside the splenic vessels. The head, neck, and body are secondarily retroperitoneal."
    },
    {
      id: "pancreas-2", organId: "pancreas",
      question: "Which vascular structure passes anterior to the uncinate process but posterior to the neck of the pancreas?",
      options: ["Superior mesenteric vessels", "Inferior mesenteric vein", "Celiac trunk", "Proper hepatic artery"],
      correctAnswer: "Superior mesenteric vessels",
      explanation: "The superior mesenteric artery and vein (SMA and SMV) traverse the pancreatic notch, lying posterior to the neck of the pancreas and anterior to the uncinate process and third part of the duodenum."
    },
    {
      id: "pancreas-3", organId: "pancreas",
      question: "The main pancreatic duct (duct of Wirsung) typically unites with which structure before opening into the major duodenal papilla?",
      options: ["Cystic duct", "Common bile duct", "Accessory pancreatic duct", "Right hepatic duct"],
      correctAnswer: "Common bile duct",
      explanation: "The main pancreatic duct (duct of Wirsung) joins the common bile duct at the hepatopancreatic ampulla (ampulla of Vater), which enters the posteromedial wall of the second (descending) part of the duodenum at the major duodenal papilla."
    },
    {
      id: "pancreas-4", organId: "pancreas",
      question: "The uncinate process of the pancreas develops from which embryological structure?",
      options: ["Dorsal pancreatic bud", "Ventral pancreatic bud", "Left hepatic diverticulum", "Midgut mesentery"],
      correctAnswer: "Ventral pancreatic bud",
      explanation: "The ventral pancreatic bud gives rise to the uncinate process and the inferior portion of the pancreatic head, while the dorsal pancreatic bud gives rise to the superior head, neck, body, and tail."
    },
    {
      id: "pancreas-5", organId: "pancreas",
      question: "Which major blood vessel courses tortuously along the superior border of the pancreatic body and tail?",
      options: ["Splenic artery", "Left gastric artery", "Common hepatic artery", "Superior mesenteric artery"],
      correctAnswer: "Splenic artery",
      explanation: "The splenic artery, a branch of the celiac trunk, follows a tortuous course along the superior border of the body and tail of the pancreas toward the splenic hilum."
    },
    {
      id: "pancreas-6", organId: "pancreas",
      question: "Which venous structure is formed directly posterior to the neck of the pancreas?",
      options: ["Hepatic portal vein", "Inferior vena cava", "Splenic vein", "Inferior mesenteric vein"],
      correctAnswer: "Hepatic portal vein",
      explanation: "The hepatic portal vein is formed posterior to the neck of the pancreas by the confluence of the superior mesenteric vein (SMV) and the splenic vein."
    },
    {
      id: "pancreas-7", organId: "pancreas",
      question: "What is the embryological basis of pancreas divisum?",
      options: ["Failure of the ventral and dorsal pancreatic duct systems to fuse", "Abnormal clockwise migration of the ventral pancreatic bud", "Complete agenesis of the dorsal pancreatic bud", "Duplication of the main pancreatic duct"],
      correctAnswer: "Failure of the ventral and dorsal pancreatic duct systems to fuse",
      explanation: "Pancreas divisum is the most common congenital pancreatic anomaly, occurring when the dorsal and ventral pancreatic buds fail to fuse. As a result, the majority of pancreatic drainage occurs via the accessory duct (Santorini) into the minor duodenal papilla."
    },
    {
      id: "pancreas-8", organId: "pancreas",
      question: "In the microscopic anatomy of the pancreas, which distinctive pale cells are located at the beginning of the intercalated ducts within the center of exocrine acini?",
      options: ["Centroacinar cells", "Kupffer cells", "Paneth cells", "Enterochromaffin cells"],
      correctAnswer: "Centroacinar cells",
      explanation: "Centroacinar cells are pale-staining epithelial cells located in the center of pancreatic acini, forming the initial part of the intercalated duct system. Under secretin stimulation, they secrete water and bicarbonate."
    },
    {
      id: "pancreas-9", organId: "pancreas",
      question: "Which hormone produced by duodenal S cells stimulates the ductal and centroacinar cells of the pancreas to secrete a bicarbonate-rich fluid?",
      options: ["Secretin", "Cholecystokinin (CCK)", "Gastrin", "Somatostatin"],
      correctAnswer: "Secretin",
      explanation: "Secretin is released by S cells in the duodenum in response to acidic chyme entering from the stomach; it stimulates ductal and centroacinar cells to secrete large volumes of watery, bicarbonate-rich pancreatic fluid to neutralize gastric acid."
    },
    {
      id: "pancreas-10", organId: "pancreas",
      question: "Which cell type in the islets of Langerhans produces insulin and represents the majority of the endocrine islet population?",
      options: ["Beta cells", "Alpha cells", "Delta cells", "PP (F) cells"],
      correctAnswer: "Beta cells",
      explanation: "Beta cells constitute approximately 60-70% of the endocrine cells in the islets of Langerhans and are responsible for synthesizing and secreting insulin."
    },
    {
      id: "pancreas-11", organId: "pancreas",
      question: "At which vertebral level does the transpyloric plane pass through the neck of the pancreas?",
      options: ["L1", "T10", "T12", "L3"],
      correctAnswer: "L1",
      explanation: "The neck of the pancreas lies on the transpyloric plane at the level of the L1 vertebra, crossing the midline just anterior to the origin of the superior mesenteric artery and formation of the portal vein."
    },
    {
      id: "pancreas-12", organId: "pancreas",
      question: "Annular pancreas results from which developmental defect?",
      options: ["Failure of normal rotation or bifurcation of the ventral pancreatic bud", "Complete agenesis of the ventral pancreatic bud", "Premature fusion of the dorsal bud with the stomach", "Hypertrophy of the accessory pancreatic duct"],
      correctAnswer: "Failure of normal rotation or bifurcation of the ventral pancreatic bud",
      explanation: "Annular pancreas occurs when a bifid ventral pancreatic bud or abnormal migration encircles the second (descending) part of the duodenum, forming a ring of pancreatic tissue that can cause congenital duodenal obstruction (duodenal stenosis/atresia)."
    },
    {
      id: "pancreas-13", organId: "pancreas",
      question: "The superior pancreaticoduodenal arteries are branches of which arterial vessel?",
      options: ["Gastroduodenal artery", "Superior mesenteric artery", "Splenic artery", "Left gastric artery"],
      correctAnswer: "Gastroduodenal artery",
      explanation: "The anterior and posterior superior pancreaticoduodenal arteries arise from the gastroduodenal artery (a branch of the common hepatic artery from the celiac trunk) and anastomose with the inferior pancreaticoduodenal arteries from the SMA."
    },
    {
      id: "pancreas-14", organId: "pancreas",
      question: "The inferior pancreaticoduodenal arteries arise as branches of which vessel?",
      options: ["Superior mesenteric artery", "Celiac trunk", "Inferior mesenteric artery", "Right gastroepiploic artery"],
      correctAnswer: "Superior mesenteric artery",
      explanation: "The anterior and posterior inferior pancreaticoduodenal arteries arise from the superior mesenteric artery (SMA) and form collateral arcades with the superior pancreaticoduodenal arteries around the pancreatic head."
    },
    {
      id: "pancreas-15", organId: "pancreas",
      question: "What anatomical structure lies directly posterior to the body of the pancreas and courses horizontally across the anterior surface of the abdominal aorta?",
      options: ["Left renal vein", "Right renal artery", "Inferior mesenteric artery", "Right hepatic vein"],
      correctAnswer: "Left renal vein",
      explanation: "The left renal vein emerges from the left kidney and passes horizontally behind the body of the pancreas, between the superior mesenteric artery anteriorly and the abdominal aorta posteriorly, before draining into the IVC."
    },
    {
      id: "pancreas-16", organId: "pancreas",
      question: "Where does the accessory pancreatic duct (duct of Santorini) open into the duodenum?",
      options: ["Minor duodenal papilla", "Major duodenal papilla", "Duodenojejunal flexure", "Pyloric sphincter"],
      correctAnswer: "Minor duodenal papilla",
      explanation: "The accessory pancreatic duct (duct of Santorini), when patent, drains into the minor duodenal papilla, which is situated approximately 2 cm proximal (anterosuperior) to the major duodenal papilla in the descending duodenum."
    },
    {
      id: "pancreas-17", organId: "pancreas",
      question: "Which anatomical space lies immediately anterior to the pancreas, separating its anterior surface from the posterior wall of the stomach?",
      options: ["Omental bursa (lesser sac)", "Greater sac", "Retroinguinal space", "Hepatorenal recess (Morison's pouch)"],
      correctAnswer: "Omental bursa (lesser sac)",
      explanation: "The omental bursa (lesser sac) lies directly anterior to the body and tail of the pancreas; fluid collections from acute pancreatitis or pseudocysts frequently collect in this potential space."
    },
    {
      id: "pancreas-18", organId: "pancreas",
      question: "Parasympathetic innervation to the pancreas is supplied by which nerve?",
      options: ["Vagus nerve (CN X)", "Pelvic splanchnic nerves", "Greater splanchnic nerve", "Phrenic nerve"],
      correctAnswer: "Vagus nerve (CN X)",
      explanation: "Parasympathetic preganglionic fibers to the pancreas originate from the posterior and anterior vagal trunks (Vagus nerve, CN X), stimulating both exocrine enzyme secretion and endocrine islet secretion."
    },
    {
      id: "pancreas-19", organId: "pancreas",
      question: "Sympathetic preganglionic fibers destined for the celiac plexus to innervate the pancreas primarily originate from which spinal cord segments?",
      options: ["T5–T9/T10", "C3–C5", "T1–T4", "L1–L3"],
      correctAnswer: "T5–T9/T10",
      explanation: "Sympathetic preganglionic fibers supplying the pancreas arise from the T5–T9/T10 spinal cord segments and travel via the greater and lesser splanchnic nerves to synapse in the celiac and superior mesenteric ganglia."
    },
    {
      id: "pancreas-20", organId: "pancreas",
      question: "Pancreatic visceral pain fibers travel retrogradely with sympathetic splanchnic nerves to reach which spinal cord segments?",
      options: ["T6–T10", "C5–C8", "T1–T4", "L4–S2"],
      correctAnswer: "T6–T10",
      explanation: "Visceral afferent pain fibers from the pancreas accompany sympathetic splanchnic nerves to the dorsal root ganglia of T6–T10, leading to classic epigastric pain that radiates straight through to the back."
    },
    {
      id: "pancreas-21", organId: "pancreas",
      question: "Which enzyme produced by the duodenal brush border activates trypsinogen into active trypsin?",
      options: ["Enteropeptidase (enterokinase)", "Aminopeptidase", "Carboxypeptidase A", "Dipeptidyl peptidase-4"],
      correctAnswer: "Enteropeptidase (enterokinase)",
      explanation: "Enteropeptidase (enterokinase), an enzyme bound to the duodenal brush border membrane, cleaves a hexapeptide from trypsinogen to yield active trypsin. Active trypsin then autocatalytically activates more trypsinogen and other pancreatic zymogens."
    },
    {
      id: "pancreas-22", organId: "pancreas",
      question: "Delta cells of the pancreatic islets are responsible for the secretion of which regulatory peptide?",
      options: ["Somatostatin", "Glucagon", "Ghrelin", "Vasoactive intestinal peptide"],
      correctAnswer: "Somatostatin",
      explanation: "Delta cells (constituting ~5-10% of islet cells) secrete somatostatin, which acts in a paracrine and endocrine manner to inhibit the secretion of both insulin and glucagon, as well as exocrine pancreatic and gastrointestinal secretions."
    },
    {
      id: "pancreas-23", organId: "pancreas",
      question: "Which hormone secreted by enteroendocrine I cells in the duodenum and jejunum is the primary stimulus for pancreatic acinar cell enzyme secretion?",
      options: ["Cholecystokinin (CCK)", "Motilin", "Secretin", "Gastric inhibitory polypeptide (GIP)"],
      correctAnswer: "Cholecystokinin (CCK)",
      explanation: "Cholecystokinin (CCK) is secreted by I cells in response to dietary fats and amino acids. It binds to CCK1 (CCK-A) receptors on acinar cells and vagal afferents to stimulate exocrine enzyme release."
    },
    {
      id: "pancreas-24", organId: "pancreas",
      question: "The head of the pancreas is intimately cradled within the 'C-loop' of which part of the gastrointestinal tract?",
      options: ["Duodenum", "Jejunum", "Ileum", "Transverse colon"],
      correctAnswer: "Duodenum",
      explanation: "The head of the pancreas is firmly nestled within the C-shaped concavity of the duodenum, adhering tightly to its second (descending), third (horizontal), and fourth (ascending) segments."
    },
    {
      id: "pancreas-25", organId: "pancreas",
      question: "What venous vessel courses directly posterior to the body and tail of the pancreas before joining the SMV?",
      options: ["Splenic vein", "Left gastric vein", "Inferior mesenteric vein", "Right gastroepiploic vein"],
      correctAnswer: "Splenic vein",
      explanation: "The splenic vein courses horizontally from the splenic hilum embedded in a groove on the posterior surface of the pancreatic tail and body, before uniting with the SMV behind the pancreatic neck."
    },
    {
      id: "pancreas-26", organId: "pancreas",
      question: "The dorsal pancreatic artery usually arises from which vessel?",
      options: ["Splenic artery", "Right gastroepiploic artery", "Inferior mesenteric artery", "Left colic artery"],
      correctAnswer: "Splenic artery",
      explanation: "The dorsal pancreatic artery arises most commonly from the initial segment of the splenic artery (or celiac trunk / SMA) and descends behind the pancreatic neck to supply the body and head, giving off right and left transverse branches."
    },
    {
      id: "pancreas-27", organId: "pancreas",
      question: "Which large pancreatic artery branch originates from the mid-to-distal splenic artery and supplies the pancreatic body?",
      options: ["Arteria pancreatica magna (great pancreatic artery)", "Short gastric artery", "Supraduodenal artery", "Cystic artery"],
      correctAnswer: "Arteria pancreatica magna (great pancreatic artery)",
      explanation: "The arteria pancreatica magna (great pancreatic artery) is the largest pancreatic branch arising from the splenic artery at about the junction of the middle and left thirds of the pancreas, supplying the body and anastomosing with the transverse pancreatic artery."
    },
    {
      id: "pancreas-28", organId: "pancreas",
      question: "What structural classification describes the exocrine portion of the pancreas?",
      options: ["Compound tubuloacinar gland", "Simple tubular gland", "Compound alveolar gland", "Apocrine coiled tubular gland"],
      correctAnswer: "Compound tubuloacinar gland",
      explanation: "The exocrine pancreas is histologically classified as a compound tubuloacinar (or compound acinar) serous gland, composed of multiple branched ducts ending in secretory acini."
    },
    {
      id: "pancreas-29", organId: "pancreas",
      question: "In the islets of Langerhans, what cell type synthesizes pancreatic polypeptide (PP)?",
      options: ["PP (gamma/F) cells", "Alpha cells", "Beta cells", "Epsilon cells"],
      correctAnswer: "PP (gamma/F) cells",
      explanation: "PP cells (also known as F cells or gamma cells) are located primarily in the islets of the uncinate process and head of the pancreas and secrete pancreatic polypeptide, which regulates exocrine pancreatic secretion and gallbladder contraction."
    },
    {
      id: "pancreas-30", organId: "pancreas",
      question: "Epsilon cells in the pancreatic islets produce which hunger-stimulating hormone?",
      options: ["Ghrelin", "Leptin", "Orexin", "Neuropeptide Y"],
      correctAnswer: "Ghrelin",
      explanation: "Epsilon cells represent a small endocrine population within pancreatic islets that secrete ghrelin, a peptide hormone involved in appetite regulation and energy homeostasis."
    },
    {
      id: "pancreas-31", organId: "pancreas",
      question: "The caudal pancreatic arteries supply which region of the pancreas?",
      options: ["Pancreatic tail", "Uncinate process", "Pancreatic neck", "Anterior surface of the head"],
      correctAnswer: "Pancreatic tail",
      explanation: "The caudal pancreatic arteries (arteriae caudae pancreatis) arise from the distal splenic artery or its terminal splenic branches in the lienorenal ligament to supply the tail of the pancreas."
    },
    {
      id: "pancreas-32", organId: "pancreas",
      question: "What smooth muscle structure encircles the terminal portions of both the common bile duct and main pancreatic duct as well as their common channel?",
      options: ["Sphincter of Oddi", "Sphincter of Boyden", "Pyloric sphincter", "Sphincter of Helly"],
      correctAnswer: "Sphincter of Oddi",
      explanation: "The sphincter of Oddi (hepatopancreatic sphincter) is a complex of smooth muscle fibers encircling the common bile duct, the main pancreatic duct, and the hepatopancreatic ampulla at the major duodenal papilla."
    },
    {
      id: "pancreas-33", organId: "pancreas",
      question: "What is the classic triad of symptoms known as Whipple's triad, diagnostic for an insulinoma?",
      options: ["Hypoglycemic symptoms, documented low blood glucose (<50 mg/dL), and relief of symptoms after glucose administration", "Painless jaundice, palpable gallbladder, and weight loss", "Watery diarrhea, hypokalemia, and achlorhydria", "Necrolytic migratory erythema, hyperglycemia, and stomatitis"],
      correctAnswer: "Hypoglycemic symptoms, documented low blood glucose (<50 mg/dL), and relief of symptoms after glucose administration",
      explanation: "Whipple's triad comprises: (1) symptoms consistent with hypoglycemia (confusion, diaphoresis, palpitations), (2) documented low blood glucose concentration during episodes (<50 mg/dL or 2.8 mmol/L), and (3) prompt resolution of symptoms upon administration of glucose."
    },
    {
      id: "pancreas-34", organId: "pancreas",
      question: "A neuroendocrine tumor arising from islet alpha cells typically produces which skin manifestation?",
      options: ["Necrolytic migratory erythema", "Erythema nodosum", "Acanthosis nigricans", "Pyoderma gangrenosum"],
      correctAnswer: "Necrolytic migratory erythema",
      explanation: "Glucagonomas (alpha-cell tumors) classically present with necrolytic migratory erythema (an erythematous, scaly, blister-forming rash with central clearing), diabetes mellitus, weight loss, normocytic anemia, and deep vein thrombosis."
    },
    {
      id: "pancreas-35", organId: "pancreas",
      question: "A patient presenting with severe peptic ulcer disease, hypergastrinemia, and diarrhea likely has a gastrinoma located in the 'Passaro triangle'. Which of the following is an anatomical boundary of Passaro's triangle?",
      options: ["Junction of the neck and body of the pancreas", "Splenic hilum", "Left renal pelvis", "Inferior mesenteric artery origin"],
      correctAnswer: "Junction of the neck and body of the pancreas",
      explanation: "Passaro's gastrinoma triangle is bounded by: (1) the confluence of the cystic and common bile ducts superiorly, (2) the junction of the 2nd and 3rd parts of the duodenum inferiorly, and (3) the junction of the neck and body of the pancreas medially."
    },
    {
      id: "pancreas-36", organId: "pancreas",
      question: "During a standard Whipple procedure (pancreaticoduodenectomy) for pancreatic head adenocarcinoma, which set of structures is typically resected?",
      options: ["Pancreatic head, duodenum, gallbladder, common bile duct, and proximal jejunum", "Pancreatic tail, spleen, left kidney, and left adrenal gland", "Pancreatic body, stomach fundus, spleen, and transverse colon", "Pancreatic head and spleen only, preserving the entire duodenum"],
      correctAnswer: "Pancreatic head, duodenum, gallbladder, common bile duct, and proximal jejunum",
      explanation: "The classic Whipple procedure (pancreaticoduodenectomy) involves en-bloc resection of the head of the pancreas, the C-loop of the duodenum, the distal common bile duct, the gallbladder, proximal jejunum, and sometimes the gastric antrum."
    },
    {
      id: "pancreas-37", organId: "pancreas",
      question: "Which physical exam finding refers to periumbilical ecchymosis indicating retroperitoneal hemorrhage from acute necrotizing pancreatitis?",
      options: ["Cullen's sign", "Grey Turner's sign", "Fox's sign", "Bryant's sign"],
      correctAnswer: "Cullen's sign",
      explanation: "Cullen's sign is periumbilical ecchymosis resulting from the tracking of retroperitoneal blood along the falciform ligament to the subcutaneous umbilical tissue, seen in severe acute necrotizing pancreatitis and ruptured ectopic pregnancy."
    },
    {
      id: "pancreas-38", organId: "pancreas",
      question: "Grey Turner's sign is characterized by ecchymosis in which anatomical region in the setting of severe acute pancreatitis?",
      options: ["Flank / lateral abdominal wall", "Periumbilical area", "Inguinal ligament", "Scrotum"],
      correctAnswer: "Flank / lateral abdominal wall",
      explanation: "Grey Turner's sign refers to bruising/ecchymosis of the flanks (lateral abdominal wall) caused by retroperitoneal blood dissecting along the fascial planes between the posterior pararenal space and lateral abdominal wall."
    },
    {
      id: "pancreas-39", organId: "pancreas",
      question: "Obstruction of the splenic vein by chronic pancreatitis or pancreatic cancer can lead to which specific vascular complication?",
      options: ["Isolated gastric varices (sinistral / left-sided portal hypertension)", "Esophageal varices without gastric varices", "Budd-Chiari syndrome", "Superior vena cava syndrome"],
      correctAnswer: "Isolated gastric varices (sinistral / left-sided portal hypertension)",
      explanation: "Splenic vein thrombosis (often due to pancreatic pathology) produces left-sided or sinistral portal hypertension, where venous outflow from the spleen is diverted through short gastric veins, resulting in isolated gastric varices with normal portal vein pressures."
    },
    {
      id: "pancreas-40", organId: "pancreas",
      question: "Courvoisier's law states that in the presence of painless obstructive jaundice, an enlarged, palpable, non-tender gallbladder is most likely caused by:",
      options: ["Malignancy obstructing the common bile duct (such as pancreatic head carcinoma)", "Impacted gallstone in the cystic duct", "Choledocholithiasis with chronic cholecystitis", "Acute ascending cholangitis"],
      correctAnswer: "Malignancy obstructing the common bile duct (such as pancreatic head carcinoma)",
      explanation: "Courvoisier's law (sign) states that a palpable, non-tender, distended gallbladder accompanied by jaundice is unlikely to be caused by gallstones (as chronic cholelithiasis causes a fibrotic, shrunken gallbladder) and strongly suggests an extrinsic malignant obstruction of the distal CBD, such as pancreatic head adenocarcinoma."
    },
    {
      id: "pancreas-41", organId: "pancreas",
      question: "What is the main histological distinction between a true pancreatic cyst and a pancreatic pseudocyst?",
      options: ["A true cyst is lined by true epithelium, whereas a pseudocyst is lined by fibrous/granulation tissue without epithelium", "A true cyst is filled with pancreatic juice, while a pseudocyst contains only pure blood", "A true cyst occurs only in the head, while pseudocysts occur only in the tail", "A pseudocyst has a continuous endothelial lining, while a true cyst lacks any lining"],
      correctAnswer: "A true cyst is lined by true epithelium, whereas a pseudocyst is lined by fibrous/granulation tissue without epithelium",
      explanation: "A pancreatic pseudocyst (the most common cystic lesion of the pancreas following pancreatitis or trauma) lacks an epithelial lining; its wall is formed entirely of fibrous and inflammatory granulation tissue enclosing enzyme-rich fluid."
    },
    {
      id: "pancreas-42", organId: "pancreas",
      question: "Which cell type in the exocrine pancreas possesses prominent apical zymogen granules and basal basophilic rough endoplasmic reticulum?",
      options: ["Acinar cells", "Centroacinar cells", "Ductal epithelial cells", "Islet alpha cells"],
      correctAnswer: "Acinar cells",
      explanation: "Pancreatic acinar cells are pyramidal serous cells with abundant basophilic rough endoplasmic reticulum in their basal region and eosinophilic zymogen granules stored in their apical cytoplasm ready for exocytosis."
    },
    {
      id: "pancreas-43", organId: "pancreas",
      question: "Why does the pancreas not normally digest itself under physiological conditions?",
      options: ["Proteolytic enzymes are synthesized as inactive zymogens and stored with trypsin inhibitors", "Pancreatic enzymes are solely active at acidic pH (<2.0)", "Acinar cells lack ribosomes for protein synthesis", "Bicarbonate ions denature all intracellular enzymes within the duct"],
      correctAnswer: "Proteolytic enzymes are synthesized as inactive zymogens and stored with trypsin inhibitors",
      explanation: "Protective mechanisms preventing autodigestion include: synthesis and packaging of proteases as inactive proenzymes (zymogens), co-packaging of pancreatic secretory trypsin inhibitor (SPINK1), low calcium concentrations, and physical separation in membrane-bound zymogen granules until activation by duodenal enteropeptidase."
    },
    {
      id: "pancreas-44", organId: "pancreas",
      question: "The attachment of the transverse mesocolon divides the anterior surface of which pancreatic structure into supramesocolic and inframesocolic compartments?",
      options: ["Head and anterior border of the body", "Tail only", "Uncinate process only", "Neck only"],
      correctAnswer: "Head and anterior border of the body",
      explanation: "The root of the transverse mesocolon attaches horizontally across the anterior surface of the pancreatic head and along the lower anterior margin/border of the pancreatic body, dividing peritoneal relationships into supramesocolic (stomach bed) and inframesocolic regions."
    },
    {
      id: "pancreas-45", organId: "pancreas",
      question: "The inferior vena cava (IVC) is situated directly posterior to which parts of the pancreas?",
      options: ["Head and uncinate process", "Tail and body", "Splenic hilum and tail", "Neck only"],
      correctAnswer: "Head and uncinate process",
      explanation: "The IVC ascends retroperitoneally directly behind the posterior surface of the pancreatic head and uncinate process, separated only by the right renal vessels and a thin layer of connective tissue."
    },
    {
      id: "pancreas-46", organId: "pancreas",
      question: "The abdominal aorta lies directly posterior to which part of the pancreas?",
      options: ["Body of the pancreas", "Tail of the pancreas", "Apex of the uncinate process only", "Major duodenal papilla"],
      correctAnswer: "Body of the pancreas",
      explanation: "The abdominal aorta descends in the midline retroperitoneum directly behind the body of the pancreas (at the level of the L1-L2 vertebrae), giving off the celiac trunk just above the superior border and the SMA behind the lower neck/body."
    },
    {
      id: "pancreas-47", organId: "pancreas",
      question: "Which endocrine tumor of the pancreas produces the clinical syndrome known as WDHA (Watery Diarrhea, Hypokalemia, Achlorhydria), also called Verner-Morrison syndrome?",
      options: ["VIPoma", "Gastrinoma", "Glucagonoma", "Insulinoma"],
      correctAnswer: "VIPoma",
      explanation: "VIPomas are neuroendocrine tumors that secrete vasoactive intestinal peptide (VIP), causing profound secretory watery diarrhea (pancreatic cholera), hypokalemia, and achlorhydria (WDHA syndrome)."
    },
    {
      id: "pancreas-48", organId: "pancreas",
      question: "What is the primary lymphatic drainage pathway for the body and tail of the pancreas?",
      options: ["Pancreaticosplenic (splenic) lymph nodes along the splenic artery", "Inferior mesenteric lymph nodes", "Internal iliac lymph nodes", "Submandibular lymph nodes"],
      correctAnswer: "Pancreaticosplenic (splenic) lymph nodes along the splenic artery",
      explanation: "Lymph from the body and tail of the pancreas drains primarily into the pancreaticosplenic (splenic) nodes situated along the splenic artery, which subsequently drain into celiac lymph nodes."
    },
    {
      id: "pancreas-49", organId: "pancreas",
      question: "Lymph from the head and uncinate process of the pancreas drains predominantly into which group of lymph nodes?",
      options: ["Pancreaticoduodenal and superior mesenteric lymph nodes", "External iliac lymph nodes", "Lumbar retroaortic nodes only", "Inferior mesenteric lymph nodes"],
      correctAnswer: "Pancreaticoduodenal and superior mesenteric lymph nodes",
      explanation: "Lymphatics from the pancreatic head drain into superior and inferior pancreaticoduodenal nodes, which then empty into celiac and superior mesenteric lymph nodes."
    },
    {
      id: "pancreas-50", organId: "pancreas",
      question: "During embryonic development, what triggers the fusion of the ventral and dorsal pancreatic buds?",
      options: ["Clockwise rotation of the stomach and duodenum bringing the ventral bud dorsally", "Left-to-right migration of the dorsal bud", "Invagination of the neural crest into the foregut", "Elongation of the umbilical ring"],
      correctAnswer: "Clockwise rotation of the stomach and duodenum bringing the ventral bud dorsally",
      explanation: "As the duodenum rotates to the right and assumes a C-shape during the 6th-7th weeks of development, the ventral pancreatic bud rotates dorsally behind the duodenum to come into contact and fuse with the dorsal pancreatic bud."
    },
    {
      id: "pancreas-51", organId: "pancreas",
      question: "The distal part of the dorsal pancreatic duct fuses with the ventral pancreatic duct to form which definitive adult structure?",
      options: ["Main pancreatic duct (duct of Wirsung)", "Accessory pancreatic duct (duct of Santorini)", "Common bile duct", "Cystic duct"],
      correctAnswer: "Main pancreatic duct (duct of Wirsung)",
      explanation: "The definitive main pancreatic duct (of Wirsung) is formed by the fusion of the distal portion of the dorsal pancreatic duct with the entire ventral pancreatic duct. The proximal portion of the dorsal duct becomes the accessory duct or obliterates."
    },
    {
      id: "pancreas-52", organId: "pancreas",
      question: "In high pancreatic flow rates stimulated by secretin, what happens to the concentrations of bicarbonate and chloride in pancreatic juice?",
      options: ["Bicarbonate concentration increases while chloride concentration decreases", "Chloride concentration increases while bicarbonate concentration decreases", "Both bicarbonate and chloride concentrations decrease to near zero", "Both bicarbonate and chloride concentrations increase equally"],
      correctAnswer: "Bicarbonate concentration increases while chloride concentration decreases",
      explanation: "At higher secretory flow rates, active apical Cl-/HCO3- exchanger and CFTR activity in ductal cells cause pancreatic juice bicarbonate (HCO3-) concentration to rise significantly (up to ~120-140 mEq/L) while chloride (Cl-) concentration reciprocally decreases, maintaining an isotonic fluid."
    },
    {
      id: "pancreas-53", organId: "pancreas",
      question: "Which hereditary disease associated with mutations in the CFTR chloride channel causes inspissated pancreatic secretions, duct obstruction, and exocrine pancreatic insufficiency?",
      options: ["Cystic fibrosis", "Hemochromatosis", "Wilson's disease", "Alpha-1 antitrypsin deficiency"],
      correctAnswer: "Cystic fibrosis",
      explanation: "Cystic fibrosis is caused by mutations in the CFTR gene, which encodes an apical cAMP-regulated chloride channel. Defective chloride and bicarbonate transport leads to thick, viscous mucus that plugs pancreatic ducts, resulting in acinar atrophy and exocrine insufficiency."
    },
    {
      id: "pancreas-54", organId: "pancreas",
      question: "Trousseau's syndrome (Trousseau sign of malignancy) is characterized by which condition frequently associated with occult pancreatic adenocarcinoma?",
      options: ["Migratory superficial thrombophlebitis", "Hypercalcemic crisis", "Carpal spasm upon cuff inflation", "Bilateral adrenal hemorrhage"],
      correctAnswer: "Migratory superficial thrombophlebitis",
      explanation: "Trousseau's syndrome (migratory superficial thrombophlebitis or thrombophlebitis migrans) involves recurrent, migrating venous thrombosis in superficial veins of the trunk and extremities, classically seen in patients with mucin-secreting pancreatic adenocarcinoma due to tumor hypercoagulability."
    },
    {
      id: "pancreas-55", organId: "pancreas",
      question: "Which artery originates directly from the celiac trunk and supplies the stomach bed while running just superior to the pancreatic body?",
      options: ["Splenic artery", "Inferior mesenteric artery", "Right colic artery", "Gastroduodenal artery"],
      correctAnswer: "Splenic artery",
      explanation: "The splenic artery is the largest and most tortuous branch of the celiac trunk; it runs horizontally along the superior margin of the pancreas, contributing numerous small branches to the pancreatic parenchyma before reaching the spleen."
    },
    {
      id: "pancreas-56", organId: "pancreas",
      question: "Somatostatinoma of the pancreas is clinically characterized by an inhibitory triad comprising which set of features?",
      options: ["Diabetes mellitus, cholelithiasis, and steatorrhea", "Hypertension, hypokalemia, and hyperaldosteronism", "Hypoglycemia, weight gain, and tremor", "Severe peptic ulcer disease, diarrhea, and hypercalcemia"],
      correctAnswer: "Diabetes mellitus, cholelithiasis, and steatorrhea",
      explanation: "Somatostatinomas secrete excess somatostatin, which inhibits insulin (causing diabetes mellitus), inhibits CCK and gallbladder motility (causing cholelithiasis/gallstones), and inhibits exocrine pancreatic enzyme and secretin secretion (causing fat malabsorption and steatorrhea)."
    },
    {
      id: "pancreas-57", organId: "pancreas",
      question: "What is the primary anatomical relationship between the tail of the pancreas and the spleen?",
      options: ["The tail directly abuts the visceral surface of the spleen at the splenic hilum", "The tail is separated from the spleen by the descending colon and left kidney", "The tail lies strictly medial to the abdominal aorta", "The tail attaches to the anterior abdominal wall via the falciform ligament"],
      correctAnswer: "The tail directly abuts the visceral surface of the spleen at the splenic hilum",
      explanation: "The tail of the pancreas extends into the splenorenal (lienorenal) ligament, where its tip comes into direct contact with the splenic hilum, making it vulnerable to accidental injury during splenectomy."
    },
    {
      id: "pancreas-58", organId: "pancreas",
      question: "The common bile duct descends in which anatomical relation to the head of the pancreas before entering the ampulla of Vater?",
      options: ["Posterior surface or embedded in a groove/tunnel within the posterior head", "Anterior to the anterior surface of the head", "Medial to the uncinate process between SMA and SMV", "Superior to the celiac axis"],
      correctAnswer: "Posterior surface or embedded in a groove/tunnel within the posterior head",
      explanation: "The common bile duct descends retroperitoneally along the posterior aspect of the pancreatic head, often embedded in a groove or parenchyma tunnel of the gland before joining the main pancreatic duct at the ampulla."
    },
    {
      id: "pancreas-59", organId: "pancreas",
      question: "In chronic pancreatitis, what morphological change is most characteristically visualized on abdominal imaging?",
      options: ["Intraductal calcifications and chain-of-lakes ductal dilatation", "Homogeneous hyperechoic liver enlargement", "Uniform wall thinning of the gallbladder without gallstones", "Massive splenomegaly without vascular involvement"],
      correctAnswer: "Intraductal calcifications and chain-of-lakes ductal dilatation",
      explanation: "Chronic pancreatitis is pathognomonically characterized on CT or radiography by diffuse intraductal and parenchymal calcifications along with alternating strictures and dilatations of the main pancreatic duct ('chain-of-lakes' or 'string-of-pearls' appearance)."
    },
    {
      id: "pancreas-60", organId: "pancreas",
      question: "What type of epithelium lines the intercalated and smaller intralobular ducts of the exocrine pancreas?",
      options: ["Simple cuboidal or low columnar epithelium", "Stratified squamous keratinized epithelium", "Pseudostratified ciliated columnar epithelium", "Transitional (urothelial) epithelium"],
      correctAnswer: "Simple cuboidal or low columnar epithelium",
      explanation: "The intercalated ducts of the pancreas begin with flattened-to-low cuboidal centroacinar cells, which transition into simple cuboidal epithelium in the intercalated and intralobular ducts, and eventually into simple columnar epithelium in the main pancreatic duct."
    },
  ],
  "skin": [
    {
      id: "skin-1", organId: "skin",
      question: "Which layer of the epidermis consists of a single layer of cuboidal to columnar stem cells attached to the basement membrane by hemidesmosomes?",
      options: ["Stratum spinosum", "Stratum basale", "Stratum granulosum", "Stratum corneum"],
      correctAnswer: "Stratum basale",
      explanation: "The stratum basale (stratum germinativum) is the deepest epidermal layer, resting directly on the basement membrane via hemidesmosomes. It consists of a single row of actively dividing cuboidal or low columnar keratinocyte stem cells."
    },
    {
      id: "skin-2", organId: "skin",
      question: "The characteristic 'prickle' or spine-like microscopic appearance of keratinocytes in the stratum spinosum is primarily due to shrinkage artifacts around which intercellular junctions?",
      options: ["Desmosomes", "Gap junctions", "Tight junctions", "Hemidesmosomes"],
      correctAnswer: "Desmosomes",
      explanation: "In routine histological preparation, keratinocytes in the stratum spinosum shrink slightly, remaining firmly attached to adjacent cells at desmosomes (maculae adherentes), which pull out into spine-like projections containing tonofilaments."
    },
    {
      id: "skin-3", organId: "skin",
      question: "Which cytoplasmic organelles found in keratinocytes of the stratum granulosum contain lipid-rich sheets that are extruded into the intercellular space to establish the epidermal water barrier?",
      options: ["Weibel-Palade bodies", "Birbeck granules", "Lamellar bodies (Odland bodies)", "Keratohyalin granules"],
      correctAnswer: "Lamellar bodies (Odland bodies)",
      explanation: "Lamellar bodies (Odland bodies or membrane-coating granules) in the stratum granulosum contain glycosphingolipids, ceramides, cholesterol, and hydrolytic enzymes. Their exocytosis forms the lipid matrix of the epidermal permeability barrier."
    },
    {
      id: "skin-4", organId: "skin",
      question: "In which specific anatomical locations is the stratum lucidum typically identified in human skin?",
      options: ["Face, neck, and scalp", "Axillae and inguinal folds", "Palms of the hands and soles of the feet", "Extensor surfaces of elbows and knees"],
      correctAnswer: "Palms of the hands and soles of the feet",
      explanation: "The stratum lucidum is a thin, translucent layer of flattened, dead, anucleate eosinophilic cells containing eleidin, present exclusively in thick (glabrous) skin found on the palms and soles."
    },
    {
      id: "skin-5", organId: "skin",
      question: "What are the flattened, fully keratinized, anucleated dead cells comprising the outermost stratum corneum termed?",
      options: ["Melanocytes", "Corneocytes", "Merkel cells", "Basal cells"],
      correctAnswer: "Corneocytes",
      explanation: "Corneocytes (or squames) are terminal, non-viable, flattened keratinocytes lacking nuclei and organelles, packed with keratin intermediate filaments cross-linked within a cornified protein envelope."
    },
    {
      id: "skin-6", organId: "skin",
      question: "From which embryonic germ layer do epidermal melanocytes originate?",
      options: ["Endoderm", "Paraxial mesoderm", "Neural crest (neuroectoderm)", "Splanchnic mesoderm"],
      correctAnswer: "Neural crest (neuroectoderm)",
      explanation: "Melanocytes originate from the neural crest (neuroectoderm) and migrate dorsolaterally into the embryonic surface ectoderm, subsequently taking up residence in the stratum basale and hair follicles."
    },
    {
      id: "skin-7", organId: "skin",
      question: "What is the rate-limiting enzyme responsible for catalyzing the initial steps of melanin synthesis from the amino acid L-tyrosine?",
      options: ["Tyrosinase", "Phenylalanine hydroxylase", "DOPA decarboxylase", "Lysyl oxidase"],
      correctAnswer: "Tyrosinase",
      explanation: "Tyrosinase is a copper-containing enzyme that catalyzes the rate-limiting hydroxylation of L-tyrosine to L-DOPA and subsequent oxidation to dopaquinone in the melanosomes."
    },
    {
      id: "skin-8", organId: "skin",
      question: "How is melanin transferred from the dendritic processes of melanocytes to neighboring basal keratinocytes?",
      options: ["Paracrine diffusion across gap junctions", "Cytocrine phagocytosis of melanosome tips", "Exocytosis into interstitial lymphatic fluid", "Active transport via membrane ABC transporters"],
      correctAnswer: "Cytocrine phagocytosis of melanosome tips",
      explanation: "Melanin is transferred through cytocrine secretion, in which keratinocytes phagocytose the tips of melanocyte dendritic arborizations containing mature stage IV melanosomes."
    },
    {
      id: "skin-9", organId: "skin",
      question: "What is the physiological function of the supranuclear 'melanin cap' formed inside keratinocytes?",
      options: ["To facilitate transepidermal water loss", "To anchor intermediate filaments to desmosomes", "To shield the cell nucleus from UV-induced DNA damage", "To degrade bacterial cell wall peptidoglycans"],
      correctAnswer: "To shield the cell nucleus from UV-induced DNA damage",
      explanation: "Keratinocytes aggregate transferred melanosomes directly above their nuclei to create a protective supranuclear 'umbrella' or cap that absorbs and scatters ultraviolet radiation, protecting genomic DNA from pyrimidine dimer formation."
    },
    {
      id: "skin-10", organId: "skin",
      question: "Which intraepidermal dendritic cells are bone marrow-derived antigen-presenting cells that feature characteristic Birbeck granules under electron microscopy?",
      options: ["Merkel cells", "Langerhans cells", "Mast cells", "Kupffer cells"],
      correctAnswer: "Langerhans cells",
      explanation: "Langerhans cells reside predominantly in the stratum spinosum as antigen-presenting dendritic cells expressing CD1a and langerin (CD207). Electron microscopy shows characteristic rod- or tennis racket-shaped Birbeck granules."
    },
    {
      id: "skin-11", organId: "skin",
      question: "Which mechanoreceptors located in the stratum basale are closely associated with unmyelinated disc-like sensory nerve endings and mediate high-resolution tactile discrimination?",
      options: ["Pacinian corpuscles", "Meissner corpuscles", "Merkel cells (Tactile discs)", "Ruffini endings"],
      correctAnswer: "Merkel cells (Tactile discs)",
      explanation: "Merkel cells are neuroendocrine mechanoreceptors located in the stratum basale of fingertips, lips, and hair follicle bases. They synapse with sensory nerve fibers forming Merkel discs (slowly adapting type 1) for fine touch and edge perception."
    },
    {
      id: "skin-12", organId: "skin",
      question: "Which major collagen type constitutes the anchoring fibrils that attach the lamina densa of the basement membrane zone to the underlying papillary dermis?",
      options: ["Type I collagen", "Type III collagen", "Type IV collagen", "Type VII collagen"],
      correctAnswer: "Type VII collagen",
      explanation: "Anchoring fibrils are composed of type VII collagen. They loop from the lamina densa (composed primarily of type IV collagen) into the upper papillary dermis, entrapping type I and III collagen fibers to secure the dermo-epidermal junction."
    },
    {
      id: "skin-13", organId: "skin",
      question: "Which dermal layer is composed of loose areolar connective tissue containing delicate type III collagen, capillary loops, and dermal papillae?",
      options: ["Reticular dermis", "Papillary dermis", "Subcutaneous tissue", "Stratum spinosum"],
      correctAnswer: "Papillary dermis",
      explanation: "The papillary dermis is the superficial thin layer of the dermis immediately beneath the epidermis. It consists of loose areolar connective tissue with thin type III collagen fibrils, elastic fibers, capillary loops, and sensory receptors."
    },
    {
      id: "skin-14", organId: "skin",
      question: "The reticular dermis is primarily composed of which type of connective tissue?",
      options: ["Dense regular connective tissue", "Dense irregular connective tissue", "Hyaline cartilage matrix", "Loose embryonic mesenchyme"],
      correctAnswer: "Dense irregular connective tissue",
      explanation: "The reticular dermis constitutes the deeper, thicker layer of the dermis, composed of dense irregular connective tissue with thick bundles of type I collagen fibers and coarse elastic fibers arranged along lines of tension."
    },
    {
      id: "skin-15", organId: "skin",
      question: "What anatomical feature of acral skin (fingertips and toes) accounts for the individual-specific patterns observed in fingerprints (dermatoglyphics)?",
      options: ["Arrangement of arrector pili muscles", "Interdigitating double rows of dermal papillae beneath epidermal ridges", "Distribution of subcutaneous adipose tissue lobes", "Orientation of superficial fascia retinacula"],
      correctAnswer: "Interdigitating double rows of dermal papillae beneath epidermal ridges",
      explanation: "Fingerprints (dermatoglyphics) are formed by prominent epidermal friction ridges supported by underlying double rows of dermal papillae (cristae cutis) in glabrous thick skin, developing between weeks 10 and 24 of gestation."
    },
    {
      id: "skin-16", organId: "skin",
      question: "Surgical incisions made parallel to which anatomical lines result in minimal wound tension and less conspicuous scar formation?",
      options: ["Blaschko's lines", "Langer's lines (cleavage lines)", "Voigt's lines", "Head's zones"],
      correctAnswer: "Langer's lines (cleavage lines)",
      explanation: "Langer's lines (relaxed skin tension or cleavage lines) correspond to the natural orientation of dermal collagen and elastic fiber bundles. Incisions parallel to them experience minimal transverse pulling and heal with finer scars."
    },
    {
      id: "skin-17", organId: "skin",
      question: "Which vascular network provides the capillary loops that project directly into the dermal papillae to nourish the avascular epidermis?",
      options: ["Subpapillary (superficial) vascular plexus", "Deep cutaneous vascular plexus", "Subcutaneous vascular network", "Internal pudendal arterial arcade"],
      correctAnswer: "Subpapillary (superficial) vascular plexus",
      explanation: "The subpapillary (superficial) plexus lies at the junction of the papillary and reticular dermis. It gives off vertical ascending capillary loops into each dermal papilla, providing nutrient and gas exchange to the overlying epidermis."
    },
    {
      id: "skin-18", organId: "skin",
      question: "What specialized arteriovenous anastomoses in the dermis of acral skin (fingertips, nail beds, ears) bypass capillary beds to regulate heat dissipation?",
      options: ["Glomus bodies (Sucquet-Hoyer canals)", "Sinusoids", "Paurometabolous venules", "Coronary plexuses"],
      correctAnswer: "Glomus bodies (Sucquet-Hoyer canals)",
      explanation: "Glomus bodies (Sucquet-Hoyer canals) are specialized arteriovenous shunts with thick, smooth-muscle walls innervated by sympathetic fibers. When open, they shunt large volumes of blood to acral skin for rapid thermoregulation."
    },
    {
      id: "skin-19", organId: "skin",
      question: "What structural components anchor the deep dermis to the underlying deep fascia across the subcutaneous adipose layer?",
      options: ["Retinacula cutis (skin ligaments)", "Birbeck fibrils", "Sharpey's fibers", "Peritoneal reflections"],
      correctAnswer: "Retinacula cutis (skin ligaments)",
      explanation: "Retinacula cutis (skin ligaments) are fibrous connective tissue bands that traverse the subcutaneous tissue (hypodermis), anchoring the deep reticular dermis to the underlying deep investing fascia or periosteum."
    },
    {
      id: "skin-20", organId: "skin",
      question: "Where is the stem cell niche responsible for cyclic regeneration of the hair follicle and contributing to epidermal re-epithelialization located?",
      options: ["Hair shaft medulla", "Follicular bulge region in the outer root sheath", "Inner root sheath Henle layer", "Nail eponychium"],
      correctAnswer: "Follicular bulge region in the outer root sheath",
      explanation: "The follicular bulge is located in the outer root sheath of the hair follicle near the insertion of the arrector pili muscle. It harbors multipotent epithelial stem cells that regenerate the lower follicle and repair wounded epidermis."
    },
    {
      id: "skin-21", organId: "skin",
      question: "What type of muscle tissue forms the arrector pili muscle attached to hair follicles?",
      options: ["Skeletal muscle under somatic voluntary control", "Smooth muscle innervated by the sympathetic nervous system", "Cardiac-like striated muscle with intercalated discs", "Myoepithelial cells under parasympathetic control"],
      correctAnswer: "Smooth muscle innervated by the sympathetic nervous system",
      explanation: "The arrector pili is a bundle of smooth muscle innervated by postganglionic sympathetic adrenergic fibers. Its contraction elevates the hair shaft ('piloerection' or goosebumps) and compresses sebaceous glands."
    },
    {
      id: "skin-22", organId: "skin",
      question: "Which phase of the cyclical hair growth cycle is characterized by active proliferation of the hair matrix and elongation of the hair shaft?",
      options: ["Catagen", "Telogen", "Anagen", "Exogen"],
      correctAnswer: "Anagen",
      explanation: "Anagen is the active growth phase of the hair cycle. Matrix cells in the hair bulb proliferate rapidly, producing the keratinized hair shaft and inner root sheath. On the human scalp, anagen typically lasts 2 to 7 years."
    },
    {
      id: "skin-23", organId: "skin",
      question: "Which mode of glandular secretion is exhibited by sebaceous glands, in which the entire cell disintegrates to release its lipid-rich secretory product?",
      options: ["Merocrine (eccrine) secretion", "Apocrine secretion", "Holocrine secretion", "Endocrine secretion"],
      correctAnswer: "Holocrine secretion",
      explanation: "Sebaceous glands use holocrine secretion: mature sebocytes accumulate lipid droplets, undergo programmed cell rupture (lysis), and discharge their entire cellular debris and contents as sebum into the follicular infundibulum."
    },
    {
      id: "skin-24", organId: "skin",
      question: "Sebaceous glands are entirely absent from which anatomical regions of the human body?",
      options: ["Forehead and scalp", "Upper back and chest", "Palms of the hands and soles of the feet", "Cheeks and chin"],
      correctAnswer: "Palms of the hands and soles of the feet",
      explanation: "Sebaceous glands are ubiquitous throughout human skin except on the glabrous skin of the palms and soles. They are found in highest concentrations on the face, scalp, and upper trunk."
    },
    {
      id: "skin-25", organId: "skin",
      question: "What are the ectopic sebaceous glands found on the vermilion border of the lips and oral mucosa that are not associated with hair follicles called?",
      options: ["Montgomery glands", "Fordyce spots (granules)", "Meibomian glands", "Tyson glands"],
      correctAnswer: "Fordyce spots (granules)",
      explanation: "Fordyce spots (or granules) are visible, ectopic sebaceous glands that open directly onto the surface of mucosal surfaces (such as the vermilion border of the lips and buccal mucosa) independent of hair follicles."
    },
    {
      id: "skin-26", organId: "skin",
      question: "Which autonomic neurotransmitter and receptor subtype primarily stimulate sweating from eccrine sweat glands during thermoregulatory responses?",
      options: ["Norepinephrine acting on alpha-1 adrenergic receptors", "Epinephrine acting on beta-2 adrenergic receptors", "Acetylcholine acting on muscarinic M3 receptors", "Dopamine acting on D2 dopaminergic receptors"],
      correctAnswer: "Acetylcholine acting on muscarinic M3 receptors",
      explanation: "Although eccrine sweat glands are innervated by postganglionic sympathetic nerve fibers, these fibers are uniquely cholinergic, releasing acetylcholine (ACh) that binds to muscarinic M3 receptors on secretory clear cells."
    },
    {
      id: "skin-27", organId: "skin",
      question: "Which cells located around the secretory coils of eccrine and apocrine sweat glands contract to expel sweat into the glandular ducts?",
      options: ["Myofibroblasts", "Myoepithelial cells", "Pericytes", "Mast cells"],
      correctAnswer: "Myoepithelial cells",
      explanation: "Myoepithelial cells are spindle-shaped, contractile epithelial cells residing between secretory cells and the basal lamina. Their contraction expels accumulated secretions into the glandular excretory duct."
    },
    {
      id: "skin-28", organId: "skin",
      question: "Where do the ducts of apocrine sweat glands predominantly empty their secretory products?",
      options: ["Directly onto the epidermal surface via sweat pores", "Into the upper portion of hair follicle infundibula", "Directly into dermal capillary beds", "Into the lumen of sebaceous glands"],
      correctAnswer: "Into the upper portion of hair follicle infundibula",
      explanation: "Unlike eccrine sweat glands which open directly onto the skin surface via sweat pores (acrosyringia), apocrine sweat gland ducts open into the follicular infundibulum of hair follicles above the sebaceous duct entry."
    },
    {
      id: "skin-29", organId: "skin",
      question: "Which anatomical structures represent specialized, modified apocrine glands located in the external auditory canal that secrete earwax?",
      options: ["Meibomian (tarsal) glands", "Glands of Zeis", "Ceruminous glands", "Glands of Krause"],
      correctAnswer: "Ceruminous glands",
      explanation: "Ceruminous glands are modified apocrine coiled tubular glands located in the subcutaneous tissue of the cartilaginous external auditory canal. Their secretion combines with sebaceous products to form cerumen (earwax)."
    },
    {
      id: "skin-30", organId: "skin",
      question: "What structure forms the thickened layer of stratum corneum beneath the free distal edge of the nail plate, securing it to the fingertip?",
      options: ["Eponychium (cuticle)", "Hyponychium", "Lunula", "Nail matrix"],
      correctAnswer: "Hyponychium",
      explanation: "The hyponychium is the junctional region and thickened stratum corneum beneath the distal free margin of the nail plate. It forms a watertight seal protecting the nail bed from microbial invasion."
    },
    {
      id: "skin-31", organId: "skin",
      question: "What is the narrow fold of stratum corneum extending from the proximal nail fold over the base of the nail plate called?",
      options: ["Eponychium (cuticle)", "Hyponychium", "Perionychium", "Dermal papilla"],
      correctAnswer: "Eponychium (cuticle)",
      explanation: "The eponychium (commonly known as the cuticle) is the extension of the stratum corneum of the proximal nail fold that seals the dorsal surface of the nail plate to prevent pathogen entry into the nail matrix."
    },
    {
      id: "skin-32", organId: "skin",
      question: "Which rapidly adapting encapsulated mechanoreceptors located in the dermal papillae of glabrous skin are sensitive to light touch and low-frequency vibration (30–50 Hz)?",
      options: ["Meissner corpuscles", "Pacinian corpuscles", "Ruffini corpuscles", "Merkel discs"],
      correctAnswer: "Meissner corpuscles",
      explanation: "Meissner corpuscles are rapidly adapting type I (RA1) mechanoreceptors situated in the dermal papillae of hairless skin (fingertips, soles, lips). They detect dynamic light touch, skin slip, and low-frequency flutter/vibration."
    },
    {
      id: "skin-33", organId: "skin",
      question: "Which large, onion-like encapsulated mechanoreceptors located in the deep dermis and hypodermis respond to high-frequency vibration (200–300 Hz) and transient deep pressure?",
      options: ["Pacinian (Vater-Pacini) corpuscles", "Meissner corpuscles", "Ruffini corpuscles", "End bulbs of Krause"],
      correctAnswer: "Pacinian (Vater-Pacini) corpuscles",
      explanation: "Pacinian corpuscles consist of an unmyelinated axon terminal surrounded by concentric lamellae of modified Schwann cells (onion-bulb appearance). They are rapidly adapting type II mechanoreceptors detecting high-frequency vibration and transient pressure."
    },
    {
      id: "skin-34", organId: "skin",
      question: "Which slowly adapting mechanoreceptors located in the deep dermis and joint capsules detect skin stretch, continuous pressure, and torque?",
      options: ["Ruffini corpuscles (bulbous corpuscles)", "Meissner corpuscles", "Pacinian corpuscles", "Birbeck corpuscles"],
      correctAnswer: "Ruffini corpuscles (bulbous corpuscles)",
      explanation: "Ruffini corpuscles (slowly adapting type 2, SA2) are spindle-shaped encapsulations surrounding bundles of collagen fibers in the deep dermis. They respond to sustained mechanical stretch and skin distension."
    },
    {
      id: "skin-35", organId: "skin",
      question: "Which nerve fibers represent free nerve endings in the epidermis and papillary dermis that transmit thermal sensations, slow burning pain, and itch?",
      options: ["Type A-alpha myelinated fibers", "Type A-beta myelinated fibers", "Type C unmyelinated fibers", "Type Ia sensory fibers"],
      correctAnswer: "Type C unmyelinated fibers",
      explanation: "Free nerve endings originating from unmyelinated C fibers (and thinly myelinated A-delta fibers) extend into the papillary dermis and lower epidermis to mediate nociception, warm/cold thermal sensations, and pruritus (itch)."
    },
    {
      id: "skin-36", organId: "skin",
      question: "What photochemical reaction initiates the synthesis of vitamin D3 (cholecalciferol) in the epidermis upon exposure to ultraviolet B (UV-B) radiation?",
      options: ["Conversion of 7-dehydrocholesterol to previtamin D3", "Direct hydroxylation of cholesterol to calcitriol", "Enzymatic reduction of ergosterol by tyrosinase", "Oxidation of squalene to calcidiol"],
      correctAnswer: "Conversion of 7-dehydrocholesterol to previtamin D3",
      explanation: "In the stratum basale and stratum spinosum, provitamin D3 (7-dehydrocholesterol) absorbs UV-B photons (290–315 nm), causing photolysis of its B-ring to form previtamin D3, which then undergoes spontaneous thermal isomerization to cholecalciferol."
    },
    {
      id: "skin-37", organId: "skin",
      question: "What is the normal physiological pH range of the healthy adult skin surface ('acid mantle')?",
      options: ["pH 1.5 – 2.5", "pH 4.5 – 5.5", "pH 7.35 – 7.45", "pH 8.5 – 9.5"],
      correctAnswer: "pH 4.5 – 5.5",
      explanation: "The skin surface maintains an acidic pH typically between 4.5 and 5.5 (the 'acid mantle'). This acidity is generated by sebum breakdown, sweat lactic acid, and keratinocyte proton exchangers (NHE1), inhibiting pathogenic bacteria."
    },
    {
      id: "skin-38", organId: "skin",
      question: "Which major antimicrobial peptide is constitutively synthesized and secreted by eccrine sweat glands to provide broad-spectrum antimicrobial defense?",
      options: ["Dermcidin", "Lysozyme C", "Hepcidin", "Calprotectin"],
      correctAnswer: "Dermcidin",
      explanation: "Dermcidin is a unique antimicrobial peptide produced constitutively in the dark cells of eccrine sweat glands. It is secreted into sweat and forms pore-like channels in bacterial and fungal cell membranes."
    },
    {
      id: "skin-39", organId: "skin",
      question: "Which protein present in keratohyalin granules is proteolytically processed into individual filaggrin units to aggregate keratin tonofilaments during cornification?",
      options: ["Profilaggrin", "Involucrin", "Loricrin", "Desmoplakin"],
      correctAnswer: "Profilaggrin",
      explanation: "Profilaggrin is a large, heavily phosphorylated precursor protein stored in the keratohyalin granules of the stratum granulosum. During terminal differentiation, it is dephosphorylated and cleaved into filaggrin monomers."
    },
    {
      id: "skin-40", organId: "skin",
      question: "What is the principal degradation product of filaggrin in the stratum corneum that constitutes the Natural Moisturizing Factor (NMF) responsible for hydration?",
      options: ["Free amino acids and their derivatives (e.g., pyrrolidone carboxylic acid and urocanic acid)", "Triglycerides and wax esters", "Hyaluronic acid and chondroitin sulfate", "Phospholipids and sphingomyelin"],
      correctAnswer: "Free amino acids and their derivatives (e.g., pyrrolidone carboxylic acid and urocanic acid)",
      explanation: "In the upper stratum corneum, filaggrin is broken down into hygroscopic free amino acids and their derivatives, such as pyrrolidone carboxylic acid (PCA) and urocanic acid, which constitute Natural Moisturizing Factor (NMF)."
    },
    {
      id: "skin-41", organId: "skin",
      question: "Which keratin pair is characteristically expressed by proliferating basal keratinocytes in the stratum basale?",
      options: ["Keratin 5 and Keratin 14", "Keratin 1 and Keratin 10", "Keratin 3 and Keratin 12", "Keratin 8 and Keratin 18"],
      correctAnswer: "Keratin 5 and Keratin 14",
      explanation: "Basal layer keratinocytes express basic Keratin 5 and acidic Keratin 14 intermediate filaments. As cells migrate upward into the spinous layer and differentiate, they switch expression to Keratins 1 and 10."
    },
    {
      id: "skin-42", organId: "skin",
      question: "Which primary transmembrane adhesion glycoproteins form the core cadherin links of desmosomes between adjacent keratinocytes?",
      options: ["Desmogleins and Desmocollins", "Integrin alpha-6 and beta-4", "Claudins and Occludins", "Selectins and ICAM-1"],
      correctAnswer: "Desmogleins and Desmocollins",
      explanation: "Desmosomes are intercellular junctions whose extracellular adhesive core is formed by calcium-dependent transmembrane cadherins: desmogleins (DSG1–4) and desmocollins (DSC1–3), anchored intracellularly to desmoplakin."
    },
    {
      id: "skin-43", organId: "skin",
      question: "The transient protective layer of cells covering the developing fetal epidermis from the second to fourth month of gestation is called the:",
      options: ["Periderm (epitrichium)", "Vernix caseosa", "Stratum corneum", "Lanugo"],
      correctAnswer: "Periderm (epitrichium)",
      explanation: "The periderm is a single superficial layer of simple squamous/cuboidal glycogen-rich cells that covers the embryonic surface ectoderm during early skin development, before being shed into the amniotic fluid around 21 weeks."
    },
    {
      id: "skin-44", organId: "skin",
      question: "What is the white, waxy, cheese-like substance that coats the skin of newborn infants, composed of shed periderm, lanugo hairs, and sebaceous lipids?",
      options: ["Vernix caseosa", "Eleidin", "Keratohyalin", "Cerumen"],
      correctAnswer: "Vernix caseosa",
      explanation: "Vernix caseosa is a protective, viscous, lipid-rich biofilm covering the fetal skin in late gestation. It contains desquamated peridermal/corneocyte cells, lanugo hair, and sebum, providing antimicrobial defense and waterproofing."
    },
    {
      id: "skin-45", organId: "skin",
      question: "The dermis of the back and posterior trunk is embryologically derived from which mesodermal compartment?",
      options: ["Dermatome of paraxial mesoderm (somites)", "Somatic lateral plate mesoderm", "Cranial neural crest", "Intermediate mesoderm"],
      correctAnswer: "Dermatome of paraxial mesoderm (somites)",
      explanation: "The dermis has multiple embryological origins: the dorsal trunk dermis arises from the dermatomyotome (dermatome) of paraxial somites; ventral and limb dermis comes from lateral plate mesoderm; facial dermis comes from neural crest."
    },
    {
      id: "skin-46", organId: "skin",
      question: "What is the primary lipid component by mass of the intercellular matrix in the stratum corneum?",
      options: ["Ceramides", "Phospholipids", "Triglycerides", "Glycogen"],
      correctAnswer: "Ceramides",
      explanation: "The lipid matrix sealing the intercellular spaces between corneocytes in the stratum corneum is composed approximately of 50% ceramides, 25% cholesterol, and 15% free fatty acids, with virtually no phospholipids."
    },
    {
      id: "skin-47", organId: "skin",
      question: "Which central regulatory center in the brain integrates core and cutaneous thermal inputs to control cutaneous vasomotor tone and sweating?",
      options: ["Preoptic area of the anterior hypothalamus", "Hippocampus", "Substantia nigra", "Cerebellar vermis"],
      correctAnswer: "Preoptic area of the anterior hypothalamus",
      explanation: "The preoptic area and anterior hypothalamus (POAH) act as the principal thermoregulatory center in humans, processing peripheral and core temperature signals to coordinate cutaneous vasodilation/vasoconstriction and eccrine sweating."
    },
    {
      id: "skin-48", organId: "skin",
      question: "What is the approximate transit time required for a keratinocyte to migrate from the stratum basale, differentiate, and desquamate from the stratum corneum in healthy adult epidermis?",
      options: ["24 to 48 hours", "7 to 10 days", "28 to 40 days", "120 to 150 days"],
      correctAnswer: "28 to 40 days",
      explanation: "Under normal physiological conditions, epidermal turnover takes approximately 28 to 40 days: about 14 days to migrate from the stratum basale to the stratum corneum, and another 14 days to traverse and shed from the stratum corneum."
    },
    {
      id: "skin-49", organId: "skin",
      question: "During the remodeling phase of cutaneous wound healing, which collagen transition occurs to restore tensile strength?",
      options: ["Type III collagen is replaced by type I collagen", "Type I collagen is replaced by type IV collagen", "Type II collagen is replaced by type VII collagen", "Type IV collagen is replaced by type III collagen"],
      correctAnswer: "Type III collagen is replaced by type I collagen",
      explanation: "Early granulation tissue is rich in thin, flexible type III collagen. Over months of wound maturation, matrix metalloproteinases degrade type III collagen, which is replaced by thicker, organized type I collagen bundles."
    },
    {
      id: "skin-50", organId: "skin",
      question: "Which structure represents the visible, pale, crescent-shaped region at the proximal base of the human nail plate?",
      options: ["Lunula", "Hyponychium", "Lateral nail fold", "Perionychium"],
      correctAnswer: "Lunula",
      explanation: "The lunula ('little moon') is the opaque, whitish, half-moon-shaped area at the base of the nail. It reflects the distal portion of the thick, proliferating nail matrix, where light is scattered by living, nucleated matrix cells."
    },
    {
      id: "skin-51", organId: "skin",
      question: "Which hair follicle zone represents the narrow segment between the opening of the sebaceous duct and the insertion site of the arrector pili muscle?",
      options: ["Infundibulum", "Isthmus", "Bulb", "Hair matrix"],
      correctAnswer: "Isthmus",
      explanation: "The hair follicle is divided into three segments: the infundibulum (from surface to sebaceous duct opening), the isthmus (from sebaceous duct opening to arrector pili insertion), and the inferior segment/bulb (below arrector pili insertion)."
    },
    {
      id: "skin-52", organId: "skin",
      question: "What fine, unpigmented, non-medullated hair covers the fetus in utero and is usually shed before birth?",
      options: ["Lanugo hair", "Vellus hair", "Terminal hair", "Club hair"],
      correctAnswer: "Lanugo hair",
      explanation: "Lanugo is very fine, soft, unpigmented hair that develops on the human fetus around the 20th week of gestation. It is shed in utero between weeks 32 and 36, being replaced by vellus and terminal hair."
    },
    {
      id: "skin-53", organId: "skin",
      question: "Which specialized sensory structures in the vermilion border of the lips and glans penis are sensitive to low-frequency vibrations and cold temperatures?",
      options: ["End bulbs of Krause", "Pacinian corpuscles", "Meissner corpuscles", "Ruffini corpuscles"],
      correctAnswer: "End bulbs of Krause",
      explanation: "Krause end bulbs (bulboid corpuscles) are rounded or oval mechanoreceptive encapsulated nerve endings found in mucocutaneous transitional zones (e.g., lips, glans penis, clitoris, conjunctiva)."
    },
    {
      id: "skin-54", organId: "skin",
      question: "What is the functional consequence of sweat duct reabsorption of sodium and chloride ions via CFTR and ENaC channels in eccrine glands?",
      options: ["Production of a hypertonic sweat solution", "Production of a hypotonic sweat solution to conserve electrolytes", "Complete cessation of evaporative cooling", "Precipitation of calcium oxalate stones"],
      correctAnswer: "Production of a hypotonic sweat solution to conserve electrolytes",
      explanation: "The ductal epithelium of eccrine sweat glands actively reabsorbs Na+ (via ENaC) and Cl- (via CFTR) from the primary isotonic glandular secretion, delivering a hypotonic sweat to the skin surface to minimize systemic electrolyte loss."
    },
    {
      id: "skin-55", organId: "skin",
      question: "Which specialized resident memory T cell population permanently resides in the epidermis to provide localized, rapid immunity against reinfection?",
      options: ["Tissue-resident memory T cells (TRM, CD8+ CD103+)", "Central memory T cells (TCM)", "Naive CD4+ T helper cells", "B-1 peritoneal lymphocytes"],
      correctAnswer: "Tissue-resident memory T cells (TRM, CD8+ CD103+)",
      explanation: "Epidermal tissue-resident memory CD8+ T cells (TRM) express retention markers CD69 and CD103 (integrin alpha-E). They remain lodged between basal keratinocytes for years to mount immediate local defense upon pathogen re-exposure."
    },
    {
      id: "skin-56", organId: "skin",
      question: "Which layer of the subcutaneous tissue in the lower abdominal wall contains membranous connective tissue and is clinically known as Scarpa's fascia?",
      options: ["Camper's fascia", "Deep membranous layer of superficial fascia", "Investing deep muscular fascia", "Transversalis fascia"],
      correctAnswer: "Deep membranous layer of superficial fascia",
      explanation: "In the lower anterior abdominal wall, the subcutaneous tissue is stratified into a superficial fatty layer (Camper's fascia) and a deeper, membranous layer containing elastic fibers (Scarpa's fascia)."
    },
    {
      id: "skin-57", organId: "skin",
      question: "Which cell type in the dermal papilla of the hair bulb provides essential inductive and trophic signals that maintain hair follicle cycling?",
      options: ["Specialized dermal papilla fibroblasts", "Keratinized squames", "Mast cells", "Melanocytes"],
      correctAnswer: "Specialized dermal papilla fibroblasts",
      explanation: "The dermal papilla at the base of the hair bulb contains a discrete cluster of specialized mesenchymal fibroblasts that secrete Wnt, FGF, and BMP signaling factors to instruct adjacent hair matrix cells to proliferate and differentiate."
    },
    {
      id: "skin-58", organId: "skin",
      question: "Which major structural protein cross-links with involucrin and small proline-rich proteins to form the cornified cell envelope (CE) beneath the plasma membrane of corneocytes?",
      options: ["Loricrin", "Elastin", "Laminin", "Decorin"],
      correctAnswer: "Loricrin",
      explanation: "Loricrin is glycine- and serine-rich, comprising over 70% of the total protein mass of the cornified cell envelope (CE). It is transglutaminase-crosslinked with involucrin, envoplakin, and periplakin beneath the lipid envelope."
    },
    {
      id: "skin-59", organId: "skin",
      question: "What anatomical name is given to the unit comprising the hair follicle, hair shaft, arrector pili muscle, and sebaceous gland?",
      options: ["Pilosebaceous unit", "Meissner tactile unit", "Eccrine osteomeatal complex", "Dermal neurovascular triad"],
      correctAnswer: "Pilosebaceous unit",
      explanation: "The pilosebaceous unit is an anatomical functional complex consisting of the hair follicle, the hair shaft, the arrector pili muscle, and the attached holocrine sebaceous gland (and apocrine gland where present)."
    },
    {
      id: "skin-60", organId: "skin",
      question: "Which fast-conducting, heavily myelinated primary afferent nerve fibers innervate encapsulated cutaneous mechanoreceptors such as Meissner and Pacinian corpuscles?",
      options: ["A-beta (Aβ) fibers", "C unmyelinated fibers", "A-delta (Aδ) fibers", "B preganglionic fibers"],
      correctAnswer: "A-beta (Aβ) fibers",
      explanation: "A-beta (Aβ) fibers are large-diameter, heavily myelinated, rapidly conducting sensory axons (30–70 m/s) that innervate low-threshold encapsulated mechanoreceptors (Meissner, Pacinian, Ruffini corpuscles, and Merkel complexes)."
    },
  ],
};
