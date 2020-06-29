<template>
  <div>
    <h1>The User Page</h1>
    <hr />
 
    <button @click="navigationToHome" class="btn btn-primary">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {

  watch: {
      '$route'(to, from){
          this.id = to.params.id
      }
  },
  methods: {
    navigationToHome() {
      this.$router.push("/");
    }
  }
};
</script>