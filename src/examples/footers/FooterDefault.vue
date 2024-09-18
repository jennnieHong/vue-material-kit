<script setup>
import { RouterLink } from "vue-router";
import logoDark from "@/assets/img/logo.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "서울온정치과의원",
      logo: logoDark,
      route: "/"
    })
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
        link: "https://www.facebook.com/CreativeTim/"
      },
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
        link: "https://twitter.com/creativetim"
      },
      {
        icon: '<i class="fab fa-dribbble text-lg opacity-8"></i>',
        link: "https://dribbble.com/creativetim"
      },
      {
        icon: '<i class="fab fa-github text-lg opacity-8"></i>',
        link: "https://github.com/creativetimofficial"
      },
      {
        icon: '<i class="fab fa-youtube text-lg opacity-8"></i>',
        link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
      }
    ]
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => [
      {
        name: "company",
        items: [
          {
            name: "about us",
            href: "https://www.creative-tim.com/presentation"
          },
          {
            name: "freebies",
            href: "https://www.creative-tim.com/templates/free"
          },
          {
            name: "premium tools",
            href: "https://www.creative-tim.com/templates/premium"
          },
          { name: "blog", href: "https://www.creative-tim.com/blog" }
        ]
      },
      {
        name: "resources",
        items: [
          { name: "illustrations", href: "https://iradesign.io/" },
          {
            name: "bits & snippets",
            href: "https://www.creative-tim.com/bits"
          },
          {
            name: "affiliate program",
            href: "https://www.creative-tim.com/affiliates/new"
          }
        ]
      },
      // {
      //   name: "help & support",
      //   items: [
      //     {
      //       name: "contact us",
      //       href: "https://www.creative-tim.com/contact-us"
      //     },
      //     {
      //       name: "knowledge center",
      //       href: "https://www.creative-tim.com/knowledge-center"
      //     },
      //     {
      //       name: "custom development",
      //       href: "https://services.creative-tim.com/"
      //     },
      //     {
      //       name: "sponsorships",
      //       href: "https://www.creative-tim.com/sponsorships"
      //     }
      //   ]
      // },
      {
        name: "legal",
        items: [
          {
            name: "terms & conditions",
            href: "https://www.creative-tim.com/terms"
          },
          {
            name: "privacy policy",
            href: "https://www.creative-tim.com/privacy"
          },
          {
            name: "licenses (EULA)",
            href: "https://www.creative-tim.com/license"
          }
        ]
      }
    ]
  }
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-5 mb-4 ms-auto">
          <div>
            <a :href="brand.route">
              <img :src="brand.logo" class="mb-3 footer-logo" alt="main_logo" />
            </a>
            <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
          </div>
          <div>
            <!--<ul class="d-flex flex-row ms-n3 nav">-->
            <!--  <li class="nav-item" v-for="{ icon, link } of socials" :key="link">-->
            <!--    <a class="nav-link pe-1" :href="link" target="_blank" v-html="icon">-->
            <!--    </a>-->
            <!--  </li>-->
            <!--</ul>-->
          </div>
        </div>
        <div class="col-md-7 mb-4 ms-auto">

          <div class="col-12">
            <div class="text-left">
              <p class="text-dark my-4 text-sm font-weight-normal">
                <RouterLink class="navbar-brand d-none-block" :to="{ name: 'terms-of-service' }" rel="tooltip"
                  title="Designed and Coded by Creative Tim" data-placement="bottom">
                  이용약관
                </RouterLink>

                |
                <RouterLink class="navbar-brand d-none-block" :to="{ name: 'privacy-policy' }" rel="tooltip"
                  title="Designed and Coded by Creative Tim" data-placement="bottom">
                  개인정보처리방침
                </RouterLink>
              </p>
              <p class="text-dark my-4 text-sm font-weight-normal">
                서울온정치과의원 | 경북 성주군 성주읍 성주로 3289 더갤럭시빌딩 2층 (우편번호: 40031)<br />
                대표자명 | 배인재<br />
                사업자등록번호 | 106-64-00616 <br />
                TEL | 054-933-2875<br />
                FAX | 054-933-2874<br />
                <div class="">
                  <a role="button" class="nav-link d-inline"  href="https://blog.naver.com/onjung_dental" target="_blank">서울온정치과 블로그 </a>| <a class="nav-link d-inline" href="https://www.kagd.org" target="_blank">대한통합치과학회</a><br />
                </div>
                
                
                <!-- 
                {{ new Date().getFullYear() }}
                Material Kit by
              <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>. -->
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-2 col-sm-6 col-6 mb-4" v-for="{ name, items } of menus" :key="name">
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a class="nav-link" :href="item.href" target="_blank">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div> -->

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              <a href="https://www.creative-tim.com" target="_blank">서울온정치과</a>.
            </p>
          </div>
        </div>
        <!-- <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              All rights reserved. Copyright ©
              {{ new Date().getFullYear() }}
              Material Kit by
              <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </footer>
</template>
