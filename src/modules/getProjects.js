import { ref } from 'vue'

export default function getProjects() {

  let projects = ref([
    {
      projectID: 1,
      projectTitle: "Trapholt",
      projectDescription:
      " projektet bestod af at lave en tiltalende hjemmeside, der giver information om aktuelle udstillinger og Trapholt generelt. Ved siden af deres nye hjemmeside og forbedret visuel identitet, skulle der også opdatere deres udskrevne materialer.",
      projectURL: require("../assets/projects_img/trapholt.jpg"),
    }, 
     {
      projectID: 2,
      projectTitle: "Band projekt",
      projectDescription:
      "I projektet skulle jeg i samarbejde med mit foruddefinerede team skabe et visuelt univers for et kendt band. En simpel HTML/CSS-webside skulle udvikles og præsenteres. Det endelige produkt skulle bygges ud fra veldokumenteret skrivebordsresearch, hvor vi bliv inspireret af Design Thinking-processen. teorien om SCRUM skulle inddrages hvor vi faciliterer et dagligt SCRUM møde, interaktioner og praktiserer de forskellige SCRUM roller.",
  projectURL: require("../assets/projects_img/band.jpg"),
    },
    {
      projectID: 3,  
      projectURL: require("../assets/projects_img/telesikring.jpg"),
      projectTitle: "telesikring",
      projectDescription:
        "Telesikring er en dansk vagtvirksomhed beliggende i Esbjerg. Telesikring er siden starten tilbage i 1967 vokset til landets største danskejede vagtselskab. For at sikre den dialog i den digitale tidsalder, vi står i, er blev det vores opgave at lave et redesign af Telesikrings hjemmeside.",

},
    {
      projectID: 4,
      projectURL: require("../assets/projects_img/rebrand.png"),
      projectTitle: "City branding",
      projectDescription:
        "projekt om at rebrande esbjerg by for at tiltrække flere unge, der skulle laves en SoMe kampagne, samles data, laves hero photos(color grade) og en video på maks 3 min",
 },
    {
        projectID: 5,
        projectURL: require("../assets/projects_img/beatup.png"),
        projectTitle: "Beat up face",
        projectDescription:
          "redigere et billede af mig selv hvor der tilføjes skader og få det til at matche med hudfarve",
 },
      {
        projectID: 6,
        projectURL: require("../assets/projects_img/minime.png"),
        projectTitle: "Mini Me",
        projectDescription:
          "en af de første opgaver vi fik som multimedie designer. vi skulle lave en mini figur af os selv",
  },
      {
        projectID: 7,
        projectURL: require("../assets/projects_img/videocv.png"), 
        projectTitle: "Video CV",
        projectDescription:
          "indenfor 4 uger skulle vi optage, redigere og eksportere et personligt video-cv",
  },
      {
        projectID: 8,
        projectURL: require("../assets/wip.png"),
        projectTitle: "Short Movie",
        projectDescription:
          "producere mellem 8 og 12 minutters ensartet video. Stil, genre, humør, tone, plot osv.var helt op til os. Det endelige resultat skulle have color correction og gradering anvendt.",
   },
      {
        projectID: 9,
        projectURL: require("../assets/projects_img/rollaball.png"),
        projectTitle: "Roll a ball",
        projectDescription:
          "simpelt spil jeg lavede i min fritid hvor man kontroller en hoppe bold, navigere forskellige baner af variender sværhedsgrad",
  },
      {
        projectID: 10,
        projectURL: require("../assets/projects_img/photoopgave.jpg"),
        projectTitle: "foto opgave",
        projectDescription:
          "i denne opgave skulle vi træne vores foto kompetencer. opgaven var individual, men vi måtte arbejde i grupper, hvis vi ønskede det"
  },
      {
        projectID: 11,
        projectURL: require("../assets/projects_img/Halloweenposter.png"),
        projectTitle: "Halloween Poster",
        projectDescription:
          "Til denne individuelle obligatoriske opgave. skulle vi designe reklamer til EASV Halloween festen.",
   },
  ])

    return { projects }
  }

