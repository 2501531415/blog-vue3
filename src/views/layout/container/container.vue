<template>
    <el-container>
        <el-aside :class="[store.state.sideStatus?'':'side']">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-scrollbar @scroll="scroll" ref="scrollRef">
                <el-main>
                    <Main/>
                    <Footer/>
                </el-main>
             </el-scrollbar>
             <el-backtop target=".el-scrollbar__wrap"  :bottom="bottom"></el-backtop>
        </el-container>
        <Login/>
    </el-container>
</template>

<script setup>
    import {provide,ref,computed} from 'vue'
    import {useStore} from 'vuex'
    import Header from '@/views/layout/header/header.vue'
    import Aside from '@/views/layout/aside/aside.vue'
    import Footer from '@/views/layout/footer/footer.vue'
    import Main from '@/views/layout/main/main.vue'
    import Login from '@/views/login/login.vue'
    const store = useStore()
    const bottom = 65

    const scrollTop = ref(0)
    const scrollRef = ref(null)

    const scroll = (e)=>{
        scrollTop.value = e.scrollTop
    }
    const cubic = value => Math.pow(value, 3);
    const easeInOutCubic = value => value < 0.5? cubic(value * 2) / 2: 1 - cubic((1 - value) * 2) / 2;
    const scrollTo = (distance)=>{
        // el-scrollbar 容器
        const el = scrollRef.value.wrap;
        const beginTime = Date.now();
        const beginValue = el.scrollTop;
        const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
        const frameFunc = () => {
            const progress = (Date.now() - beginTime) / 500;
            if (beginValue - distance > 0 && progress < 1) {
                el.scrollTop = beginValue - (beginValue-distance) * easeInOutCubic(progress);
                rAF(frameFunc);
            }else if(beginValue - distance < 0 && progress < 1){
                el.scrollTop = distance*easeInOutCubic(progress)
                rAF(frameFunc);
            }else{
                el.scrollTop = distance
            }
        };
        rAF(frameFunc);
    }
    const status = computed(()=>store.state.headerTitleShow)
    //控制title显示方法
    const showTitle = ()=>{
        if(!status.value && scrollTop.value > 13){
            store.commit('changeHeaderTitleShow', true)
        }else if(status.value && scrollTop.value < 13){
            store.commit('changeHeaderTitleShow', false)
        }
    }

    provide('scrollTop',scrollTop)

    provide('showTitle',showTitle)

    provide('scrollTo',scrollTo)

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
    background-color: #fff;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.side{
    width:0!important;
}
.el-header{
    height:100%;
    background-color: #3f51b5;
    //border-bottom: 1px solid #eee;
}
.el-main{
    height:100%;
    padding:0!important;
    background-color:rgba(0,0,0,0.05) ;
}
</style>