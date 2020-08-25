<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list-item class="mt-12">
      <v-list-item-content>
        <v-text-field
          solo-inverted
          v-model="$store.state.color"
          placeholder="Color"
          prepend-inner-icon="mdi-format-color-fill"
          :color="$store.state.color"
        ></v-text-field>
        <v-text-field
          solo-inverted
          v-model="$store.state.server"
          placeholder="Server"
          prepend-inner-icon="mdi-server"
          :color="$store.state.color"
        ></v-text-field>
        <v-text-field
          solo-inverted
          v-model="$store.state.token"
          placeholder="Token"
          prepend-inner-icon="mdi-key"
          :color="$store.state.color"
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
    '$store.state.color': function () {
      localStorage.setItem('color', this.$store.state.color)
      this.axios()
    },
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
