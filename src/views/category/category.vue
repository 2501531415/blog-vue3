<template>
    <div class="category">
        <m-title v-if="state.categoryData">
            <template #title>
                <span>分类：{{titleType}}</span>
            </template>
            <template #other>
                <div class="category-nav">
                    <div class="category-nav-item" :class="[currentIndex == 0?'active':'']" @click="change('全部',0)">
                        <span>全部</span>
                    </div>
                    <div class="category-nav-item" v-for="(item,index) in state.categoryData" :key="index" :class="[currentIndex == index + 1?'active':'']" @click="change(item.type,index+1)">
                        <span>{{item.type}}</span>
                    </div>
                </div>
            </template>
        </m-title>
        <div class="category-list">
            <m-post :post="state.postData" @readAll="readAll"></m-post>
        </div>
    </div>
</template>

<script setup>
    import {reactive,ref} from 'vue'
    import {useRouter} from 'vue-router'
    import MPost from '@/components/common/mPost/index.vue'
    import {getLearnAll,getLearnNav,getLearnType} from '@/network/article.js'
    import MTitle from '@/components/common/mTitle/index.vue'
    const router = useRouter()

    const currentIndex = ref(0)

    const titleType = ref('全部')

    const state = reactive({
        postData:null,
        categoryData:null
    })
    getLearnNav().then(res=>{
        console.log(res)
        state.categoryData = res.data
    })
    getLearnAll().then(res=>{
        state.postData = res.data.concat(res.data)
    })

    const change = (type,index)=>{
        currentIndex.value = index
        titleType.value = type
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