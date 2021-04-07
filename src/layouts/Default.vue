<template>
  <div class='app-main-layout'>
    <nav-bar @clicked='isOpen = !isOpen'/>
    <side-bar v-model='isOpen'/>

    <main class='app-content' :class='{ "full" : !isOpen }'>
      <div class='app-page'>
        <router-view/>
      </div>
    </main>

    <div class='fixed-action-btn'>
      <router-link class='btn-floating btn-large blue' to='/record'>
        <i class='large material-icons'>add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/app/NavBar'
import SideBar from '../components/app/SideBar'
export default {
  name: 'Default',
  components: { NavBar, SideBar },
  data: () => ({
    isOpen: true
  })
}
</script>
