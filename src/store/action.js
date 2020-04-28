import axios from "axios"
// import qs from "qs"
import state from "./state";

axios.defaults.withCredentials = true; // 允许携带cookie

export default {
  // 获取手机验证码登录
  // queryTelCode(store,obj){
  //     axios({
  //         url:"/pa/v1/web/login/sms/send",
  //         method: "options"
  //     }).then(function(res){
  //         console.log(res);
  //         return axios({
  //             url:"/pa/v1/web/login/sms/send",
  //             method: "post",
  //             headers: {
  //                 "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
  //                 "client-id": "111101",
  //                 "device-id": "3072632427",
  //                 "Server-Origin":"js-sdk",
  //                 "ver-num": "1.04.01"
  //             },
  //             transformRequest:[function(data){
  //                 data=qs.stringify(data)
  //                 return data
  //             }],
  //             data:{
  //                 verify_type:"1",
  //                 phone_code:"86",
  //                 phone:obj.tel,
  //                 invisible_sig:"%7B%22a%22%3A%22FFFF0N00000000007DA2%22%2C%22c%22%3A%221573632233300%3A0.05177344794174232%22%2C%22d%22%3A%22nvc_login%22%2C%22j%22%3A%7B%22test%22%3A1%7D%2C%22h%22%3A%7B%22umidToken%22%3A%22T620A2308E5A551AE9D70EAD1036C27E67A80CEFD5A0C9B420BC3D7CBA6%22%7D%2C%22b%22%3A%22121%23D7dlkR570WllVl2PxVS2l9kGechfKvGV9lbbx1n5oF4sT0sr5hx5lwLYAcFfKujVllgm%2BalPJAkSA3rnqdjIlwXYLaMvN4o9lGuYZ7pIKM9STQrJEmD5lwLYAcfdK5jVVmgY%2BzP5KMlVA3rnEkDIbwLYOcMYITUkvluVS0bvsbc9MtFPe69%2BQ2ibYnsshu%2FmCjVDkeILF9K0bZs0JnCVVr7B027T83hybbi0CNkXTNn3lPi0n6XSp2D0kZ748u%2FmCbibCeIaFtFbbZrDnnx9pCibCZ0T83BhbZibIItaKdK01ZiguWxVuQAREiT8SuABZZsjk%2BHXFInSlgHO9SYrxT%2BpNbfciNDlpo%2F%2B2JLEQU4xsURb5E9QKJl9f4HK8YK%2FtpTGKeWZgLk2NpgELmmlSUQda0l3aKLuipmjPU1F9srlZhxz%2FT46BbZsUxzAzarCP14RqzeyxXARgQuSuN1PocFrkmlGzp%2BJYnkxzJr1N5yypHbQCjeIfLIECgx4tbA7B7%2B%2BxTuO06qLRGUAvrMAk%2B0d0hYR0TYgTZR1%2BRnBsTKkhFId1URwRL7uFbT9OQudI87WSzKOfJ2nL6USQXVBKqh8Pj2KLH%2BfGkmmjirKISnionB%2FHnGJiONZO%2FXWDF2JSHr3vNRBr7Q%2FkMQWxMkZVY%2FTXUVmUIv18rup9SO5VWQpGCDe48kfPtFZxlKKUxlsnN5MCtYgzi5Kr%2Fqssuxalk%2BsPCfXXaXeep%2BmbRQkMFpX28SI4gspVnzjC45eFx7JvUcyUEKxsO26avDqoFBgGNTbl4QtyZnpWL5vQVFJRfBFOTdmtQ99AVlR9YMkJElT9y60uqbPVhMtheea%2BYif2P5raUhjGbDQTzYDATGphEA4ZVoij5NpE4F3sVX%2FEX%2Bv8TDiB9sNHTxYG7q79ha39d6wwuI3C8uNlx9vIeAAv9FsWG%2Bd2pAIjodbuZD8eD2JKbrGw2HdPAOw9mNww4a5C0vjKxjLSJAN8o2VEfMbPG64XMvPIQ5RAtI5XIVEjqlXhCRnr6l%2BcsRvbMfzjV5d%2F2y3zaLddtIGHee9oWRpEBB2lc9%2FKHXPAklQ%2B%2Fzbg9SKTwQXrZsJ%2FxaaHAWJZ2j06J5XPmjoZVikgQbIwa1mONorbKg4rn%2BNQhg8gCVODiEXctPNVpYQu8VWtQ2E%2FszxZiO1oF62f06LXtU7jBa7q7T1m2U2tWJG%2Bp5Qykch3vo5DhCas%2FRJIS92o6J7s7ZDZc%2BEHCGetiHBgAGAsFaBkLRYOnOhl1PkQH%2B2p50Z1XfVgfLRm%2FvoEdkw28kHMgp7eXnLf%2FiMjXxJDQmrJr1JziDSQBd%3D%22%2C%22e%22%3A%22v6XdggRNEFi-otp8SdcBmriqjlrkRoj65tztt2GJaK02ufvery5t6e1OxIGoUHpc7a0IbkE_0FA-F5WgiEpV7UkxqErrITG3jcJuZ6mOm9RvmKTNSeWX4VF6o0-_FnLGR3Qt-70BHiZsLAY2hdDesw%22%7D"
  //             }
  //         });
  //     });
  // },



  queryCode(store) {
    axios.get("/laji/login").then((res) => {
      console.log(res)
      store.commit("setCode", res.data)
    }).catch((err) => {
      console.log(err)
      // console.log("请求热搜词汇失败")
    })
  },







}