<template>
    <el-menu :default-active="DefaultActive" :mode="mode" :background-color="BackgroundColor" :text-color="TextColor" :active-text-color="ActiveTextColor" :router="router">
        <template v-for="(item,index) in menu" :key="index">
            <el-submenu :index="item.path" v-if="item.children">
                <template #title>
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item v-for="(child,indey) in item.children" :key="indey" :route="child.path" :index="child.path">
                    <i :class="`el-icon-${child.icon}`"></i>
                    <template #title>{{child.title}}</template>
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-else :index="item.path">
                <i :class="`el-icon-${item.icon}`"></i>
                <template #title>{{item.title}}</template>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script setup>
    import {defineProps} from 'vue'
    
    const props = defineProps({
        menu:{
            type:Array,
            default:[]
        },
        DefaultActive:{
            type:[String,Number],
        },
        mode:{
            type:String,
            default:'vertical'
        },
        BackgroundColor:{
            type:String,
            default:'#ffffff'
        },
        TextColor:{
            type:String,
            default:'#303133'
        },
        ActiveTextColor:{
            type:String,
            default:'#409EFF'
        },
        router:{
            type:Boolean,
            default:false
        }
    })
</script>

<style lang="less" scoped>
    
</style>