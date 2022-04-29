<template>
  <div
    id="toplevel-wrapper"
    class="container-fluid d-flex min-vh-100 flex-column"
  >
    <NavigationComponent />
    <router-view />
    <FooterComponent class="row mt-auto gx-0" />
    <!-- fixed-bottom (class) -->
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    FooterComponent,
    NavigationComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: georgia, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background-color: #f4a261;
  font-size: 14;
}

#toplevel-wrapper {
  padding: 0; /* Added */
}

nav {
  padding: 30px;
  text-align: center;
  background-color: #ebebeb;
  a {
    font-weight: bold;
    color: blue;

    &.router-link-exact-active {
      color: #1dd3b0;
    }
  }
  a:hover {
    color: #a2d2ff;
    animation: pulsate 1s ease-in-out;
  }

  @keyframes pulsate {
    0% {
      box-shadow: 0 0 25px #5ddcff, 0 0 25px #4e00c2;
    }
  }
}
</style>

