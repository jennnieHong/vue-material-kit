<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// image
import profilePic from "@/assets/img/bruce-mars.jpg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="py-sm-7 py-5 position-relative">
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar size="xxl" class="shadow-xl position-relative z-index-2" :image="profilePic"
                alt="Avatar" />
            </div>
          </div>
          <div class="row py-7">
            <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
              <h2>대표원장 배인재</h2>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <!-- <h4 class="mb-0 mt-5">대표원장 배인재</h4> -->
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <p class="text-lg mb-5">
                <br />보건복지부 인증 통합치의학 전문의
                <br />前 세종특별자치시 보건소 치과 과장
                <br />서울대학교 치의학대학원 고급치의학 연수
                <br />미국 펜실베니아 대학 신경치료 교육과정 수료
                <br />미국 하버드 치과대학 임플란트 심화과정 수료
                <br />스위스 취리히 치과대학 임플란트 평생교육 수료
                <br />
                <br />오스템 AIC 임플란트 마스터코스 이수
                <br />대한통합치과학회 정회원
                <br />미국 임플란트학회(AAID) 정회원
                <br />SYL 치아교정 연구회 정회원
                <br />
                <br />前) 전라남도 신안군 흑산도 보건지소 치과장
                <br />前) 세종특별자치시 COVID19 역학조사관 및 선별진료의사
                <br />前) 여의도 파크원현대M치과 보철과 원장
                <br />前) 잠실 더365치과 부원장
                <br />前) 서울감동치과 장호원점 수석원장

                <!-- <br /><a href="javascript:;" class="text-success icon-move-right">More about me
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a> -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
