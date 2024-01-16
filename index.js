const translation = document.querySelector('.translation-wrapper__translation');
const nav = document.querySelector('.nav-wrapper__nav');

const stickyWrapper = document.querySelector('.sticky-wrapper');
const sticky = document.querySelector('.sticky-wrapper__sticky');

const aboutMeSection = document.querySelector('.section--about');
const aboutMeTitle = document.querySelector('.section__title--about');
const aboutMeImg = document.querySelector('.section__img-wrapper--about');
const aboutMeText = document.querySelector('.section__text--about');

const planeSection = document.querySelector('.section--plane');
const planeTitle = document.querySelector('.section__title--plane');
const planeImg = document.querySelector('.section__img-wrapper--plane');
const planeText = document.querySelector('.section__text--plane');

const contactTitle = document.querySelector('.section__title--contact');
const fbArea = document.querySelector('.section__fb');
const fbIcon = document.querySelector('.section__icon-wrapper--fb');
const fbText = document.querySelector('.section__text--fb');
const emailArea = document.querySelector('.section__email');
const emailIcon = document.querySelector('.section__icon-wrapper--email');
const emailText = document.querySelector('.section__text--email');

const arrowIcon = document.querySelector('.fa-arrow-circle-up');

let polish = true;

const stickyWrapperY = stickyWrapper.offsetTop;

const aboutMeSectionFromTop = aboutMeSection.offsetTop;
const aboutMeSectionHeight = aboutMeSection.offsetHeight;

const planeSectionFromTop = planeSection.offsetTop;
const planeSectionHeight = planeSection.offsetHeight;

const fbAreaFromTop = fbArea.offsetTop;
const fbAreaHeight = fbArea.offsetHeight;

const emailAreaFromTop = emailArea.offsetTop;
const emailAreaHeight = emailArea.offsetHeight;

aboutMeTitle.classList.add('active');
aboutMeImg.classList.add('active');
aboutMeText.classList.add('active');

const scrollActions = () => {
    if (window.scrollY > stickyWrapperY) {
        stickyWrapper.classList.add('sticky-wrapper--active');
        if (screen.orientation.type === 'landscape-primary') {
            arrowIcon.style.display = 'block';
        }
    } else {
        stickyWrapper.classList.remove('sticky-wrapper--active');
        arrowIcon.style.display = 'none';
    }

    if (window.scrollY > planeSectionFromTop + planeSectionHeight - window.innerHeight - 200) {
        planeTitle.classList.add('active');
        planeImg.classList.add('active');
        planeText.classList.add('active');
    }

    if (window.scrollY > fbAreaFromTop + fbAreaHeight - window.innerHeight - 150) {
        contactTitle.classList.add('active');
        fbArea.classList.add('active');
    }

    if (window.scrollY > emailAreaFromTop + emailAreaHeight - window.innerHeight - 150) {
        emailArea.classList.add('active');
    }

    if (window.scrollY < 100) {
        contactTitle.classList.remove('active');
        fbArea.classList.remove('active');
        emailArea.classList.remove('active');

        planeTitle.classList.remove('active');
        planeImg.classList.remove('active');
        planeText.classList.remove('active');
    }
}

const polishTranslation = () => {
    translation.textContent = 'Translate into english';
    nav.textContent = 'Skontaktuj się ze mną';
    aboutMeTitle.textContent = 'O mnie';
    aboutMeText.innerHTML = '<p>Witam. Od wielu lat świadczę usługi transportowe (Taxi) na terenie miasta Strzegom, a także poza nim. Dzięki długoletniemu doświadczeniu, moja znajomość dróg, nie tylko na terenie Dolnego Śląska, ale również poza jego granicami, zapewnia niezawodność i wydajność wykonywania mojej pracy. Dodatkowo, moja znajomość języka angielskiego pozwala mi świadczyć usługi szerszej grupie klientów i sprawia, że jest to wygodniejsze, przyjemniejsze i bezstresowe.</p><p class="section__paragraph2">Z Rysiu Taxi Strzegom nr Boczny 1 zawsze dojedziesz z punktu A do punktu B bezpiecznie i na czas :-)</p><p class="section__paragraph3">Pozdrawiam - Rysiu Taxi Strzegom.</p>';
    planeTitle.textContent = 'Wybierasz się na lotnisko?';
    planeText.textContent = 'Ze mną zdążysz na każdy samolot!';
    contactTitle.textContent = 'Napisz do mnie';
    fbText.textContent = 'Znajdź mnie na Facebooku';
    emailText.textContent = 'Napisz do mnie emaila';
}

const englishTranslation = () => {
    translation.textContent = 'Przetłumacz na język polski';
    nav.textContent = 'Contact me';
    aboutMeTitle.textContent = 'About me';
    aboutMeText.innerHTML = '<p>Hello everyone. I have been providing Taxi services for many years. I operate both within and outside of the Strzegom area. Thanks to many years of experience, my knowledge of roads, including but not limited to Lower Silesia roads, ensures reliability and efficiency of my work. Additionally, my ability to speak English lets me provide the service to a wider group of customers and makes it a more convenient, enjoyable and stress-free experience.</p><p class="section__paragraph2">With Rysiu Taxi Strzegom no Boczny 1 you will always get from point A to point B safe and on time :-)</p><p class="section__paragraph3">Kindest regards - Rysiu Taxi Strzegom.</p>';
    planeTitle.textContent = 'Looking for an airport transfer?';
    planeText.textContent = 'With my excellent airport transfer service you will never miss your flight!';
    contactTitle.textContent = 'Contact me';
    fbText.textContent = 'Find me on Facebook';
    emailText.textContent = 'Contact me via email';
}

if (navigator.language === 'en') {
    polish = false;
    englishTranslation();
}

const translate = () => {
    polish = !polish;

    if (polish) {
        polishTranslation();
        translation.setAttribute('title', 'Przetłumacz na język polski');
        nav.setAttribute('title', 'Skontaktuj się ze mną');
    } else {
        englishTranslation();
        translation.setAttribute('title', 'Translate into English');
        nav.setAttribute('title', 'Contact me');
    }
}

const clickActions = action => {
    if (action === 'translation') {
        translate();
    } else if (action === 'contact') {
        window.scrollTo({
            left: 0,
            top: fbAreaFromTop,
            behavior: 'smooth'
        });
    } else if (action === 'call') {
        window.open('tel:+48781518605');
    } else if (action === 'fb') {
        window.open('https://www.facebook.com/TAXI-strzegom-1-Filip-Rysiek-961742277191998/');
    } else if (action === 'email') {
        window.location.href = 'mailto:stjopa002@interia.eu';
    } else if (action === 'arrow') {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('scroll', scrollActions);

translation.addEventListener('click', () => clickActions('translation'));
nav.addEventListener('click', () => clickActions('contact'));
sticky.addEventListener('click', () => clickActions('call'));
fbIcon.addEventListener('click', () => clickActions('fb'));
emailIcon.addEventListener('click', () => clickActions('email'));
arrowIcon.addEventListener('click', () => clickActions('arrow'));