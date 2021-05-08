<template>
    <el-container>
        <el-aside :class="[store.state.sideStatus?'':'side']">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <router-view v-slot="{ Component }">
                    <transition>
                        <keep-alive>
                        <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </el-container>
</template>

<script setup>
    import {useStore} from 'vuex'
    import Header from '@/views/layout/header/header.vue'
    import Aside from '@/views/layout/aside/aside.vue'
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
    box-shadow: 1px 2px 5px rgb(0 0 0 / 10%);
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
    padding:0!important;
    background-color:#eee ;
}
.el-footer{
    height:100%;
}
</style>