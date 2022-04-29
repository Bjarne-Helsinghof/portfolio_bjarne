<template>
  <div>
    <home-component></home-component>
    <div class="home"></div>
  </div>
</template>

<script>
import HomeComponent from "../components/HomeComponent.vue";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
  },
};
</script>

<style lang="scss">
#box6 {
  text-align: center;
  background-color: #f4a261;
}
#box7 {
  text-align: center;
  font-family: Helvetica, sans-serif;
  background-color: #f4a261;
}
#box8 {
  background-image: url("../assets/cvbillede1.jpg");
  background-size: cover;
  height: 150vh;
  width: 220vh;
}

.centered {
  position: relative;
  width: 100%;
  max-width: 1200px;
  left: 10%;
  top: 1em;
  height: 100%;
  min-height: 320px;
  color: white;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
}
</style>