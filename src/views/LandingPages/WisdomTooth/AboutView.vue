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
import cavity from '@/assets/img/myImages/cavity.jpg';
import wisdomTooth from '@/assets/img/myImages/wisdom-tooth.jpg';

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
const itemTitle = "사랑니 발치를 해야 하는 이유";
const itemList = [
  { id: 1, title: '1.누워 있는 경우', content: '누워 있는 경우 사랑니 주변 치아를 밀어내어 주변 어금니까지 비스듬히 기울어질 수 있습니다.', },
  { id: 2, title: '2.잇몸이 덮고 있는 경우', content: '잇몸이 덮고 있는 경우 사랑니 주변 잇몸에 염증이 생기기 쉬우며 염증이 심해질 경우 잇 몸과 볼에 부종이 생길 수 있습니다.', },
  { id: 3, title: '3.칫솔이 닿지 않는 경우', content: '칫솔이 닿지 않는 경우 가장 안쪽에 사랑니가 위치하기 때문에 칫솔이 닿지 않으면 충치가 쉽게 발생합니다.', },
  { id: 4, title: '4.염증이 생긴 경우', content: '염증이 생긴 경우 사랑니의 염증으로 주변 잇몸 뼈가 흡수되어 사랑니 앞에 위치한 어금니 주변 잇몸뼈까지 함께 흡수될 수 있습니다.', },





];

// 템플릿 리터럴을 자바스크립트 변수에 할당
const title = "사랑니 발치란?";
const content = `우리 입안에서 가장 안쪽에 위치한 어금니로 반드시 발치할 필요는 없습니다. 
하지만 비스듬히 자라나거나
잇몸 속에 매복되어 있는 경우 여러 가지 구강질환을 일으켜 발치하는 것이 좋습니다.`;

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

    <MyNewsletter :title="title" :content="content" :img=wisdomTooth></MyNewsletter>
    <MyView :title="itemTitle" :items="itemList" height="300" :part1Ratio="4">
    </MyView>
  </div>
  <DefaultFooter />
</template>
