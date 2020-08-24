<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list-item>
      <v-list-item-content>
        <v-text-field
          solo-inverted
          v-model="$store.state.server"
          placeholder="Server"
          prepend-inner-icon="mdi-server"
          color="#ff6f61"
        ></v-text-field>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-text-field
          solo-inverted
          v-model="$store.state.token"
          placeholder="Token"
          prepend-inner-icon="mdi-key"
          color="#ff6f61"
        ></v-text-field>
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Nav",

  watch: {
    '$store.state.server': function () {
      localStorage.setItem('server', this.$store.state.server)
    },
    '$store.state.token': function () {
      localStorage.setItem('token', this.$store.state.token)
    }
  }
};
</script>
