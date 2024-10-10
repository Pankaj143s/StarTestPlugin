
// Ensure that starAnimationData is defined to avoid errors in local development
if (typeof starAnimationData === 'undefined') {
    var starAnimationData = { currentLang: 'en' }; // Default to English if not provided
}
const messagesByLanguage = {
    en: [
        "Ticks learn smells. A smell that works today will not work a few days later.  This makes a lot of repellents ineffective!",
        "Every worm, every fish, every bird and every tick want to live. If the tick is close to starving, its willingness to take risks increases enormously and a tick repellent becomes less effective.",
        "If you test a good tick repellent, you have to recognize the 4 basic principles: a) smell, b) taste, c) contact and d) distance",
        "a tick repellent that covers all 4 basic principles will remain effective!",
        "Ticks only breathe eight times a day. This makes them extremely viable",
        "It is very easy to keep your own garden free of ticks.",
        "Where animals mark their territory, ticks will migrate!",
        "The lurking tick, which is common in Europe, recognizes its host from up to 10 m away.",
        "The hunting tick Hyalomma recognizes its host from up to 100 m away and actively pursues it.",
        "You can keep ticks at a distance of 1 m without touching them",
        "Ticks learn their surroundings and assess them very precisely",
        "Ticks create a map of their surroundings and mark their paths",
        "Lurking ticks don't see, they measure!",
        "Ticks communicate with each other",
        "Some Ticks searching the community and stay together, others are loner!",
        "A good tick repellent must cover all 4 areas: 1) smell, 2) taste, 3) contact and 4) distance and be made from natural raw materials",
        "A good tick repellent is tailored to the region.",
        "In Germany, around 100,000 people fall ill from a tick bite every year (Robert Koch Institute)",
        " In America, around 300,000 people fall ill from a tick bite every year",
        "Worldwide its an immensely large problem",
        "If Humans eating the Hosts (Cows, goats, deer’s, rabbits ………) the problem with ticks rises and a region lost his natural cover",
    ],
    de: [
        "Zecken lernen Gerüche. Ein Geruch der heute als Zeckenschutz funktioniert, funktioniert einige Tage später nicht mehr.",
        "Jeder Wurm, jeder Fisch, jeder Vogel und jede Zecke wollen leben. Nähert sich die Zecke dem verhungern, steigt ihre Risikobereitschaft enorm und ein Zeckenschutzmittel verliert an Effizienz.",
        "Testet man ein gutes Zeckenschutzmittel, erkennt man die 4 Grundprinzipien: a) Geruch, b) Geschmack, c) Kontakt und d) Distanz",
        "Ein Zeckenschutzmittel, dass alle 4 Grundprinzipien abdeckt, behält seine Wirkung!",
        "Zecken atmen nur achtmal am Tag.",
        "Es ist sehr einfach den eigenen Garten zeckenfrei zu halten.",
        "Wo Tiere ihre Markierungen setzen oder sich erleichtern, wandern Zecken ein!",
        "Die in Europa übliche Lauerzecke erkennt ihren Wirt in bis zu 10 m Entfernung.",
        "Die Jagdzecke Hyalomma erkennt ihren Wirt bis zu 100 m Entfernung und verfolgt diesen aktiv.",
        "Man kann Zecken auf 1 m Distanz halten, ohne sie zu berühren",
        "Zecken lernen ihre Umgebung und schätzen diese sehr präzise ein.",
        "Zecken erstellen von ihrer Umgebung eine Landkarte und markieren ihre Wege.",
        "Lauerzecken sehen nicht, sie messen!",
        "Zecken kommunizieren miteinander.",
        "Ein gutes Zeckenschutzmittel muss alle 4 Bereiche abdecken: 1) Geruch, 2) Geschmack, 3) Kontakt und 4) Distanz sowie aus natürlichen Rohstoffen hergestellt sein.",
        "Ein gutes Zeckenschutzmittel ist auf die Region abgestimmt.",
        "Jährlich erkranken in Deutschland ca. 100.000 Menschen an einem Zeckenstich (Robert Koch Institut).",
        "In Amerika erkranken jedes Jahr ca. 300.000 Menschen an einem Zeckenstich.",
        "Wer in der Lage ist, Zecken auf Distanz zu halten und abzuwehren, ist auch in der Lage, Moskitos, Stechmücken und Kriebelmücken verlässlich abzuwehren.",
        "Jedes Jahr sterben weltweit ca. 850.000 Menschen an dem Stich einer Stechmücke.",
        "Überträgt man die Erkenntnisse aus der Distanzwirkung des Zeckenschutzes, könnten tausende Menschen vor dem tödlichen Stich der Stechmücke geschützt sein."
    ],
    fr: [
        "Les tiques apprennent les odeurs. Un parfum qui est efficace aujourd'hui peut ne plus l'être dans quelques jours, ce qui rend de nombreux répulsifs inefficaces.",
        "Tous les vers, poissons, oiseaux et tiques veulent vivre. Si une tique est sur le point de mourir de faim, sa propension à prendre des risques augmente considérablement, rendant les répulsifs moins efficaces.",
        "Pour tester un bon répulsif à tiques, il faut prendre en compte les quatre principes de base : a) l'odeur, b) le goût, c) le contact et d) la distance.",
        "Un répulsif à tiques qui couvre les quatre principes de base restera efficace !",
        "Les tiques ne respirent que huit fois par jour, ce qui les rend extrêmement résilientes.",
        "Il est très facile de garder son propre jardin exempt de tiques.",
        "Lorsque les animaux marquent leur territoire, les tiques migrent.",
        "La tique tapie, courante en Europe, peut reconnaître son hôte jusqu'à une distance de 10 mètres.",
        "La tique de chasse Hyalomma peut détecter son hôte à une distance allant jusqu'à 100 mètres et le poursuit activement.",
        "Vous pouvez maintenir les tiques à une distance de 1 mètre sans les toucher.",
        "Les tiques apprennent à connaître leur environnement et l'évaluent avec une grande précision.",
        "Les tiques créent une carte de leur environnement et marquent leurs itinéraires.",
        "Les tiques ne voient pas, elles mesurent !",
        "Les tiques communiquent entre ells.",
        "Certaines tiques préfèrent être en groupe et restent ensemble, tandis que d'autres sont solitaires.",
        "Un bon répulsif à tiques doit couvrir les quatre aspects suivants : 1) l'odeur, 2) le goût, 3) le contact et 4) la distance, et être fabriqué à partir de matières premières naturelles.",
        "Un bon répulsif contre les tiques doit être adapté à la région.",
        "En Allemagne, environ 100 000 personnes tombent malades chaque année à cause des piqûres de tiques (Institut Robert Koch).",
        "En Amérique, environ 300 000 personnes se retrouvent malades chaque année en raison de piqûres de tiques.",
        "C'est un problème d'une ampleur considérable à l'échelle mondiale.",
        "Si les humains consomment les hôtes (vaches, chèvres, cerfs, lapins, etc.), le problème des tiques s'aggrave et la région perd sa couverture naturelle.",
    ],
    es: [
        "Las garrapatas aprenden a reconocer olores. Un aroma que las repele hoy puede dejar de ser efectivo en unos días, lo que hace que muchos repelentes pierdan su eficacia.",
        "Todos los gusanos, peces, pájaros y garrapatas desean vivir. Si una garrapata está al borde de morir de hambre, su disposición a asumir riesgos aumenta considerablemente, lo que reduce la eficacia de un repelente.",
        "Para evaluar un buen repelente de garrapatas, es fundamental tener en cuenta cuatro principios básicos: a) olor, b) sabor, c) contacto y d) distancia.",
        "¡Un repelente de garrapatas que aborde los cuatro principios básicos seguirá siendo efectivo!",
        "Las garrapatas solo respiran ocho veces al día, lo que las hace extremadamente resistentes.",
        "Es bastante sencillo mantener tu propio jardín libre de garrapatas.",
        "Cuando los animales marcan su territorio, las garrapatas migran.",
        "La garrapata al acecho, común en Europa, puede detectar a su huésped desde una distancia de hasta 10 metros.",
        "La garrapata cazadora Hyalomma puede detectar a su hospedador desde una distancia de hasta 100 metros y lo persigue de manera activa.",
        "Puede mantener a las garrapatas a una distancia de 1 metro sin necesidad de tocarlas.",
        "Las garrapatas aprenden sobre su entorno y lo evalúan con gran precisión.",
        "Las garrapatas crean un mapa de su entorno y marcan sus rutas.",
        "Las garrapatas al acecho no ven, ¡sino que miden!",
        "Las garrapatas se comunican entre ellas. ",
        "Algunas garrapatas buscan estar en grupo y permanecen juntas, mientras que otras son solitarias.",
        "Un buen repelente de garrapatas debe cubrir las cuatro áreas: 1) olor, 2) sabor, 3) contacto y 4) distancia, y estar elaborado con materias primas naturales.",
        "Un buen repelente de garrapatas debe estar adaptado a la región.",
        "En Alemania, aproximadamente 100.000 personas se enferman cada año por picaduras de garrapatas, según el Instituto Robert Koch.",
        "En Estados Unidos, alrededor de 300.000 personas se enferman cada año a causa de picaduras de garrapatas.",
        "Es un problema inmenso en todo el mundo.",
        "Si los humanos consumen a los hospedadores (vacas, cabras, ciervos, conejos...), el problema con las garrapatas se agrava, y la región pierde su cobertura natural.",
    ],
    it: [
        "Le zecche imparano a riconoscere gli odori. Un odore che è efficace oggi potrebbe non esserlo più tra qualche giorno, rendendo molti repellenti inefficaci!",

        "Ogni verme, pesce, uccello e zecca desidera vivere. Quando una zecca è in prossimità della fame, la sua propensione a rischiare aumenta notevolmente, riducendo l'efficacia dei repellenti.",
        "Per valutare un buon repellente per zecche, è essenziale considerare i quattro principi fondamentali: a) odore, b) sapore, c) contatto e d) distanza.",

        "Un repellente per zecche che copra tutti e quattro i principi di base resterà efficace!",

        "Le zecche respirano solo otto volte al giorno, il che le rende estremamente resistenti.",

        "È molto semplice mantenere il proprio giardino libero dalle zecche.",
        "Quando gli animali delimitano il loro territorio, le zecche si spostano.",
        "La zecca vagante, comune in Europa, può riconoscere il suo ospite fino a 10 metri di distanza.",
        "La zecca cacciatrice Hyalomma è capace di individuare il suo ospite fino a 100 metri di distanza e lo segue attivamente.",
        "È possibile mantenere le zecche a una distanza di 1 metro senza doverle toccare.",
        "Le zecche apprendono e valutano con grande precisione il loro ambiente circostante.",
        "Le zecche mappano il loro ambiente e tracciano i loro percorsi.",
        "Le zecche in agguato non vedono, ma misurano!",
        "Le zecche comunicano tra di loro.",
        "Alcune zecche cercano la compagnia e restano insieme, mentre altre sono solitarie.",
        "Un buon repellente per zecche deve coprire tutte e quattro le aree: 1) odore, 2) sapore, 3) contatto e 4) distanza, ed essere prodotto con materie prime naturali.",
        "Un buon repellente per zecche deve essere specifico per la regione.",
        "In Germania, circa 100.000 persone si ammalano ogni anno a causa di punture di zecca (Istituto Robert Koch).",
        "In America, circa 300.000 persone si ammalano annualmente a causa di punture di zecca.",
        "A livello globale, è un problema di enormi dimensioni.",
        "Se gli esseri umani consumano gli ospiti (mucche, capre, cervi, conigli, ecc.), il problema delle zecche aumenta e la regione perde la sua copertura naturale.",
    ]
};
function loadMessages() {
    const currentLang = starAnimationData.currentLang || 'en'; // Use the language passed from PHP or default to English
    const messages = messagesByLanguage[currentLang] || messagesByLanguage['en'];

    return messages;
}

const messages = loadMessages(); // Load the messages in the correct language

let currentMessageIndex = 2; // Start from the 3rd message after the initial two
const totalStars = 2; // Total number of stars to display
let messagesShown = 0; // Counter for how many messages have been shown
let initialMessagesShown = 0; // Track how many initial messages have been shown
let pathIndex = 0;
const paths = ['move-star-1', 'move-star-2', 'move-star-3'];
let animationStopped = false; // Flag to stop animations after all messages

const starContainer = document.querySelector('.star-container');

function createStar(autoMoveRight = false, delay = 0, startFromCenter = false, animationType = '') {
    if (animationStopped) return; // Do not create new stars if animation is stopped

    const star = document.createElement('div');
    star.classList.add('star');

    // Increase the clickable area
    star.style.padding = '10px';
    star.style.boxSizing = 'content-box'; // Ensure padding doesn't affect layout

    // Initially set opacity to 0.1
    star.style.opacity = '0.1';
    star.style.transition = 'opacity 2s'; // Ensure smooth opacity transition

    if (autoMoveRight) {
        star.style.animation = `${animationType} ${18.5}s ease-in-out infinite`;
    } else {
        const currentPath = paths[pathIndex];
        star.style.animation = `${currentPath} 110s linear infinite`;
        pathIndex = (pathIndex + 1) % paths.length;
    }

    starContainer.appendChild(star);

    // Trigger opacity transition
    requestAnimationFrame(() => {
        star.style.opacity = '1';
    });

    if (autoMoveRight) {
        setTimeout(() => {
            handleStarFall(star, true);
        }, (10000 + delay * 1000));
    } else {
        // Improve hit detection with pointer-events
        star.style.pointerEvents = 'auto';

        // Use both 'click' and 'mousedown' for more reliable triggering
        star.addEventListener('click', function handleClick() {
            handleStarFall(star, false);
        });

        star.addEventListener('mousedown', function handleMouseDown() {
            handleStarFall(star, false);
        });
    }
}

// Function to handle star clicks and make them fall
function handleStarFall(star, isInitial) {
    if (animationStopped) return; // Prevent handling if animation is stopped

    // Ensure the star is fully visible and clickable before it falls
    star.style.pointerEvents = 'none';  // Disable further clicks during fall

    // Get the current position of the star
    const rect = star.getBoundingClientRect();

    // Set the star's position based on its exact location in the viewport
    star.style.left = `${rect.left}px`;
    star.style.top = `${rect.top}px`;

    // Remove the transform and position it absolutely
    star.style.transform = 'none';
    star.style.position = 'fixed'; // Use 'fixed' to keep it in the exact viewport position

    // Apply the fall animation
    star.style.animation = 'fall 2s ease-out forwards';

    // Display the message immediately
    displayMessage(isInitial);

    setTimeout(() => {
        star.remove();
        messagesShown++; // Increment the message shown counter

        if (messagesShown >= messages.length) {
            // All messages have been shown; stop animations
            stopAllAnimations();
            return;
        }

        // Maintain 2 stars on the screen after the first one falls
        const starsOnScreen = starContainer.querySelectorAll('.star').length;
        if (starsOnScreen < totalStars) {
            createStar(); // Add new stars until there are 2 on the screen
        }
    }, 2000); // Duration matches fall animation duration
}

// Function to display a message when a star falls
function displayMessage(isInitial) {
    const messageContainer = document.querySelector('.message-container');

    if (isInitial && initialMessagesShown === 0) {
        // Handle the image display in the center of the screen
        const img = document.createElement('img');
        const currentLang = starAnimationData.currentLang || 'en';

        switch (currentLang) {
            case 'de':
                img.src = starAnimationData.baseUrl + 'aaron-de.png';
                break;
            case 'fr':
                img.src = starAnimationData.baseUrl + 'aaron-fr.png';
                break;
            case 'es':
                img.src = starAnimationData.baseUrl + 'aaron-es.png';
                break;
            case 'it':
                img.src = starAnimationData.baseUrl + 'aaron-it.png';
                break;
            case 'en':
            default:
                // img.src = starAnimationData.baseUrl + 'aaron-en.png';
                img.src = "./assets/aaron-en.png";
                break;
        }
        // Change the path to "./assets/aaron-en.png" while working with local server other wise image will not load

        img.alt = 'First Message Image';
        img.id = 'first-message-image';

        // Center the image on the screen
        img.style.position = 'fixed';
        img.style.top = '50%';
        img.style.left = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        img.style.maxWidth = '90%';
        img.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        img.style.opacity = '0';

        messageContainer.appendChild(img);

        // Trigger fade-in
        setTimeout(() => {
            img.style.opacity = '1';
        }, 100);

        initialMessagesShown++;

        // Set a timeout to fade out and remove the image
        setTimeout(() => {
            img.style.opacity = '0';
            setTimeout(() => {
                img.remove();
                adjustMessagesPosition();
                createStar(); // Ensure two stars are on screen after the first image disappears
            }, 1500);
        }, 5000); // Image disappears after 4 seconds
    } else if (!isInitial) {
        const message = document.createElement('div');
        message.classList.add('message');

        message.textContent = messages[currentMessageIndex];
        currentMessageIndex++;

        messageContainer.appendChild(message);

        // Position the message on the right side of the screen
        message.style.position = 'absolute';
        message.style.right = '20px'; // Align the message to the right edge of the screen
        message.style.top = `${messagesShown * 40}px`; // Stack messages with a gap of 40px
        message.style.opacity = '1';
        message.style.transform = 'translateY(0)';

        // Adjust the positions of all messages to avoid overlap
        adjustMessagesPosition();

        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.remove();
                adjustMessagesPosition();
            }, 500);
        }, 7000);
    }
}

// Function to adjust the positions of the messages to avoid overlapping
function adjustMessagesPosition() {
    const messages = document.querySelectorAll('.message');
    const gap = 10; // Gap between messages
    let totalHeight = 0;

    messages.forEach((msg) => {
        msg.style.top = `${totalHeight}px`;
        totalHeight += msg.offsetHeight + gap;
    });
}



// Function to adjust message positions after one is removed
function adjustMessagesPosition() {
    const messages = document.querySelectorAll('.message');
    const gap = 10;
    let totalHeight = 0;

    messages.forEach((msg) => {
        msg.style.top = `${totalHeight}px`;
        totalHeight += msg.offsetHeight + gap;
    });
}

// Function to stop all animations and remove stars
function stopAllAnimations() {
    animationStopped = true;
    // Remove all existing stars
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.remove());
}

// Function to initialize the stars (initially only one star with an image)
function initStars() {
    setTimeout(() => {
        createStar(true, 0, true, 'move-right-slow-1');  // First initial star, center start, path 1
    }, 7000); // Delay of 8 seconds (8000 milliseconds)
}

// Initialize the page with 1 initial star, and then ensure 2 stars are on screen afterward
initStars();
