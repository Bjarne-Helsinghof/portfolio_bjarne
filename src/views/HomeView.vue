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
}
</style>