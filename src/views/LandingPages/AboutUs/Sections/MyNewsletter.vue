<script setup>
import { onMounted } from "vue";
// Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
    setMaterialInput();
});

// Props 정의
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: null,
    },
});
</script>

<template>
    <section class="pt-6">
        <div class="container mb-6">
            <div class="row">
                <!-- 이미지가 있을 때 col-md-6, 없을 때 col-md-10 -->
                <!-- <div class="col-md-6 m-auto"> -->

                <div :class="img ? 'col-md-6' : 'col-md-12'" class="m-auto">
                    <!-- Props로 전달된 title과 content 사용 -->
                    <h4>{{ title }}</h4>
                    <!-- <p class="mb-4">{{ content }}</p> -->
                    <!-- 줄바꿈을 위해 <p> 태그 안에서 v-html 사용 -->
                    <p class="mb-4" v-html="content.replace(/\n/g, '<br>')"></p>
                    <!-- <div class="row">
                        <div class="col-8">
                            <MaterialInput class="input-group-outline" id="email"
                                :label="{ text: 'Email Here...', class: 'form-label' }" type="email" />
                        </div>
                        <div class="col-4 ps-0">
                            <MaterialButton variant="gradient" color="success"
                                class="mb-0 h-100 position-relative z-index-2">Subscribe</MaterialButton>
                        </div>
                    </div> -->
                </div>
                <!-- 이미지가 전달된 경우에만 표시 -->
                <div v-if="img" class="col-md-5 ms-auto mt-6 md-mt-0">
                    <div class="position-relative">
                        <img class="max-width-50 w-100 position-relative z-index-2" :src="img" alt="image" />
                    </div>
                </div>
                <!-- 이미지가 전달되지 않아도 공간을 유지 -->
                <!-- <div class="col-md-5 ms-auto mt-6 md-mt-0">
                    <div class="position-relative">
                        <img v-if="img" class="max-width-50 w-100 position-relative z-index-2" :src="img" alt="image" />
                        <div v-else class="img-placeholder"></div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<style>
.img-placeholder {
    width: 100%;
    padding-top: 56.25%;
    /* 16:9 aspect ratio 유지 */
    /* background-color: #f0f0f0; */
    background-color: transparent;
    /* 투명 배경 */
    /* 회색 배경으로 빈 공간 강조 */
    border-radius: 8px;
    position: relative;
}
</style>
