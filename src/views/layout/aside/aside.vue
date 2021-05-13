<template>
    <div class="aside">
        <div class="user" v-if="state.userInfo">
            <div class="user-message">
                <m-avatar :url="baseUrl+userInfo.avatar" width="100"></m-avatar>
                <div>
                    <span>{{userInfo.username}}</span>
                    <span>{{userInfo.introduce}}</span>
                </div>
            </div>
        </div>
        <div class="aside-list">
            <m-list :list="listData" @listClick="listClick"></m-list>
        </div>
    </div>
</template>

<script setup>
    import {computed,reactive} from 'vue'
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    import {baseUrl} from '@/config/config.js'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import MList from '@/components/common/mList/index.vue'

    const listData = [
    {'title':'掘金','path':'/home','icon':'info'},
    {'title':'Github','path':'/home','icon':'success'},]
    const store = useStore()
    const router = useRouter()

    const state = reactive({
        userInfo:null
    })
    const listClick = (data)=>{
        console.log(data.path)
        router.push(data.path)
    }
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
                &:last-child{
                    color:#b5b1b1;
                }
            }
        }
    }
</style>
