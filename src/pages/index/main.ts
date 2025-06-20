import { createApp } from 'vue'

import index from '../../components/index/header.vue'

import '/src/modules/element-plus/index.scss'

import '/src/scss/index/main.scss'

import router from "../../router/index/index"

const main = createApp(index)
main.use(router)
main.mount('#main')
