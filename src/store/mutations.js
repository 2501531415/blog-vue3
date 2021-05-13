import cookie from '@/lib/cookie.js'

const mutations = {
    changeSideStatus:(state,payload)=>{
        state.sideStatus = payload
    },
    changeLoginDialog:(state,payload)=>{
        state.loginDialog = payload
    },
    changeUserInfo:(state,payload)=>{
        state.userInfo = payload
        cookie.set('userInfo',payload,{ expires: 7 })
    }
    
}

export default mutations