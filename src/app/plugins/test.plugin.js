export default class TestPlugin {
}

TestPlugin.install = function (Vue, options) {
  Vue.protype.$console = function (methodOptions) {
    console.log('Ok test!')
  }
}
