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
          :type="showToken ? 'text' : 'password'"
          :append-icon="showToken ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append="showToken = !showToken"
        ></v-text-field>
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
import axios from 'axios'

export default {
  name: "Nav",

  data: () => ({
    showToken: false,
  }),

  created() {
    this.axios()
  },

  watch: {
    '$store.state.server': function () {
      localStorage.setItem('server', this.$store.state.server)
      this.axios()
    },
    '$store.state.token': function () {
      localStorage.setItem('token', this.$store.state.token)
      this.axios()
    }
  },

  methods: {
    axios: function () {
      this.$store.state.online = false
      axios.get('//' + this.$store.state.server + '/').then((res) => {
        this.$store.state.online = res.status == 200 ? true : false
      })
      .catch(() => {})
    }
  }
};
</script>
