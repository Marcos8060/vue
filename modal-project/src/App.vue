<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="showModal">
      <AppModal :header="header"  :text="text" theme="sale" @close="toggleModal">
        <h1>I am a Slot</h1>
      </AppModal>
    </div>
    <div v-if="showModalTwo">
      <AppModalTwo :header="header"  :text="text" theme="sale" @close="toggleModalTwo">
        <h1>I am a Slot for Modal Two</h1>
      </AppModalTwo>
    </div>
    <button @click="toggleModal">Toggle Modal</button>
    <button @click="toggleModalTwo">Toggle Modal Two</button>
  </div>
</template>


<script>
import AppModal from './components/AppModal.vue'
import AppModalTwo from './components/AppModalTwo.vue';

export default {
  name: "App",
  components: { AppModal,AppModalTwo },
  data() {
    return {
      title: "My First Vue App",
      header:"Sign up for the giveaway",
      text: 'Marcos Ochieng',
      showModal:false,
      showModalTwo: false
    };
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
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
