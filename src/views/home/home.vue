<template>
    <div class="home">
        <m-title>
            <template #title>
                <span ref="title">this is my blog</span>
            </template>
            <template #subTitle>
                <span>事实并非理所当然，世界总是欲盖弥彰</span>
            </template>
        </m-title>
        <m-acticle :acticle="state.articleData" @readAll="readAll"></m-acticle>
    </div>
</template>

<script setup>
    import marked from 'marked'
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import {reactive,inject, watch,ref, computed, onMounted,onUnmounted} from 'vue'
    import {ElMessage} from 'element-plus' // composition api中不能直接使用this 目前只能单独引入
    import {getArticle} from '@/network/article.js'
    import MActicle from '@/components/common/mActicle/index.vue'
    import MTitle from '@/components/common/mTitle/index.vue'
    const router = useRouter()
    const store = useStore()
    const title = ref(null)
    const scrollTop = inject('scrollTop')
    const showTitle = inject('showTitle')

    const state = reactive({
        articleData:null
    })
    getArticle().then(res=>{
        console.log(res)
        if(res.err_code != 200) return ElMessage.error('服务器异常！')
        state.articleData = res.data
    })

    const readAll = (id)=>{
        router.push({path:`/detail/article`,query:{'id':id}})
    }

    watch(scrollTop,(value,old)=>{
       showTitle()
    })

    onMounted(()=>{
        store.commit('changeHeaderTitle',title.value.innerText)
    })

    onUnmounted(()=>{
        store.commit('changeHeaderTitleShow',false)
    })
</script>

<style lang="less" scoped>
    
</style>