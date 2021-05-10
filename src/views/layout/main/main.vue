<template>
    <div class="main">
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
}
    
</style>