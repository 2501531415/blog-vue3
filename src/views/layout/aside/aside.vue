<template>
    <div class="aside">
        <div class="user" v-if="state.adminInfo">
            <div class="user-message">
                <m-avatar :url="baseUrl+state.adminInfo.avatar" width="100"></m-avatar>
                <div>
                    <span>{{state.adminInfo.name}}</span>
                    <span>{{state.adminInfo.introduce}}</span>
                </div>
            </div>
        </div>
        <div class="aside-list">
            <!-- <m-list :list="listData" @listClick="listClick"></m-list> -->
            <Menu :menu="menu" :router="true" :default-active="active"></Menu>
        </div>
    </div>
</template>

<script setup>
    import {computed,reactive,ref, watch} from 'vue'
    import {useStore} from 'vuex'
    import {useRouter,useRoute} from 'vue-router'
    import {baseUrl} from '@/config/config.js'
    import {introduce} from '@/network/login.js'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import MList from '@/components/common/mList/index.vue'
    import Menu from '@/components/element/menu/index.vue'

    const listData = [
    {'title':'掘金','path':'/home','icon':'info'},
    {'title':'Github','path':'/home','icon':'success'},]
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const active = ref(route.fullPath)

    const state = reactive({
        adminInfo:null
    })

    const menu = [{'title':'首页','path':'/home','icon':'s-home'},
    {'title':'分类','path':'/category','icon':'collection-tag'},
    // {'title':'归档','path':'/file','icon':'files'},
    {'title':'留言','path':'/message','icon':'message'}
    ]

    introduce().then(res=>{
        state.adminInfo = res.data[0]
    })

    //监听路由的变化 更换menu的active
    watch(route,(value,old)=>{
        active.value = value.fullPath
    })
</script>

<style lang="less" scoped>
    .aside{
        width:100%;
        height:100%;
        overflow: hidden;
        .user{
            background-image: url('@/assets/img/brand.jpg');
            .user-message{
                background: rgba(63,81,181,0.5);
                padding: 20px 0px 20px 20px;
            }
            span{
                display: block;
                margin-top:10px;
                color:#fff;
                white-space: nowrap;
            }
        }
    }
</style>
