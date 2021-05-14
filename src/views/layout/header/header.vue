<template>
    <div class="header">
        <div class="header-left">
            <i :class="[sideStatus?'el-icon-s-fold':'el-icon-s-unfold']" @click="collapse"></i>
        </div>
        <div class="header-right">
            <Menu :menu="menu" mode="horizontal" :router="true" :default-active="active" background-color="#3f51b5" text-color="#fff"></Menu>
            <div class="header-right-user">
                <el-button type="primary" v-if="!userInfo" @click="login">去登录</el-button>
                <el-dropdown v-else>
                    <div class="el-dropdown-link">
                        <m-avatar :url="baseUrl+userInfo.avatar" width="30"></m-avatar>
                        <span>{{userInfo.username}}</span>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {watchEffect,computed} from 'vue'
    import {useStore} from 'vuex'
    import {useRoute} from 'vue-router'
    import Menu from '@/components/element/menu/index.vue'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import {baseUrl} from '@/config/config.js'
    import cookie from '@/lib/cookie.js'
    const store = useStore()
    const route = useRoute()
    const menu = [{'title':'首页','path':'/home','icon':'s-home'},
    {'title':'分类','path':'/category','icon':'collection-tag'},
    {'title':'归档','path':'/file','icon':'files'},
    {'title':'我的','path':'/profile','icon':'user',children:[{'title':'测试','path':'/test','icon':'user'}]}]
    const active = route.fullPath

    //侧边栏是否展开
    const sideStatus = computed(()=>store.state.sideStatus)
    //用户信息
    const userInfo = computed(()=>store.state.userInfo)
    const collapse = ()=>{
        store.commit('changeSideStatus',!sideStatus.value)
    }
    //点击登录
    const login = ()=>{
        store.commit('changeLoginDialog',true)
    }
    //退出登录
    const logout = ()=>{
        store.commit('changeUserInfo',null)
        cookie.remove('userInfo')
    }
</script>

<style lang="less" scoped>
    .header{
        height:100%;
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-right{
            display: flex;
            align-items:center;
        }
    }
    .el-icon-s-fold,.el-icon-s-unfold{
        font-size: 25px;
        color:#fff;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
        display: flex;
        align-items: center;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>