<template>
    <div class="m-acticle">
        <el-row>
            <el-col :span="16" :offset="4" v-for="(item,index) in acticle" :key="index">
                <div class="m-acticle-item">
                    <div class="m-acticle-content">
                        <div class="m-acticle-time">
                            <span>{{utcFormat(item.update_time)}}</span>
                        </div>
                        <div class="m-acticle-title" @click="readAll(item._id)">
                            <span>{{item.title}}</span>
                        </div>
                        <div class="m-acticle-desc">
                            <span>{{item.desc}}</span>
                            <span @click="readAll(item._id)">阅读全文...</span>
                        </div>
                    </div>
                    <div class="m-acticle-tag">
                        <tag-group :tagData="item.type"></tag-group>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import {defineProps,defineEmit} from 'vue'
    import {utcFormat} from '@/utils/time.js'
    import TagGroup from '@/components/element/tagGroup/index.vue'
    const props = defineProps({
        acticle:{
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
    .m-acticle-item{
        background-color:#fff;
        border-radius: 5px;
        box-shadow: 0 1px 2px rgb(151 151 151 / 58%);
        .m-acticle-content{
            padding:15px;
            .m-acticle-time{
                font-size: 14px;
                color:#999;
            }
            .m-acticle-title{
                font-size: 22px;
                color: #3f51b5;
                margin: 15px 0px;
                cursor: pointer;
            }
            .m-acticle-desc{
                span:last-child{
                   color: #3f51b5;
                   margin-left:15px;
                   cursor: pointer;
                }
            }
        }
        .m-acticle-tag{
            padding: 10px;
            border-top: 1px solid #eee;
        }
    }
</style>
