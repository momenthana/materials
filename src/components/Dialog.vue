<template>
  <v-row justify="center">
    <v-dialog v-model="$store.state.dialog" :width="$vuetify.breakpoint.smAndDown ? '75%' : '50%'">
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
          <v-btn color="#ff6f61" text @click="$store.state.dialog = false">취소</v-btn>
          <v-btn color="#ff6f61" dark @click="$store.state.dialog = false">추가</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
