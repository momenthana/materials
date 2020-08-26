<template>
  <v-app-bar app :color="$store.state.color" dark prominent :src="$store.state.group ? $store.state.group.img : ''" style="-webkit-app-region: drag">
    <template v-slot:img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <v-app-bar-nav-icon v-if="$store.state.group" @click="$store.state.group = null">
      <v-icon>mdi-chevron-left</v-icon>
    </v-app-bar-nav-icon>

    <v-app-bar-nav-icon v-else @click="$store.state.drawer = true"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ $store.state.group ? $store.state.group.title : 'Materials' }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-text-field
        solo-inverted
        clearable
        v-model="search"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        :color="$store.state.color"
      ></v-text-field>
    </v-toolbar-items>

    <template v-slot:extension>
      <v-tabs align-with-title color="white">
        <v-tab>오름차순</v-tab>
        <v-tab>내림차순</v-tab>
      </v-tabs>

      <v-btn v-if="$store.state.online" fab color="white" bottom right absolute @click="$store.state.dialog = true">
        <v-icon :color="$store.state.color">mdi-plus</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Bar",

  data: () => ({
    search: null,
    dialog: false
  }),
};
</script>
