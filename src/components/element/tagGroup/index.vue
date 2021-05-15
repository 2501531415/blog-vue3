<template>
    <div class="tag-group">
        <div v-if="tagData.length > 0">
            <el-tag :style="{'border-color':tagColor[index]?tagColor[index]:'#67c23a'}"  v-for="(item,index) in tagData.split(',')" :key="index" :color="tagColor[index]?tagColor[index]:'#67c23a'">{{item}}</el-tag>
        </div>
         <div class="tag-group-none" v-else>
            <span>暂无标签</span>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import {tagColor} from '@/config/config.js'

const props = defineProps({
    tagData:{
        type:String
    }
})


</script>

<style lang="less" scoped>
    .el-tag{
        color:#fff;
        margin-right: 10px;
    }
    .tag-group-none{
        font-size: 14px;
        color: #999;
    }
</style>