<template>
    <div class="main">
        <router-view v-slot="{ Component }">
            <transition name="slide-fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
        <!-- <router-view></router-view> -->
    </div>
</template>

<style lang="less" scoped>
.main{
    min-height: calc(100vh - 120px);
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
//   transform: translateX(20px);
  opacity: 0;
}   
</style>