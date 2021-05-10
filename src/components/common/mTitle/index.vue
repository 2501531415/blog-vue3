<template>
    <div class="m-title">
        <el-row class="m-title-content">
            <el-col :span="16" :offset="4">
                <div class="m-title-text">
                    <!-- <span>this is my blog</span> -->
                    <slot name="title"></slot>
                </div>
                 <div class="m-sub-text">
                    <!-- <span>事实并非理所当然，世界总是欲盖弥彰</span> -->
                    <slot name="subTitle"></slot>
                </div>
            </el-col>
        </el-row>
        <div class="m-title-other">
            <slot name="other"></slot>
        </div>
    </div>
</template>

<style lang="less" scoped>
.m-title{
    background-color:#3f51b5;
    min-height:160px;
    color:#fff;
    position: relative;
    .m-title-content{
        padding: 40px 0px;
        .m-title-text{
        font-size: 30px;
        font-weight: 500;
            }
        .m-sub-text{
            margin-top:10px;
            }   
        }
    .m-title-other{
        position: absolute;
        bottom: 0px;
        right: 0px;
        left: 0px;
    }
}
    
</style>