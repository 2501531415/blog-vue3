<template>
    <div class="header">
        <div class="header-left">
            <i :class="[store.state.sideStatus?'el-icon-s-fold':'el-icon-s-unfold']" @click="collapse"></i>
        </div>
        <div class="header-right">
            <Menu :menu="menu" mode="horizontal" :router="true" :default-active="active"></Menu>
        </div>
    </div>
</template>

<script setup>
    import {useStore} from 'vuex'
    import {useRoute} from 'vue-router'
    import Menu from '@/components/element/menu/index.vue'
    const store = useStore()
    const route = useRoute()
    const menu = [{'title':'首页','path':'/home','icon':'home'},
    {'title':'分类','path':'/category','icon':'home'},
    {'title':'归档','path':'/file','icon':'home'},
    {'title':'我的','path':'/profile',children:[{'title':'测试','path':'/test'}]}]
    const active = route.fullPath

    const collapse = ()=>{
        store.commit('changeSideStatus',!store.state.sideStatus)
    }
    
    
</script>

<style lang="less" scoped>
    .header{
        height:100%;
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .el-icon-s-fold,.el-icon-s-unfold{
        font-size: 25px;
    }
</style>