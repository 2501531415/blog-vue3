<template>
    <div class="m-avatar" :style="{width:width +'px',height:width + 'px',padding:padding + 'px',backgroundColor:BackgroundColor}">
        <img :src="url" alt="">
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'

    const props = defineProps({
        url:{
            type:String,
            required:true
        },
        width:{
            type:[Number,String],
            default:150
        },
        padding:{
            type:[Number,String],
            default:2
        },
        BackgroundColor:{
            type:String,
            default:'#fff'
        }
    })
</script>

<style lang="less" scoped>
    .m-avatar{
        border-radius: 50%;
        img{
            border-radius:50%;
            width:100%;
            height:100%;
        }
    }
</style>
