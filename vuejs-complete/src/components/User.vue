<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <p>Current Name: {{name}}</p>
    <p>Current Age: {{ age }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          @nameWasReset="name=$event"
          :resetFn="resetName"
          :userAge="age"
          @ageWasEdited='age=$event'
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      name: "Max",
      age: 30
    };
  },
  methods: {
    changeName() {
      this.name = "Anna";
    },
    resetName() {
      this.name = 'Max';
    }
  },
  created() {
    eventBus.$on("ageWasEdited", age => {
      this.age = age;
    });
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
