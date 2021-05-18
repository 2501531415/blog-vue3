<template>
    <div class="m-button">
        <i :class="icon"></i>
        <div class="m-button-badge" v-if="badge">
            <span>{{badge}}</span>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'

    const props = defineProps({
        icon:{
            type:String
        },
        badge:{
            type:Number
        }
    })
</script>

<style lang="less" scoped>
    .m-button{
        display: inline-block;
        line-height: 1;
        min-height: 40px;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        border-radius: 50%;
        padding: 12px;
        position: relative;
        i{
            color:#b2bac2;
        }
        &-badge{
            position: absolute;
            left: 70%;
            top:0;
            text-align: center;
            white-space: nowrap;
            color: #fff;
            background-color: #b2bac2;
            border-radius: 10px;
            padding:2px;
            font-size: 12px;
        }
    }
</style>