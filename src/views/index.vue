<template>
    <div class="index">
        <el-button type="primary" plain @click="enter">进入</el-button>
    </div>
</template>

<script setup>
    import {useRouter} from 'vue-router'
    const router = useRouter()
    const enter = ()=>{
        router.push('/page')
    }
</script>

<style lang="less" scoped>
.index{
    height:100%;
    background-color: #eee;
    position: relative;
    .el-button{
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
}
</style>