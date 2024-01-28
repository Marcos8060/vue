<template>
  <div>
    <h1>{{ title }}</h1>
    <AppModal :header="header"  :text="text" theme="sale" />
  </div>
</template>


<script>
import AppModal from './components/AppModal.vue'

export default {
  name: "App",
  components: { AppModal },
  data() {
    return {
      title: "My First Vue App",
      header:"Sign up for the giveaway",
      text: 'Marcos Ochieng'
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
