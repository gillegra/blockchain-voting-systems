import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#597EF7',
                secondary: '#4E5C93',
                accent: '#FAAD14',
            },
        },
    },
});
