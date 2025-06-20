<!-- ------------------------------template------------------------------ -->
<template>
    <div class="content">
        <div class="view" :style="{ 'max-width': view + 'px' }">
            <RouterView></RouterView>
        </div>
    </div>
    <div class="shell">
        <div class="scrollbar" ref="scrollbar">
            <div class="item" v-for="key in SItem" :mark="key.id">
                <RouterLink :to="`/${key.router}`">
                    <el-image :src="`/src/assets/images/index/${key.src}.webp`">
                        <template #error>
                            <svg class="error" viewBox="0 0 1024 1024">
                                <path d="M776 328m-72 0a72 72 0 1 0 144 0 72 72 0 1 0-144 0Z" />
                                <path
                                    d="M999.904 116.608a32 32 0 0 0-21.952-10.912l-456.192-31.904a31.552 31.552 0 0 0-27.2 11.904l-92.192 114.848a32 32 0 0 0 0.672 40.896l146.144 169.952-147.456 194.656 36.48-173.376a32 32 0 0 0-11.136-31.424L235.616 245.504l79.616-125.696a32 32 0 0 0-29.28-49.024l-240.192 16.768a32 32 0 0 0-29.696 34.176l55.808 798.016a32.064 32.064 0 0 0 34.304 29.696l176.512-13.184c17.632-1.312 30.848-16.672 29.504-34.272s-16.576-31.04-34.304-29.536l-144.448 10.784-6.432-92.512 125.312-12.576a32 32 0 0 0 28.672-35.04 32.16 32.16 0 0 0-35.04-28.672l-123.392 12.416L82.144 149.184l145.152-10.144-60.96 96.224a32 32 0 0 0 6.848 41.952l198.4 161.344-58.752 279.296a30.912 30.912 0 0 0 0.736 14.752 31.68 31.68 0 0 0 1.408 11.04l51.52 154.56a31.968 31.968 0 0 0 27.456 21.76l523.104 47.552a32.064 32.064 0 0 0 34.848-29.632L1007.68 139.84a32.064 32.064 0 0 0-7.776-23.232z m-98.912 630.848l-412.576-39.648a31.52 31.52 0 0 0-34.912 28.768 32 32 0 0 0 28.8 34.912l414.24 39.808-6.272 89.536-469.728-42.72-39.584-118.72 234.816-310.016a31.936 31.936 0 0 0-1.248-40.192L468.896 219.84l65.088-81.056 407.584 28.48-40.576 580.192z" />
                            </svg>
                        </template>
                    </el-image>
                </RouterLink>
            </div>
        </div>
    </div>
</template>


<!-- ------------------------------script------------------------------ -->
<script lang='ts' setup>

import { ref, onMounted, reactive } from 'vue';

import { RouterView,RouterLink } from 'vue-router'

let id = 0

const SItem = reactive([{ "id": id++, src: `nether_star`, page: "主页", router: "home" }, { "id": id++, src: `banner_pattern`, page: "外部网站", router: "out_web" }])


const scrollbar = ref<HTMLElement | null>(null);

onMounted(() => {
    scrollbar.value?.addEventListener('wheel', (event: WheelEvent) => {
        if (event.deltaY !== 0) {
            scrollbar.value!.scrollLeft += event.deltaY;
            event.preventDefault();
        }
    });
});

const view = ref(Math.floor((innerWidth - 64) / 144) * 144)

window.addEventListener('resize', () => {
    view.value = Math.floor((innerWidth - 64) / 144) * 144
});

</script>


<!-- ------------------------------style------------------------------ -->
<style lang='scss' scoped>
.content {
    width: calc(100% - 64px);
    position: relative;
    transform: translateX(-50%);
    left: 50%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    padding: 16px;
    height: calc(100vh - 208px);
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    .view {
        position: relative;
        display: inline-block;
        transform: translateX(-50%);
        left: 50%;
        margin: 0 auto;
    }
}

.shell:hover .scrollbar::-webkit-scrollbar-thumb {
    background: rgba(110, 110, 110, 1);
}

.shell {
    bottom: 16px;
    transform: translateX(-50%);
    left: 50%;
    position: fixed;
    height: 64px;
    max-width: calc(100% - 64px);
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    padding: 16px;

    .scrollbar {
        scroll-behavior: smooth;
        display: inline-block;
        position: relative;
        height: 70px;
        transform: translateX(-50%);
        left: 50%;
        max-width: 100%;
        overflow-y: hidden;
        overflow-x: auto;
        white-space: nowrap;

        .item {
            display: inline-block;
            width: 64px;
            height: 64px;
            margin-left: 8px;
            margin-right: 8px;
            image-rendering: pixelated;

            .el-image {
                width: 64px;
                height: 64px;
                image-rendering: pixelated;

                .error {
                    width: 50%;
                    height: 50%;
                    position: relative;
                    transform: translate(-50%, -50%);
                    left: 50%;
                    top: 50%;
                }
            }
        }
    }

    .scrollbar::-webkit-scrollbar-button,
    .scrollbar::-webkit-scrollbar-track-piece,
    .scrollbar::-webkit-scrollbar-corner,
    .scrollbar::-webkit-resizer {
        display: none;
    }

    .scrollbar::-webkit-scrollbar {
        height: 6px;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        // transition: background 0.5s ease;
        background: rgba(110, 110, 110, 0);
        border-radius: 3px;
    }

    .scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(55, 55, 55, 1);
    }
}
</style>