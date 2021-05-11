<template>
    <div class="m-comment">
        <div class="m-comment-user-message">
            <!-- <m-avatar url="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" width="40"></m-avatar> -->
            <span>当前用户:admin</span>
        </div>
        <div class="m-conment-text">
            <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 10}" placeholder="要不要说点什么?"></el-input>
        </div>
        <div class="m-comment-submit">
            <el-button size="small">提交</el-button>
        </div>
    </div>
</template>

<script setup>
    //import {defineProps,defineEmit} from 'vue'
    // import MAvatar from '@/components/common/mAvatar/index.vue'


    
</script>

<style lang="less">
    .m-comment{
        border: 1px solid #eee;
        padding:10px;
        border-radius: 4px;
        .m-comment-user-message{
            padding:10px 0px;
            display: flex;
            align-items: center;
            border-bottom: 1px dashed #eee;
        }
        .m-comment-submit{
            display: flex;
            justify-content: flex-end;
        }
        .m-conment-text{
            margin:15px 0px;
        }
    }
</style>