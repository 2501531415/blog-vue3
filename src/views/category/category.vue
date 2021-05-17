<template>
    <div class="category">
        <m-title>
            <template #title>
                <span ref="title">分类：{{titleType}}</span>
            </template>
            <template #other>
                <div class="category-nav" v-if="state.categoryData">
                    <div class="category-nav-item" :class="[currentIndex == 0?'active':'']" @click="change('全部',0)">
                        <span>全部</span>
                    </div>
                    <div class="category-nav-item" v-for="(item,index) in state.categoryData" :key="index" :class="[currentIndex == index + 1?'active':'']" @click="change(item.type,index+1)">
                        <span>{{item.type}}</span>
                    </div>
                </div>
            </template>
        </m-title>
        <div class="category-list" v-if="state.postData">
            <m-post :post="state.postData" @readAll="readAll" v-if="state.postData.length > 0"></m-post>
            <el-empty description="暂无数据" v-else></el-empty>
        </div>
    </div>
</template>

<script setup>
    import {reactive,ref,onMounted, inject,watch, onUnmounted} from 'vue'
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import MPost from '@/components/common/mPost/index.vue'
    import {getLearnAll,getLearnNav,getLearnType} from '@/network/article.js'
    import MTitle from '@/components/common/mTitle/index.vue'
    const router = useRouter()
    const store = useStore()

    const currentIndex = ref(0)

    const title = ref(null)
    const titleType = ref('全部')
    const scrollTop = inject('scrollTop')
    const showTitle = inject('showTitle')

    const state = reactive({
        postData:null,
        categoryData:null
    })
    getLearnNav().then(res=>{
        console.log(res)
        state.categoryData = res.data
    })
    getLearnAll().then(res=>{
        state.postData = res.data
    })

    const change = (type,index)=>{
        currentIndex.value = index
        titleType.value = type
        store.commit('changeHeaderTitle',`分类：${type}`)
        if(type !='全部'){
            getLearnType(type).then(res=>{
                state.postData = res.data[0].detail
            })
        }else{
            getLearnAll().then(res=>{
                state.postData = res.data
            })
        }
    }

    const readAll = (id)=>{
        router.push({path:`/detail/learn`,query:{'id':id}})
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
    .category-nav{
        display: flex;
        justify-content: center;
        &-item{
            padding: 10px 15px;
            cursor: pointer;
        }
    }
    .active{
        border-bottom: 2px solid red;
    }
</style>