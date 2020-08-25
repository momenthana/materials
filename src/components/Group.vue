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
          <v-sheet v-else color="#ff6f61" height="100px"></v-sheet>

          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-subtitle>{{ item.description ? item.description : '설명이 비어있음' }}</v-card-subtitle>

          <v-card-actions>
            <v-btn color="#ff6f61" dark @click="$store.state.group = item._id">보기</v-btn>

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
                  <v-btn text>수정하기</v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn text color="#ff6f61">삭제하기</v-btn>
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
import axios from 'axios'

export default {
  name: 'Group',

  created() {
    this.axios()
  },

  watch: {
    '$store.state.server': function () {
      this.axios()
    }
  },

  methods: {
    axios: function () {
      this.$store.state.groupItems = null
      axios.get('//' + this.$store.state.server + '/group').then((res) => {
        this.$store.state.groupItems = res.data
      })
    }
  }
}
</script>
