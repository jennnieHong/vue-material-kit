<script setup>
import { RouterLink } from "vue-router";
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://www.creative-tim.com/product/vue-material-kit",
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
      route: "https://www.creative-tim.com/product/vue-material-kit",
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
      <RouterLink class="navbar-brand d-none-block" :class="[
        (props.transparent && textDark.value) || !isTransparent
          ? 'text-dark font-weight-bolder '
          : 'text-white font-weight-bolder '
      ]" :to="{ name: 'presentation' }" rel="tooltip" title="Designed and Coded by Creative Tim"
        data-placement="bottom">
        서울온정치과
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
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i>
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
                      <!-- <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                        인사말
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
                      <!-- <div class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3">
                        의료진
                      </div> -->
                      <RouterLink :to="{ name: 'curriculumBij' }" class="dropdown-item border-radius-md">
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
                <RouterLink :to="{ name: 'curriculumBij' }" class="dropdown-item border-radius-md">
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
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i>
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
                      <RouterLink :to="{ name: 'digital-implant'}" class="dropdown-item border-radius-md">
                      <!-- <RouterLink :to="{ name: 'digital-implant', hash:'#scroll-focus'}" class="dropdown-item border-radius-md"> -->
                      <!-- <RouterLink to="/pages/landing-pages/digital-implant#scroll-focus" class="dropdown-item border-radius-md"> -->
                        <span>디지털 네비게이션 임플란트</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'sinus-lift' }" class="dropdown-item border-radius-md">
                        <span>상악동 거상술</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'insurance' }" class="dropdown-item border-radius-md">
                        <span>보험 임플란트</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'conscious-sedation' }" class="dropdown-item border-radius-md">
                        <span>의식하진정요법</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'about' }" class="dropdown-item border-radius-md">
                        <span>about</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'contactus' }" class="dropdown-item border-radius-md">
                        <span>contactus</span>
                      </RouterLink>
                      <RouterLink :to="{ name: 'author' }" class="dropdown-item border-radius-md">
                        <span>author</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <RouterLink :to="{ name: 'digital-implant' }" class="dropdown-item border-radius-md">
                  <span>디지털 네비게이션 임플란트</span>
                </RouterLink>
                <RouterLink :to="{ name: 'sinus-lift' }" class="dropdown-item border-radius-md">
                  <span>상악동 거상술</span>
                </RouterLink>
                <RouterLink :to="{ name: 'insurance' }" class="dropdown-item border-radius-md">
                  <span>보험 임플란트</span>
                </RouterLink>
                <RouterLink :to="{ name: 'conscious-sedation' }" class="dropdown-item border-radius-md">
                  <span>의식하진정요법</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center" :class="getTextColor()"
              id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i>
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
              <i class="material-icons opacity-6 me-2 text-md" :class="getTextColor()">dashboard</i>
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
          <li class="nav-item dropdown dropdown-hover mx-2">
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
                            <!-- <span>인사말</span> -->
                            <div>
                              <!-- <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"> -->
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
          </li>

          <li class="nav-item dropdown dropdown-hover mx-2">
            <div>
              <div class="d-flex justify-content-between" style="width: 100%;">
                <!-- <div class="d-flex flex-row justify-content-start" style="width: 100%;"> -->

                <a href="https://www.creative-tim.com/product/vue-material-kit-pro"
                  class="btn btn-sm bg-gradient-success mb-0 d-lg-none d-block mx-3 " style="flex-basis: 45%;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" fill="#fff">
                    <path
                      d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
                  </svg>
                  오시는길
                </a>



                <a href="https://www.creative-tim.com/product/vue-material-kit-pro"
                  class="btn btn-sm bg-gradient-warning mb-0 d-lg-none d-block mx-3" style="flex-basis: 45%;">
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                    <path
                      d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>전화문의
                </a>
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
            <a :href="action.route" class="btn btn-sm mb-0 mx-1" :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')">

              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                <path
                  d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
              </svg>
              {{ action.label }}</a>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item ">
            <a :href="action2.route" class="btn btn-sm mb-0 " :class="action2.color"
              onclick="smoothToPricing('pricing-soft-ui')">

              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" fill="#fff">
                <path
                  d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              {{ action2.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
