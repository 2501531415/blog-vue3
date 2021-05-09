<template>
    <div class="footer">
        <span>wmyy© 2019-2020 · 粤ICP备20007315号-1 wmyy.fun,All Rights Reserved</span>
        <span>{{timeStr}}</span>
    </div>
</template>

<script setup>
    import {onMounted, onUnmounted, ref} from 'vue'

    const timeStr = ref(null)
    let timer = null
    onMounted(()=>{
        getTime()
    })
    const getTime = ()=>{
        timer = setInterval(()=>{
            const X=new Date("02/2/2020 00:00:00");
            const Y=new Date();
            const T=(Y.getTime()-X.getTime());
            const M=24*60*60*1000;
            const a=T/M;
            const A=Math.floor(a);
            const b=(a-A)*24;
            const B=Math.floor(b);
            const c=(b-B)*60;
            const C=Math.floor((b-B)*60);
            const D=Math.floor((c-C)*60)
            const str =`网站已安全运行${A}天${B}时${getFull(C)}分${getFull(D)}秒`
            timeStr.value = str
        },1000)
    }
    const getFull = (str)=>{
        if(str.toString().length === 1){
            return '0'+str
        }else{
            return str
        }
    }
    onUnmounted(()=>{
        clearInterval(timer)
    })
</script>

<style lang="less" scoped>
    .footer{
        width:100%;
        height:60px;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        align-content: center;
        align-items: center;
        background-color: #3f51b5;
        color: #fff;
    }
</style>