<template>
  <div v-if="formStatus" class="form-container container">
    <p class="center">Форма регистрации на мероприятия в {{ cityName }}</p>
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
  <div v-else>
    <p style="text-align: center;">Не смогли определить твой город</p>
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
      cityName: "",
      formStatus: true
    };
  },
  props: ["eventParam"],
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
  created: function () {
    let param = window.location.search.substr(1).split("=")[1];
    if(param){
      this.cityName = decodeURI(param);
    }else{
      this.formStatus = false; 
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 340px;
  width: 100%;
}
input{
  box-sizing: content-box;
  font-size: 18px;
}
input:not([type="radio"], [type="checkbox"], [type="submit"]) {
  max-width: 640px;
  width: 100%;
  height: 40px;
  margin: 8px auto;
  padding-left: 10px;
  border: 1px solid #018c9c;
  border-radius: 10px;
}

input[type="submit"]{
  background-color:#FF6B00;
  color: #fff;
  max-width: 200px;
  height: 60px;
  width: 100%;
  margin: 20px auto 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
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