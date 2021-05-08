import {createStore} from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions'

const store = createStore({
    state(){
        return {
            sideStatus:false
        }
    },
    getters,
    mutations,
    actions
})

export default store