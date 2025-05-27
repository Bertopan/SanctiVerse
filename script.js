// script.js

// --- SAINTS DATA (THIS IS YOUR CORE DATABASE FOR SAINTS) ---
// Define saintsData globally so it's accessible to all parts of your script.
const saintsData = [
    // --- Canonized on April 30, 2000 ---
    {
        name: "Saint Maria Faustina Kowalska",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/d/de/Maria_Faustyna_Kowalska.jpg",
        slug: "maria-faustina-kowalska",
        year_canonized: 2000,
        canonization_date: "April 30",
        history: [
            "Saint Maria Faustina Kowalska was a Polish Roman Catholic nun and mystic.",
            "Throughout her life, she reported having visions of Jesus Christ, with whom she had conversations, and who tasked her with promoting the Divine Mercy devotion.",
            "Her diary, 'Divine Mercy in My Soul,' records these experiences and the messages she received.",
            "She was canonized by Pope John Paul II on April 30, 2000."
        ]
    },

    // --- Canonized on May 21, 2000: Martyrs of Mexico (25 individuals) ---
    {
        name: "Saint Cristóbal Magallanes Jara",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/San_Cristobal_Magallanes.jpg/220px-San_Cristobal_Magallanes.jpg",
        slug: "cristobal-magallanes-jara",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Saint Cristóbal Magallanes Jara was a Mexican Roman Catholic priest who was martyred during the Cristero War.",
            "He was known for his piety and his dedication to his parishioners, even during times of persecution.",
            "He was falsely accused and executed without a trial.",
            "Saint Cristóbal Magallanes Jara and his companions were canonized on May 21, 2000."
        ]
    },
    {
        name: "Saint Román Adame Rosales",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=R.Adame",
        slug: "roman-adame-rosales",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Saint Román Adame Rosales was one of the many priests martyred during the Cristero War in Mexico.",
            "He was a devoted pastor who refused to abandon his flock despite intense persecution, ultimately giving his life for his faith.",
            "His unwavering commitment to the Eucharist and the Sacrament of Reconciliation served as a beacon of hope for his community."
        ]
    },
    {
        name: "Saint Rodrigo Aguilar Alemán",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=R.Aguilar",
        slug: "rodrigo-aguilar-aleman",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Father Rodrigo Aguilar Alemán was a Mexican priest and martyr. He was executed by firing squad during the Cristero War.",
            "Before his death, he ministered clandestinely to his parishioners, offering spiritual comfort and defying the anti-religious decrees.",
            "His final moments were marked by prayers for his executioners and unwavering faith."
        ]
    },
    {
        name: "Saint Julio Álvarez Mendoza",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Alvarez",
        slug: "julio-alvarez-mendoza",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Saint Julio Álvarez Mendoza was a Mexican priest known for his zealous evangelization and fearless defense of the Church.",
            "He was martyred during the religious persecution in Mexico for continuing his priestly duties despite the danger.",
            "His life is a testament to pastoral courage and fidelity during a time of intense anti-clericalism."
        ]
    },
    {
        name: "Saint Luis Batis Sáinz",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=L.Batis",
        slug: "luis-batis-sainz",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Luis Batis Sáinz was a married layman and father, a parish priest who worked tirelessly for his community in the midst of the Mexican persecution.",
            "He was arrested and martyred for his faith, demonstrating the strength of conviction not only among clergy but also among the laity.",
            "His death served as an inspiration for many to remain steadfast in their Catholic beliefs."
        ]
    },
    {
        name: "Saint Agustín Caloca Cortés",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=A.Caloca",
        slug: "agustin-caloca-cortes",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Father Agustín Caloca Cortés was a young priest and rector of the seminary in Totatiche, Mexico, who was martyred during the Cristero War.",
            "He was known for his dedication to the formation of future priests and his bravery in continuing his ministry despite the government's crackdown.",
            "His execution alongside others highlighted the brutal suppression of religious freedom during that era."
        ]
    },
    {
        name: "Saint Mateo Correa Magallanes",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.Correa",
        slug: "mateo-correa-magallanes",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Saint Mateo Correa Magallanes was a Mexican priest martyred for refusing to break the seal of confession.",
            "He was arrested by government forces and ordered to reveal what he had heard in confession from captured Cristero rebels, which he steadfastly refused.",
            "His ultimate sacrifice upheld the sanctity of the confessional and the profound respect for confidentiality within the Church."
        ]
    },
    {
        name: "Saint Atilano Cruz Alvarado",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=A.Cruz",
        slug: "atilano-cruz-alvarado",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Atilano Cruz Alvarado was a young priest who, despite warnings, returned to his parish to administer the sacraments to his suffering flock.",
            "He was martyred for his devotion, enduring torture but remaining firm in his faith and commitment to his priestly duties.",
            "His story reflects the immense courage of those who risked their lives to serve God and their communities during the Cristero persecution."
        ]
    },
    {
        name: "Saint Miguel de la Mora",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.de+la+Mora",
        slug: "miguel-de-la-mora",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Miguel de la Mora was a Mexican priest and martyr, known for his spiritual guidance and unwavering faith.",
            "He faced intense persecution and eventually execution due to his refusal to abandon his religious vows and ministry.",
            "His steadfastness in the face of death inspired many to hold firm to their beliefs."
        ]
    },
    {
        name: "Saint Pedro Esqueda Ramírez",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=P.Esqueda",
        slug: "pedro-esqueda-ramirez",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Pedro Esqueda Ramírez was a diocesan priest martyred in Mexico during the Cristero War.",
            "He dedicated his life to education and catechesis, founding schools and promoting Catholic instruction even under threat.",
            "His final act was to offer forgiveness to his executioners, embodying Christian charity in the face of injustice."
        ]
    },
    {
        name: "Saint Margarito Flores García",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.Flores",
        slug: "margarito-flores-garcia",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Saint Margarito Flores García was a Mexican priest known for his simple life and profound devotion.",
            "He continued to minister to the faithful secretly after religious persecution began, offering sacraments and spiritual support.",
            "He was captured and executed for his priesthood, becoming a martyr for religious freedom."
        ]
    },
    {
        name: "Saint José Isabel Flores Varela",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.I.Flores",
        slug: "jose-isabel-flores-varela",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "José Isabel Flores Varela was a Mexican priest, martyred during the Cristero War.",
            "He was known for his fervent preaching and his dedication to the poor and marginalized, serving them despite the dangers.",
            "His commitment to the Gospel led to his capture and execution, making him a symbol of faith under persecution."
        ]
    },
    {
        name: "Saint David Galván Bermúdez",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=D.Galvan",
        slug: "david-galvan-bermudez",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "David Galván Bermúdez was a Mexican priest and co-founder of the Congregation of the Servants of the Sacred Heart of Jesus.",
            "He was arrested and martyred during the Cristero War for his unwavering commitment to his priestly duties and for defending the faith.",
            "His martyrdom underscored the sacrifices made by religious leaders in Mexico during the anti-clerical era."
        ]
    },
    {
        name: "Saint Salvador Lara Puente",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=S.Lara",
        slug: "salvador-lara-puente",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Salvador Lara Puente was a layman and president of Catholic Action in his parish, martyred during the Cristero War.",
            "He was known for his courageous leadership in promoting Catholic social teaching and defending religious freedom.",
            "His execution, alongside other lay activists, highlighted the widespread persecution faced by all levels of the Church in Mexico."
        ]
    },
    {
        name: "Saint Pedro de Jesús Maldonado Lucero",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=P.Maldonado",
        slug: "pedro-de-jesus-maldonado-lucero",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Pedro de Jesús Maldonado Lucero was a Mexican priest who served in very difficult conditions, often traveling long distances to minister to remote communities.",
            "He was known for his perseverance and unwavering dedication to the Sacraments, especially the Eucharist.",
            "He was captured, tortured, and eventually martyred for refusing to abandon his priestly ministry."
        ]
    },
    {
        name: "Saint Jesús Méndez Montoya",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Mendez",
        slug: "jesus-mendez-montoya",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Jesús Méndez Montoya was a Mexican priest who, despite knowing the risks, continued to celebrate Mass and administer sacraments in secret.",
            "He was betrayed, captured, and martyred, offering his life as a testament to his faith and loyalty to the Church.",
            "His quiet heroism inspired many during a time of intense religious persecution."
        ]
    },
    {
        name: "Saint Manuel Morales",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.Morales",
        slug: "manuel-morales",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Manuel Morales was a Mexican layman, husband, and father, deeply involved in Catholic Action and the National League for the Defense of Religious Liberty.",
            "He was martyred for his active role in defending the Church's rights during the Cristero War, becoming a symbol of lay resistance.",
            "His final words were of forgiveness for his executioners, mirroring Christ's example."
        ]
    },
    {
        name: "Saint Justino Orona Madrigal",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Orona",
        slug: "justino-orona-madrigal",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Justino Orona Madrigal was a Mexican priest and founder of the Congregation of the Poor Sisters of the Sacred Heart of Jesus.",
            "He was martyred during the Cristero War, captured while ministering to the faithful in secret.",
            "His life exemplified selfless service and courageous perseverance in the face of extreme danger."
        ]
    },
    {
        name: "Saint Sabás Reyes Salazar",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=S.Reyes",
        slug: "sabas-reyes-salazar",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Sabás Reyes Salazar was a Mexican priest martyred during the Cristero War.",
            "He was known for his unwavering commitment to his parishioners, even when it meant risking his life to provide spiritual guidance.",
            "His final moments were spent praying for his executioners, demonstrating profound Christian forgiveness."
        ]
    },
    {
        name: "Saint José María Robles Hurtado",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.M.Robles",
        slug: "jose-maria-robles-hurtado",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "José María Robles Hurtado was a Mexican priest and founder of the Sisters of the Sacred Heart of Jesus, dedicated to Eucharistic adoration.",
            "He was captured and martyred during the Cristero War for continuing his priestly duties in defiance of government prohibitions.",
            "His life and death were a testament to his deep devotion to the Sacred Heart and the Eucharist."
        ]
    },
    {
        name: "Saint David Roldán Lara",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=D.Roldan",
        slug: "david-roldan-lara",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "David Roldán Lara was a Mexican layman, president of Catholic Action, and a key figure in the defense of religious freedom during the Cristero War.",
            "He was martyred for his leadership and commitment to the Catholic faith, inspiring many others to resist anti-religious policies.",
            "His willingness to die for his beliefs made him a powerful witness to faith."
        ]
    },
    {
        name: "Saint Toribio Romo González",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Toribio_Romo_Gonzalez.jpg/220px-Toribio_Romo_Gonzalez.jpg",
        slug: "toribio-romo-gonzalez",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Saint Toribio Romo González was a Mexican priest martyred during the Cristero War.",
            "He is particularly venerated by migrants seeking to cross the border into the United States, often invoked for safe passage and protection.",
            "His life was dedicated to serving the poor and marginalized, even under threat of death for his ministry."
        ]
    },
    {
        name: "Saint Jenaro Sánchez Delgadillo",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Sanchez",
        slug: "jenaro-sanchez-delgadillo",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Jenaro Sánchez Delgadillo was a Mexican priest and catechist, known for his devotion to teaching the faith.",
            "He was martyred during the Cristero War for refusing to cease his religious instruction and pastoral duties.",
            "His life was a testament to the importance of religious education and the unwavering commitment of clergy during persecution."
        ]
    },
    {
        name: "Saint Tranquilino Ubiarco Robles",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=T.Ubiarco",
        slug: "tranquilino-ubiarco-robles",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "Tranquilino Ubiarco Robles was a Mexican priest who bravely continued to minister to his parishioners despite the anti-clerical laws.",
            "He was captured while celebrating Mass and was executed, becoming a martyr for the freedom of worship and the priesthood.",
            "His dedication to the Eucharist remained firm until his final breath."
        ]
    },
    {
        name: "Saint David Uribe Velasco",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=D.Uribe",
        slug: "david-uribe-velasco",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "David Uribe Velasco was a Mexican priest and lawyer, known for his intellectual prowess and his defense of religious rights.",
            "He was martyred during the Cristero War for his outspoken opposition to the government's anti-religious policies.",
            "His life exemplified the courage to combine intellectual pursuit with unwavering faith in the face of oppression."
        ]
    },
    {
        name: "Saint José María de Yermo y Parres",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=J.Yermo",
        slug: "jose-maria-de-yermo-y-parres",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "José María de Yermo y Parres was a Mexican priest and founder of the Congregation of the Servants of the Sacred Heart of Jesus and of the Poor.",
            "He dedicated his life to serving the most vulnerable, establishing hospitals, orphanages, and schools for the poor.",
            "His canonization recognized his profound commitment to social justice and charity."
        ]
    },
    {
        name: "Saint María de Jesús Sacramentado Venegas de la Torre",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.Venegas",
        slug: "maria-de-jesus-sacramentado-venegas-de-la-torre",
        year_canonized: 2000,
        canonization_date: "May 21",
        history: [
            "María de Jesús Sacramentado Venegas de la Torre was a Mexican nun and founder of the Congregation of the Daughters of the Sacred Heart of Jesus.",
            "She dedicated her life to the care of the sick, especially the poor and abandoned, founding hospitals and promoting health care.",
            "Her work provided essential services during a period of great social upheaval in Mexico."
        ]
    },

    // --- Canonized on October 1, 2000: Martyrs of China (120 individuals) ---
    {
        name: "The 120 Martyrs of China (Group)",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Martyrs_of_China_group.jpg/330px-Martyrs_of_China_group.jpg",
        slug: "martyrs-of-china-group",
        year_canonized: 2000,
        canonization_date: "October 01",
        is_group: true,
        history: [
            "This group comprises 120 martyrs—87 Chinese Catholics and 33 Western missionaries—who died for their faith in China between 1648 and 1930.",
            "They include bishops, priests, religious, and laypeople, young and old, who faced various forms of persecution, including the Boxer Rebellion.",
            "Their lives bear witness to the enduring presence of Christianity in China and the sacrifices made to uphold it against persecution."
        ]
    },
    // IMPORTANT: For the remaining 119 Martyrs of China (if you're trying to list them individually),
    // and other unlisted saints to reach 207, you MUST manually add them here.
    // I'll provide 10 generic placeholders as an example of how you'd continue filling it out.
    // You'll need to replicate this for the remaining 109 Chinese Martyrs + any others.
    { name: "Martyr of China 1", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.1", slug: "martyr-china-1", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 1."] },
    { name: "Martyr of China 2", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.2", slug: "martyr-china-2", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 2."] },
    { name: "Martyr of China 3", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.3", slug: "martyr-china-3", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 3."] },
    { name: "Martyr of China 4", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.4", slug: "martyr-china-4", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 4."] },
    { name: "Martyr of China 5", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.5", slug: "martyr-china-5", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 5."] },
    { name: "Martyr of China 6", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.6", slug: "martyr-china-6", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 6."] },
    { name: "Martyr of China 7", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.7", slug: "martyr-china-7", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 7."] },
    { name: "Martyr of China 8", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.8", slug: "martyr-china-8", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 8."] },
    { name: "Martyr of China 9", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.9", slug: "martyr-china-9", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 9."] },
    { name: "Martyr of China 10", image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.C.10", slug: "martyr-china-10", year_canonized: 2000, canonization_date: "October 01", history: ["Placeholder history for Martyr of China 10."] },
    // ... YOU MUST ADD THE REMAINING MARTYRS OF CHINA HERE MANUALLY (approx 109 more individual entries if needed) ...

    // Other individuals canonized October 1, 2000
    {
        name: "Saint Katharine Drexel",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/2/25/St_Katharine_Drexel_color.jpg",
        slug: "katharine-drexel",
        year_canonized: 2000,
        canonization_date: "October 01",
        history: [
            "Saint Katharine Drexel was an American heiress who became a Catholic nun and founded the Sisters of the Blessed Sacrament.",
            "She dedicated her life and fortune to serving Native Americans and African Americans, establishing schools and missions across the United States.",
            "Her work profoundly impacted education and social justice, and she was canonized for her lifelong commitment to these marginalized communities."
        ]
    },
    {
        name: "Saint Josephine Bakhita",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/St._Josephine_Bakhita_%281%29.jpg/800px-St._Josephine_Bakhita_%281%29.jpg",
        slug: "josephine-bakhita",
        year_canonized: 2000,
        canonization_date: "October 01",
        history: [
            "Saint Josephine Bakhita was a Sudanese-Italian Canossian religious sister who was enslaved as a child and later gained her freedom.",
            "Despite her traumatic past, she lived a life of profound faith, humility, and service, becoming known as 'Our Mother Moretta'.",
            "She is a powerful symbol of hope and perseverance for victims of human trafficking and those who have suffered oppression."
        ]
    },
    {
        name: "Saint María Josefa del Corazón de Jesús Sancho de Guerra",
        image_url: "https://via.placeholder.com/150/FFD700/8B4513?text=M.J.Sancho",
        slug: "maria-josefa-sancho-de-guerra",
        year_canonized: 2000,
        canonization_date: "October 01",
        history: [
            "Saint María Josefa Sancho de Guerra was a Spanish religious sister and founder of the Servants of Jesus, a congregation dedicated to the care of the sick and elderly.",
            "She spent her life in compassionate service, emphasizing the importance of charity and humility in nursing.",
            "Her work greatly contributed to healthcare in Spain and continues to inspire caregivers today."
        ]
    },
    // Placeholder saints for future years
    {
        name: "Jabal, Neil Carlo",
        image_url: "assets/saints/placeholder.png",
        slug: "jabal-neil-carlo",
        year_canonized: 2025,
        canonization_date: "TBD",
        history: [
            "Neil Carlo Jabal is a contemporary figure whose life is being studied for potential canonization.",
            "His story is one of profound faith and service, inspiring many in his community.",
            "Further details of his life and works are currently being documented."
        ]
    },
    {
        name: "Mallari, John Ammiel",
        image_url: "assets/saints/placeholder.png",
        slug: "mallari-john-ammiel",
        year_canonized: 2025,
        canonization_date: "TBD",
        history: [
            "John Ammiel Mallari is recognized for his exemplary devotion and significant contributions to his faith community.",
            "His spiritual journey and acts of charity have left a lasting impact on those around him.",
            "The process of documenting his life for hagiographical study is ongoing."
        ]
    },
    {
        name: "Manalo, Rusel",
        image_url: "assets/saints/placeholder.png",
        slug: "manalo-rusel",
        year_canonized: 2025,
        canonization_date: "TBD",
        history: [
            "Rusel Manalo's life exemplifies extraordinary dedication to spiritual principles.",
            "His teachings and personal example have guided many towards a deeper understanding of their faith.",
            "Efforts are underway to compile a comprehensive narrative of his life and influence."
        ]
    },
    {
        name: "Manzanares, Sean Herschel",
        image_url: "assets/saints/placeholder.png",
        slug: "manzanares-sean-herschel",
        year_canonized: 2025,
        canonization_date: "TBD",
        history: [
            "Sean Herschel Manzanares is known for his unwavering commitment to his beliefs and his tireless work in the service of others.",
            "His life story is a testament to the power of faith in action, inspiring many to follow a virtuous path.",
            "Documentation for his hagiography is currently being prepared."
        ]
    },
    {
        name: "Pangilinan, Mark Jobert",
        image_url: "assets/saints/placeholder.png",
        slug: "pangilinan-mark-jobert",
        year_canonized: 2025,
        canonization_date: "TBD",
        history: [
            "Mark Jobert Pangilinan's spiritual journey is marked by profound insights and a life dedicated to prayer and contemplation.",
            "His wisdom and gentle guidance have touched countless lives, fostering spiritual growth and understanding.",
            "His life's work is being meticulously recorded for future study and veneration."
        ]
    }
];

// -------------------------------------------------------------------------
// Logic for both index.html (main page) and saint-detail.html (detail page)
// -------------------------------------------------------------------------

// Check the current page path to determine which logic to run
const currentPage = window.location.pathname;

// --- Logic for index.html (main page) ---
if (currentPage.includes('index.html') || currentPage === '/') {
    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.main-nav .nav-link');
        const yearLinks = document.querySelectorAll('.year-nav .year-link');
        const contentSections = document.querySelectorAll('.content-section');

        // Function to show a specific content section
        function showSection(sectionId) {
            // Hide all content sections by removing 'active' class and setting display to 'none'
            contentSections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
            });

            // Show the target section by adding 'active' class and setting display to 'block'
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.style.display = 'block';

                // If it's a saints section, dynamically render the grid from data
                if (targetSection.id.startsWith('saints-')) {
                    const saintsGrid = targetSection.querySelector('.saints-grid');
                    if (saintsGrid) {
                        const year = parseInt(sectionId.replace('saints-', '').replace('-content', ''));
                        // Filter saints for the current year, and sort them by canonization_date if present
                        let saintsForThisYear = saintsData.filter(saint => saint.year_canonized === year);

                        // Sort saints by canonization_date (if available) to maintain order
                        saintsForThisYear.sort((a, b) => {
                            const dateA = new Date(`2000 ${a.canonization_date}`); // Use 2000 as year for sorting
                            const dateB = new Date(`2000 ${b.canonization_date}`);
                            return dateA - dateB;
                        });

                        renderSaintsGrid(saintsGrid, saintsForThisYear); // CALL NEW RENDERING FUNCTION
                    }
                }

                // Scroll to the top of the displayed section for better UX
                window.scrollTo({
                    top: targetSection.offsetTop - (document.querySelector('.main-header').offsetHeight + document.querySelector('.year-navigation-wrapper').offsetHeight), // Adjust for sticky header/year nav
                    behavior: 'smooth'
                });
            }
        }

        // Function to manage active classes on navigation links
        function setActiveLink(clickedLink) {
            // Remove 'active' from all main navigation links
            navLinks.forEach(link => link.classList.remove('active'));
            // Remove 'active-year' from all year navigation links
            yearLinks.forEach(link => link.classList.remove('active-year'));

            // Add the appropriate active class to the clicked link
            if (clickedLink.classList.contains('nav-link')) {
                clickedLink.classList.add('active');
            } else if (clickedLink.classList.contains('year-link')) {
                clickedLink.classList.add('active-year');
            }
        }

        // --- NEW FUNCTION: RENDER Saints Grid into 5-4-5 pattern from data ---
        function renderSaintsGrid(gridContainer, saintsArray) {
            gridContainer.innerHTML = ''; // Clear the existing content

            let rowIndex = 0;
            let cardIndex = 0;

            while (cardIndex < saintsArray.length) {
                const rowWrapper = document.createElement('div');
                rowWrapper.classList.add('saints-row');

                const numCardsInRow = (rowIndex % 2 === 0) ? 5 : 4; // 5 cards for even rows, 4 for odd

                if (numCardsInRow === 5) {
                    rowWrapper.classList.add('saints-row-5');
                } else {
                    rowWrapper.classList.add('saints-row-4');
                }

                for (let i = 0; i < numCardsInRow && cardIndex < saintsArray.length; i++) {
                    const saint = saintsArray[cardIndex];

                    const saintCardLink = document.createElement('a');
                    saintCardLink.href = `Saint_Maria_Faustina_Kowalska_Page.html?saint=${saint.slug}`; // Corrected HTML filename
                    saintCardLink.classList.add('saint-card');

                    const img = document.createElement('img');
                    img.src = saint.image_url;
                    img.alt = saint.name;
                    img.loading = 'lazy';

                    const pName = document.createElement('p');
                    pName.classList.add('saint-name');
                    pName.textContent = saint.name;

                    saintCardLink.appendChild(img);
                    saintCardLink.appendChild(pName);

                    rowWrapper.appendChild(saintCardLink);
                    cardIndex++;
                }
                gridContainer.appendChild(rowWrapper);
                rowIndex++;
            }
        }

        // Handle clicks on main navigation links (Home, About, Contact)
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                setActiveLink(this);

                const targetId = this.getAttribute('data-target');
                showSection(targetId);

                history.pushState(null, '', `#${targetId}`);
            });
        });

        // Handle clicks on year navigation links (Saints of 2000, 2001, etc.)
        yearLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                setActiveLink(this);

                const year = this.getAttribute('data-year');
                const targetId = `saints-${year}-content`;
                showSection(targetId);

                history.pushState(null, '', `#${targetId}`);
            });
        });

        // --- Initial Page Load and URL Hash Handling ---
        const initialHash = window.location.hash.substring(1);

        if (initialHash && document.getElementById(initialHash)) {
            showSection(initialHash);

            const correspondingLink = document.querySelector(
                `.main-nav .nav-link[data-target="${initialHash}"], ` +
                `.year-nav .year-link[data-year="${initialHash.replace('saints-', '').replace('-content', '')}"]`
            );

            if (correspondingLink) {
                setActiveLink(correspondingLink);
            } else {
                document.querySelector('.main-nav .nav-link[data-target="home-content"]').classList.add('active');
                showSection('home-content');
                history.replaceState(null, '', '#home-content');
            }
        } else {
            showSection('home-content');
            document.querySelector('.main-nav .nav-link[data-target="home-content"]').classList.add('active');
            history.replaceState(null, '', '#home-content');
        }
    });
}


// --- Logic for saint-detail.html (detail page) ---
// Using startsWith for more flexibility if the path includes more segments
if (currentPage.startsWith('/Saint_Maria_Faustina_Kowalska_Page.html') || currentPage.includes('saint-detail.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const saintSlug = urlParams.get('saint');

        if (saintSlug) {
            // Access the globally defined saintsData
            const currentSaint = saintsData.find(saint => saint.slug === saintSlug);

            if (currentSaint) {
                document.getElementById('saintImage').src = currentSaint.image_url;
                document.getElementById('saintImage').alt = currentSaint.name;
                document.getElementById('saintNameDate').textContent = `${currentSaint.name} (${currentSaint.canonization_date}, ${currentSaint.year_canonized})`;

                const historyContainer = document.getElementById('saintHistory');
                historyContainer.innerHTML = ''; // Clear placeholder content
                if (currentSaint.history && Array.isArray(currentSaint.history)) {
                    currentSaint.history.forEach(paragraph => {
                        const p = document.createElement('p');
                        p.textContent = paragraph;
                        historyContainer.appendChild(p);
                    });
                } else {
                    historyContainer.innerHTML = '<p>Information about this saint\'s history is not yet available.</p>';
                }
            } else {
                const saintContainer = document.querySelector('.saint-container');
                saintContainer.innerHTML = '<h2>Saint Not Found</h2><p>The requested saint could not be found.</p>';
                saintContainer.style.textAlign = 'center';
            }
        } else {
            const saintContainer = document.querySelector('.saint-container');
            saintContainer.innerHTML = '<h2>Error</h2><p>No saint specified in the URL.</p>';
            saintContainer.style.textAlign = 'center';
        }
    });
}