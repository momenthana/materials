<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="item in this.$store.state.groupItems"
        :key="item._id"
        :cols="$vuetify.breakpoint.xsOnly ? 12 : $vuetify.breakpoint.mdAndDown ? 6 : 4"
      >
        <v-card class="ma-3">
          <v-img v-if="item.img" :src="item.img" height="100px"></v-img>
          <v-sheet v-else :color="$store.state.color" height="100px"></v-sheet>

          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-subtitle>{{ item.description ? item.description : '설명이 비어있음' }}</v-card-subtitle>

          <v-card-actions>
            <v-btn :color="$store.state.color" dark @click="$store.state.group = item">보기</v-btn>

            <v-btn text>담당자 {{ item.name }}</v-btn>

            <v-spacer></v-spacer>

            <v-menu>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-btn text v-clipboard:copy="url + '/' + item._id">링크 복사</v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn text :color="$store.state.color" @click="$store.state.dialog = true, $store.state.dialogItem = item, $store.state.fix = true">수정하기</v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn text color="red" @click="axiosDelete(item._id)">삭제하기</v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Group",

  data: () => ({
    url: process.env.VUE_APP_BASE_URL,
  }),

  created() {
    this.axiosGet();
  },

  watch: {
    "$store.state.server": function () {
      this.axiosGet();
    },
  },

  methods: {
    axiosGet: function () {
      this.$store.state.groupItems = null;
      axios.get("//" + this.$store.state.server + "/group").then((res) => {
        this.$store.state.groupItems = res.data;
        this.sort();
      });
    },
    axiosDelete: function (id) {
      axios
        .delete("//" + this.$store.state.server + "/group/" + id)
        .then((res) => {
          const items = this.$store.state.groupItems;
          if (res.status == 204)
            items.splice(
              items.findIndex((item) => item._id == id),
              1
            );
        });
    },
    sort() {
      const items = this.$store.state.group
        ? this.$store.state.nodeItems
        : this.$store.state.groupItems;
      if (this.$store.state.tab)
        items.sort((a, b) => b.name.localeCompare(a.name));
      else items.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
};
</script>
