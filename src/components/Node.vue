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
            <v-btn color="#ff6f61" dark>보기</v-btn>

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
  name: "Node",

  data: () => ({
    items: [
      {
        id: "1",
        img:
          "https://lh3.googleusercontent.com/hgR_vN46zGWDhTd1j9zbmCFdXty6VONuNcBqbh_vO9Ci2RuBGJVxQkO2d3Zbz9LRuup0WeHggzGv=w604-h206-p",
        title: "모니터",
        description: "본관 1층 소프트웨어 실습실",
        name: "김하나"
      },
      {
        id: "2",
        img:
          "https://lh3.googleusercontent.com/hgR_vN46zGWDhTd1j9zbmCFdXty6VONuNcBqbh_vO9Ci2RuBGJVxQkO2d3Zbz9LRuup0WeHggzGv=w604-h206-p",
        title: "교사용 PC",
        description: "본관 1층 소프트웨어 실습실",
        name: "김하나"
      },
      {
        id: "3",
        img:
          "https://lh3.googleusercontent.com/hgR_vN46zGWDhTd1j9zbmCFdXty6VONuNcBqbh_vO9Ci2RuBGJVxQkO2d3Zbz9LRuup0WeHggzGv=w604-h206-p",
        title: "빔프로젝터",
        description: "본관 1층 소프트웨어 실습실",
        name: "김하나"
      }
    ]
  })
};
</script>