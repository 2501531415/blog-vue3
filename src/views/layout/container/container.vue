<template>
    <el-container>
        <el-aside :class="[store.state.sideStatus?'':'side']"></el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </el-container>
</template>

<script setup>
    import {useStore} from 'vuex'
    import Header from '@/views/layout/header/header.vue'
    const store = useStore()

</script>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.el-container{
    height:100%;
}
.el-aside{
    height:100%;
    transition: all 2s ease 0s;
}
.side{
    width:0!important;
}
.el-header{
    height:100%;
    //background-color: #2f589c;
    border-bottom: 1px solid #eee;
}
.el-main{
    height:100%;
}
.el-footer{
    height:100%;
}
</style>