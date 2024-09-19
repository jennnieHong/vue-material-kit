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
import rootCanal from '@/assets/img/myImages/rootCanal.jpg';//신경치료

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
import navpills_rec1 from "@/assets/img/myImages/navpills_rec1.png";
import navpills_rec2 from "@/assets/img/myImages/navpills_rec22.png";
import navpills_rec3 from "@/assets/img/myImages/navpills_rec33.png";
import navpills_rec4 from "@/assets/img/myImages/navpills_rec4.png";

// 리스트 데이터
const itemTitle = "신경치료가 필요한 경우";
const itemList = [
  { id: 1, title: '1.충치', content: '충치가 심해 신경까지 감염된 경우', img: navpills_rec1 },
  { id: 2, title: '2.치아손상', content: '외상으로 인해 치아가 깨지거나 금이 간 경우', img: navpills_rec2 },
  { id: 3, title: '3.치주질환', content: '치주질환으로 신경이 손상된 경우', img: navpills_rec3 },
  { id: 4, title: '4.치아삭제', content: '보철물을 씌우기 위해 치아삭제를 많이 해야 하는 경우', img: navpills_rec4 },
];

// 템플릿 리터럴을 자바스크립트 변수에 할당
const title = "신경치료란?";
const content = `충치, 세균 침투, 외상 등의 이유로 
치아의 신경조직이 손상, 감염된 경우
치아 속의 신경관을 제거하고 충전 재료를 넣어
치아가 제 기능을 할 수 있게 보존하는 치료입니다.

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

    <MyNewsletter :title="title" :content="content" :img=rootCanal></MyNewsletter>
    <MyView :title="itemTitle" :items="itemList" height="300" :part1Ratio="5">
    </MyView>
  </div>
  <DefaultFooter />
</template>
