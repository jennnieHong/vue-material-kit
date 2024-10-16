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
              <!-- <h2>진료시간</h2>
              <div class="d-flex justify-content-between align-items-center mb-2">
              </div>
              <p class="text-lg mb-5">
                <br />월수 오전 9시 ~ 오후 8시 (야간진료)
                <br />화목금 오전 9시 ~ 오후 6시 30분
                <br />토 오전 9시 ~ 오후 2시
                <br />점심시간 오후 1시~ 오후 2시 30분
                <br />토요일 점심시간 없이 진료
                <br />일요일, 공휴일 휴진

              </p> -->

              <div class="col-md-12 ms-auto mt-6 md-mt-0">
                <div class="position-relative">
                  <img class="max-width-50 w-100 position-relative z-index-2" src="@/assets/img/hours.jpg"
                    alt="월수 오전 9시 ~ 오후 8시 (야간진료)/화목금 오전 9시 ~ 오후 6시 30분/토 오전 9시 ~ 오후 2시/점심시간 오후 1시~ 오후 2시 30분" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
