<template>
    <div class="index">
        <div id="canvas"></div>
        <!-- <el-button type="primary" plain @click="enter">进入</el-button> -->
        <div class="index-box">
            <img src="@/assets/img/brand.jpg" alt=""/>
            <div class="index-box-title">事实并非理所当然，世界总是欲盖弥彰</div>
            <div class="index-box-list">
                <router-link to="/page">首页</router-link>
                <a href="https://www.jianshu.com/u/4780e23b8e68" target="_blank" rel="noopener noreferrer">简书</a>
                <a href="https://github.com/2501531415" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useRouter} from 'vue-router'
    import {animate} from '@/lib/animate.js'
    import { onMounted } from 'vue'

    const router = useRouter()
    const enter = ()=>{
        router.push('/page')
    }

    onMounted(()=>{
        animate()
    })

</script>

<style lang="less" scoped>
.index{
    height:100%;
    overflow: hidden;
    &-box{
        position: fixed;
        left: 50%;
        z-index: 999;
        top: 30%;
        transform: translate(-50%,-60%);
        user-select: none;
        text-align: center;
        width:30%;
        img{
            width: 200px;
            height: 200px;
            animation-name: mychange;
            animation-duration: 1000ms;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            border-radius: 50%;
        }
        &-title{
            font-size: 22px;
            margin:20px 0px;
        }
        &-list{
            display: flex;
            justify-content: space-between;
            font-size: 28px;
            align-items: center;
            a{
                text-decoration:none;
                color: #1890ff;
            }
        }
    }
}
@keyframes mychange{　
    0% {
        width: 200px;
        height: 200px;
    }
    100% {
        width: 250px;
        height: 250px;
    }
}
</style>