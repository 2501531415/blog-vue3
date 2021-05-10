<template>
    <div class="home">
        <m-title>
            <template #title>
                <span >this is my blog</span>
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
    import {reactive} from 'vue'
    import {ElMessage} from 'element-plus' // composition api中不能直接使用this 目前只能单独引入
    import {getArticle} from '@/network/article.js'
    import MActicle from '@/components/common/mActicle/index.vue'
    import MTitle from '@/components/common/mTitle/index.vue'
    const router = useRouter()

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
</script>

<style lang="less" scoped>
    
</style>