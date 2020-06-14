<template>
  <v-app>
    <Bar/>
    <Nav/>

    <v-content>
      <Group v-if="$store.state.content == 'group'"/>
      <Node v-else/>
    </v-content>
  </v-app>
</template>

<script>
import Bar from './components/Bar'
import Nav from './components/Nav'
import Group from './components/Group'
import Node from './components/Node'

export default {
  name: 'App',

  components: {
    Bar,
    Nav,
    Group,
    Node
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
