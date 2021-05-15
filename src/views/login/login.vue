<template>
    <el-dialog :title="dialogTitle" v-model="dialogLoginVisiable" @closed="loginDialogClose" width="20%" top="30vh" >
        <img class="login-logo" src="@/assets/img/login.png" alt="">
        <el-form :model="state.user" :rules="state.rules" ref="loginRef" v-show="loginForm">
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
                    <span @click="register">注册</span>
                    <span @click="forget">忘记密码</span>
                </div>
            </el-form-item>
        </el-form>
        <!-- register -->
        <el-form :model="state.register" :rules="state.registerRule" ref="registerRef" v-show="registerForm">
             <el-form-item prop="username">
                <el-input v-model="state.register.username" placeholder="请输入账号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="state.register.password" placeholder="请输入密码" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="surePassword">
                <el-input v-model="state.register.surePassword" placeholder="请输入确定密码" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input v-model="state.register.email" placeholder="请输入邮箱" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="registerSubmit">注册</el-button>
            </el-form-item>
            <el-form-item>
                <div class="login-other">
                    <span @click="goLogin">登录</span>
                    <span @click="forget">忘记密码</span>
                </div>
            </el-form-item>
        </el-form>

        <!-- forget -->
        <el-form :model="state.forget" :rules="state.forgetRule" ref="forgetRef" v-show="forgetForm">
             <el-form-item prop="email">
                <el-input v-model="state.forget.email" placeholder="请输入绑定邮箱" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="newPassword">
                <el-input v-model="state.forget.newPassword" placeholder="请输入重置密码" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="forgetSubmit">确定</el-button>
            </el-form-item>
            <el-form-item>
                <div class="login-other">
                    <span @click="goLogin">登录</span>
                    <span @click="register">注册</span>
                </div>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup>
    import {computed,ref,reactive} from 'vue'
    import {useStore} from 'vuex'
    import {login,registerApi,forgetApi} from '@/network/login.js'
    import {ElMessage} from 'element-plus'

    const store = useStore()
    const dialogTitle = ref('账密登录')
    const loginRef = ref(null)
    const registerRef = ref(null)
    const forgetRef = ref(null)
    const loginForm = ref(true)
    const registerForm = ref(false)
    const forgetForm = ref(false)
    const passwordValid = (rule,value,callback)=>{
        if(state.register.surePassword){
            registerRef.value.validateField('surePassword');
            callback()
        }
    }
    const surePasswordValid = (rule,value,callback)=>{
        if(!value){
            callback(new Error('确认密码没有填写'))
        }else if(value != state.register.password){
            callback(new Error('前后密码不一致'))
        }else{
            callback()
        }
    }
    const emailValid = (rule,value,callback)=>{
        const emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
        if(emailReg.test(value)){
            callback()
        }else{
            callback(new Error('请输入有效的邮箱'))
        }
    }
    const state = reactive({
        user:{
            username:'',
            password:''
        },
        register:{
            username:null,
            password:null,
            surePassword:null,
            email:null
        },
        forget:{
            email:null,
            newPassword:null
        },
        rules:{
            username:[
                {required:true,message:"账号没有填写",trigger:'blur'}
            ],
            password:[
                {required:true,message:"密码没有填写",trigger:'blur'}
            ]
        },
        registerRule:{
            username:[
                {required:true,message:"账号没有填写",trigger:'blur'}
            ],
            password:[
                {required:true,message:"密码没有填写",trigger:'blur'},
                {validator:passwordValid,trigger:'blur'}
            ],
            surePassword:[
                {validator:surePasswordValid,trigger:'blur'}
            ],
            email:[
                {required:true,message:"邮箱没有填写",trigger:'blur'},
                {validator:emailValid,trigger:'blur'}
            ],
        },
        forgetRule:{
            email:[
                {required:true,message:"绑定邮箱没有填写",trigger:'blur'},
                {validator:emailValid,trigger:'blur'}
            ],
            newPassword:[
                {required:true,message:"新密码没有填写",trigger:'blur'}
            ],
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
        registerForm.value = false
        forgetForm.value = false
        loginForm.value = true
        dialogTitle.value = '账密登录'
        loginRef.value.resetFields()
        registerRef.value.resetFields()
        forgetRef.value.resetFields()
    }

    const submit = ()=>{
        loginRef.value.validate((valid)=>{
            if(valid){
                loginApi(state.user)
            }
        })
    }
    const registerSubmit = ()=>{
        registerRef.value.validate((valid)=>{
            if(valid){
                registerApi(state.register).then(res=>{
                    if(res.err_code != 200) return ElMessage.error(res.message)
                    const loginInfo = {
                        username:state.register.username,
                        password:state.register.surePassword
                    }
                    loginApi(loginInfo)
                })
            }
        })
    }

    const forgetSubmit = ()=>{
        forgetRef.value.validate((valid)=>{
            if(valid){
                forgetApi(state.forget).then(res=>{
                    if(res.err_code !=200) return ElMessage.error(res.message)
                    ElMessage.success('密码已重置')
                    goLogin()
                })
            }
        })
    }

    const loginApi = (userInfo)=>{
        login(userInfo).then(res=>{
            if(res.err_code != 200) return ElMessage.error('登录失败')
            store.commit('changeUserInfo', res.data)
            ElMessage.success('登录成功')
            loginDialogClose()
        })
    }
    //登录form
    const goLogin = ()=>{
        registerForm.value = false
        forgetForm.value = false
       loginForm.value = true
       dialogTitle.value = '账密登录'
       loginRef.value.resetFields()
    }
    //注册
    const register = ()=>{
       registerForm.value = true
       forgetForm.value = false
       loginForm.value = false
       dialogTitle.value = '注册账号'
       registerRef.value.resetFields()
    }
    const forget = ()=>{
       registerForm.value = false
       forgetForm.value = true
       loginForm.value = false
       dialogTitle.value = '忘记密码'
       forgetRef.value.resetFields()
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
            cursor: pointer;
            user-select: none;
        }
    }
    .login-logo{
        position: absolute;
        top: 0;
        width: 10rem;
        left: 50%;
        transform: translate(-50%,-83%);
        z-index: 1;
        user-select: none;
    }
    .el-dialog__title{
        font-weight: bold;
    }
</style>