module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'io.github.momenthana.material',
        productName: 'Material',
        publish: 'github'
      }
    }
  }
}