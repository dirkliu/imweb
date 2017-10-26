class TestPlugin {
}

TestPlugin.install = function (Vue, options) {
  Vue.prototype.$console = function (methodOptions) {
    console.log('Ok test!')
  }
}

export default TestPlugin
