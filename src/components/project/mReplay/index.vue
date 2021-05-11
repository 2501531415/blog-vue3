<template>
    <div class="m-replay">
        <el-input :placeholder="placeholder" v-model="content"  @focus="inputFocus" @blur="inputBlur" ref="input"></el-input>
        <div class="m-replay-button">
            <el-button size="small" type="primary" :disabled="!inputDisable">评论</el-button>
        </div>
    </div>
</template>

<script setup>
    import {defineProps,ref,computed, onMounted,defineEmit} from 'vue'

    const content = ref(null)

    const input = ref(null)
    //const inputDisable = ref(true)
    //const autofocus = ref(true)
    const props = defineProps({
        placeholder:{
            type:String,
            required:true
        }
    })

    const emit = defineEmit(['inputBlur'])
    const inputDisable = computed(()=>content.value>0)
    const inputFocus =()=>{
        //inputDisable.value = false
    }
    const inputBlur =()=>{
        //inputDisable.value = true
        emit('inputBlur')
    }

    onMounted(()=>{
        input.value.focus()
    })
</script>

<style lang="less" scoped>
    .m-replay{
        background-color: #fcfcfc;
        padding: 10px;
        margin-top: 10px;
        .m-replay-button{
            display: flex;
            justify-content: flex-end;
            margin-top: 10px;
        }
    }
</style>