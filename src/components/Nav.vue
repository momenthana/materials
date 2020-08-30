<template>
  <v-navigation-drawer v-model="$store.state.drawer" fixed temporary>
    <v-list-item class="mt-12">
      <v-list-item-content>
        <v-menu v-model="menu" :close-on-content-click="false" offset-x>
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
          v-model="$store.state.printer"
          placeholder="Printer"
          prepend-icon="mdi-printer"
          :color="$store.state.color"
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
    "$store.state.printer": function () {
      localStorage.setItem("printer", this.$store.state.printer);
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
