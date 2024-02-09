<template>
  <form>
    <div class="form-group" v-if="currentRouteName !== 'Cart'">
      <label for="location">Select Location:</label>
      <select v-model="selectedLocation" id="location" name="location" class="select-dropdown">
        <option
          class="option"
          v-for="state in stateData"
          :key="state.id"
          :value="state.name"
        >{{ state.name }}</option>
      </select>
    </div>
    <div class="form-group-mt" v-if="currentRouteName === 'Cart'">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="userData.name" id="name" name="name" class="input-field" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="userData.email" id="email" name="email" class="input-field" />
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" v-model="userData.phone" id="phone" name="phone" class="input-field" />
      </div>
    </div>
    <button v-if="currentRouteName !== 'Cart'" @click.prevent="submitForm" class="btn">Submit</button>
    <button
      :class="{ active: userData.name === '' || userData.email === '' || userData.phone === '' }"
      :disabled="userData.name === '' || userData.email === '' || userData.phone === ''"
      v-if="currentRouteName === 'Cart'"
      @click.prevent="submitFormWithUserData"
      class="btn"
    >Submit</button>
  </form>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "FormPage",
  props: {
    stateData: Array
  },
  setup() {
    const instance = getCurrentInstance();
    const selectedLocation = ref("New Delhi");
    const modalOpen = ref(false);
    const userData = ref({ name: "", email: "", phone: "" });
    const formSubmit = ref(false);

    const router = useRouter();
    const currentRouteName = computed(() => router.currentRoute.value.name);

    function submitForm() {
      const selectedLocationData = instance.props.stateData.filter(state => {
        return selectedLocation.value === state.name;
      });
      modalOpen.value = true;
      instance.emit("selectedLocationData", selectedLocationData);
      instance.emit("modalOpen", modalOpen.value);
    }

    function submitFormWithUserData() {
      userData.value = {};
      formSubmit.value = true;
      instance.emit("formSubmission", formSubmit.value);
    }

    onMounted(() => {
      console.log("Component mounted");
    });

    onUnmounted(() => {
      console.log("Component unmounted");
    });

    return {
      selectedLocation,
      userData,
      currentRouteName,
      submitForm,
      submitFormWithUserData
    };
  }
};
</script>

<style lang='less' scoped>
// use less css preprocessor
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fff;
  box-sizing: border-box;
}

.form-group {
  margin-bottom: 20px;
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
}
.form-group-mt {
  margin-top: 16px;
}

.select-dropdown {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fff; /* Set background color */
  .select-dropdown:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
}

.btn {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.btn:hover {
  background-color: #0056b3;
}
.active {
  cursor: not-allowed;
}
</style>