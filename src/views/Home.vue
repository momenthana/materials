<template>
  <div>
    <Bar />
    <Nav />

    <v-main>
      <Node v-if="$store.state.group || $store.state.node" />
      <Group v-else />
    </v-main>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Nav from "@/components/Nav.vue";
import Node from "@/components/Node.vue";
import Group from "@/components/Group.vue";

export default {
  name: "Home",

  components: {
    Bar,
    Nav,
    Node,
    Group
  },

  created () {
    this.$store.state.node = this.$route.params.id
  }
};
</script>
