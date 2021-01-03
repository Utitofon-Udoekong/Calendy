import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBcpJGK5YivwE0KNo0mD7xkm_Hh2Q6o5wA",
  authDomain: "userinfos-fb1ba.firebaseapp.com",
  projectId: "userinfos-fb1ba",
  storageBucket: "userinfos-fb1ba.appspot.com",
  messagingSenderId: "1008233912347",
  appId: "1:1008233912347:web:4da3c5b0570487230500be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
