<script setup>
import { onMounted, ref } from "vue";
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import imgSigninCover from "@/assets/img/signin-cover.png";


const props = defineProps({
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});
// 상태 설정
const isTransparent = ref(props.transparent);
const isMobile = ref(false);

const checkIfMobile = () => {
  console.log("!~")
  console.log(isMobile.value)
  // 576px 이하인 경우 모바일 사이즈로 간주
  isMobile.value = window.innerWidth <= 576;
};


// 스크롤 이벤트 추가
const handleScroll = () => {
  const scrollTop = window.scrollY || window.pageYOffset;
  isTransparent.value = scrollTop <= 200;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 초기 스크롤 상태 설정
  window.addEventListener("resize", checkIfMobile);
  checkIfMobile(); // 초기화 시 현재 상태 확인
});
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <!-- <MaterialBadge color="success" class="mb-3">Boost creativity</MaterialBadge> -->
            <h2 class="">병원 둘러보기</h2>
            <!-- <p class="lead">
              The easiest way to get started is to use one of our <br />
              pre-built example pages.
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-10">
          <div class="row mt-4">
            <div class="col-md-3 mt-md-0 mt-5">
              <ExampleCard class="shadow-lg" title="데스크"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/about-us.jpg"
                route="about" />
            </div>
            <div class="col-md-3 mt-md-0 mt-5">
              <ExampleCard class="shadow-lg" title="대기실"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/contact.jpg"
                route="contactus" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-12 mt-md-0 mt-5">
              <ExampleCard classes="mt-5" title="치료실" :image="imgSigninCover" route="signin-basic" />
            </div>
            <div class="col-md-3 mt-md-0 mt-5">
              <ExampleCard classes="mt-5" title="치료실" :image="imgSigninCover" route="signin-basic" />
            </div>
            <div class="col-md-3 mt-md-0 mt-5">
              <ExampleCard classes="mt-5" title="치료실" :image="imgSigninCover" route="signin-basic" />
            </div>
            <div class="col-md-3 mt-md-0 mt-5">
              <ExampleCard classes="shadow-lg" title="상담실"
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/author.jpg"
                route="author" />
            </div>
          </div>
        </div>
        <div class="col-md-2 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">

            <!-- <div :class="{
              'container w-100': true,
              'px-0': isMobile
            }"> -->
            <div :class="{ 'collapse': isMobile }">
              <div class="col-md-3 mt-md-0 mt-5">
                <ExampleCard classes="shadow-lg" title="111"
                  image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/author.jpg"
                  route="author" />
              </div>
              <div class="col-md-3 mt-md-0 mt-5">
                <ExampleCard classes="shadow-lg" title="222"
                  image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/author.jpg"
                  route="author" />
              </div>
              <div class="col-md-3 mt-md-0 mt-5">
                <ExampleCard classes="shadow-lg" title="333"
                  image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages/author.jpg"
                  route="author" />
              </div>
            </div>
            <h3>
              Presentation Pages for Company, Landing Pages, Blogs and Support
            </h3>
            <h6 class="text-secondary font-weight-normal">
              These is just a small selection of the multiple possibitilies you
              have. Focus on the business, not on the design.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
