<template>
  <div>
    <div class="test">
      {{ message }}
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Test-Comp',
  props: ['message']
}
</script>