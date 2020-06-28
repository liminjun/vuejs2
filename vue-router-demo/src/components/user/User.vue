<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <div>User Id： {{id}}</div>
    <button @click="navigationToHome" class="btn btn-primary">Go to Home</button>
  </div>
</template>
<script>
export default {
  data() {
      return {
          id: this.$route.params.id
      }
  },
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