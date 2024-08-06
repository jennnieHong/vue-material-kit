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
                <h3 class="mb-0">오시는 길</h3>
                <!-- <div class="d-block">
                  <MaterialButton class="text-nowrap mb-0" variant="outline" color="success" size="sm">Follow
                  </MaterialButton>
                </div> -->
              </div>
              <p class="text-lg mb-0">
                <img class="max-width-50 w-100 position-relative z-index-2" src="@/assets/img/myImages/map.jpg"
                  alt="image">
                경북 성주군 성주읍 성주로 3289, 더갤럭시빌딩 2층 <br />
                성주군 종합사회복지관, 성주국민체육센터 부근<br /><br />
                ✔ 버스이용안내<br />
                [성산5리 공용주차장 정류장]<br />
                0 (성주-문방-명광공단-성주)<br />
                0 (성주-선남-문방-선원-도흥-용신-성주)<br />
                0 (성주-선남-선원-도흥용신선남-성주)<br />
                0 (중거-용암-선남-성주)<br />
                1 (성주-전통시장입구-종합사회복지관-성주)<br />
                3(성주-놀벤져스-종합사회복지관-성산동고분군-성주)<br />
                4 (성주-성산동고분군 종합사회복지관-성주)<br />
                250 (성주-대구북부 문양역-성주)<br />
                250 (성주-대구북부-성주)<br /><br />
                ✔ 주차안내<br />
                [네비게이션 주소]<br />
                경상북도 성주군 성주읍 성주로 3289<br />
                서울온정치과 건물 주차장, 성산리 공용주차장을 이용해주세요.<br />


                <!-- <br /><a href="#" class="text-success icon-move-right">More about me
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
