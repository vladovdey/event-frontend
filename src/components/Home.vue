<template>
  <div class="container">
    <div class="info center">
      <h1>Присоединяйтесь</h1>
      <p>Пожалуйста, выберите соответсвующий город из списка ниже.</p>
    </div>
    <CityList :events=events />
    <TestComp/>
  </div>
</template>

<script>
import CityList from '@/components/CityList.vue'
import TestComp from '@/components/Test-Comp.vue';

export default {
  name: 'HomePage',
  components: {
    CityList,
    TestComp
  },
  data: function(){
    return{
      events: [],
      message: 'ebal'
    }
  },
  methods: {
    formatingEvents: function(events){ // data formating
      let formatedData = [];
      const date = new Date();
      const { currentDay, currentMonth } = { currentDay: date.getDate(), currentMonth: date.getMonth()+1};
  
      events.forEach((elem)=>{
        let formatedDate = elem.date.slice(0,-5);
        elem.date = formatedDate;

        const elemDateArr = elem.date.split('.');
        const {elemDay, elemMonth} = { elemDay: elemDateArr[0] , elemMonth: elemDateArr[1] };

        if(elemMonth == currentMonth && elemDay <= currentDay){
          elem.active = false;
        }else if(elemMonth < currentMonth){
          elem.active = false;
        }else{
          elem.active = true;
        }

        if(!elem.location){
          elem.location = 'Место проведения уточняется';
        }

        formatedData.push(elem);
      });

      return formatedData;
    }
  },
  created: function() {
    let getEvents = [
        {
          id: 0,
          date: "16.10.2022",
          city: "Новосибирск",
          location: "Grand Autograph Hotel, улица Орджоникидзе, 31",
          path: '/novosibirsk'
        },
        {
          id: 1,
          date: "20.10.2022",
          city: "Екатеринбург",
          location: "Novotel, ул. Энгельса, 7",
          path: '/ekb'
        },
        {
          id: 2,
          date: "25.10.2022",
          city: "Тюмень",
          location: "Double Tree by Hilton, ул. Орджоникидзе 46",
          path: '/tumen'
        },
        {
          id: 3,
          date: "26.10.2022",
          city: "Сургут",
          location: null,
          path: '/surgut'
        },
        {
          id: 4,
          date: "28.10.2022",
          city: "Волгоград",
          location: "Novotel, ул. Энгельса, 7",
          path: '/volgograd'
        },
        {
          id: 5,
          date: "01.11.2022",
          city: "Владикавказ",
          location: "Double Tree by Hilton, ул. Орджоникидзе 46",
          path: '/vladikavkaz'
        },
        {
          id: 6,
          date: "15.12.2022",
          city: "Ростов-на-Дону",
          location: null,
          path: '/rostov'
        },
        {
          id: 7,
          date: "23.12.2022",
          city: "Краснодар",
          location: "Novotel, ул. Энгельса, 7",
          path: '/kransodar'
        },
        {
          id: 8,
          date: "25.12.2022",
          city: "Кисловодск",
          location: "Double Tree by Hilton, ул. Орджоникидзе 46",
          path: "/kislovodsk"
        },
        {
          id: 9,
          date: "27.12.2022",
          city: "Ставрополь",
          location: null,
          path: '/stavropol'
        },
      ];
    this.events = this.formatingEvents(getEvents);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
