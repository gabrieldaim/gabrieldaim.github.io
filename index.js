const translations = {
    en: {
      greeting: "Hello!",
      introduction: "Welcome to my website.",
      item1: "Item 1",
      item2: "Item 2",
      item3: "Item 3"
    },
    pt: {
        titulo_sobre: "Sobre mim",
        titulo2_sobre: "Pós-graduando em Eng. de Software",
        texto_sobre: "Me chamo Gabriel Daim, sou formado em Engenharia da Computação e atualmente estou cursando minha pós-graduação em Engenharia de Software pela PUC-RIO.Além disso, atuo como <span class='verde'>Solution engineer na TV Globo.</span>",
        botao_cv: "DOWNLOAD CV",
        titulo_historico: "Hitórico academico e Qualificações", 
        titulo_puc: "Pós-graduação em Eng. de software",
        linha1_puc: "Instituição: Pontifícia Universidade Católica", 
        linha2_puc: "Inicio: 2023.1",
        linha3_puc: "Término:  cursando", 
        titulo_uni: "Graduação em Eng. da Computação",
        linha1_uni: "Instituição: Centro Universiátio Carioca", 
        linha2_uni: "Inicio: 2017.1",
        linha3_uni: "Término: 2022.2", 
        titulo_one: "Cursos da OneBitCode com certificação",
        linha1_one: "Front-End com React", 
        linha2_one: "Back-End usando Node JS",
        linha3_one: "Bando de dados SQL e noSQL", 
        titulo_alura: "Cursos da Alura com certificação",
        linha1_alura: "Amazon Ligthsail", 
        linha2_alura: "Certificação Linux LPI",
        linha3_alura: "Machine Learning com Python", 
        titulo_udemy: "Cursos da Udemy com certificação",
        linha1_udemy: "Desenvolvimento Android nativo", 
        linha2_udemy: "Desenvolvimento híbrido com Flutter",
    }
  };

  let currentLanguage = "pt";

      function changeLanguage() {
        if (currentLanguage === "en") {
          currentLanguage = "pt";
        } else {
          currentLanguage = "en";
        }

        updateTranslations();
      }

      function updateTranslations() {
        const elementsToTranslate = document.querySelectorAll("[data-translate]");

        elementsToTranslate.forEach(element => {
          const translationKey = element.getAttribute("data-translate");
          element.innerHTML = translations[currentLanguage][translationKey];
        });
      }

      // Inicialmente, atualiza as traduções
      updateTranslations();

function digitandoHead(){
    const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Gabriel Daim", "Desenvolvedor Front-End", "Eng. da Computação", "um portifólio"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
}

digitandoHead()