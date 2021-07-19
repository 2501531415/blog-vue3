<template>
    <div class="m-message">
        <el-row >
            <el-col :span="18" :offset="3">
                <el-card>
                    <MMessage :MessageList="message.messageList" class="m-message-list"/>
                    <div class="m-message-pagination">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :current-page="page"
                            :hide-on-single-page="true"
                            :total="total" @prev-click="prevClick" @next-click="nextClick" @current-change="currentChange">
                        </el-pagination>
                    </div>
                    <m-comment @submit="submit" ref="comment">
                        <template #userInfo>
                            <m-avatar :url="baseUrl + userInfo.avatar" width="40" v-if="userInfo"></m-avatar>
                            <m-avatar :url="avatar" width="40" v-else></m-avatar>
                            <span>当前用户:<span :class="[userInfo?'m-message-comment-username':'m-message-comment-unusername']">{{commentUsername}}</span></span>
                        </template>
                    </m-comment>
                   
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import {reactive,computed,ref} from 'vue'
    import {useStore} from 'vuex'
    import {getMessage} from '@/network/message'
    import {baseUrl} from '@/config/config'
    import MMessage from '@/components/project/mMessage/index.vue'
    import MComment from '@/components/project/mComment/index.vue'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import avatar from '@/assets/img/avatar.jpg'

    const store = useStore()
    const message = reactive({
        messageList:[]
    })

    const total = ref(7)
    const page = ref(1)

    const userInfo = computed(()=>store.state.userInfo)

    const type = computed(()=>{
        if(route.params.type == 'article'){
            return true
        }else{
            return false
        }
    })

    const commentUsername = computed(()=>userInfo.value?userInfo.value.username:'未登录')

    getMessage().then(res=>{
        console.log(res)
        message.messageList = res.data
    })

    const submit = ()=>{

    }
    
    const prevClick = ()=>{

    }

    const nextClick = ()=>{

    }
    const currentChange = ()=>{
        
    }
</script>

<style lang="less">
    .m-message{
        padding-top: 10px;
        &-comment-username{
            color:#3f51b5;
        }
        &-comment-unusername{
            color:red;
        }
        &-pagination{
            display: flex;
            justify-content: center;
            margin: 10px;
        }
    }
</style>