<template>
  <div class="form-container">
    <h2>OMKATECH ASSIGNMENT</h2>
    <Form :stateData="stateData" @selectedLocationData="selectLocationData" @modalOpen="modalOpen" />
    <Modal :isOpen="isModalOpen" @close="closeModal" :selectedLocation="selectedLocation">
      <PropertySelection :selectedLocation="selectedLocation" />
    </Modal>
  </div>
</template>

<script>
import { ref } from 'vue';
import Modal from "../components/Modal.vue";
import PropertySelection from "../components/PropertySelection.vue";
import Form from "../components/FormPage.vue";
import STATE_DATA from "../utils/state-data.json";

export default {
  name: "LocationSelection",
  components: {
    Modal,
    PropertySelection,
    Form
  },
  setup() {
    const selectedLocation = ref([]);
    const isModalOpen = ref(false);
    const stateData = STATE_DATA;

    const selectLocationData = (value) => {
      selectedLocation.value = value;
    };

    const modalOpen = (value) => {
      console.log(value, "value");
      isModalOpen.value = value;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    return {
      selectedLocation,
      isModalOpen,
      stateData,
      selectLocationData,
      modalOpen,
      closeModal
    };
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 50px;
}
.form-container {
  width: 30%;
  background-color: #fff;
  padding: 30px 60px 60px 60px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
@media (max-width: 767px) {
  .form-container {
    width: 100%;
    margin: 20px;
    padding: 20px;
  }
}
</style>