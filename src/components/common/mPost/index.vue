<template>
    <div class="m-post">
        <el-row>
            <el-col :span="16" :offset="4">
                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item,index) in post" :key="index">
                        <div class="m-post-item">
                            <div class="m-post-content">
                                <div class="m-post-time">
                                    <span>{{utcFormat(item.update_time)}}</span>
                                </div>
                                <div class="m-post-title" @click="readAll(item._id)">
                                    <span>{{item.title}}</span>
                                </div>
                            </div>
                            <div class="m-post-tag">
                                <tag-group :tagData="item.keyWord"></tag-group>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import {defineProps,defineEmit} from 'vue'
    import {utcFormat} from '@/utils/time.js'
    import TagGroup from '@/components/element/tagGroup/index.vue'
    const props = defineProps({
        post:{
            type:Array,
            default:[]
        }
    })

    const emit = defineEmit(['readAll'])

    const readAll = (id)=>{
        emit('readAll',id)
    }
</script>

<style lang="less" scoped>
    .el-col{
        margin-top: 20px;
        &:last-child{
            margin-bottom:10px;
        }
    }
    .el-tag{
        color:#fff;
        margin-right: 10px;
    }
    .m-post-item{
        background-color:#fff;
        border-radius: 5px;
        box-shadow: 0 1px 2px rgb(151 151 151 / 58%);
        .m-post-content{
            padding:15px;
            .m-post-time{
                font-size: 14px;
                color:#999;
            }
            .m-post-title{
                font-size: 22px;
                color: #3f51b5;
                margin: 15px 0px;
                cursor: pointer;
            }
        }
        .m-post-tag{
            padding: 10px;
            border-top: 1px solid #eee;
            min-height: 32px;
        }
    }
</style>