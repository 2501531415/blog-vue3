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
                        <span>回复</span>
                    </div>
                </div>
           </div>
       </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import {baseUrl} from '@/config/config.js'

    const props = defineProps({
        commentData:{
            type:Array,
            default:[]
        }
    })

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