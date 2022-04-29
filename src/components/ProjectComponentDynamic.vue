<template>
  <div class="container-md">
    <!-- switch to margin x over MD size(fluid and !fluid) -->
    <div class="row">
      <div class="row">
        <!-- Searchbar -->
        <div class="row justify-content-center align-items-center">
          <div class="col-md-8">
            <div class="search d-flex mb-3">
              <input
                type="text"
                v-model="searchQuery"
                class="form-control"
                placeholder="Filter projects"
              />
              <button class="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Switched out project in projects, with searchedProjects, so it changes based on input from search/category -->
      <div
        v-for="project in searchedProjects"
        :key="project.projectID"
        class="col-12 col-sm-6 col-md-4 mb-4"
      >
        <!-- Add v-else to see effect -->
        <div class="card">
          <img :src="project.projectURL" class="card-img-top" alt="..." />
          <div class="card-body justify-content-start">
            <!-- // 1 (also go to router/index.js) -->
            <router-link
              :to="{
                name: 'ProjectDetails',
                params: { id: project.projectID },
              }"
            >
              <!-- Router-link connect with router/index.js file. It send the id of the given item(project) in the forLoop, so we can then use it to present only data from that objectItem -->
              <h5 id="cardOne" class="card-title">
                {{ project.projectTitle }}
              </h5>
            </router-link>
            <p class="card-text">{{ project.projectDescription }}</p>
            <p></p>
            <a href="#" class="btn btn-primary"
              >Go somewhere {{ project.projectID }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue"; // Ref for data variables - Computed for when we filter/search
import getProjects from "../modules/getProjects"; // 1 Make getProject.js in modules folder
// 2 Make router-link + route/index.js setup
export default {
  setup() {
    // Variables to show project on button click + add a css Class when its true
    let showData = ref(false); // Hide and show 2 different Div blocks. If statement is true, show v-if="", if statement is false, show v-else
    let isActive = ref(false); // Adding css class: Line 23
    function showMeDaData() {
      showData.value = !showData.value;
      isActive.value = !isActive.value;
    }
    const { projects } = getProjects(); // 1
    // search variable :: empty at start, and will only be populated when we either type in characters or click a "category"
    const searchQuery = ref(""); // 3

    // 3
    // Only a standard search without check for category names
    const searchedProjects = computed(() => {
      return projects.value.filter((project) => {
        return (
          project.projectTitle
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });

    return {
      searchQuery, // Search                        // 3
      searchedProjects, // Search                  // 3

      showData, // expose variable to Vue view
      showMeDaData, // expose variable to Vue view
      isActive, // expose variable to Vue view
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

<style lang="scss">
container-md {
  font-family: georgia, sans-serif;
}
</style>
