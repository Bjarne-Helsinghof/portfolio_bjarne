<template>
  <div>
    <HeroTwo />
    <ProjectComponent />
    <hr />
  </div>
</template>

<script>
import ProjectComponent from "../components/ProjectComponent.vue";
import HeroTwo from "../components/HeroTwo.vue";

export default {
  components: {
    ProjectComponent,
    HeroTwo,
  },
};
</script>
