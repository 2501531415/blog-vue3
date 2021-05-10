<template>
    <div class="detail">
        <m-title></m-title>
        <div class="detail-container">
            <el-row>
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
                                 <i class="el-icon-star-on"></i>
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
                    <div class="detail-comment">
                        <m-comment></m-comment>
                        <div class="detail-comment-tip">
                            <span>Code1:Don't post illegal comments</span>
                        </div>
                        <div class="detail-comment-from">
                            <span>Powered By wmyy</span>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
    import {reactive} from 'vue'
    import {useRoute} from 'vue-router'
    import marked from 'marked'
    import {getArticleDetail,getLearnDetail} from '@/network/article.js'
    import {utcFormat} from '@/utils/time.js'
    import TagGroup from '@/components/element/tagGroup/index.vue'
    import MTitle from '@/components/common/mTitle/index.vue'
    import MComment from '@/components/common/MComment/index.vue'
    const route = useRoute()

    const state = reactive({
        detailData:null
    })

    if(route.params.type == 'article'){
        getArticleDetail(route.query.id).then(res=>{
            res.data.content = marked(res.data.content)
            state.detailData = res.data
        })
    }else{
        getLearnDetail(route.query.id).then(res=>{
            console.log(res)
            res.detail.content = marked(res.detail.content)
            state.detailData = res.detail
        })
    }
</script>

<style lang="less">
@import '@/assets/less/markdown.less';
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
        .detail-comment-tip{
            margin: 30px 10px;
            border-radius: 4px;
            padding: 10px;
            background-color: #f6f6f6;
            opacity: 0.7;
        }
        .detail-comment-from{
            display: flex;
            justify-content: flex-end;
            font-size: 14px;
            color: gray;
        }
    }
}
.el-icon-star-on{
    color:red;
}
</style>