<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  mounted() {
    const dark = window.matchMedia('(prefers-color-scheme: dark)')
    this.$vuetify.theme.dark = dark.matches
    dark.addEventListener('change', () => {
      this.$vuetify.theme.dark = dark.matches
    })
  }
}
</script>
