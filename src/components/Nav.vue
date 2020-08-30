<template>
  <v-navigation-drawer v-model="$store.state.drawer" fixed temporary>
    <v-list-item class="mt-12">
      <v-list-item-content>
        <v-menu v-model="menu" :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              readonly
              v-bind="attrs"
              v-on="on"
              solo-inverted
              v-model="$store.state.color"
              placeholder="Color"
              prepend-icon="mdi-format-color-fill"
              :color="$store.state.color"
            ></v-text-field>
          </template>

          <v-color-picker light v-model="$store.state.color" elevation="15"></v-color-picker>
        </v-menu>
        <v-text-field
          solo-inverted
          v-model="$store.state.server"
          placeholder="Server"
          prepend-icon="mdi-server"
          :color="$store.state.color"
        ></v-text-field>
        <v-text-field
          solo-inverted
          v-model="$store.state.token"
          placeholder="Token"
          prepend-icon="mdi-key"
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
import axios from "axios";

export default {
  name: "Nav",

  data: () => ({
    menu: false,
    showToken: false,
  }),

  created() {
    this.axios();
  },

  watch: {
    "$store.state.color": function () {
      localStorage.setItem("color", this.$store.state.color);
      this.axios();
    },
    "$store.state.server": function () {
      localStorage.setItem("server", this.$store.state.server);
      this.axios();
    },
    "$store.state.token": function () {
      localStorage.setItem("token", this.$store.state.token);
      this.axios();
    },
  },

  methods: {
    axios: function () {
      this.$store.state.online = false;
      axios
        .get("//" + this.$store.state.server + "/")
        .then((res) => {
          this.$store.state.online = res.status == 200 ? true : false;
        })
        .catch(() => {});
    },
  },
};
</script>
