<template>
  <div class='grey darken-1 empty-layout'>
    <router-view/>
  </div>
</template>

<script>
import messages from '@/utils/messages'
export default {
  name: 'Empty',
  watch: {
    error (fbError) {
      if (!fbError) return
      this.$error(messages[fbError.code] || 'Что-то пошло не так')
      this.$store.commit('setError', null)
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
  }
}
</script>

<style scoped>

</style>
