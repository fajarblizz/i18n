import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const dateTimeFormats = {
  'en-US': {
    short: 'yyyy-MM-DD', // custom formtting with string
    long: 'yyyy-MM-DD HH:mm:ss'
  },
  'ja-JP': {
    short: 'yyyy/MM/DD',
    long: 'yyyy/MM/DD HH:mm:ss'
  }
}

const i18n = new VueI18n({
  dateTimeFormats
})

new Vue({
  i18n
}).$mount('#app')
