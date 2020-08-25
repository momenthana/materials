<template>
  <v-row justify="center">
    <v-dialog v-model="$store.state.dialog" :width="$vuetify.breakpoint.smAndDown ? '75%' : '50%'">
      <v-card>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-row>
                <v-col cols="12" sm="7" md="8">
                  <v-text-field
                    v-model="title"
                    label="표제"
                    color="#ff6f61"
                    clearable
                    required
                    :rules="[v => !!v || 'Title is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="5" md="4">
                  <v-text-field
                    v-model="name"
                    label="담당자"
                    color="#ff6f61"
                    clearable
                    required
                    :rules="[v => !!v || 'Name is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="description" label="설명" color="#ff6f61" clearable></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#ff6f61" text @click="reset(), $store.state.dialog = false">취소</v-btn>
          <v-btn v-if="valid" color="#ff6f61" dark @click="validate()">추가</v-btn>
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
          this.reset();
        });
    },
  },
};
</script>
