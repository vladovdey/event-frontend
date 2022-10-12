<template>
  <div class="form-container container">
    <p class="center">Форма регистрации на мероприятия</p>
    <form @submit.prevent="sendFormData" action="/">
      <input type="text" v-model="firstname" placeholder="Имя" />
      <input type="text" v-model="surname" placeholder="Фамилия" />
      <input type="email" name="email" v-model="email" placeholder="E-mail" />
      <input type="number" name="phone" v-model="phone" placeholder="Телефон" />
      <input
        type="text"
        name="company"
        v-model="company"
        placeholder="Компания"
      />
      <label class="center" for="integrator"
        >Представляете ли вы компанию системного интегратора или
        реселлера?</label
      >
      <div class="radio-container">
        <div class="radio-selector">
          <input
            type="radio"
            id="integrator1"
            v-model="integrator"
            name="integrator"
            value="Да"
            selected
          />
          <label for="integrator1">Да</label>
        </div>
        <div class="radio-selector">
          <input
            type="radio"
            id="integrator0"
            v-model="integrator"
            name="integrator"
            value="Нет"
          />
          <label for="integrator0">Нет</label>
        </div>
      </div>
      <input
        type="text"
        name="Должность"
        v-model="position"
        placeholder="Должность"
      />
      <input type="submit" value="Зарегистрироваться" />
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data: function () {
    return {
      firstname: "",
      surname: "",
      email: "",
      phone: "",
      company: "",
      integrator: "",
      position: "",
    };
  },
  methods: {
    sendFormData: function () {
      let dataObj = {
        firstname: this.firstname,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        company: this.company,
        integrator: this.integrator,
        position: this.position,
      };
      console.log(dataObj);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 640px;
  width: 100%;
}
input:not([type="radio"], [type="checkbox"]) {
  box-sizing: content-box;
  max-width: 640px;
  width: 100%;
  margin: 5px auto;
  padding-left: 10px;
  border: 1px solid #018c9c;
  border-radius: 10px;
  height: 30px;
  font-size: 16px;
}
.form-container {
  background-color: #fff;
  border-radius: 5px;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 40px;
}
.radio-container {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>