<template>
  <div class="home">
    <CityPage :id="$route.params.id"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CityPage from '@/components/CityPage.vue';

export default {
  name: 'CityView',
  components: {
    CityPage
  }
}
</script>