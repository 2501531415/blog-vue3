<template>
    <div class="m-list">
        <div class="m-list-item" v-for="(item,index) in list" :key="index" @click="listItemClick(item)">
            <i :class="`el-icon-${item.icon}`"></i>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script setup>
    import {defineProps,defineEmit} from 'vue'

    const props = defineProps({
        list:{
            type:Array,
            default:[]
        }
    })
    const emit = defineEmit(['listClick'])
    const listItemClick = (item)=>{
        emit('listClick',item)
    }
</script>

<style lang="less" scoped>
    .m-list{
        .m-list-item{
            padding: 20px 0px;
            display: flex;
            align-items: center;
            cursor: pointer;
            &:hover{
                background-color:#dbeced;
            }
            i{
                font-size: 20px;
                margin: 0px 20px;
            }
            span{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                user-select: none;
            }
        }
    }
</style>
