import axios from "axios"
import store from "../store";


axios.defaults.withCredentials = true; // 允许携带cookie

export default {
    // 获取用户信息列表
    queryUserInfoList() {
        const base = "/ssypzmd"
        axios.post(base + "/user/user/select").then((res) => {
            store.commit("setUserInfoList", res.data.extend.list)
        }).catch((err) => {
            console.log(err)
        })
    },
    // 新建用户信息
    newUserInfo(store, param) {
        const base = "/ssypzmd"
        axios.post(base + "/user/user/add", {
            "userinfoName": param.param.userinfoName,
            "userinfoPwd": param.param.userinfoPwd,
            "userinfoTruename": param.param.userinfoTruename,
            "userinfoSex": param.param.userinfoSex,
            "userinfoPhonenumber": param.param.userinfoPhonenumber,
            "userinfoEmail": param.param.userinfoEmail,
            "userinfoCode": param.param.userinfoCode
        }).then((res) => {
            if (res.data.code === 200) {
                param.that.$Message.error('新建失败')
            } else {
                param.that.$Message.success('新建成功')
                store.dispatch("queryUserInfoList");
            }
        }).catch((err) => {
            param.that.$Message.success('新建失败')
        })
    },
    // 编辑用户信息
    editUserInfo(store, param) {
        const base = "/ssypzmd"
        axios.post(base + "/user/user/update", {
            "userinfoName": param.param.userinfoName,
            "userinfoPwd": param.param.userinfoPwd,
            "userinfoTruename": param.param.userinfoTruename,
            "userinfoSex": param.param.userinfoSex,
            "userinfoPhonenumber": param.param.userinfoPhonenumber,
            "userinfoEmail": param.param.userinfoEmail,
            "userinfoCode": param.param.userinfoCode,
            "userinfoId": param.id
        }).then((res) => {
            if (res.data.code === 200) {
                param.that.$Message.error('编辑失败')
            } else {
                param.that.$Message.success('编辑成功')
                store.dispatch("queryUserInfoList");
            }
        }).catch((err) => {
            param.that.$Message.error('编辑失败')
        })
    },
    // 删除用户信息
    deleteUserInfo(store, param) {
        console.log(param)
        const base = "/ssypzmd"
        axios.post(base + "/user/user/delete", {
            "userinfoId": param.id,
        }).then((res) => {
            if (res.data.code === 200) {
                param.that.$Message.error('删除失败')
            } else {
                param.that.$Message.success('删除成功')
                store.dispatch("queryUserInfoList");
            }
        }).catch((err) => {
            param.that.$Message.error('删除失败')
        })
    },

    // 获取订单信息
    queryOrderInfo() {
        const base = "/ssypzmd"
        axios.post(base + "/goods/order/getAllOrder").then((res) => {
            store.commit("setOrderInfoList", res.data.extend.orderinfos)
        }).catch((err) => {
            console.log(err)
        })
    },
    // 新建订单信息
    // newOrderInfo(store, param) {
    //     const base = "/ssypzmd"
    //     axios.post(base + "/goods/order/insert", {
    //         "orderinfoConsignee": param.param.orderinfoConsignee,
    //         "orderinfoAddress": param.param.orderinfoAddress,
    //         "orderinfoConsigneephone": param.param.orderinfoConsigneephone,
    //         "orderinfoStatus": param.param.orderinfoStatus,
    //         "orderinfoOrdertime": param.param.orderinfoOrdertime,
    //     }).then((res) => {
    //         store.dispatch("queryOrderInfo");
    //         param.that.$Message.success('新建成功')
    //     }).catch((err) => {
    //         param.that.$Message.success('新建失败')
    //     })
    // },
    // 编辑订单信息
    editOrderInfo(store, param) {
        const base = "/ssypzmd"
        console.log(param)
        axios.post(base + "/goods/order/update", {
            "orderinfoId": param.id,
            "orderinfoNumber": param.param.orderinfoNumber,
            "orderinfoConsignee": param.param.orderinfoConsignee,
            "orderinfoAddress": param.param.orderinfoAddress,
            "orderinfoConsigneephone": param.param.orderinfoConsigneephone,
            "orderinfoStatus": param.param.orderinfoStatus,
            "orderinfoOrdertime": param.param.orderinfoOrdertime,

        }).then((res) => {
            if (res.data.code === 200) {
                param.that.$Message.error('编辑失败')
            } else {
                param.that.$Message.success('编辑成功')
                store.dispatch("queryOrderInfo");
            }
        }).catch((err) => {
            param.that.$Message.error('编辑失败')
        })
    },
    // 删除订单信息
    deleteOrderInfo(store, param) {
        const base = "/ssypzmd"
        axios.post(base + "/goods/order/delete", {
            "orderinfoId": param.id,
        }).then((res) => {
            if (res.data.code === 200) {
                param.that.$Message.error('删除失败')
            } else {
                param.that.$Message.success('删除成功')
                store.dispatch("queryOrderInfo");
            }
        }).catch((err) => {
            param.that.$Message.error('删除失败')
        })
    },
    // 获取商品信息
    queryGoodsInfo() {
        const base = "/ssypzmd"
        axios.post(base + "/goods/goods/getAllGoods").then((res) => {
            store.commit("setGoodsInfoList", res.data.extend.Goodsinfos)
        }).catch((err) => {
            console.log(err)
        })
    },
    // 新建商品信息
    newGoodsInfo(store, formData) {
        const base = "/ssypzmd"
        axios.post(base + "/goods/goods/insert", formData, {
            headers: {
                'Content-Type': 'multipart/form-data;application/json'
            }
        }).then((res) => {
            if (res.data.code === 200) {
                // param.that.$Message.error('新建失败')
            } else {
                // param.that.$Message.success('新建成功')
                store.dispatch("queryGoodsInfo");
            }
        }).catch((err) => {
            // param.that.$Message.success('新建失败')
        })
    },
    // 编辑商品信息
    editGoodsInfo(store, param) {
        const base = "/ssypzmd"
        console.log(param)
        axios.post(base + "/goods/goods/update", {
            "goodsinfoId": param.id,
            "goodsinfoName": param.param.goodsinfoName,
            "goodsinfoDescription": param.param.goodsinfoDescription,
            "goodsinfoAmount": param.param.goodsinfoAmount,
            "goodsinfoSellamount": param.param.goodsinfoSellamount,
            "goodsinfoPrice": param.param.goodsinfoPrice,

        }).then((res) => {
            if (res.data.code === 200) {
                param.that.$Message.error('编辑失败')
            } else {
                param.that.$Message.success('编辑成功')
                store.dispatch("queryGoodsInfo");
            }
        }).catch((err) => {
            param.that.$Message.error('编辑失败')
        })
    },
    // 删除商品信息
    deleteGoodsInfo(store, param) {
        const base = "/ssypzmd"
        console.log(param.id)
        axios.post(base + "/goods/goods/delete", {
            "goodsinfoId": param.id,
        }).then((res) => {
            if (res.data.code === 200) {
                param.that.$Message.error('删除失败')
            } else {
                param.that.$Message.success('删除成功')
                store.dispatch("queryGoodsInfo");
            }
        }).catch((err) => {
            param.that.$Message.error('删除失败')
        })
    },

    // 获取物流信息
    queryLogInfo() {
        const base = "/ssypzmd"
        axios.post(base + "/goods/logistics/getAllLogistics").then((res) => {
            store.commit("setLogInfoList", res.data.extend.logisticsinfos)
        }).catch((err) => {
            console.log(err)
        })
    },
    // 新建物流信息
    // newLogInfo(store, param) {
    //     const base = "/ssypzmd"
    //     axios.post(base + "/user/user/add", {
    // "logisticsLocation": param.param.logisticsLocation,
    // "logisticsNumber": param.param.logisticsNumber,
    // "logisticsPostmanphone": param.param.logisticsPostmanphone,
    // "logisticsStatus": param.param.logisticsStatus,
    //     }).then((res) => {
    //         store.dispatch("queryUserInfoList");
    //         param.that.$Message.success('新建成功')
    //     }).catch((err) => {
    //         param.that.$Message.success('新建失败')
    //     })
    // },
    // 编辑物流信息
    editLogInfo(store, param) {
        const base = "/ssypzmd"
        axios.post(base + "/goods/logistics/update", {
            "logisticsId": param.id,
            "logisticsLocation": param.param.logisticsLocation,
            "logisticsNumber": param.param.logisticsNumber,
            "logisticsPostmanphone": param.param.logisticsPostmanphone,
            "logisticsStatus": param.param.logisticsStatus,
        }).then((res) => {
            if (res.data.code === 200) {
                param.that.$Message.error('编辑失败')
            } else {
                param.that.$Message.success('编辑成功')
                store.dispatch("queryLogInfo");
            }
        }).catch((err) => {
            param.that.$Message.error('编辑失败')
        })
    },
    // 删除物流信息
    deleteLogInfo(store, param) {
        console.log(param)
        const base = "/ssypzmd"
        axios.post(base + "/goods/logistics/delete", {
            "logisticsId": param.id,
        }).then((res) => {
            if (res.data.code === 200) {
                param.that.$Message.error('删除失败')
            } else {
                param.that.$Message.success('删除成功')
                store.dispatch("queryLogInfo");
            }
        }).catch((err) => {
            param.that.$Message.error('删除失败')
        })
    },




    // 
    // 
    // 
    // 
    // 
    // 获取用户信息
    queryUserInfo(store, obj) {
        const base = "/ssypzmd"
        axios.post(base + "/user/user/login", {
            "userinfoPhoneNumber": obj.tel,
            "userinfoPwd": obj.pwd,
        }).then((res) => {
            console.log(res.data)
            store.commit("setUserInfo", res.data.extend.userinfo)
        }).catch((err) => {
            console.log(err)
        })
    },











}