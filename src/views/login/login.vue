<template>
    <el-dialog title="账密登录" v-model="dialogLoginVisiable" @close="loginDialogClose" width="20%" top="30vh">
        <el-form :model="state.user" :rules="state.rules" ref="loginRef">
            <el-form-item prop="username">
                <el-input v-model="state.user.username" placeholder="账号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="state.user.password" placeholder="请输入密码" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">登录</el-button>
            </el-form-item>
            <el-form-item>
                <div class="login-other">
                    <span>注册</span>
                    <span>忘记密码</span>
                </div>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup>
    import {computed,ref,reactive} from 'vue'
    import {useStore} from 'vuex'
    import {login} from '@/network/login.js'
    import {ElMessage} from 'element-plus'

    const store = useStore()

    const loginRef = ref(null)
    const state = reactive({
        user:{
            username:null,
            password:null
        },
        rules:{
            username:[
                {required:true,message:"账号没有填写",trigger:'blur'}
            ],
            password:[
                {required:true,message:"密码没有填写",trigger:'blur'}
            ]
        }
    })
    const dialogLoginVisiable = computed({
        get:()=>store.state.loginDialog,
        set:(value)=>{
            store.commit('changeLoginDialog', value)
        }
    })

    const loginDialogClose = ()=>{
        dialogLoginVisiable.value = false
    }

    const submit = ()=>{
        loginRef.value.validate((valid)=>{
            if(valid){
                login(state.user).then(res=>{
                    console.log(res)
                    if(res.err_code != 200) return ElMessage.error('登录失败')

                    store.commit('changeUserInfo', res.data)
                    ElMessage.success('登录成功')
                    loginDialogClose()
                })
            }
        })
    }

</script>

<style lang="less" scoped>
    .el-button{
        width:100%;
    }
    .login-other{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            color:#409eff;
            line-height: normal;
        }
    }
</style>