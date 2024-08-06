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
              <h2>서울온정치과의 특별함</h2>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h4 class="mb-0 mt-5">✔ 디지털 치과</h4>
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <p class="text-lg mb-5">
                3D CT, 구강 스캐너, 3D 프린터와 같은 디지털 장비를 통해 빠르고 안전하며 정확한 진료를 제공합니다.

                <!-- <br /><a href="javascript:;" class="text-success icon-move-right">More about me
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a> -->
              </p>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h4 class="mb-0">✔ 전문의 진료</h4>
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <p class="text-lg mb-5">
                보건복지부 인증 통합치의학 전문의 원장들의 협진으로 정확한 진단, 뛰어난 치료 결과를 약 속드립니다.

                <!-- <br /><a href="javascript:;" class="text-success icon-move-right">More about me
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a> -->
              </p>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h4 class="mb-0">✔ 대학병원수준의 진료</h4>
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <p class="text-lg mb-5">
                전문성을 바탕으로 치과대학병원과 동일한 진료 품질과 시스템을 갖추고 있습니다.<br />

                <!-- <br /><a href="javascript:;" class="text-success icon-move-right">More about me
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a> -->
              </p>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h4 class="mb-0">✔ 최대 규모</h4>
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <p class="text-lg mb-0">
                성주군 최대 규모의 치과로 편안하고 쾌적하게 치료받으실 수 있습니다.

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
