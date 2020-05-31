<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <button class="btn btn-primary" @click="show=!show">Show Alert</button>
        <br />
        <br />
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info.</div>
        </transition>
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is some info.</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin],
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
   transition: opacity 1s;
   opacity: 0;
}
.slide-enter{
  opacity: 0;
  /* animation: slide-in 1s ease-out forwards; */
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
  /* opacity: 1; */
}
.slide-leave-active {
   animation: slide-out 1s ease-out forwards;
   transition: opacity 3s;
   opacity: 0;
}
@keyframes slide-in {
  from {
    transition: translateY(20px);
  }
  to {
    transition: translateY(0);
  }
}
@keyframes slide-out {
  form {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
