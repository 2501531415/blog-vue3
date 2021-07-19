<template>
    <div class="m-message-list">
        <div class="m-message-list-item" v-for="item in MessageList" :key="item._id">
            <div class="m-message-list-item-avatar">
                <m-avatar :url="item.avatar" width="40"></m-avatar>
            </div>
            <div class="m-message-list-item-content">
                <div class="m-message-list-item-content-top">
                    <span>{{item.username}}</span>
                    <span>{{utcFormat(item.created_time)}}</span>
                </div>
                <div class="m-message-list-item-content-center">
                    <p>{{item.content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    import {utcFormat} from '@/utils/time'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    const props = defineProps({
        MessageList:{
            type:Array,
            default:[]
        }
    })
</script>

<style lang="less" scoped>
    .m-message-list{

        &-item{
            display: flex;
            padding: 20px 10px;
            border-bottom:1px solid #eee;
            border-radius: 4px;
            &:hover{
                background-color: #fafafb;
            }
            &-avatar{
                margin-right: 10px;
            }
            &-content{
                flex:1;
                &-top{
                    display: flex;
                    justify-content: space-between;
                    span{
                        &:last-child{
                            font-size: 14px;
                        }
                    }
                }
                &-center{
                    p{
                        white-space: pre-wrap;
                    }
                }
            }
        }
    }
</style>