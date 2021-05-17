import cookie from '@/lib/cookie.js'

const mutations = {
    //侧边栏显示状态
    changeSideStatus:(state,payload)=>{
        state.sideStatus = payload
    },
    //登录dialog状态
    changeLoginDialog:(state,payload)=>{
        state.loginDialog = payload
    },
    //用户信息保存并持久化
    changeUserInfo:(state,payload)=>{
        state.userInfo = payload
        cookie.set('userInfo',payload,{ expires: 7 })
    },
    //header title
    changeHeaderTitle:(state,payload)=>{
        state.headerTitle = payload
    },
    //header title show
    changeHeaderTitleShow:(state,payload)=>{
        state.headerTitleShow = payload
    }
}

export default mutations