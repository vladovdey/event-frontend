<template>
  <ul class="custom-grid">
    <li class="city-item list-item" v-for="(event, index) in events" :key="index" @click="$emit('open-popup', event)">
      {{ event.city }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityList",
  props: ["events"],
};
</script>

<style scoped>
    *{
        color: #018c9c;
    }
    .custom-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 20px;
        grid-column-gap: 40px;
    }
    .city-item{
        background-color: #fff;
        color:#018c9c;
        font-size: 27px;
        text-align: center;
        padding: 15px 0;
        border: 2px solid #018c9c;
        border-radius: 10px;
        cursor: pointer;
    }
    .city-item:hover{
        background-color: #018c9c;
        color: #fff;
    }
</style>