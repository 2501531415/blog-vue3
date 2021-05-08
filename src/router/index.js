import {createRouter,createWebHashHistory} from 'vue-router'
const Index = ()=>import('@/views/index.vue')
const Container = ()=>import('@/views/layout/container/container.vue')
const Home = ()=>import('@/views/home/home.vue')
const Category = ()=>import('@/views/category/category.vue')
const Detail = ()=>import('@/views/detail/detail.vue')

const routes = [
    {'path':'/',component:Index},
    {'path':'/page',component:Container,redirect:'/home',children:[
        {'path':'/home',component:Home,meta:{name:'首页'}},
        {'path':'/category',component:Category,meta:{name:'分类'}},
        {'path':'/detail/:type',component:Detail,meta:{name:'文章详情'}}
    ]}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to,form,next)=>{
    if(to.meta.name){
        document.title = to.meta.name
    }else{
        document.title = 'my-blog'
    }
    next()
})

export default router