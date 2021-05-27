<template>
    <div class="header">
        <span v-show="titleShow" class="header-title" :style="{'left':sideStatus?`${width}`:'16.6%'}">{{headerTitle}}</span>
        <div class="header-left">
            <i :class="[sideStatus?'el-icon-s-fold':'el-icon-s-unfold']" @click="collapse"></i>
        </div>
        <div class="header-right">
            <el-autocomplete
                v-model="searchValue"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入文章标题"
                clearable
                prefix-icon="el-icon-search"
                @select="searchSelect"
                >
            </el-autocomplete>
            <div class="header-right-user">
                <el-button v-if="!userInfo" type="primary" @click="login" plain>去登录</el-button>
                <el-dropdown v-else>
                    <div class="el-dropdown-link">
                        <m-avatar :url="baseUrl+userInfo.avatar" width="30"></m-avatar>
                        <span>{{userInfo.username}}</span>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {computed,ref} from 'vue'
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    import MAvatar from '@/components/common/mAvatar/index.vue'
    import {baseUrl} from '@/config/config.js'
    import cookie from '@/lib/cookie.js'
    import {search} from '@/network/article.js'
    const store = useStore()
    const router = useRouter()
    const searchValue = ref(null)
    const headerTitle = computed(()=>store.state.headerTitle)

    const width = computed(()=>{
        return 'calc(.166*(100vw - 300px) + 300px)'
    })

    const titleShow = computed(()=>store.state.headerTitleShow)
    //侧边栏是否展开
    const sideStatus = computed(()=>store.state.sideStatus)
    //用户信息
    const userInfo = computed(()=>store.state.userInfo)
    const collapse = ()=>{
        store.commit('changeSideStatus',!sideStatus.value)
    }

    //search
    let timeout = ref(null)
    const querySearchAsync = (value,callback)=>{
        if(value && value.length > 0){
            search({searchString:value}).then(res=>{
                if(res.err_code == 200 && res.data.length >0){
                    var arr = []
                    res.data.forEach(item=>{
                        arr.push({value:item.title,id:item._id})
                    })
                    callback(arr)
                }else{
                    clearTimeout(timeout.value)
                    timeout.value = setTimeout(()=>{
                        callback([])
                    },1500)
                }
            })
        }
    }
    //saerch select
    const searchSelect = (item)=>{
        router.push({path:`/detail/article`,query:{'id':item.id}})
        searchValue.value = null
    }
    //点击登录
    const login = ()=>{
        store.commit('changeLoginDialog',true)
    }
    //退出登录
    const logout = ()=>{
        store.commit('changeUserInfo',null)
        cookie.remove('userInfo')
    }
</script>

<style lang="less" scoped>
    .header{
        height:100%;
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-right{
            display: flex;
            align-items:center;
            &-user{
                margin-left: 10px;
            }
        }
        &-title{
            position: absolute;
            font-size: 30px;
            font-weight: 500;
            color:white;
            transition: left 1s ease 0s;
        }
    }
    .el-icon-s-fold,.el-icon-s-unfold{
        font-size: 25px;
        color:#fff;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
        display: flex;
        align-items: center;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>