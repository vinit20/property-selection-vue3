<template>
  <div class="app-main-container">
    <router-view></router-view>
  </div>
</template>

<script>
// import LocationSelection from './components/LocationSelection.vue';
// import CartPage from '../src/components/CartPage.vue'
export default {
  components: {
    // LocationSelection,
    // CartPage
  },
};
</script>

<style scoped>
.app-main-container{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
</style>