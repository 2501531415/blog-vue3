<template>
    <el-dialog title="登录" v-model="dialogLoginVisiable" @close="loginDialogClose">
        <el-form :model="state.user" :rules="state.rules" ref="loginRef">
            <el-form-item label="账号" prop="username">
                <el-input v-model="state.user.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="state.user.password" type="password" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
            <el-button @click="dialogLoginVisiable = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </template>
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
            username:'admin',
            password:123456
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