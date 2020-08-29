<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="item in this.$store.state.nodeItems"
        :key="item._id"
        :cols="$vuetify.breakpoint.xsOnly ? 12 : $vuetify.breakpoint.mdAndDown ? 6 : 4"
      >
        <v-card class="ma-3">
          <v-img v-if="item.img" :src="item.img" height="100px"></v-img>
          <v-sheet v-else :color="$store.state.color" height="100px"></v-sheet>

          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-subtitle>{{ item.description ? item.description : '설명이 비어있음' }}</v-card-subtitle>

          <v-card-actions>
            <v-btn :color="$store.state.color" dark @click="$store.state.node = item">보기</v-btn>

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
                  <v-btn
                    text
                    v-clipboard:copy="url + '/' + $store.state.group._id + '/' + item._id"
                  >링크 복사</v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn text :color="$store.state.color">수정하기</v-btn>
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

    <v-row justify="center">
      <v-dialog
        v-if="$store.state.node"
        @click:outside="$store.state.node = null, dialog = true"
        v-model="dialog"
        :width="$vuetify.breakpoint.smAndDown ? '75%' : '50%'"
      >
        <v-card>
          <v-img v-if="$store.state.node.img" :src="$store.state.node.img" height="100px"></v-img>
          <v-sheet v-else :color="$store.state.color" height="100px"></v-sheet>

          <v-card-title class="headline">
            {{ $store.state.node.title }}
            <v-btn class="ml-3" text>담당자 {{ $store.state.node.name }}</v-btn>

            <v-spacer></v-spacer>

            <v-menu>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-btn text :color="$store.state.color">수정하기</v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn text color="red" @click="axiosDelete($store.state.node._id)">삭제하기</v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>

          <v-card-subtitle>{{ $store.state.node.description ? $store.state.node.description : '설명이 비어있음' }}</v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn :color="$store.state.color" dark @click="$store.state.node = null" text>닫기</v-btn>
            <v-btn :color="$store.state.color" dark @click="print = true">인쇄</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-if="$store.state.node"
        @click:outside="print = false"
        v-model="print"
        :width="$vuetify.breakpoint.smAndDown ? '60%' : '40%'"
      >
        <v-card>
          <v-card-title>인쇄</v-card-title>

          <v-card-text>
            <vue-qrcode
              :value="`${url}/${$store.state.group._id}/${$store.state.node._id}`"
              :options="{ errorCorrectionLevel: 'H' }"
            />
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn :color="$store.state.color" dark @click="print = null" text>닫기</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import VueQrcode from "@chenfengyuan/vue-qrcode";

export default {
  name: "Node",

  components: {
    VueQrcode,
  },

  data: () => ({
    url: process.env.VUE_APP_BASE_URL,
    dialog: true,
    print: false,
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
      this.$store.state.nodeItems = null;
      axios
        .get("//" + this.$store.state.server + "/node", {
          params: {
            group: this.$store.state.group._id,
          },
        })
        .then((res) => {
          this.$store.state.nodeItems = res.data;
          this.sort();
        });
    },
    axiosDelete: function (id) {
      axios
        .delete("//" + this.$store.state.server + "/node/" + id)
        .then((res) => {
          const items = this.$store.state.nodeItems;
          if (res.status == 204) {
            this.$store.state.node = null;
            items.splice(
              items.findIndex((item) => item._id == id),
              1
            );
          }
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
