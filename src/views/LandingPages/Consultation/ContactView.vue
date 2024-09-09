<script setup>
import { onMounted, onUnmounted, ref } from "vue";

// Sections components
import MyView from "../../../layouts/sections/components/MyView.vue";
import MyNewsletter from "../AboutUs/Sections/MyNewsletter.vue";


//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/illustrations/illustration-signin.jpg";

import smile from '@/assets/img/myImages/smile.jpg';

//dep
import Typed from "typed.js";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";

//sections

// import Information from "@/views/LandingPages/DigitalImplant/Sections/AboutInformation.vue";
// import AboutTeam from "@/views/LandingPages/DigitalImplant/Sections/AboutTeam.vue";
// import Featuring from "@/views/LandingPages/DigitalImplant/Sections/AboutFeaturing.vue";
// import Newsletter from "@/views/LandingPages/DigitalImplant/Sections/AboutNewsletter.vue";
// import Information from "./Sections/AboutInformation.vue";@/views/LandingPages/DigitalImplant/Sections/AboutInformation.vue
// import Information from "./Sections/AboutInformation.vue";D:\workspace\dentalClinic\vue-material-kit\src\views\LandingPages\DigitalImplant\Sections
// import AboutTeam from "./Sections/AboutTeam.vue";
// import Featuring from "./Sections/AboutFeaturing.vue";
// import Newsletter from "./Sections/AboutNewsletter.vue";


const body = document.getElementsByTagName("body")[0];


//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//
const phoneNumber = ref('')

//hooks
onMounted(() => {
  setMaterialInput();
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
    <div class="page-header min-vh-35" :style="{ backgroundImage: `url(${smile})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">

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
    <div class="container position-sticky z-index-sticky top-0">
      <div class="row">
        <div class="col-12">
          <DefaultNavbar :sticky="true" :action="{
            // route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
            route: '#',
            color: 'bg-gradient-success',
            label: '오시는 길',
          }" />
        </div>
      </div>
    </div>
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                :style="{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                }" loading="lazy"></div>
            </div>
            <div class=" col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-0">
              <div class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                  <div class="bg-gradient-success shadow-success border-radius-lg p-3">
                    <h3 class="text-white text-success mb-0">상담 정보 입력</h3>
                  </div>
                </div>
                <div class="card-body">
                  <p class="pb-3">


                    정확한 상담을 위해 아래 정보를 입력해주세요.<br />

                    입력된 정보가 잘못된 경우 상담 진행이 어려울 수 있습니다.
                    자세한 견적은 환자의 상태를 진료한 후 확인하실 수 있습니다.
                  </p>
                  <form id="contact-form" method="post" autocomplete="off">
                    <div class="card-body p-0 my-3">
                      <div class="row">
                        <div class="col-md-6">
                          <MaterialInput class="input-group-static mb-4" type="text" label="이름*" placeholder="홍길동" />
                        </div>
                        <div class="col-md-6 ps-md-2">
                          <MaterialInput class="input-group-static mb-4" type="email" label="Email"
                            placeholder="hello@onjung-dental.com" />
                        </div>
                        <div class="col-md-6 ps-md-2">
                          <MaterialInput class="input-group-static mb-4" type="phone" label="전화번호"
                            placeholder="전화번호를 입력하세요" v-model="phoneNumber" />
                          <p>입력한 전화번호: {{ phoneNumber }}</p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <MaterialInput class="input-group-static mb-4" type="text" label="상담분야"
                            placeholder="예시) 임플란트" />
                        </div>
                      </div>
                      <div class="form-group mb-0 mt-md-0 mt-4">
                        <MaterialTextArea id="message" class="input-group-static mb-4" :rows="6"
                          placeholder="정확한 상담을 위해 가능한 상세히 작성해주세요.">어떤 점이 궁금하신가요?
                        </MaterialTextArea>
                      </div>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <MaterialButton variant="gradient" color="success" class="mt-3 mb-0">저장
                          </MaterialButton>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <Information /> -->
    <!-- <AboutTeam /> -->
    <!-- <Featuring /> -->
    <!-- <Newsletter /> -->

    <!-- <MyNewsletter :title="title" :content="content" :img=crown></MyNewsletter>
    <MyView :title="itemTitle" :items="itemList" height="100" :part1Ratio="3"> </MyView>
    <MyView :title="itemTitle2" :items="itemList2" height="300" :part1Ratio="4"> </MyView> -->
  </div>
  <DefaultFooter />

</template>
