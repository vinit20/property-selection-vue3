<template>
  <div class="cart-page-main">
    <div class="cart-page" :class="{ 'blurred': formSubmitSuccessfully }">
      <h2>Cart Page</h2>
      <div class="selected-data">
        <span>
          <b>Selected Location:</b>
          {{ $route.query.selectedLocation }}
        </span>
        <span>
          <b>Selected Properties:</b>
          {{ Array.isArray($route.query.selectedProperty) ? $route.query.selectedProperty.join(', ') : $route.query.selectedProperty }}
        </span>
      </div>
      <Form @formSubmission="formSubmit" />
    </div>
    <p class="submit-form" v-if="formSubmitSuccessfully">Form Submitted Successfully</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Form from "../components/FormPage.vue";

export default {
  name: "CartPage",
  components: {
    Form
  },
  setup() {
    const formSubmitSuccessfully = ref(false);
    const router = useRouter();

    const formSubmit = (value) => {
      formSubmitSuccessfully.value = value;
      setTimeout(() => {
        formSubmitSuccessfully.value = false;
        router.push("/");
      }, 2000);
    };

    return {
      formSubmitSuccessfully,
      formSubmit
    };
  }
};
</script>

<style scoped>
.cart-page-main {
  width: 30%;
  background-color: #fff;
  padding: 40px 60px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}
h2 {
  text-align: center;
  margin-bottom: 60px;
}
.selected-data {
  display: flex;
  flex-direction: column;
}
.selected-data span {
  margin-bottom: 10px;
}
.submit-form {
  background: green;
  color: #fff;
  text-align: center;
  padding: 40px 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadeInOut 2s ease infinite alternate;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.blurred {
  filter: blur(1px); /* Adjust the blur amount as needed */
  pointer-events: none; /* Prevent clicking on blurred elements */
}

@media (max-width: 767px) {
  .cart-page-main {
    margin: 20px;
    padding: 20px;
    width: 100%;
  }
  .submit-form {
    width: 70%;
    padding: 30px;
  }
}
</style>