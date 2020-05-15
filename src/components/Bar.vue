<template>
    <v-app-bar
      absolute
      color="#ff6f61"
      dark
      prominent
      src=""
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="$store.state.drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Materials</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>1</v-tab>
          <v-tab>2</v-tab>
          <v-tab>3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'Bar'
  }
</script>
