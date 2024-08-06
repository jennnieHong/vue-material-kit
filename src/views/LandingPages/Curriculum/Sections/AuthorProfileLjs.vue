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
              <h2>대표원장 이종성</h2>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <!-- <h4 class="mb-0 mt-5">대표원장 배인재</h4> -->
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <p class="text-lg mb-5">
                <br />보건복지부 인증 통합치의학 전문의
                <br />前 전라북도 군산시 보건소 구강보건센터 과장
                <br />원광대학교 치과대학 치의학 학사
                <br />서울대학교 치과병원 EXTERNSHIP 수료
                <br />Dentalbean endodontics seminar 수료
                <br />Dentalbean prosthetics seminar 수료
                <br />미국 UCLA 치과대학 교정과정 수료
                <br />KAYA 치과병원 보철과정 수료
                <br />
                <br />미국 임플란트학회(AAID) 정회원
                <br />세계 임플란트학회(ICOI) 정회원
                <br />대한턱관절교합학회 정회원
                <br />대한통합치과학회 정회원
                <br />
                <br />前) 바른손치과 홍성점 수석원장

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
