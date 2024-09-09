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
import sinus from "@/assets/img/myImages/sinus.jpg";
import sinusInvolvement from "@/assets/img/myImages/sinusInvolvement.jpg";
import implantImage from '@/assets/img/myImages/implant.jpg';
import mapImage from '@/assets/img/myImages/map.jpg';
import xray from '@/assets/img/myImages/x-ray.jpg';
import sinus1 from "@/assets/img/myImages/sinus1.jpg";
import sinus2 from "@/assets/img/myImages/sinus2.jpg";
import sinus3 from "@/assets/img/myImages/sinus3.png";
import sinus4 from "@/assets/img/myImages/sinus4.png";
import ct from '@/assets/img/myImages/ct.jpg';
import mold from '@/assets/img/myImages/mold.jpg';
import moldapply from '@/assets/img/myImages/moldapply.jpg';

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
  { id: 1, title: '뼈의 두께가 부족', content: '상악동이 많이 내려와 뼈의 두께가 부족한 경우', img: sinus1 },
  { id: 2, title: '오랜 치아 상실', content: '치아를 상실한 지 오랜 시간이 지난 경우', img: sinus2 },
  { id: 3, title: '잇몸질환으로 발치', content: '잇몸질환으로 발치한 후 오랜 시간 방치한 경우', img: sinus3 }, // 이미지 없는 경우
  { id: 4, title: '틀니의 오랜 사용', content: '오랜 시간동안 틀니를 사용해 뼈가 퇴축된 경우', img: sinus4 }, // 이미지 없는 경우
];

// 템플릿 리터럴을 자바스크립트 변수에 할당
const title = "상악동 거상술이란?";
const content = `상악동은 얼굴 뼈의 빈 공간을 말하는데 
상악동막을 위로 올려 빈 공간에 뼈를 이식하여
임플 란트 식립을 위한 공간을 확보하고,
위턱의 안정적인 식립을 도와주는 시술입니다.`;

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
    <div class="page-header min-vh-35" :style="{ backgroundImage: `url(${bg0})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              개인정보처리방침
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

    <MyNewsletter title="상악동이란?" content="광데에서 윗턱뼈꺼지 이어진 부분의 빈 공간" :img=sinus></MyNewsletter>
    <MyNewsletter :title="title" :content="content" :img=sinusInvolvement></MyNewsletter>
    <MyView title="치료 추천 대상" :items="itemList" height="300">
    </MyView>
  </div>
  <DefaultFooter />
</template>
