<template>
    <div class="home">
        <el-scrollbar>
            <div class="home-title">
                <el-row>
                    <el-col :span="16" :offset="4">
                        <div class="home-title-text">
                            <span>this is my blog</span>
                        </div>
                         <div class="home-sub-text">
                            <span>事实并非理所当然，世界总是欲盖弥彰</span>
                        </div>
                    </el-col>
                </el-row>
                <div>{{a}}</div>
            </div>
            <m-acticle :acticle="data" @readAll="readAll"></m-acticle>
        </el-scrollbar>
    </div>
</template>

<script setup>
    import MActicle from '@/components/common/mActicle/index.vue'
    import marked from 'marked'
    import {useRouter} from 'vue-router'
    import {ref} from 'vue'
    const router = useRouter()
    const a = ref(8)
const data = [{
    "meta": {
        "views": 1,
        "likes": 0,
        "comments": 0
    },
    "desc": "修改路由push方法,阻止重复点击报错",
    "number": "429",
    "type": "vue",
    "status": "0",
    "_id": "5e5e04b422d98f477d26447a",
    "title": "vue-router中的push问题",
    "keyWord": "vue-router",
    "content": "## 前言\n> vue-router中的push问题\n```\n// 修改路由push方法,阻止重复点击报错\nconst originalPush = VueRouter.prototype.push;\nVueRouter.prototype.push = function push(location) {\n  return originalPush.call(this, location).catch(err => err);\n};\n\n// 修改路由replace方法,阻止重复点击报错\nconst originalReplace = VueRouter.prototype.replace;\nVueRouter.prototype.replace = function replace(location) {\n  return originalReplace.call(this, location).catch(err => err);\n};\n```",
    "author": "ming",
    "img_url": "/upload/picture/timg.jpg",
    "create_time": "2020-03-03T07:18:12.850Z",
    "update_time": "2020-03-03T07:18:12.850Z",
    "__v": 0
}]
// const test = ref(0222)

const readAll = (data)=>{
    //router.push({path:`/detail/${data.type}`,query:{'id':data.id}})
    a.value = 888
}
</script>

<style lang="less" scoped>
    .home{
        width:100%;
        height:100%;
        .home-title{
            background-color:#fff;
            padding: 40px 0px;
            .home-title-text{
                font-size: 30px;
                font-weight: 500;
            }
            .home-sub-text{
                margin-top:10px;
            }
        }
    }
</style>