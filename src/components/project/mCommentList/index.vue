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
                    <div class="m-comment-control-left">
                        <span>几天前</span>
                    </div>
                    <div class="m-comment-control-right">
                         <div class="m-comment-likes">
                             <i class="el-icon-star-off"></i>
                             <span>{{item.meta.likes}}</span>
                         </div>
                         <div class="m-comment-replay">
                             <i class="el-icon-chat-round"></i>
                             <span @click="replay(item._id)">回复</span>
                         </div>
                    </div>
                </div>
                <div class="m-comment-list-replay" v-if="state.replayId.includes(item._id)">
                    <m-repaly :placeholder="placeholder(item.user.username)" @inputBlur="inputBlur" :id="item._id"></m-repaly>
                </div>
                <div class="m-comment-children">
                    <div class="m-comment-children-item" v-for="(child,indey) in item.secondComment" :key="indey">
                        <div class="m-comment-avatar">
                            <m-avatar :url="baseUrl + child.from_user.avatar" width="28"></m-avatar>
                        </div>
                        <div class="m-comment-content">
                            <div class="m-comment-username">
                                <span>{{child.from_user.username}}</span>
                            </div>
                            <div class="m-comment-children-word">
                                <span>回复{{child.to_user.username}}：</span>
                                <span>{{child.content}}</span>
                            </div>
                            <div class="m-comment-control">
                                <div class="m-comment-control-left">
                                    <span>{{timeago(new Date(child.create_time).getTime())}}</span>
                                </div>
                                <div class="m-comment-control-right">
                                    <div class="m-comment-replay">
                                        <i class="el-icon-chat-round"></i>
                                        <span @click="replay(child._id)">回复</span>
                                    </div>
                                </div>
                            </div>
                            <div class="m-comment-list-replay" v-if="state.replayId.includes(child._id)">
                                <m-repaly :placeholder="placeholder(child.from_user.username)" @inputBlur="inputBlur" :id="child._id" bgc="#fff"></m-repaly>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </div>
</template>

<script setup>
    import {defineProps,computed,ref,reactive} from 'vue'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import MRepaly from '@/components/project/mReplay/index.vue'
    import {baseUrl} from '@/config/config.js'
    import {timeago} from '@/utils/time.js'

    //const replayId = ref([])

    const state = reactive({
        replayId:[]
    })
    const props = defineProps({
        commentData:{
            type:Array,
            default:[]
        }
    })

    const placeholder = (value)=>`回复${value}...`

    //点击回复
    const replay = (id)=>{
        if(!state.replayId.includes(id)){
            state.replayId.push(id)
        }
    }

    //评论框失去焦点
    const inputBlur = (id)=>{
        setTimeout(() => {
            const index = state.replayId.findIndex(item=>item == id)
            state.replayId.splice(index,1)
        }, 300);
    }

</script>

<style lang="less" scoped>
    .m-comment-list{
        font-size: 14px;
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
                    justify-content: space-between;
                    color: #9f9f9f;
                    .m-comment-control-right{
                        display: flex;
                        align-items: center;
                        & span{
                            margin-left: 5px;
                        }
                        .m-comment-replay{
                            margin-left: 15px;
                            cursor: pointer;
                        }
                    }
                }
                .m-comment-children{
                    .m-comment-children-item{
                        display: flex;
                        margin: 10px 0px;
                        padding: 10px;
                        border-radius: 4px;
                        background-color:#fafbfc;
                        .m-comment-children-word{
                            & span:first-child{
                                 color: #9f9f9f;
                            }
                        }
                    }
                }
            }
        }
    }
</style>