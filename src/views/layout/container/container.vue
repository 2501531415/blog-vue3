<template>
    <el-container>
        <el-aside :class="[store.state.sideStatus?'':'side']">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-scrollbar>
                <el-main>
                    <Main/>
                    <Footer/>
                </el-main>
             </el-scrollbar>
             <el-backtop target=".el-scrollbar__wrap"  :bottom="bottom"></el-backtop>
        </el-container>
    </el-container>
</template>

<script setup>
    import {useStore} from 'vuex'
    import Header from '@/views/layout/header/header.vue'
    import Aside from '@/views/layout/aside/aside.vue'
    import Footer from '@/views/layout/footer/footer.vue'
    import Main from '@/views/layout/main/main.vue'
    const store = useStore()
    const bottom = 65
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
    box-shadow: 1px 2px 5px rgb(0 0 0 / 10%);
    transition: all 2s ease 0s;
}
.side{
    width:0!important;
}
.el-header{
    height:100%;
    background-color: #3f51b5;
    border-bottom: 1px solid #eee;
}
.el-main{
    height:100%;
    padding:0!important;
    background-color:#eee ;
}
</style>