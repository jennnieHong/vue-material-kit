<script setup>
import { onMounted, onUnmounted } from "vue";

// Sections components
import MyView from "../../../layouts/sections/components/MyView.vue";
import MyNewsletter from "../AboutUs/Sections/MyNewsletter.vue";


//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
// import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/myImages/implant.jpg";
import implantImage from '@/assets/img/myImages/implant.jpg';
import mapImage from '@/assets/img/myImages/map.jpg';
import xray from '@/assets/img/myImages/x-ray.jpg';
import ct from '@/assets/img/myImages/ct.jpg';
import mold from '@/assets/img/myImages/mold.jpg';
import moldapply from '@/assets/img/myImages/moldapply.jpg';
import cavity from '@/assets/img/myImages/cavity.jpg';
import orthodontic from '@/assets/img/myImages/orthodontic.jpg';//교정치료

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
const itemTitle = "치아 교정 대상";
const itemList = [
  { id: 1, title: '치아배열', content: '치아가 삐뚤빼뚤한 경우', },
  { id: 2, title: '앞니', content: '앞니가 돌출된 경우 및 윗니가 아랫니를 심하게 덮는 경우', },
  { id: 3, title: '아랫니', content: '아랫니가 윗니를 덮는 경우', },
  { id: 4, title: '부정교합', content: '위아래 치아의 교합이 맞지않아 정상적인 저작이 어려운 경우', },
  { id: 5, title: '영구치공간', content: '영구치가 날 공간이 부족한 경우', },
  { id: 6, title: '여백', content: '치아 사이가 벌어진 경우', },
  { id: 7, title: '유치', content: '유치가 제 시기에 빠지지 않은 경우', },
  { id: 8, title: '소리', content: '입을 벌릴 때 턱에서 소리가 나거나 통증이 있는 경우', },
  { id: 9, title: '비대칭', content: '얼굴이 비대칭이거나 돌출 입, 무턱, 주걱턱 등', },
];

// 템플릿 리터럴을 자바스크립트 변수에 할당
const title = "치아교정이란?";
const content = `치아교정은 치아의 배열 및 골격적 부조화를 바로잡아 
치아가 올바른 위치에 제대로 배열되어 잘 맞물릴 수 있도록
기능적 회복을 도와주는 치료방법입니다.`;

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
    color: 'bg-gradient-success',
  }" transparent />
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-35" :style="{ backgroundImage: `url(${cavity})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              심미치료
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

    <MyNewsletter :title="title" :content="content" :img=orthodontic></MyNewsletter>
    <MyView :title="itemTitle" :items="itemList" height="100" :part1Ratio="3">
    </MyView>
  </div>
  <DefaultFooter />
</template>
