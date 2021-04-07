<template>
  <div id='app'>
    <component :is='layout'>
      <router-view/>
    </component>
  </div>
</template>

<script>
import Empty from './layouts/Empty'
import Default from './layouts/Default'
export default {
  components: { Empty, Default },
  computed: {
    layout () {
      return this.$route.meta.layout || 'empty'
    }
  }
}
</script>

<style lang='scss'>
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
