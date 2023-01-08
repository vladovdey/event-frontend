<template>
  <div class="menu-container">
    <ul>
      <li class="menu-item">
        <span @click="showEventMenu = !showEventMenu">Редактор мероприятий</span>
        <ul v-if="showEventMenu">
          <li>
            <router-link :to="('/admin/add-event')">
            Добавить мероприятие
            </router-link>
          </li>
        </ul>
      </li>
      <li class="menu-item">
        Просмотр регистраций
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AdminMenu",
  data: function(){
    return {
      showEventMenu: false
    }
  },
  methods: {
    
  }
}
</script>

<style>
.menu-container{
  background-color: rgba(0,0,0,0.3);
  width: 33%;
  margin: 0 auto;
}
.menu-item{
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
}
.menu-item ul{
  margin-left: 10px;
  margin-top: 10px;
}
</style>