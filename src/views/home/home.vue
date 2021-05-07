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
            </div>
            <m-acticle :acticle="data"></m-acticle>
        </el-scrollbar>
    </div>
</template>

<script setup>
    import MActicle from '@/components/common/mActicle/index.vue'
    const data = [{
    "meta": {
        "views": 1,
        "likes": 1,
        "comments": 2
    },
    "number": "210",
    "type": "技术",
    "img_url": "/upload/picture/1583033684(1).png",
    "avatar": "/upload/picture/avatar.png",
    "status": "0",
    "hotTop": 0,
    "origin": "原创",
    "create_time": "2020-02-26T14:13:07.262Z",
    "_id": "5e5b37879fb04a5782776433",
    "author": "0",
    "content": "# Vue 的响应式原理\n在生成vue实例时，为对传入的data进行遍历，使用Object.defineProperty把这些属性转为getter/setter.\n\nObject.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。\n\n每个vue实例都有一个watcher实例，它会在实例渲染时记录这些属性，并在setter触发时重新渲染。",
    "title": "Vue的响应式原理",
    "desc": "vue响应式原理",
    "update_time": "2020-03-01T04:18:15.017Z",
    "__v": 0
},{
    "meta": {
        "views": 1,
        "likes": 1,
        "comments": 2
    },
    "number": "210",
    "type": "技术",
    "img_url": "/upload/picture/1583033684(1).png",
    "avatar": "/upload/picture/avatar.png",
    "status": "0",
    "hotTop": 0,
    "origin": "原创",
    "create_time": "2020-02-26T14:13:07.262Z",
    "_id": "5e5b37879fb04a5782776433",
    "author": "0",
    "content": "# Vue 的响应式原理\n在生成vue实例时，为对传入的data进行遍历，使用Object.defineProperty把这些属性转为getter/setter.\n\nObject.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。\n\n每个vue实例都有一个watcher实例，它会在实例渲染时记录这些属性，并在setter触发时重新渲染。",
    "title": "Vue的响应式原理",
    "desc": "vue响应式原理",
    "update_time": "2020-03-01T04:18:15.017Z",
    "__v": 0
},{
    "meta": {
        "views": 1,
        "likes": 1,
        "comments": 2
    },
    "number": "210",
    "type": "技术",
    "img_url": "/upload/picture/1583033684(1).png",
    "avatar": "/upload/picture/avatar.png",
    "status": "0",
    "hotTop": 0,
    "origin": "原创",
    "create_time": "2020-02-26T14:13:07.262Z",
    "_id": "5e5b37879fb04a5782776433",
    "author": "0",
    "content": "# Vue 的响应式原理\n在生成vue实例时，为对传入的data进行遍历，使用Object.defineProperty把这些属性转为getter/setter.\n\nObject.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。\n\n每个vue实例都有一个watcher实例，它会在实例渲染时记录这些属性，并在setter触发时重新渲染。",
    "title": "Vue的响应式原理",
    "desc": "vue响应式原理",
    "update_time": "2020-03-01T04:18:15.017Z",
    "__v": 0
},{
    "meta": {
        "views": 1,
        "likes": 1,
        "comments": 2
    },
    "number": "210",
    "type": "技术",
    "img_url": "/upload/picture/1583033684(1).png",
    "avatar": "/upload/picture/avatar.png",
    "status": "0",
    "hotTop": 0,
    "origin": "原创",
    "create_time": "2020-02-26T14:13:07.262Z",
    "_id": "5e5b37879fb04a5782776433",
    "author": "0",
    "content": "# Vue 的响应式原理\n在生成vue实例时，为对传入的data进行遍历，使用Object.defineProperty把这些属性转为getter/setter.\n\nObject.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。\n\n每个vue实例都有一个watcher实例，它会在实例渲染时记录这些属性，并在setter触发时重新渲染。",
    "title": "Vue的响应式原理",
    "desc": "vue响应式原理",
    "update_time": "2020-03-01T04:18:15.017Z",
    "__v": 0
}]
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