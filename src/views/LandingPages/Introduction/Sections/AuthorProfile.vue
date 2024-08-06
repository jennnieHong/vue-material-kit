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
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="mb-0 fst-italic">안녕하세요. </h3>
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="mb-0">서울온정치과 <br />대표원장 배인재,<br /> 대표원장 이종성입니다.</h3>
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <!-- <div class="row mb-4">
                <div class="col-auto">
                  <span class="h6 me-1">323</span>
                  <span>Posts</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">3.5k</span>
                  <span>Followers</span>
                </div>
                <div class="col-auto">
                  <span class="h6 me-1">260</span>
                  <span>Following</span>
                </div>
              </div> -->
              <p class="text-lg mb-0">
                서울온정치과의원에서는 풍부한 경험의 실력있는 의료진 정밀한 진단과 첨단 장비를 통해 최선의 치료계획을 세웁니다.<br />
                언제나 환자를 생각하는 환자 중심의 치료로 내원해주시는 모든 분들께 원활한 소통, 따뜻한 대화로 다가가기 위해 노력하고 있습니다.<br />
                언제나 환자분들의 불편함에 귀를 기울여 정성을 담은 치료로 보답하는 서울온정치과의원이 되겠습니다.<br /><br />
                감사합니다.<br />

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
