// import axios from "axios"
// const API_THONG_TIN_KHACH_HANG = {
//     state:{
//         ThongTinKhachHang: [],
//     },
//     getters:{
//         ThongTinKhachHang: state => state.ThongTinKhachHang,
//     },

//     mutations:{
//         GET_THONG_TIN_KHACH_HANG(state, ThongTinKhachHang) {
//             state.ThongTinKhachHang = ThongTinKhachHang
//         },
//     },
//     actions:{
//         async postDanhSachKhachHang({commit}, formInfo){
//             try {
//                 await axios.post("https://localhost:5001/api/Order",formInfo)
//                 commit('GET_THONG_TIN_KHACH_HANG', formInfo)
//                 console.log(resp)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }
// }

// export default API_THONG_TIN_KHACH_HANG