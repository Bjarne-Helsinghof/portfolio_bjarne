<template>
  <div class="about">
    <h2>Bjarne Helsinghof</h2>

    <div class="row">
      <div id="box1" class="col-12 col-sm-7 col-md-4">
        <h2>liste af kompetencer jeg har</h2>
        <hr />
        <ul>
          <li v-for="listitem in myArray" :key="listitem">
            {{ listitem }}
          </li>
        </ul>
      </div>
      <div id="box2" class="col-12 col-sm-7 col-md-4">
        <section>
          <iframe
            width="350"
            height="350"
            src="https://www.youtube.com/embed/SFOBKSZRQC0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
      </div>
      <div id="box3" class="col-12 col-sm-7 col-md-4">
        <h2>kontakt oplysninger</h2>
        <hr />
        tlf: +4551425869
        <br />
        <a href="mailto:Bjarne96@outlook.dk?subject = Feedback&body = Message">
          Bjarne96@outlook.dk
        </a>
      </div>
    </div>
    <div id="box4" class="col-12 col-sm-6 col-md-12">
      <h2>Om mig</h2>
      <hr />
      <strong>Bjarne Helsinghof</strong>
      <br />
      <p>25 år, bosat i Farup</p>
      <br />
      <p>
        jeg er på nuværende tidspunkt igang med at uddanne mig som multimedie
        designer på Erhvervsakademi Sydvest i Esbjerg.<br />
        på uddannelsen er mit fokus grafisk design, videoredigering og
        programmering.
      </p>
      <br />
      <p>
        Uddannelsen har givet mig en forståelse for design samt hvordan der
        skabes gode brugeroplevelser på digitale platforme.
      </p>
      <br />
      <p>
        som person er jeg strukteret, ambitiøs, fleksibel og elsker at blive
        udfordret
      </p>
      <br />
      <p>
        Jeg går altid ind til en arbejdsdag med et positivt mind og beslutsomhed
        til at løfte enhver opgave. <br />
        Jeg er frisk på et tage udfordringer op og kommer helt i mål med dem og
        så noget til.
      </p>
      <br />
      <p>
        Jeg har fokus på min egen professionelle og personlige udvikling, <br />
        da jeg gerne vil styrke mine forudsætninger for at levere de bedste
        løsninger.
        <br />
        ikke kun for at tilfredstille andres forventninger men også mine egne
        forventninger.
      </p>
      <br />
      <p>Du er velkommen til at kontakte mig for yderligere information.</p>
    </div>
    <div id="box5" class="col-12 col-sm-6 col-md-12">
      <h2>Cv kan ses her</h2>
      <a
        href="https://drive.google.com/file/d/1zS5fyUpBLgsld4bebBV0Bw1SMFMZiz1c/preview"
        target="_blank"
        class="btn btn-success"
        >CV
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isHidden = ref(false);

    let myArray = ref([
      "Video redigering",
      "Programmering",
      "Content Creation",
      "Projekt ledelse",
      "Design Thinking",
      "UX",
    ]);

    return {
      isHidden,
      myArray,
    };
  },
};
</script>


<style>
/* style binding */
.static {
  height: 30px;
  background-color: lightgrey;
}

.active {
  height: 30px;
  background-color: lightblue;
}

.about {
  font-family: georgia, sans-serif;
  font-size: 16px;
}
#box1 {
  background-color: #1dd3b0;
  font-family: georgia, sans-serif;
}

#box2 {
  background-color: #1dd3b0;
  font-family: georgia, sans-serif;
}

#box3 {
  background-color: #1dd3b0;
  font-family: georgia, sans-serif;
}

#box4 {
  background-color: #b4ddf9;
  font-family: georgia, sans-serif;
}

#box5 {
  background-color: #b4ddf9;
  font-family: georgia, sans-serif;
}

.about {
  text-align: center;
  background-color: #b4ddf9;
  font-family: georgia, sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

a:hover {
  color: #a2d2ff;
  animation: pulsate 1s ease-in-out;
}

@keyframes pulsate {
  0% {
    box-shadow: 0 0 25px #b4ddf9, 0 0 25px #a30c8f;
  }
}
</style>
