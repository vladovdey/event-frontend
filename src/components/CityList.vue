<template>
  <div class="city-list__container">
    <ul class="custom-grid">
      <li
        v-for="(event, index) in events"
        :key="index"
        @click="(event.active ? sel=event : '')"
        class="city-item list-item"
        :class="{ 'card-additional--opened' : sel == event,
                  'card-additional--disabled' : event.active == false }"
      >
        <span class="bold date-elem">{{ event.date }}</span> {{ event.city }}
        <div class="card-additional">
          <p class="card-info__ad">{{ event.location }}</p>
          <div class="button-container">
            <button class="button orange-button">
              <router-link to="/form">Это мой город</router-link>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityList",
  props: ["events"],
  data: function (){
    return {
      sel: null //selectedItem
    }
  },
  methods:{
  },
  created: function () {
    // Возможно придется применить данный способ, если не получится разделить колонки на css
    // let elemInColumn = Math.ceil(this.events.length/2);
    // console.log(this.events.slice(0,elemInColumn), this.events.slice(elemInColumn, this.events.length));
  },
};
</script>

<style scoped>
.city-list__container {
  max-width: 968px;
  margin: 0 auto;
}
.city-item {
  padding: 24px 0 24px 32px;
  font-size: 18px;
  cursor: pointer;
  max-width: 380px;
  width: 100%;
  color: #000000;
  border-radius: 6px;
}
.city-item.card-additional--opened {
  background-color: #f0fdfe;
  cursor: default;
}
.city-item:hover {
  background-color: #f0fdfe;
}
.date-elem {
  font-size: 22px;
  font-weight: 700;
  color: #242424;
}
.card-additional{
  display: none;
}
.custom-grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.city-item.card-additional--opened .card-additional{
  display: block;
}
.card-additional--disabled, .card-additional--disabled .date-elem{
  color: rgba(0,0,0, 0.2);
  cursor: default;
}
</style>