import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
//Loader
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
//Import Modules
import product from './modules/product'
import productdetail from './modules/productdetail'
import navcart from './modules/navcart'
import brandfilter from './modules/brandfilter'

import listTinhThanh from './modules/Tinh_Thanh';
import listSanPham from './modules/San_Pham';

Vue.use(Loading);
Vue.use(Vuex)
// const url = `https://localhost:5001/`

export default new Vuex.Store({
  modules: {
    listTinhThanh,
    listSanPham,
  }
})
