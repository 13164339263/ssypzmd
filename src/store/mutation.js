export default {
    // 定义同步方法
    // 修改状态
    setUserInfoList(state, v) {
        state.userInfoList = v;
    },
    setOrderInfoList(state, v) {
        state.orderInfoList = v;
    },
    setGoodsInfoList(state, v) {
        state.goodsInfoList = v;
    },
    setLogInfoList(state, v) {
        state.logInfoList = v;
    },

    setUserInfo(state, v) {
        state.userInfo = v;
    },

}