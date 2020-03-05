import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'id',
  messages: {
    en: {
      welcomeMsg: 'Welcome to Your Vue.js App',
      pluginsTxt: 'Installed CLI Plugins',
      guideTxt: 'For a guide and recipes on how to configure / customize this project,{break} check out the {action}',
      guideDocTxt: 'vue-cli documentation'
    },
    id: {
      welcomeMsg: 'Monggo Kerso',
      pluginsTxt: 'CLI Plugins nggih',
      guideTxt: 'konpigurasi proyek,{break} Delok {action}',
      guideDocTxt: 'dokumentasi'
    }
  },
  dateTimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }
    },
    id: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        haour12: true
      }
    }
  }
})
