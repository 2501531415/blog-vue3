<template>
    <div class="m-acticle">
        <el-row>
            <el-col :span="16" :offset="4" v-for="(item,index) in acticle" :key="index">
                <div class="m-acticle-item">
                    <div class="m-acticle-content">
                        <div class="m-acticle-time">
                            <span>{{item.update_time}}</span>
                        </div>
                        <div class="m-acticle-title">
                            <span>{{item.title}}</span>
                        </div>
                        <div class="m-acticle-desc">
                            <span>{{item.desc}}</span>
                        </div>
                        <el-button type="primary" @click="readAll">点击</el-button>
                    </div>
                    <div class="m-acticle-tag">
                        <el-tag v-for="item in 3" :key="item" size="small" :color="tagColor[item]">标签一</el-tag>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import {defineProps,defineEmit} from 'vue'
    import {tagColor} from '@/config/config.js'
    const props = defineProps({
        acticle:{
            type:Array,
            default:[]
        }
    })

    const emit = defineEmit(['readAll'])

    const readAll = ()=>{
        emit('readAll',{'type':'acticle','id':1})
    }
</script>

<style lang="less" scoped>
    .el-col{
        margin-top: 10px;
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
                font-size: 12px;
            }
            .m-acticle-title{
                font-size: 20px;
                color: #3f51b5;
                margin: 15px 0px;
            }
        }
        .m-acticle-tag{
            padding: 10px;
            border-top: 1px solid #eee;
        }
    }
</style>
