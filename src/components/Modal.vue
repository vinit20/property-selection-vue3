<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>{{ selectedLocation[0].name }} Properties</h2>
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue';

export default {
  name: "ModalPage",
  props: {
    isOpen: Boolean,
    selectedLocation: Array
  },
  setup(props) {
    // get some vue instance here which include emit, props, slots, attrs
    const instance = getCurrentInstance();
    const isOpenModal = ref(props.isOpen);
    const selectLocation = ref(props.selectedLocation);

    // use this for close modal
    function closeModal() {
      isOpenModal.value = false;
      instance.emit("close");
    }

    onMounted(() => {
      console.log("Modal mounted");
    });

    onUnmounted(() => {
      console.log("Modal unmounted");
    });

    return {
      isOpenModal,
      selectLocation,
      closeModal
    };
  }
};
</script>
 <style lang="less" scoped>
// use less css preprocessor
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  .modal-content {
    background-color: #fff;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 700px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    animation-name: modalopen;
    animation-duration: 0.4s;
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
}

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>