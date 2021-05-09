<template>
    <div class="main">
        <div class="home-title">
            <el-row>
                <el-col :span="16" :offset="4">
                    <div class="home-title-text">
                        <!-- <span>this is my blog</span> -->
                    </div>
                     <div class="home-sub-text">
                        <!-- <span>事实并非理所当然，世界总是欲盖弥彰</span> -->
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- <router-view v-slot="{ Component }">
            <transition>
                <keep-alive :exclude="['detail','home']">
                <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view> -->
        <router-view></router-view>
    </div>
</template>

<style lang="less" scoped>
.main{
    min-height: calc(100vh - 120px);
    .home-title{
        background-color:pink;
        padding: 40px 0px;
        min-height:80px;
        .home-title-text{
            font-size: 30px;
            font-weight: 500;
        }
        .home-sub-text{
            margin-top:10px;
        }
    }
}
    
</style>