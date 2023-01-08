<template>
  <div>
    <h1 class="center">Добавить мероприятие</h1>
    <form @submit.prevent="sendData">
      Дата
      <input type="text" v-model="date">
      Город
      <input type="text" v-model="city">
      Место проведения
      <input type="text" v-model="location">
      Путь
      <input type="text" v-model="path">
      <input type="submit" value="Отправить">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddEventForm",
  data: function () {
    return {
      date: '',
      city: '',
      location: '',
      path: ''
    };
  },
  methods: {
    sendData: function(){
      const obj = { 
        date: this.date,
        city: this.city,
        location: this.location,
        path: this.path
      };
      console.log(obj);
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
.center{
  text-align: center;
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