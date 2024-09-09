<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";

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
import consciousSedation from '@/assets/img/myImages/consciousSedation.jpg';

//dep
import Typed from "typed.js";


//sections
import Information from "./Sections/AboutInformation.vue";
import AboutTeam from "./Sections/AboutTeam.vue";
import Featuring from "./Sections/AboutFeaturing.vue";
import Newsletter from "./Sections/AboutNewsletter.vue";
import Table from "../../../layouts/sections/components/Table.vue";
import Table2 from "../../../examples/tables/Table.vue";


const body = document.getElementsByTagName("body")[0];

//nav-pills
import setNavPills from "@/assets/js/nav-pills";
const setHighlightColumn = () => {

}
// 리스트 데이터
const itemList = [
  { id: 1, title: '전신마취' },
  { id: 2, title: '의식하진정요법' },
  { id: 3, title: '국소마취' },
];

// 템플릿 리터럴을 자바스크립트 변수에 할당
const title = "의식하진정요법이란?";
const content = `수면치료라고 잘 알려져 있는 치료법으로 
환자의 의식 진정 상태를 유도한 후 치료를 시행하여
심리적 불안과 신체적 부담을 줄여주는 치료입니다. `;

//테이블 정보

// table data
const tableData = {
  headers: [undefined, "전신마취", "의식하진정요법", "국소마취"],
  rows: [
    {
      // image: consciousSedation,
      subject: "설명",
      position: "환자 스스로 호흡이 불가능하여 호흡 유도장치로 호흡하는 방식. 의식이나 전신지각이 불가능",
      status: "의사소통이 가능한 기수면 상태. 통증, 치과 공포증 절감",
      date: "국소마취한 부위에 통증은 없으나 다른 감각들을 깨어 있어 치과 공포증 절간 어려움",
      action: { label: "Edit", route: "/" },
    },
    {
      // image: consciousSedation,
      subject: "자가호흡",
      position: "호흡 유도장치 필요",
      status: "자발적 호흡 가능",
      date: "자발적 호흡 가능",
      action: { label: "Edit", route: "/" },
    },
    {
      // image: consciousSedation,
      subject: "의사소통",
      position: "불가능",
      status: "가능",
      date: "가능",
      action: { label: "Edit", route: "/" },
    },
    {
      // image: consciousSedation,
      subject: "통증",
      position: "없음",
      status: "없음",
      date: "마취부위에 국한",
      action: { label: "Edit", route: "/" },
    },
  ],
};

const handleClick = (e) => {
  console.log(e);
  console.log(e.target.text);
  selectedColumn.value = e.target.text.trim();
  console.log(selectedColumn.value)

}
const selectedColumn = ref(null);
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

    <MyNewsletter :title="title" :content="content" :img=consciousSedation></MyNewsletter>
    <!-- <MyView title="보험 임플란트 적용 혜택" :items="itemList" height="300" :textCenter="true" @click="handleClick">
    </MyView> -->
    <div class="container my-5">

      <Table v-bind="tableData" :selectedColumn="의식하진정요법" />
    </div>
    <!-- <Table :headers="tableData.headers" :rows="tableData.rows" selectedColumn="Employed" />
    <Table2 :headers="tableData.headers" :rows="tableData.rows" selectedColumn="Status" /> -->
  </div>
  <DefaultFooter />
</template>
