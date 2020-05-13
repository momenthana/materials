<template>
  <v-app>
    <Bar/>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Bar from './components/Bar'
import Home from './components/Home'

export default {
  name: 'App',

  components: {
    Bar,
    Home
  },

  data: () => ({
    //
  }),
};
</script>
