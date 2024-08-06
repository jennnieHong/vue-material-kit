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
import smile from '@/assets/img/myImages/smile.jpg';
import crown from '@/assets/img/myImages/crown.jpg';
import pfm from '@/assets/img/myImages/pfm.jpg';
import gold from '@/assets/img/myImages/gold.jpg';
import zircon from '@/assets/img/myImages/zircon.jpg';
// import crown from '@/assets/img/myImages/crown.jpg';
// import crown from '@/assets/img/myImages/crown.jpg';
// import crown from '@/assets/img/myImages/crown.jpg';

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
const itemTitle = "크라운이 필요한 경우";
const itemList = [
  { id: 1, title: '1.출혈', content: '심한 충치로 인해 치아가 많이 손상된 경우', },
  { id: 2, title: '2.통증', content: '치아가 50%이상 깨진 경우', },
  { id: 3, title: '3.구취', content: '신경치료를 받은 경우', },
  { id: 4, title: '4.붓기', content: '잇몸이 주기적으로 붓는 경우', },
  { id: 5, title: '5.흔들림', content: '이가 흔들리거나 사이가 벌어진 경우', },
  { id: 6, title: '6.고름', content: '잇몸에서 고름이 나오는 경우', },
];
const itemTitle2 = "크라운 재료";
const itemList2 = [
  { id: 11, title: 'PFM', content: '주로 앞니에 사용하는 금속과 세라믹을 합친 보철물입니다. 비용이 가장 적게 들고 치아색과 유사하지만 도자기 재질이라 강한 힘이 가해질 경우 파절의 위험이 있습니다.', img: pfm },
  { id: 12, title: '금(골드)', content: '주로 어금니에 사용하며 구강 내 친화성이 좋아 알레르기 반응이 적습니다. 탄성과 강도가 치 아와 유사해 저작시에도 손상이 적지만 치아색과 다르기에 심미성이 떨어진다는 단점이 있습 니다.', img: gold },
  { id: 13, title: '지르코니아', content: '앞니, 어금니 모두에 사용하며 인조 다이아몬드라고 불릴 만큼 강도가 단단합니다. 자연치아 와 유사해 심미성이 높고 내구성이 강합니다. 치아 마모 가능성과 투명도가 낮아 탁해 보일 수 있다는 단점 도한 가지고 있습니다.', img: zircon },
];

// 템플릿 리터럴을 자바스크립트 변수에 할당
const title = "크라운 보철치료란?";
const content = `손상된 치아를 일정 부분 삭제하고 자연치아와 유사한 모양의 인공치아를 치아 위에 씌우는 치료입니다.`;

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
    <div class="page-header min-vh-35" :style="{ backgroundImage: `url(${smile})` }">
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

    <MyNewsletter :title="title" :content="content" :img=crown></MyNewsletter>
    <MyView :title="itemTitle" :items="itemList" height="100" :part1Ratio="3"> </MyView>
    <MyView :title="itemTitle2" :items="itemList2" height="300" :part1Ratio="4"> </MyView>
  </div>
  <DefaultFooter />
</template>
