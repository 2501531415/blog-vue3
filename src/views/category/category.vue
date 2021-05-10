<template>
    <m-title>
        <template #other>
            <div class="category-nav">
                <div class="category-nav-item" :class="[currentIndex == 0?'active':'']" @click="change('all',0)">
                    <span>全部</span>
                </div>
                <div class="category-nav-item" v-for="(item,index) in state.categoryData" :key="index" :class="[currentIndex == index + 1?'active':'']" @click="change(item.type,index+1)">
                    <span>{{item.type}}</span>
                </div>
            </div>
        </template>
    </m-title>
    <div class="category">
        <m-post :post="state.postData" @readAll="readAll"></m-post>
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

    const state = reactive({
        postData:null,
        categoryData:null
    })
    getLearnNav().then(res=>{
        console.log(res)
        state.categoryData = res.data
    })
    // getLearnAll().then(res=>{
    //     console.log(res)
    //     state.postData = res.data
    // })

    const change = (type,index)=>{
        currentIndex.value = index
        if(type !='all'){
            getLearnType(type).then(res=>{
                state.postData = res.data[0].detail
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
        .category-nav-item{
            margin: 0px 5px;
        }
    }
    .active{
        color:red;
    }
</style>