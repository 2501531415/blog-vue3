import {createStore} from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions'

const store = createStore({
    state(){
        return {
            test:1
        }
    },
    getters,
    mutations,
    actions
})

export default store