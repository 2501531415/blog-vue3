<template>
    <div class="category">
        <m-post :post="state.postData" @readAll="readAll"></m-post>
    </div>
</template>

<script setup>
    import {reactive} from 'vue'
    import {useRouter} from 'vue-router'
    import MPost from '@/components/common/mPost/index.vue'
    import {getLearnAll} from '@/network/article.js'
    const router = useRouter()
    const state = reactive({
        postData:null
    })

    getLearnAll().then(res=>{
        console.log(res)
        state.postData = res.data
    })

    const readAll = (id)=>{
        router.push({path:`/detail/learn`,query:{'id':id}})
    }

</script>