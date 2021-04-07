<template>
  <ul class='sidenav app-sidenav' :class='{ "open" : value   }'>
    <router-link
        v-for='(link, index) in links'
        :key='index+link.title'
        :to='link.to'
        v-slot='{ navigate, isActive, isExactActive }'
        custom
    >
      <li :class='{ "active": link.exact ? isExactActive : isActive }'>
        <a
            @click='navigate'
            class='waves-effect waves-orange pointer'
        >{{ link.title }}
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['value'],
  data: () => ({
    links: [
      {
        title: 'Счет',
        to: '/',
        exact: true
      },
      {
        title: 'История',
        to: '/history'
      },
      {
        title: 'Планирование',
        to: '/planning'
      },
      {
        title: 'Новая запись',
        to: '/record'
      },
      {
        title: 'Категории',
        to: '/categories'
      }
    ]
  })
}
</script>

<style scoped>

</style>
