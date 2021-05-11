<template>
    <div class="m-comment-list">
       <div class="m-comment-list-item" v-for="(item,index) in commentData" :key="index">
           <div class="m-comment-avatar">
               <m-avatar :url="baseUrl + item.user.avatar" width="28"></m-avatar>
           </div>
           <div class="m-comment-content">
                <div class="m-comment-username">
                    <span>{{item.user.username}}</span>
                </div>
                <div class="m-comment-word">
                    <span>{{item.comments}}</span>
                </div>
                <div class="m-comment-control">
                    <div class="m-comment-likes">
                        <i class="el-icon-star-off"></i>
                        <span>{{item.meta.likes}}</span>
                    </div>
                    <div class="m-comment-replay">
                        <span @click="replay(item._id)">回复</span>
                    </div>
                </div>
                <div class="m-comment-list-replay" v-if="replayId == item._id">
                    <m-repaly :placeholder="placeholder(item.user.username)" @inputBlur="inputBlur"></m-repaly>
                </div>
           </div>
       </div>
    </div>
</template>

<script setup>
    import {defineProps,computed,ref} from 'vue'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import MRepaly from '@/components/project/mReplay/index.vue'
    import {baseUrl} from '@/config/config.js'

    const replayId = ref(null)

    const props = defineProps({
        commentData:{
            type:Array,
            default:[]
        }
    })

    const placeholder = (value)=>`回复${value}...`

    //点击回复
    const replay = (id)=>{
        replayId.value = id
    }

    //评论框失去焦点
    const inputBlur = ()=>{
        replayId.value = null
    }

</script>

<style lang="less" scoped>
    .m-comment-list{
        font-size: 12px;
        .m-comment-list-item{
            display: flex;
            margin-bottom: 10px;
            padding: 10px 0px;
            border-bottom: 1px dashed #eee;
            .m-comment-avatar{
                margin-right:10px;
            }
            .m-comment-content{
                flex:1;
                .m-comment-control{
                    margin-top:5px;
                    display: flex;
                    align-items: center;
                    .m-comment-replay{
                        margin-left: 15px;
                        cursor: pointer;
                    }
                }
                .m-comment-word{
                    font-size: 14px;
                }
            }
        }
    }
</style>