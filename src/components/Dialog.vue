<template>
  <v-row justify="center">
    <v-dialog v-model="$store.state.dialog" :width="$vuetify.breakpoint.smAndDown ? '75%' : '50%'">
      <v-card>
        <v-card-title>
          <span class="headline" v-text="$store.state.group ? '물품' : '그룹'"></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="7" md="8">
                <v-text-field v-model="title" label="표제" color="#ff6f61"></v-text-field>
              </v-col>
              <v-col cols="12" sm="5" md="4">
                <v-text-field v-model="description" label="담당자" color="#ff6f61"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="name" label="설명" color="#ff6f61"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#ff6f61" text @click="$store.state.dialog = false">취소</v-btn>
          <v-btn color="#ff6f61" dark @click="$store.state.dialog = false, axios()">추가</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    title: null,
    description: null,
    name: null,
  }),

  methods: {
    axios: function () {
      if (!this.$store.state.group) {
        axios
          .post("//" + this.$store.state.server + "/group", {
            title: this.title,
            description: this.description,
            name: this.name,
          })
          .then((res) => {
            this.$store.state.groupItems.push(res.data)
          })
      }
    },
  },
};
</script>
