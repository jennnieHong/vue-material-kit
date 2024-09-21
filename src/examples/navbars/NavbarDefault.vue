<script setup>
import { RouterLink } from "vue-router";
import { ref, watch, onMounted, onBeforeUnmount, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";
import favicon from '@/assets/img/logo.png';

const emit = defineEmits(['make-call', 'open-modal']);
const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      // route: "https://www.creative-tim.com/product/vue-material-kit",
      route: "map",
      color: "bg-gradient-success",
      label: "오시는 길"
    })
  },
  action2: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      color: "bg-gradient-warning",
      label: "전화 문의"
    })
  },
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
  // 576px 이하인 경우 모바일 사이즈로 간주
  isMobile.value = window.innerWidth <= 576;
};
// set arrow color
function getArrowColor() {
  if (isTransparent.value && textDark.value) {
    return ArrDark;
  } else if (isTransparent.value) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (isTransparent.value && textDark.value) {
    color = "text-dark";
  } else if (isTransparent.value) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};
const handleMakeCall = function () {
  if (!isMobile.value) { //모바일버전이 아닌 경우 모달로 전화번호 띄우기
    emit('open-modal')//특정 돔 요소에 영향을 주는 행위에 적합
    // proxy.openModal();//globalMixin.  
    return;
  }
  // emit('make-call');
  return proxy.makeCall();//globalMixin 공통 로직이나 데이터 관리의 용도로 적합
}
// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);

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

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener("resize", checkIfMobile);
});

</script>

<template>
  <nav class="navbar navbar-expand-lg top-0" :class="['transition-target', {
    // 'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
    // props.transparent,
    // 'position-absolute ': props.sticky,
    'z-index-sticky w-100 end-0 position-fixed pb-3 pt-3': true, // 기본 클래스
    'navbar-transparent': true, // 투명도 클래스
    'shadow-none ': isTransparent,
    // 'blur': props.sticky, // 스크롤 시 blur 적용
    // 'navbar-light bg-white py-3': props.light,
    // 'navbar-light bg-white z-index-3 end-0 position-fixed pb-3 pt-3': props.light,
    // 'navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    // 'navbar-dark bg-gradient-dark z-index-3 end-0 position-fixed pb-3 pt-3': props.dark,
    'blur': !isTransparent
  }]">
    <!-- <div :class="props.transparent || props.light || props.dark -->
    <!-- <div :class="isTransparent || props.light || props.dark
      ? 'container'
      : 'container-fluid'
      "> -->
    <div :class="{
      'container w-100': true,
      'px-0': isMobile
    }">
      <!-- <div class="page-header min-vh-35" :style="{ backgroundImage: `url(${cavity})` }"></div> -->
      <RouterLink class="navbar-brand d-none-block font-weight-bolder  " :class=getTextColor()
        :to="{ name: 'presentation' }" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">
        <img rel="icon" type="image/png" :src=favicon :width="40" :height="40" class="mb-1" />


        <span class="text-2xl align-baseline lh-sm h2 align-middle " style="height:100px; ">서울온정치과</span>
      </RouterLink>
      <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
        data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1 ms-1" :class="{ 'bg-dark': !isTransparent }"></span>
          <span class="navbar-toggler-bar bar2 ms-1" :class="{ 'bg-dark': !isTransparent }"></span>
          <span class="navbar-toggler-bar bar3 ms-1" :class="{ 'bg-dark': !isTransparent }"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
              <!-- <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i> -->
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                class="material-icons opacity-6 me-2 text-md" :fill="getTextColor() == 'text-white' ? '#fff' : '#000'">
                <path
                  d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z" />
              </svg>
              병원소개
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3 "
              aria-labelledby="dropdownMenuPages">
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink :to="{ name: 'introduction' }" class="dropdown-item border-radius-md">
                        <span>인사말</span>
                      </RouterLink>

                      <RouterLink :to="{ name: 'uniqueness' }" class="dropdown-item border-radius-md">
                        <span>서울온정치과의 특별함</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'values' }" class="dropdown-item border-radius-md">
                        <span>서울온정치과의 진료철학</span>
                      </RouterLink>
                      <!-- <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3">
                        의료진
                      </div> -->
                      <RouterLink :to="{ name: 'curriculum' }" class="dropdown-item border-radius-md">
                        <span>의료진</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'hours' }" class="dropdown-item border-radius-md">
                        <span>진료시간</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'map' }" class="dropdown-item border-radius-md">
                        <span>오시는 길</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <!-- <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0">
                  Landing Pages
                </div> -->
                <RouterLink :to="{ name: 'introduction' }" class="dropdown-item border-radius-md">
                  <span>인사말</span>
                </RouterLink>
                <RouterLink :to="{ name: 'uniqueness' }" class="dropdown-item border-radius-md">
                  <span>서울온정치과의 특별함</span>
                </RouterLink>
                <RouterLink :to="{ name: 'values' }" class="dropdown-item border-radius-md">
                  <span>서울온정치과의 진료철학</span>
                </RouterLink>
                <RouterLink :to="{ name: 'curriculum' }" class="dropdown-item border-radius-md">
                  <span>의료진</span>
                </RouterLink>
                <RouterLink :to="{ name: 'hours' }" class="dropdown-item border-radius-md">
                  <span>진료시간</span>
                </RouterLink>
                <RouterLink :to="{ name: 'map' }" class="dropdown-item border-radius-md">
                  <span>오시는 길</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
              <!-- <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i> -->
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                class="material-icons opacity-6 me-2 text-md" :fill="getTextColor() == 'text-white' ? '#fff' : '#000'">
                <path
                  d="M159-120v-120h124L181-574q-27-15-44.5-44T119-680q0-50 35-85t85-35q39 0 69.5 22.5T351-720h128v-40q0-17 11.5-28.5T519-800q9 0 17.5 4t14.5 12l68-64q9-9 21.5-11.5T665-856l156 72q12 6 16.5 17.5T837-744q-6 12-17.5 15.5T797-730l-144-66-94 88v56l94 86 144-66q11-5 23-1t17 15q6 12 1 23t-17 17l-156 74q-12 6-24.5 3.5T619-512l-68-64q-6 6-14.5 11t-17.5 5q-17 0-28.5-11.5T479-600v-40H351q-3 8-6.5 15t-9.5 15l200 370h144v120H159Zm80-520q17 0 28.5-11.5T279-680q0-17-11.5-28.5T239-720q-17 0-28.5 11.5T199-680q0 17 11.5 28.5T239-640Zm126 400h78L271-560h-4l98 320Zm78 0Z" />
              </svg>
              디지털 임플란트
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages">
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div class="d-flex justify-content-between">
                        <RouterLink :to="{ name: 'digital-implant' }" class="dropdown-item border-radius-md">
                          <span>디지털 네비게이션 임플란트</span>
                        </RouterLink>
                        <!-- <div>
                          <RouterLink :to="{ name: 'consultation' }" class="dropdown-item border-radius-md">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                              fill="#5f6368">
                              <path
                                d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                            </svg>
                          </RouterLink>
                        </div> -->
                      </div>
                      <div class="d-flex justify-content-between">
                        <RouterLink :to="{ name: 'sinus-lift' }" class="dropdown-item border-radius-md">
                          <span>상악동 거상술</span>
                        </RouterLink>
                        <!-- <div>
                          <RouterLink :to="{ name: 'consultation' }" class="dropdown-item border-radius-md">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                              fill="#5f6368">
                              <path
                                d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                            </svg>
                          </RouterLink>
                        </div> -->
                      </div>
                      <div class="d-flex justify-content-between">
                        <RouterLink :to="{ name: 'insurance' }" class="dropdown-item border-radius-md">
                          <span>보험 임플란트</span>
                        </RouterLink>
                        <!-- <div>
                          <RouterLink :to="{ name: 'consultation' }" class="dropdown-item border-radius-md">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                              fill="#5f6368">
                              <path
                                d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                            </svg>
                          </RouterLink>
                        </div> -->
                      </div>
                      <div class="d-flex justify-content-between">
                        <RouterLink :to="{ name: 'conscious-sedation' }" class="dropdown-item border-radius-md">
                          <span>의식하진정요법</span>
                        </RouterLink>
                        <!-- <div>
                          <RouterLink :to="{ name: 'consultation' }" class="dropdown-item border-radius-md">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                              fill="#5f6368">
                              <path
                                d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                            </svg>
                          </RouterLink>
                        </div> -->
                      </div>
                      <!-- <div class="d-flex justify-content-between">
                        <RouterLink :to="{ name: 'about' }" class="dropdown-item border-radius-md">
                          <span>about</span>
                        </RouterLink>
                        <div>
                          <a href="https://www.creative-tim.com/product/vue-material-kit-pro">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                              fill="#5f6368">
                              <path
                                d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between">
                        <RouterLink :to="{ name: 'contactus' }" class="dropdown-item border-radius-md">
                          <span>contactus</span>
                        </RouterLink>
                        <div>
                          <a href="https://www.creative-tim.com/product/vue-material-kit-pro">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                              fill="#5f6368">
                              <path
                                d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div class="d-flex justify-content-between">
                        <RouterLink :to="{ name: 'author' }" class="dropdown-item border-radius-md">
                          <span>author</span>
                        </RouterLink>
                        <div>
                          <a href="https://www.creative-tim.com/product/vue-material-kit-pro">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                              fill="#5f6368">
                              <path
                                d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                            </svg>
                          </a>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <div class="d-flex justify-content-between">
                  <!-- <div>
                    <a href="https://www.creative-tim.com/product/vue-material-kit-pro">
                      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#5f6368">
                        <path
                          d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                      </svg>
                    </a>
                  </div> -->
                  <RouterLink :to="{ name: 'digital-implant' }" class="dropdown-item border-radius-md">
                    <span>디지털 네비게이션 임플란트</span>
                  </RouterLink>
                </div>
                <div class="d-flex justify-content-between">
                  <!-- <div>
                    <a href="https://www.creative-tim.com/product/vue-material-kit-pro">
                      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#5f6368">
                        <path
                          d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                      </svg>
                    </a>
                  </div> -->
                  <RouterLink :to="{ name: 'sinus-lift' }" class="dropdown-item border-radius-md">
                    <span>상악동 거상술</span>
                  </RouterLink>
                </div>
                <div class="d-flex justify-content-start">
                  <!-- <div>
                    <a href="https://www.creative-tim.com/product/vue-material-kit-pro">
                      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#5f6368">
                        <path
                          d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                      </svg>
                    </a>
                  </div> -->
                  <RouterLink :to="{ name: 'insurance' }" class="dropdown-item border-radius-md">
                    <span>보험 임플란트</span>
                  </RouterLink>
                </div>
                <div class="d-flex justify-content-start">
                  <!-- <div>
                    <a href="https://www.creative-tim.com/product/vue-material-kit-pro">
                      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#5f6368">
                        <path
                          d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
                      </svg>
                    </a>
                  </div> -->
                  <RouterLink :to="{ name: 'conscious-sedation' }" class="dropdown-item border-radius-md">
                    <span>의식하진정요법</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
              <!-- <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i> -->
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                class="material-icons opacity-6 me-2 text-md" :fill="getTextColor() == 'text-white' ? '#fff' : '#000'">
                <path
                  d="M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 38-34.5 62T677-154q-23 0-42.5-10T602-192L495-348q-2-4-6.5-5.5T479-355q-4 0-16 9L359-195q-14 20-34.5 30.5T281-154q-38 0-67-24.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 80q-23 0-40.5 9.5T601-765q-21 11-49 20.5t-72 9.5q-44 0-72-9.5T359-765q-21-11-38.5-20.5T280-795q-33 0-56.5 23.5T200-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q5 0 9-2t6-6l101-148q14-20 36-32t47-12q25 0 47 12t36 32l103 151q2 3 5 4.5t7 1.5q8 0 14.5-4.5T700-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T680-795ZM480-515Z" />
              </svg>
              일반치료
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages">
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink :to="{ name: 'cavity' }" class="dropdown-item border-radius-md">
                        <span>충치치료 </span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'root-canal' }" class="dropdown-item border-radius-md">
                        <span>신경치료 </span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'gum' }" class="dropdown-item border-radius-md">
                        <span>잇몸치료 </span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'wisdom-tooth' }" class="dropdown-item border-radius-md">
                        <span>사랑니 발치</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <RouterLink :to="{ name: 'cavity' }" class="dropdown-item border-radius-md">
                  <span>충치치료</span>
                </RouterLink>
                <RouterLink :to="{ name: 'root-canal' }" class="dropdown-item border-radius-md">
                  <span>신경치료</span>
                </RouterLink>
                <RouterLink :to="{ name: 'gum' }" class="dropdown-item border-radius-md">
                  <span>잇몸치료</span>
                </RouterLink>
                <RouterLink :to="{ name: 'wisdom-tooth' }" class="dropdown-item border-radius-md">
                  <span>사랑니 발치</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
              <!-- <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i> -->
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960"
                class="material-icons opacity-6 me-2 text-md" :fill="getTextColor() == 'text-white' ? '#fff' : '#000'">
                <path
                  d="M480-260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260ZM312-520l44-42 42 42 42-42-84-86-86 86 42 42Zm250 0 42-42 44 42 42-42-86-86-84 86 42 42ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
              </svg>
              심미치료
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages">
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink :to="{ name: 'crown' }" class="dropdown-item border-radius-md">
                        <span>크라운 보철</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'orthodontic' }" class="dropdown-item border-radius-md">
                        <span>교정치료</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'prosthodontic' }" class="dropdown-item border-radius-md">
                        <span>미백치료</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <RouterLink :to="{ name: 'crown' }" class="dropdown-item border-radius-md">
                  <span>크라운 보철</span>
                </RouterLink>
                <RouterLink :to="{ name: 'orthodontic' }" class="dropdown-item border-radius-md">
                  <span>교정치료</span>
                </RouterLink>
                <RouterLink :to="{ name: 'prosthodontic' }" class="dropdown-item border-radius-md">
                  <span>미백치료</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <!-- <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i>
              상담
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages">
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink :to="{ name: 'consultation' }" class="dropdown-item border-radius-md">
                        <span>상담문의</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'orthodontic' }" class="dropdown-item border-radius-md">
                      <button @click="handleMakeCall" class="dropdown-item border-radius-md"><span>전화문의</span></button>
                      </RouterLink>


                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <RouterLink :to="{ name: 'consultation' }" class="dropdown-item border-radius-md">
                  <span>상담문의</span>
                </RouterLink>

                <RouterLink :to="{ name: 'orthodontic' }" class="dropdown-item border-radius-md">
                  <span>전화문의</span>
                </RouterLink>
              </div>
            </div>
          </li> -->
          <!-- <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">view_day</i>
              상담
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-2 d-lg-block d-none" />
              <img :src="getArrowColor()" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto" />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuBlocks">
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <RouterLink :to="{ name: 'introduction' }" class="text-sm">
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Page Sections
                            </h6>
                            <span class="text-sm">See all sections</span>
                            <div>
                              <h6 class="text-sm">
                                Page Sections
                              </h6>
                            </div>
                          </RouterLink>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'page-headers' }">
                        상담
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'page-features' }">
                        Features
                      </RouterLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Navigation
                            </h6>
                            <span class="text-sm">See all navigations</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'navigation-navbars' }">
                        Navbars
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'navigation-navtabs' }">
                        Nav Tabs
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'navigation-pagination' }">
                        Pagination
                      </RouterLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Input Areas
                            </h6>
                            <span class="text-sm">See all input areas</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'inputareas-inputs' }">
                        Inputs
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'inputareas-forms' }">
                        Forms
                      </RouterLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Attention Catchers
                            </h6>
                            <span class="text-sm">See all examples</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'ac-alerts' }">
                        Alerts
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'ac-modals' }">
                        Modals
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'ac-tooltips-popovers' }">
                        Tooltips & Popovers
                      </RouterLink>
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0">
                    <a class="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                      <div class="d-flex">
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Elements
                            </h6>
                            <span class="text-sm">See all elements</span>
                          </div>
                          <img :src="downArrow" alt="down-arrow" class="arrow" />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-avatars' }">
                        Avatars
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-badges' }">
                        Badges
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-breadcrumbs' }">
                        Breadcrumbs
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-buttons' }">
                        Buttons
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-button-groups' }">
                        Button Groups
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-dropdowns' }">
                        Dropdowns
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-progress-bars' }">
                        Progress Bars
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-toggles' }">
                        Toggles
                      </RouterLink>
                      <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-typography' }">
                        Typography
                      </RouterLink>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12">
                  <div class="d-flex mb-2">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Page Sections
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'page-headers' }">
                    Page Headers
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'page-features' }">
                    Features
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Navigation
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'navigation-navbars' }">
                    Navbars
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'navigation-navtabs' }">
                    Nav Tabs
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'navigation-pagination' }">
                    Pagination
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Input Areas
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'inputareas-inputs' }">
                    Inputs
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'inputareas-forms' }">
                    Forms
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Attention Catchers
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'ac-alerts' }">
                    Alerts
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'ac-modals' }">
                    Modals
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'ac-tooltips-popovers' }">
                    Tooltips & Popovers
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div class="w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                          Elements
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-avatars' }">
                    Avatars
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-badges' }">
                    Badges
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-breadcrumbs' }">
                    Breadcrumbs
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-buttons' }">
                    Buttons
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-button-groups' }">
                    Button Groups
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-dropdowns' }">
                    Dropdowns
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-progress-bars' }">
                    Progress Bars
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-toggles' }">
                    Toggles
                  </RouterLink>
                  <RouterLink class="dropdown-item ps-3 border-radius-md mb-1" :to="{ name: 'el-typography' }">
                    Typography
                  </RouterLink>
                </div>
              </div>
            </div>
          </li> -->

          <li class="nav-item dropdown dropdown-hover mx-2">
            <div>
              <div class="d-flex justify-content-between" style="width: 100%;">
                <!-- <div class="d-flex flex-row justify-content-start" style="width: 100%;"> -->

                <!-- <a href="https://www.creative-tim.com/product/vue-material-kit-pro"
                  class="btn btn-sm bg-gradient-success mb-0 d-lg-none d-block mx-3 " style="flex-basis: 45%;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                    <path
                      d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
                  </svg>
                  오시는길
                </a> -->

                <RouterLink :to="{ name: 'map' }" class="btn btn-sm bg-gradient-success mb-0 d-lg-none d-block mx-3"
                  style="flex-basis: 45%;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                    <path
                      d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
                  </svg>
                  <span>오시는길</span>
                </RouterLink>


                <!-- <RouterLink :to="{ name: 'map' }" class="btn btn-sm bg-gradient-warning mb-0 d-lg-none d-block mx-3"
                  style="flex-basis: 45%;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                    <path
                      d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                  <span>전화문의</span>
                </RouterLink> -->

                <button @click="handleMakeCall" class="btn btn-sm bg-gradient-warning mb-0 d-lg-none d-block mx-3"
                  style="flex-basis: 45%;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                    <path
                      d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                  <span>전화문의</span>
                </button>
              </div>
            </div>
          </li>
          <!-- <li class="nav-item dropdown dropdown-hover mx-2">
            <a href="https://www.github.com/creativetimofficial/vue-material-kit"
              class="nav-link d-flex cursor-pointer align-items-center">
              <svg width="20px" height="20px" class="material-icons me-2 opacity-6" viewBox="0 0 24 24"
                aria-hidden="true" data-testid="GitHubIcon" :fill="props.transparent && '#fff'">
                <path
                  d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27">
                </path>
              </svg>
              Github
            </a>
          </li> -->
          <!-- <li class="nav-item dropdown dropdown-hover mx-2">
            <a href="https://www.github.com/creativetimofficial/vue-material-kit"
              class="nav-link d-flex cursor-pointer align-items-center">

              <i class="material-icons icon">phone</i>

              <i class="material-icons " :class="!isTransparent ? 'icon' : 'custom-icon'">support_agent</i>
              <i class="material-icons " :class="!isTransparent ? 'icon' : 'custom-icon'">chat</i>
              <i class="material-icons " :class="!isTransparent ? 'icon' : 'custom-icon'">chat_bubble</i>
              <i class="material-icons " :class="!isTransparent ? 'icon' : 'custom-icon'">forum</i>
              <i class="material-icons " :class="!isTransparent ? 'icon' : 'custom-icon'">question_answer</i>
              상담
            </a>
          </li> -->
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item ">
            <!-- <a :href="action.route" class="btn btn-sm mb-0 mx-1" :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')">

              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                <path
                  d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
              </svg>
              {{ action.label }}</a> -->

            <RouterLink :to="{ name: 'map' }" class="btn btn-sm mb-0 mx-1" :class="action.color">
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                <path
                  d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
              </svg>
              <span>{{ action.label }}</span>
            </RouterLink>
          </li>
        </ul>
        <ul v-if="isMobile" class="navbar-nav d-lg-block d-none">
          <li class="nav-item ">
            <!-- <a :href="action2.route" class="btn btn-sm mb-0 " :class="action2.color"
              onclick="smoothToPricing('pricing-soft-ui')"> -->

            <a role="button" @click.prevent="handleMakeCall" class="btn btn-sm mb-0 " :class="action2.color">

              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                <path
                  d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              {{ action2.label }}</a>
          </li>
        </ul>
        <ul v-if="!isMobile" class="navbar-nav d-lg-block d-none">

          <li class="nav-item ">
            <!-- <a :href="action2.route" class="btn btn-sm mb-0 " :class="action2.color"
              onclick="smoothToPricing('pricing-soft-ui')"> -->
            <a class="btn btn-sm mb-0 " :class="action2.color" variant="gradient" color="success" data-bs-toggle="modal"
              data-bs-target="#exampleModal" ref="popupButton">
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                <path
                  d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              {{ action2.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
