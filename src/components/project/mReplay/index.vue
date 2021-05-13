<template>
    <div class="m-replay" :style="{'background-color':bgc}">
        <el-input maxlength="30" :placeholder="placeholder" v-model="content"  @focus="inputFocus" @blur="inputBlur" ref="input"></el-input>
        <div class="m-replay-button">
            <el-button size="small" type="primary" :disabled="!inputDisable" @click="commentClick">评论</el-button>
        </div>
    </div>
</template>

<script setup>
    import {defineProps,ref,computed, onMounted,defineEmit} from 'vue'

    const content = ref('')

    const input = ref(null)
    //const inputDisable = ref(true)
    //const autofocus = ref(true)
    const props = defineProps({
        placeholder:{
            type:String,
            required:true
        },
        id:{
            type:String
        },
        toUserId:{
            type:String
        },
        bgc:{
            type:String,
            default:'#fcfcfc'
        },
        commentId:{
            type:String
        }
    })

    const emit = defineEmit(['inputBlur','commentClick'])
    const inputDisable = computed(()=>content.value.length>0)
    const inputFocus =()=>{
        //inputDisable.value = false
    }
    const inputBlur =()=>{
        //inputDisable.value = true
        console.log(inputDisable)
        if(!inputDisable.value){
            emit('inputBlur',props.id)
        }
    }

    //点击评论
    const commentClick = ()=>{
        const commentData = {
            comment_id:props.commentId,
            content:content.value,
            to_userId:props.toUserId,
        }
        emit('commentClick',commentData)
    }

    onMounted(()=>{
        input.value.focus()
    })
</script>

<style lang="less" scoped>
    .m-replay{
        padding: 10px;
        margin-top: 10px;
        border-radius: 4px;
        &-button{
            display: flex;
            justify-content: flex-end;
            margin-top: 10px;
        }
    }
</style>