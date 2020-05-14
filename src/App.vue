<template>
  <v-app>
    <Bar/>
    <Nav/>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Bar from './components/Bar'
import Nav from './components/Nav'
import Home from './components/Home'

export default {
  name: 'App',

  components: {
    Bar,
    Nav,
    Home
  },

  data: () => ({
    //
  }),
};
</script>
