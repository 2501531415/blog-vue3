<template>
    <div class="m-message">
        <m-title bgc="#fdf6ec">
            <template #title>
                <span class="m-message-title">留言板</span>
            </template>
            <template #subTitle>
                <span class="m-message-title">目前留言板仅支持留言,其他功能等待开放...</span>
            </template>
        </m-title>
        <el-row class="m-message-content">
            <el-col :span="18" :offset="3">
                <el-card>
                    <MMessage :MessageList="message.messageList" class="m-message-list"/>
                    <div class="m-message-pagination">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :page-size="pagination.limit"
                            :current-page="pagination.page"
                            :total="total" @prev-click="paginationChange" @next-click="paginationChange" @current-change="paginationChange">
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
    import {getMessageApi,addMessageApi} from '@/network/message'
    import {baseUrl} from '@/config/config'
    import MMessage from '@/components/project/mMessage/index.vue'
    import MComment from '@/components/project/mComment/index.vue'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import MTitle from '@/components/common/mTitle/index.vue'
    import avatar from '@/assets/img/avatar.jpg'
    import {success,error} from '@/components/element/notice/message'

    const store = useStore()
    const message = reactive({
        messageList:[]
    })
    
    const comment = ref(null)
    const total = ref(0)
    
    const pagination = reactive({
        page:1,
        limit:10
    })

    const userInfo = computed(()=>store.state.userInfo)

    const type = computed(()=>{
        if(route.params.type == 'article'){
            return true
        }else{
            return false
        }
    })

    const commentUsername = computed(()=>userInfo.value?userInfo.value.username:'未登录')

    //获取留言
    const getMessage = ()=>{
        getMessageApi(pagination).then(res=>{
            total.value = res.total
            message.messageList = res.data.map(item=>{
                item.avatar = baseUrl + item.avatar
                return item
            })
        })
    }
    getMessage()

    //留言提交
    const submit = (value)=>{
        if(!userInfo.value){
            return store.commit('changeLoginDialog',true)
        }else{
            const submibData = {
                avatar: userInfo.value.avatar,
                content: value,
                username: userInfo.value.username,
            }
            addMessageApi(submibData).then(res=>{
                if(res.err_code !=200) return error('留言失败')
                getMessage()
                success('留言成功')
                comment.value.clearInput()
            })
        }
    }
    
    //分页改变
    const paginationChange = (page)=>{
        pagination.page = page
        getMessage()
    }
</script>

<style lang="less">
    .m-message{
        &-title{
            color: rgb(20, 20, 20);
        }
        &-content{
            padding: 10px 0px;
        }
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