<template>
  <div>
    <Bar />
    <Nav />

    <v-main v-if="$store.state.online">
      <Node v-if="$store.state.group" />
      <Group v-else />
      <Dialog />
    </v-main>
    <v-main v-else>
      <p class="mt-12 text-center">서버에 연결되지 않음</p>
    </v-main>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
import Nav from "@/components/Nav.vue";
import Node from "@/components/Node.vue";
import Group from "@/components/Group.vue";
import Dialog from "@/components/Dialog.vue";
import axios from "axios";

export default {
  name: "home",

  components: {
    Bar,
    Nav,
    Node,
    Group,
    Dialog,
  },

  created() {
    this.$store.state.node = this.$route.params.node;

    if (this.$route.params.group) {
      axios
        .get(
          "//" + this.$store.state.server + "/group/" + this.$route.params.group
        )
        .then((res) => {
          this.$store.state.group = res.data;
        });
    }
  },
};
</script>
