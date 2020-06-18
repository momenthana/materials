<template>
  <v-app>
    <Bar />
    <Nav />

    <v-main>
      <Node v-if="$store.state.group" />
      <Group v-else />
    </v-main>
  </v-app>
</template>

<script>
import Bar from "./components/Bar";
import Nav from "./components/Nav";
import Group from "./components/Group";
import Node from "./components/Node";

export default {
  name: "App",

  components: {
    Bar,
    Nav,
    Group,
    Node
  },

  mounted() {
    const dark = window.matchMedia("(prefers-color-scheme: dark)");
    this.$vuetify.theme.dark = dark.matches;
    dark.addEventListener("change", () => {
      this.$vuetify.theme.dark = dark.matches;
    });
  }
};
</script>
