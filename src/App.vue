<template>
  <div id="root">
    <div class="container">
      <RegistrationForm :eventParam="selectedEvent" />
    </div>
  </div>
</template>

<script>
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