<template>
  <div>
    <Bar />
    <Nav />

    <v-main>
      <Node v-if="$store.state.group" />
      <Group v-else />
      <Dialog />
    </v-main>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue"
import Nav from "@/components/Nav.vue"
import Node from "@/components/Node.vue"
import Group from "@/components/Group.vue"
import Dialog from "@/components/Dialog.vue"

export default {
  name: "Home",

  components: {
    Bar,
    Nav,
    Node,
    Group,
    Dialog
  },

  created () {
    this.$store.state.group = this.$route.params.group
    this.$store.state.node = this.$route.params.node
  }
};
</script>
