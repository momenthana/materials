<template>
  <v-app>
    <Bar/>
    <Nav/>

    <v-content>
      <Home v-if="$store.state.content == 'home'"/>
      <List v-else/>
    </v-content>
  </v-app>
</template>

<script>
import Bar from './components/Bar'
import Nav from './components/Nav'
import Home from './components/Home'
import List from './components/List'

export default {
  name: 'App',

  components: {
    Bar,
    Nav,
    Home,
    List
  },

  mounted () {
    const dark = window.matchMedia('(prefers-color-scheme: dark)')
    this.$vuetify.theme.dark = dark.matches
    dark.addEventListener('change', () => {
      this.$vuetify.theme.dark = dark.matches
    })
  }
};
</script>
