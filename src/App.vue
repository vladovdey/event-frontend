<template>
  <div id="root">
    <div class="header">
      <div class="container">
        <h1>Семинары TrueConf о замене иностранных ВКС-решений</h1>
      </div>
    </div>
    <div class="body container">
      <div class="container">
        <p>
          Этой осенью при поддержке ведущего отечественного производителя
          решения для видеосвязи TrueConf мы продолжаем серию обучающих
          семинаров о замене иностранных ВКС-решений.
        </p>
        <p>
          Семинары будут полезны всем специалистам, занимающимся внедрением и
          обслуживанием систем видеоконференцсвязи, оборудованием переговорных
          пространств, проведением вебинаров и дистанционным обучением.
        </p>
        <CityList :events="events" @open-popup="toggleRegPopup" />
        <div class="wrapper-popup" @click.self="toggleRegPopup" v-if="regPopup">
          <RegistrationForm :eventParam="selectedEvent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CityList from "@/components/CityList.vue";
import RegistrationForm from "./components/RegistrationForm.vue";

export default {
  name: "App",
  data: function () {
    return {
      events: [],
      selectedEvent: '',
      regPopup: false,
    };
  },
  components: {
    CityList,
    RegistrationForm,
  },
  methods: {
    getAllEvents: async () => {
      let events = [];
      //for local development
      let testStrEvents = [
        {
          date: "16.10.2022",
          city: "Новосибирск",
          location: "Grand Autograph Hotel, улица Орджоникидзе, 31",
        },
        {
          date: "20.10.2022",
          city: "Екатеринбург",
          location: "Novotel, ул. Энгельса, 7",
        },
        {
          date: "25.10.2022",
          city: "Тюмень",
          location: "Double Tree by Hilton, ул. Орджоникидзе 46",
        },
        {
          date: "26.10.2022",
          city: "Сургут",
          location: null,
        },
      ];
      events = testStrEvents;
      //end for local development

      return events;
    },
    toggleRegPopup: function (e) {
      this.selectedEvent = e.city;
      this.regPopup = !this.regPopup;
    },
  },
  computed: {},
  created: async function () {
    this.events = await this.getAllEvents();
  },
};
</script>

<style>

</style>