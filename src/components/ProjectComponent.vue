<template>
  <div class="container-md">
    <!-- switch to margin x over MD size(fluid and !fluid) -->
    <div class="row">
      <div :class="{ active: isActive, 'text-color': isActive }">Projekter</div>

      <button @click="showMeDaData()">Vis projekter</button>
      <div v-if="showData">loading data...</div>
      <div
        v-else
        class="col-12 col-sm-6 col-md-4 mb-4"
        v-for="projectItem in projects"
        :key="projectItem"
      >
        <div class="card" style="">
          <img
            :src="projectItem.projectURL"
            class="card-img-top"
            alt="..."
            height="600"
          />
          <div class="card-body justify-content-start">
            <h5 id="cardOne" class="card-title">
              {{ projectItem.projectTitle }}
            </h5>
            <p class="card-text">{{ projectItem.projectDescription }}</p>
            <a href="#" class="btn btn-primary"
              >Gå til projekt {{ projectItem.id }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let showData = ref(true);
    let isActive = ref(false);

    let showMeDaData = () => {
      showData.value = !showData.value;
      isActive.value = !isActive.value;
    };

    let projects = ref([
      {
        id: 1,
        projectURL: require("../assets/projects_img/trapholt.jpg"),
        projectTitle: "Trapholt",
        projectDescription:
          " projektet bestod af at lave en tiltalende hjemmeside, der giver information om aktuelle udstillinger og Trapholt generelt. Ved siden af deres nye hjemmeside og forbedret visuel identitet, skulle der også opdatere deres udskrevne materialer.",
      },
      {
        id: 2,
        projectURL: require("../assets/projects_img/band.jpg"),
        projectTitle: "Stevie Wonder hjemmeside",
        projectDescription:
          "I projektet skulle jeg i samarbejde med mit foruddefinerede team skabe et visuelt univers for et kendt band. En simpel HTML/CSS-webside skulle udvikles og præsenteres. Det endelige produkt skulle bygges ud fra veldokumenteret skrivebordsresearch, hvor vi bliv inspireret af Design Thinking-processen. teorien om SCRUM skulle inddrages hvor vi faciliterer et dagligt SCRUM møde, interaktioner og praktiserer de forskellige SCRUM roller.",
      },
      {
        id: 3,
        projectURL: require("../assets/projects_img/telesikring.jpg"),
        projectTitle: "telesikring",
        projectDescription:
          "Telesikring er en dansk vagtvirksomhed beliggende i Esbjerg. Telesikring er siden starten tilbage i 1967 vokset til landets største danskejede vagtselskab. For at sikre den dialog i den digitale tidsalder, vi står i, er din opgave nu at lave et redesign af Telesikrings hjemmeside.",
      },
      {
        id: 4,
        projectURL: require("../assets/projects_img/rebrand.png"),
        projectTitle: "City branding",
        projectDescription:
          "projekt om at rebrande esbjerg by for at tiltrække flere unge, der skulle laves en SoMe kampagne, samles data, laves hero photos(color grade) og en video på maks 3 min",
      },
      {
        id: 5,
        projectURL: require("../assets/projects_img/beatup.png"),
        projectTitle: "Beat up face",
        projectDescription:
          "redigere et billede af mig selv hvor der tilføjes skader og få det til at matche med hudfarve",
      },
    ]);

    return {
      projects,
      showData,
      showMeDaData,
      isActive,
    };
  },
};
</script>

<style scoped>
#cardOne {
  color: red;
}
.active {
  background-color: khaki;
}
.text-color {
  color: darkviolet;
}
</style>
