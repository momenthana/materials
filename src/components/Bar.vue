<template>
  <v-app-bar app color="#ff6f61" dark prominent src style="-webkit-app-region: drag">
    <template v-slot:img="{ props }">
      <v-img v-bind="props"></v-img>
    </template>

    <v-app-bar-nav-icon v-if="$store.state.group" @click="$store.state.group = null">
      <v-icon>mdi-chevron-left</v-icon>
    </v-app-bar-nav-icon>

    <v-app-bar-nav-icon v-else @click="$store.state.drawer = true"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ $store.state.group ? $store.state.group.title : 'Materials' }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-text-field
        solo-inverted
        clearable
        v-model="search"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        color="#ff6f61"
      ></v-text-field>
    </v-toolbar-items>

    <template v-slot:extension>
      <v-tabs align-with-title color="white">
        <v-tab>오름차순</v-tab>
        <v-tab>내림차순</v-tab>
      </v-tabs>

      <v-row justify="center">
        <v-dialog v-model="dialog" :width="$vuetify.breakpoint.smAndDown ? '75%' : '50%'">
          <template v-slot:activator="{ on, attrs }">
            <v-btn fab color="white" bottom right absolute v-bind="attrs" v-on="on">
              <v-icon color="#ff6f61">mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Title</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Label"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Label"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field label="Label"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Label"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field label="Label"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#ff6f61" text @click="dialog = false">취소</v-btn>
              <v-btn color="#ff6f61" dark @click="dialog = false">추가</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Bar",

  data: () => ({
    search: null,
    dialog: false
  })
};
</script>
