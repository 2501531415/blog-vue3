<template>
    <div class="aside">
        <div class="user">
            <div class="user-message">
                <m-avatar url="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" width="100"></m-avatar>
                <div>
                    <span>曾伟明</span>
                    <span>2502531415@qq.com</span>
                </div>
            </div>
        </div>
        <div class="aside-list">
            <m-list :list="listData" @listClick="listClick"></m-list>
        </div>
    </div>
</template>

<script setup>
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import MList from '@/components/common/mList/index.vue'
    import {useRouter} from 'vue-router'

    const listData = [
    {'title':'掘金','path':'/home','icon':'info'},
    {'title':'Github','path':'/home','icon':'success'},]

    const router = useRouter()
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
