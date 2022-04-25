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
//import ProjectComponent from "../components/ProjectComponent.vue";
import HeroTwo from "../components/HeroTwo.vue";

export default {
  components: {
    //ProjectComponent,
    HeroTwo,
    ProjectComponentDynamic,
  },
};
</script>
