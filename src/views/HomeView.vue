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
  background-color: lightblue;
}
#box7 {
  text-align: center;
  font-family: Helvetica, sans-serif;
}

#box8 {
  background-image: url("../assets/cvbillede1.jpg");
  background-size: cover;
  max-width: 100%;
  height: auto;
  background-color: #e05f4f;
}
.centered {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: Helvetica, sans-serif;
}
</style>