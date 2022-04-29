<template>
  <nav>
    <router-link to="/"
      ><img
        class="mr-1"
        :src="require('../assets/personligt-logo.png')"
        height="150"
    /></router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/projekter">Projekter</router-link> |
    <router-link to="/om-mig">Om mig</router-link>
  </nav>
</template>

<style lang="scss">
.mr-1 {
  position: relative;
  left: -30%;
}
</style>

