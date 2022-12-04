<template>
  <div>
    <h1>Добро пожаловать на страницу {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "CityPage",
  data(){
    return {
    } 
  },
  props: ['id']
}
</script>