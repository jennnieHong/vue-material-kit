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
import cavity from '@/assets/img/myImages/cavity.jpg';//충치치료
import decay from '@/assets/img/myImages/decay.png';

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
const itemTitle = "충치 진행단계에 따른 치료 방법";
const itemList = [
  { id: 1, title: '1단계-레진', content: '치마의 가장 바깥쪽 법랑질부터 썩기 시작하며 자각 증상이 없어 간단한 레진 치료가 가능합니다.', },
  { id: 2, title: '2단계-인레이', content: '법랑질을 뚫고 상아질까지 충치가 진행되어 시린 증상과 통증이 나타나 범위에 따라 인레이 치료가 필요합니다.', },
  { id: 3, title: '3단계-크라운', content: '혈관이 분포된 치수까지 진행되어 극심한 통증이 발생하며 충치의 범위가 깊고 넓어 신경치료와 크라운 치료가 필요합니다.', },
  { id: 4, title: '4단계-일플란트', content: '뿌리와 잇몸까지 손상되어 신경조작이 썩어 발치 후 임플란트 수술이 필요합니다.', },
];

// 템플릿 리터럴을 자바스크립트 변수에 할당
const title = "충치치료란?";
const content = `음식을 섭취한 후 남아있는 음식찌꺼기나 치태 속의 세균이 
치아를 부식시켜 충치를 일으킵니다.
이로 인해 잃어버린 치아의 기능과 형태를 회복시켜주는 치료입니다.

충치의 진행단계에 따라 알맞은 치료법을 선택해 치료합니다.`;

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
              일반치료
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

    <MyNewsletter :title="title" :content="content" :img=decay></MyNewsletter>
    <MyView :title="itemTitle" :items="itemList" height="300" :part1Ratio="5">
    </MyView>
  </div>
  <DefaultFooter />
</template>
