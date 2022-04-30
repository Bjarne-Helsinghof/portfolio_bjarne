<template>
  <div>
    <HeroTwo />
    <!--<ProjectComponent />-->
    <ProjectComponentDynamic />
    <hr />
  </div>
</template>

<script>
import ProjectComponentDynamic from "../components/ProjectComponentDynamic.vue";
import HeroTwo from "../components/HeroTwo.vue";

export default {
  components: {
    HeroTwo,
    ProjectComponentDynamic,
  },
};
</script>
