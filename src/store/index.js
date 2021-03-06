import {createStore} from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions'
import cookie from '@/lib/cookie.js'

const store = createStore({
    state(){
        return {
            sideStatus:true,
            loginDialog:false,
            userInfo:cookie.get('userInfo')?JSON.parse(cookie.get('userInfo')):null,
            headerTitle:null,
            headerTitleShow:false
        }
    },
    getters,
    mutations,
    actions
})

export default store