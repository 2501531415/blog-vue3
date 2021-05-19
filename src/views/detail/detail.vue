<template>
    <div class="detail">
        <m-title></m-title>
        <div class="detail-sart" :style="{'left':sideStatus?left:'20%'}" v-if="state.detailData && state.commentData">
            <m-button icon="el-icon-star-off" :badge="state.detailData.meta.likes" @click="starClick" v-if="!isLiked"></m-button>
            <m-button icon="el-icon-star-on" :badge="state.detailData.meta.likes" color="#3f51b5" v-else></m-button>
            <m-button icon="el-icon-message" :badge="state.detailData.meta.comments" @click="commentIconClick"></m-button>
            <m-button icon="el-icon-view" :badge="state.detailData.meta.views"></m-button>
        </div>
        <el-row class="detail-container">
            <el-col :span='12' :offset='6'>
                <div class="detail-content" v-if="state.detailData">
                    <div class="detail-message">
                        <div>
                            <span>作者：</span>
                            <span>{{state.detailData.author}}</span>
                        </div>
                        <div>
                            <i class="el-icon-view"></i>
                            <span>{{state.detailData.meta.views}}</span>
                        </div>
                        <div>
                             <i class="el-icon-star-off"></i>
                            <span>{{state.detailData.meta.likes}}</span>
                        </div>
                        <div>
                            <i class="el-icon-document"></i>
                            <span>{{state.detailData.meta.comments}}</span>
                        </div>
                        <div>
                            <span>字数：</span>
                            <span>{{state.detailData.number}}</span>
                        </div>
                        <div class="detail-time">
                            <span>创建时间：</span>
                            <span>{{utcFormat(state.detailData.create_time)}}</span>
                        </div>
                    </div>
                   <div class="detail-content-word">
                        <div class="detail-title">
                            <span>{{state.detailData.title}}</span>
                        </div>
                        <div class="detail-word" v-html="state.detailData.content" v-highlight></div>
                        <div class="detail-bottom-message">
                            <div class="bottom-message-time">
                                <span>最后更新时间：</span>
                                <span>{{utcFormat(state.detailData.update_time)}}</span>
                            </div>
                            <div class="bottom-message-url">
                                <span>外部链接：</span>
                                <span>暂无</span>
                            </div>
                        </div>
                    </div>
                    <div class="detail-tag">
                         <tag-group :tagData="state.detailData.keyWord?state.detailData.keyWord:state.detailData.type"></tag-group>
                    </div>
                </div>
                <div class="detail-comment" v-if="state.commentData" ref="commentRef">
                    <m-comment @submit="submit" ref="comment"></m-comment>
                    <div class="detail-comment-tip">
                        <span>Code1:Don't post illegal comments</span>
                    </div>
                    <div class="detail-comment-from">
                        <span>Powered By wmyy</span>
                    </div>
                </div>
                <div class="detail-comment-list" v-if="state.commentData">
                    <m-comment-list :commentData="state.commentData" @commentClick="commentClick" ref="commentList" v-if="state.commentData.length > 0"></m-comment-list>
                    <el-empty description="请留下您的评论" v-else></el-empty>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import {reactive,ref,computed, onMounted, inject, watch} from 'vue'
    import {useRoute} from 'vue-router'
    import {useStore} from 'vuex'
    import marked from 'marked'
    import {getArticleDetail,getLearnDetail,postLike,ifLikedApi} from '@/network/article.js'
    import {getComment,postComment,secondComment} from '@/network/comment.js'
    import {utcFormat} from '@/utils/time.js'
    import {ElMessage} from 'element-plus'
    import TagGroup from '@/components/element/tagGroup/index.vue'
    import MTitle from '@/components/common/mTitle/index.vue'
    import MComment from '@/components/project/mComment/index.vue'
    import MCommentList from '@/components/project/mCommentList/index.vue'
    import MButton from '@/components/project/mButton/index.vue'
    const route = useRoute()
    const store = useStore()
    const state = reactive({
        detailData:null,
        commentData:null
    })

    const commentRef = ref(null)
    const comment = ref(null)

    const commentList = ref(null)

    const isLiked = ref(null)

    const scrollTo = inject('scrollTo')

    const sideStatus = computed(()=>store.state.sideStatus)

    const left = computed(()=>`calc(0.2*(100vw - 300px) + 300px)`)

    const userInfo = computed(()=>store.state.userInfo)
    //获取评论列表
    const getCommentList = ()=>{
        getComment(route.query.id).then(res=>{
            state.commentData = res.data
        })
    }

    if(route.params.type == 'article'){
        const id = userInfo.value?userInfo.value.user_id:null
        getArticleDetail(route.query.id,id).then(res=>{
            console.log(res.data)
            res.data.content = marked(res.data.content)
            state.detailData = res.data
            isLiked.value = res.other?res.other.isLiked:null
        })
        getCommentList()
    }else{
        getLearnDetail(route.query.id).then(res=>{
            console.log(res)
            res.detail.content = marked(res.detail.content)
            state.detailData = res.detail
        })
    }
    
    //评论点击事件
    const submit = (commentValue)=>{
        if(!userInfo.value){
            return store.commit('changeLoginDialog',true)
        }else{
            const postData = {
                article_id:state.detailData._id,
                user_id:userInfo.value.user_id,
                comments:commentValue
            }
            postComment(postData).then(res=>{
                if(res.err_code !=200) ElMessage.error('评论失败')
                getCommentList()
                ElMessage.success('评论成功')
                comment.value.clearInput()
            })
            //console.log(postData)
            //comment.value.clearInput()
        }   
    }
    //回复评论点击事件
    const commentClick = (commentValue)=>{
        if(!userInfo.value){
            return store.commit('changeLoginDialog',true)
        }else{
            commentValue.user_id = userInfo.value.user_id
            secondComment(commentValue).then(res=>{
                if(res.err_code !=200) ElMessage.error('回复评论失败')
                console.log(commentList.value)
                commentList.value.resetReplay(commentValue.to_userId)
                getCommentList()
                ElMessage.success('评论成功')
            })
        }
        
    }
    //侧边栏comment点击
    const commentIconClick = ()=>{
        scrollTo(commentRef.value.offsetTop)
    }
    //like
    const starClick = ()=>{
        if(!userInfo.value){
            return store.commit('changeLoginDialog',true)
        }else{
            const likeData = {
                user_id:userInfo.value.user_id,
                name_id:state.detailData._id
            }
            postLike('article',likeData).then(res=>{
                if(res.err_code !=200) return ElMessage.error('点赞失败')
                state.detailData.meta.likes+=1
                isLiked.value = true
                ElMessage.success('点赞成功')
            })
        }   
    }

    //watch userInfo change
    watch(userInfo,(value,old)=>{
        if(!value){
            isLiked.value = false   
        }else{
            var params = {
                user_id:value.user_id,
                name_id:state.detailData._id
            }
            ifLikedApi(params).then(res=>{
                if(res.err_code == 200) isLiked.value = res.data.isLiked
            })
        }
    })

</script>

<style lang="less">
@import '@/assets/less/markdown.less';
.detail-sart{
    position: fixed;
    z-index: 99;
    display: flex;
    flex-direction: column;
    top:40%;
    transform: translate(0px,-50%);
    transition: left 2s ease 0s;
    .m-button{
        margin-bottom: 10px;
    }
}
.detail-container{
    //background-color:red;
    width:100%;
    transform: translate(0px,-80px);
    //transition:all 0.4s ease-in-out 0s;
    .detail-content{
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 2px 5px 12px rgb(0 0 0 / 30%);
        .detail-message{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 5px 0px;
            border-bottom: 1px dashed #eee;
            div{
                margin: 0px 10px;
                font-size: 14px;
                white-space: nowrap;
                color:rgba(0,0,0,.65);
            }
        }
        .detail-content-word{
            padding:40px 30px;
            .detail-title{
            font-size: 30px;
            font-weight: 500;
            }
            .detail-word{
                margin-top: 20px;
            }
            .detail-bottom-message{
                min-height: 100px;
                border-radius: 40px 40px 0px 40px;
                background-color: #ecf2f8;
                margin-top: 40px;
                padding: 0px 40px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 14px;
                color: gray;
                letter-spacing: 1px;
            }
        }
        .detail-tag{
            padding: 10px 30px;
            border-top: 1px solid #eee;
            min-height: 32px;
        }
    }
    .detail-comment{
        .detail-content();
        margin-top:50px;
        padding:30px;
        &-tip{
            margin: 30px 10px;
            border-radius: 4px;
            padding: 10px;
            background-color: #f6f6f6;
            opacity: 0.7;
        }
        &-from{
            display: flex;
            justify-content: flex-end;
            font-size: 14px;
            color: gray;
        }
    }
    .detail-comment-list{
        .detail-comment()
    }
}
</style>