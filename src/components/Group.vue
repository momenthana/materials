<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="item in items"
        :key="item"
        :cols="$vuetify.breakpoint.xsOnly ? 12 : $vuetify.breakpoint.mdAndDown ? 6 : 4"
      >
        <v-card class="ma-3">
          <v-img :src="item.img" height="100px"></v-img>

          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-subtitle>{{ item.description }}</v-card-subtitle>

          <v-card-actions>
            <v-btn color="#ff6f61" dark @click="$store.state.group = item">보기</v-btn>

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
export default {
  data: () => ({
    items: [
      {
        id: "1",
        img:
          "https://lh3.googleusercontent.com/Y2MgzmpsyjRF-K1bYxOI7GGiOJE6s79qHuxirOsEecNJWETJbhv1EKTGscvvMRgX1jWOomiya1Hh=w302-h103-p",
        title: "소프트웨어 실습실 물품",
        description: "본관 1층 소프트웨어 실습실",
        name: "김하나"
      },
      {
        id: "2",
        img:
          "https://lh3.googleusercontent.com/aeO9kOTMbhDOobef-jXk-WtcKCWCVm0Q4AzjnmGknoBe_skXpDeJ12XnvO7QKOF6yjg_1SUxRBnY=w302-h103-p",
        title: "과학실 물품",
        description: "본관 4층 과학실",
        name: "김하루"
      },
      {
        id: "3",
        img:
          "https://lh3.googleusercontent.com/ccJZMep6SxnC45as3BQFpkJXuwSgMYBtQ6vt-DypuA1L2pWrv6i5PQB1IUNLZXyWI2v_GSRvErAs=w302-h103-p",
        title: "음악실 물품",
        description: "본관 4층 음악실",
        name: "김하라"
      }
    ]
  })
};
</script>