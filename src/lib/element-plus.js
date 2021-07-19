import {ElButton,ElContainer,ElAside,ElMain,ElHeader,ElFooter,ElIcon,ElMenu,ElMenuItem,ElSubmenu,ElScrollbar,ElRow,ElCol,ElTag,ElMessage,ElLoading,ElBacktop,ElInput,
    ElDialog,ElForm,ElFormItem,ElEmpty,ElDropdown,ElDropdownMenu,ElDropdownItem,ElPagination,ElAutocomplete,ElCard} from 'element-plus'

const components = [
    ElButton,
    ElContainer,
    ElAside,
    ElMain,
    ElHeader,
    ElFooter,
    ElIcon,
    ElMenu,
    ElMenuItem,
    ElSubmenu,
    ElScrollbar,
    ElRow,
    ElCol,
    ElTag,
    ElBacktop,
    ElInput,
    ElDialog,
    ElForm,
    ElFormItem,
    ElEmpty,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElPagination,
    ElAutocomplete,
    ElCard
]
const plugins = [
    ElLoading,
    ElMessage,
  ]


export default (app)=>{
    components.forEach(item=>{
        app.component(item.name,item)
    })
    plugins.forEach(plugin=>{
        app.use(plugin)
    })
}