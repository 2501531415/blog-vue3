const mutations = {
    changeSideStatus:(state,payload)=>{
        state.sideStatus = payload
    },
    changeLoginDialog:(state,payload)=>{
        state.loginDialog = payload
    },
    changeUserInfo:(state,payload)=>{
        state.userInfo = payload
    }
    
}

export default mutations