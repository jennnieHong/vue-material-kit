<script setup>
import { onMounted, onUnmounted } from "vue";

// Sections components
import MyView from "../../../layouts/sections/components/MyView.vue";
import MyNewsletter from "../AboutUs/Sections/MyNewsletter.vue";


//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/myImages/implant.jpg";
import implantImage from '@/assets/img/myImages/implant.jpg';
import mapImage from '@/assets/img/myImages/map.jpg';
import xray from '@/assets/img/myImages/x-ray.jpg';
import ct from '@/assets/img/myImages/ct.jpg';
import mold from '@/assets/img/myImages/mold.jpg';
import moldapply from '@/assets/img/myImages/moldapply.jpg';
import navigation from '@/assets/img/myImages/navigation.jpg';

//dep
import Typed from "typed.js";


//sections
import Information from "./Sections/AboutInformation.vue";
import AboutTeam from "./Sections/AboutTeam.vue";
import Featuring from "./Sections/AboutFeaturing.vue";
import Newsletter from "./Sections/AboutNewsletter.vue";

const body = document.getElementsByTagName("body")[0];

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

// 리스트 데이터
const itemList = [
  { id: 1, title: 'Step 1', content: 'X-RAY, 3D CT 촬영', img: xray },
  { id: 2, title: 'Step 2', content: '3D CT를 활용하여 모의수술 진행', img: ct },
  { id: 3, title: 'Step 3', content: '모의수술을 바탕으로 수술유도장치 제작', img: mold }, // 이미지 없는 경우
  { id: 4, title: 'Step 4', content: '수술유도장치를 이용하여 실제 수술 진행', img: moldapply }, // 이미지 없는 경우
];

// 템플릿 리터럴을 자바스크립트 변수에 할당
const title = "네비게이션 임플란트란?";
const content = `목표지점에 정확히 심을 수 있기에 네비게이션 임플란트라고 합니다. 
컴퓨터 모의수술을 통해 골조직, 신경위치 등을 파악하여 
더욱 정밀하고 안전하게 시술하는 시술법입니다. `;

//hooks
onMounted(() => {
  setNavPills();
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar :action="{
    route: 'javascript:;',
    label: '오시는 길',
    color: 'btn-white',
  }" transparent />
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-35" :style="{ backgroundImage: `url(${bg0})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container" >
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white" >
              디지털 임플란트
              <!-- <span class="text-white" id="typed"></span> -->
            </h1>
            <div id="typed-strings">
              <!-- <h1>team</h1>
              <h1>design</h1>
              <h1>tool</h1> -->
            </div>
            <!-- <p class="lead mb-4 text-white opacity-8">
              We’re constantly trying to express ourselves and actualize our
              dreams. If you have the opportunity to play this game
            </p>
            <button type="submit" class="btn bg-white text-dark">
              Create Account
            </button>
            <h6 class="text-white mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center">
              <a href="javascript:;"><i class="fab fa-facebook text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-instagram text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-twitter text-lg text-white me-4"></i></a>
              <a href="javascript:;"><i class="fab fa-google-plus text-lg text-white"></i></a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <!-- <Information /> -->
    <!-- <AboutTeam /> -->
    <!-- <Featuring /> -->
    <!-- <Newsletter /> -->

    <MyNewsletter :title="title" :content="content" :img=navigation id="scroll-focus"></MyNewsletter>
    <MyView title="진행순서" :items="itemList" height="300">
    </MyView>

    <!-- Material Icons 사용 예제 -->
    <span class="material-icons-round">face</span>
    <span class="material-icons-round">home</span>
    <span class="material-icons-round">search</span>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
      <path
        d="M480-160q-83 0-141.5-58.5T280-360q0-73 45.5-127.5T440-556v-171l-64 63-56-56 160-160 160 160-56 57-64-64v171q69 14 114.5 68.5T680-360q0 83-58.5 141.5T480-160Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120Z" />
    </svg>
  </div>
  <DefaultFooter />
</template>
