import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#00B4D8',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        brightBlue: '#00B4D8',
        darkBlue: '#0077B6',
        myGrey: '#F7F7F7',
        button: '#03045E',
        blueBlue: '#CAF0F8',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
