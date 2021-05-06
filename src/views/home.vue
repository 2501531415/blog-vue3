<template>
    <div>
        <span>{{test2}}</span>
        <h1 v-if="state.data">{{state.data.user_id}}</h1>
        <el-button type="primary" @click="http">diaji</el-button>
    </div>
</template>

<script setup>
    import {test} from '@/network/test.js'
    import {reactive,ref,computed} from 'vue'
    import {useStore} from 'vuex'
    const state = reactive({
        data:null
    })
    const store = useStore()

    const test2 = computed(()=>store.state.test)
    
    const message = {'username':'admin','password':123456}
    test(message).then(res=>{
        state.data = res.data
    })
    function http(){
        store.commit('changeTest', 21000)
    }
</script>

<style lang="less" scoped>

</style>