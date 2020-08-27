<template>
  <v-row justify="center">
    <v-dialog v-model="$store.state.dialog" :width="$vuetify.breakpoint.smAndDown ? '75%' : '50%'">
      <v-card>
        <v-img class="text-right" v-if="img" :src="img" height="100px">
          <v-btn class="ma-3" icon dark @click="dialog = true">
            <v-icon :color="img ? $store.state.color : null">mdi-image-plus</v-icon>
          </v-btn>
        </v-img>
        <v-sheet v-else class="text-right" :color="$store.state.color" height="100px">
          <v-btn class="ma-3" icon dark @click="dialog = true">
            <v-icon :color="img ? $store.state.color : null">mdi-image-plus</v-icon>
          </v-btn>
        </v-sheet>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-row>
                <v-col cols="12" sm="7" md="8">
                  <v-text-field
                    v-model="title"
                    label="표제"
                    :color="$store.state.color"
                    clearable
                    required
                    :rules="[v => !!v || 'Title is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="5" md="4">
                  <v-text-field
                    v-model="name"
                    label="담당자"
                    :color="$store.state.color"
                    clearable
                    required
                    :rules="[v => !!v || 'Name is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="description"
                    label="설명"
                    :color="$store.state.color"
                    clearable
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :color="$store.state.color"
            text
            @click="reset(), $store.state.dialog = false, img = null"
          >취소</v-btn>
          <v-btn v-if="valid" :color="$store.state.color" dark @click="validate()">추가</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" :width="$vuetify.breakpoint.smAndDown ? '90%' : '75%'">
      <v-card>
        <v-tabs :color="$store.state.color" vertical>
          <v-tab>URL</v-tab>
          <v-tab>General</v-tab>
          <v-tab>English & History</v-tab>
          <v-tab>Math & Science</v-tab>
          <v-tab>Arts</v-tab>
          <v-tab>Sports</v-tab>
          <v-tab>Other</v-tab>
          <v-tab-item>
            <v-col cols="12">
              <v-text-field v-model="img" label="URL" :color="$store.state.color" clearable></v-text-field>
            </v-col>
          </v-tab-item>
          <v-tab-item>2</v-tab-item>
          <v-tab-item>3</v-tab-item>
          <v-tab-item>4</v-tab-item>
          <v-tab-item>5</v-tab-item>
          <v-tab-item>6</v-tab-item>
          <v-tab-item>7</v-tab-item>
        </v-tabs>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    img: null,
    title: null,
    description: null,
    name: null,
    valid: true,
    lazy: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.axios();
    },
    reset() {
      this.$refs.form.reset();
    },
    axios: function () {
      axios
        .post(
          "//" +
            this.$store.state.server +
            (this.$store.state.group ? "/node" : "/group"),
          {
            img: this.img,
            title: this.title,
            description: this.description,
            name: this.name,
            group: this.$store.state.group,
          }
        )
        .then((res) => {
          if (this.$store.state.group)
            this.$store.state.nodeItems.push(res.data);
          else this.$store.state.groupItems.push(res.data);
          this.$store.state.dialog = false;
          this.img = null;
          this.reset();
        });
    },
  },
};
</script>
