/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";

import navigation from "@/assets/img/myImages/navigation.jpg"; //네비게이션
import sinus from "@/assets/img/myImages/sinus.jpg"; //상악동
import insurance from "@/assets/img/myImages/insurance.jpg"; //보험
import consciousSedation from "@/assets/img/myImages/consciousSedation.jpg"; //의식하진정요법
import cavity from "@/assets/img/myImages/cavity.jpg"; //충치치료
import rootCanal from "@/assets/img/myImages/rootCanal.jpg"; //신경치료
import gum from "@/assets/img/myImages/gum.jpg"; //잇몸치료
import wisdomTooth from "@/assets/img/myImages/wisdom-tooth.jpg"; //사랑니 발치
import crown from "@/assets/img/myImages/crown.jpg"; //크라운 보철
import orthodontic from "@/assets/img/myImages/orthodontic.jpg"; //교정치료
import prosthodontic from "@/assets/img/myImages/prosthodontic.jpg"; //미백
export default [
  {
    heading: "디지털 임플란트",
    description:
      "잇몸 절개 없이도 가능하여 적은 통증, 빠른 치료기간의 장점을 갖습니다.",
    iconPathD:
      "M159-120v-120h124L181-574q-27-15-44.5-44T119-680q0-50 35-85t85-35q39 0 69.5 22.5T351-720h128v-40q0-17 11.5-28.5T519-800q9 0 17.5 4t14.5 12l68-64q9-9 21.5-11.5T665-856l156 72q12 6 16.5 17.5T837-744q-6 12-17.5 15.5T797-730l-144-66-94 88v56l94 86 144-66q11-5 23-1t17 15q6 12 1 23t-17 17l-156 74q-12 6-24.5 3.5T619-512l-68-64q-6 6-14.5 11t-17.5 5q-17 0-28.5-11.5T479-600v-40H351q-3 8-6.5 15t-9.5 15l200 370h144v120H159Zm80-520q17 0 28.5-11.5T279-680q0-17-11.5-28.5T239-720q-17 0-28.5 11.5T199-680q0 17 11.5 28.5T239-640Zm126 400h78L271-560h-4l98 320Zm78 0Z",
    items: [
      {
        // image: `${imagesPrefix}/headers.jpg`,
        image: navigation,
        title: "디지털 네비게이션 임플란트",
        subtitle:
          "골조직, 신경위치 정확하게 파악하여 안전한 최적의 수술경로를 찾습니다.",
        route: "digital-implant",
        pro: false,
      },
      {
        image: sinus,
        title: "상악동 거상술",
        subtitle: "인공뼈를 이식하여 임플란트를 지지할 수 있도록 합니다.",
        route: "sinus-lift",
        pro: false,
      },
      {
        image: insurance,
        title: "보험 임플란트",
        subtitle: "임플란트 비용의 30%만 부담하여 치료받으실 수 있습니다.",
        route: "insurance",
        pro: false,
      },
      {
        image: consciousSedation,
        title: "의식하진정요법",
        subtitle: "수술에 대한 공포와 긴장감을 줄여줍니다.",
        route: "conscious-sedation",
        pro: false,
      },
    ],
  },
  {
    heading: "일반진료",
    description: "잇몸이 불편하거나 충치가 발생한 경우 진행합니다.",
    iconPathD:
      "M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 38-34.5 62T677-154q-23 0-42.5-10T602-192L495-348q-2-4-6.5-5.5T479-355q-4 0-16 9L359-195q-14 20-34.5 30.5T281-154q-38 0-67-24.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845q20 11 42.5 20.5T480-815q36 0 58.5-9.5T581-845q20-11 42-20.5t57-9.5Zm0 80q-23 0-40.5 9.5T601-765q-21 11-49 20.5t-72 9.5q-44 0-72-9.5T359-765q-21-11-38.5-20.5T280-795q-33 0-56.5 23.5T200-715q0 8 1 23t4 35l55 405q1 8 7 12.5t14 4.5q5 0 9-2t6-6l101-148q14-20 36-32t47-12q25 0 47 12t36 32l103 151q2 3 5 4.5t7 1.5q8 0 14.5-4.5T700-251l55-406q3-20 4-35t1-23q0-33-23.5-56.5T680-795ZM480-515Z",
    items: [
      {
        image: cavity,
        title: "충치치료",
        subtitle:
          "손상된 치아를 치과용 재료로 충전하여 기능과 형태를 회복합니다.",
        route: "cavity",
        pro: false,
      },
      {
        image: rootCanal,
        title: "신경치료",
        subtitle:
          "세균에 감염된 혈관, 신경만 치료하거나 제거하여 발치없이 보존하는 치료법입니다.",
        route: "root-canal",
        pro: false,
      },
      {
        image: gum,
        title: "잇몸치료",
        subtitle: "치주염으로 치주낭이 형성된 경우 진행합니다.",
        route: "gum",
        pro: false,
      },
      {
        image: wisdomTooth,
        title: "사랑니 발치",
        subtitle: "사랑니가 삐뚤게 자라 문제가 되는 경우 발치를 진행합니다.",
        route: "wisdom-tooth",
        pro: false,
      },
    ],
  },
  {
    heading: "심미치료",
    description: "환자분의 상태에 따른 자연스럽고 아름다운 치아로 자신감을 UP",
    iconPathD:
      "M480-260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260ZM312-520l44-42 42 42 42-42-84-86-86 86 42 42Zm250 0 42-42 44 42 42-42-86-86-84 86 42 42ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z",
    items: [
      {
        image: crown,
        title: "크라운 보철",
        subtitle:
          "치아가 많이 손상된 경우 자연 치아에 가까운 기능과 형태로 회복시키는 치료입니다.",
        route: "crown",
        pro: false,
      },
      {
        image: orthodontic,
        title: "교정치료",
        subtitle:
          "턱의 비대칭이나, 상하악의 부정교합 상태를 바로잡아 정상 기능으로 교정합니다.",
        route: "orthodontic",
        pro: false,
      },
      {
        image: prosthodontic,
        title: "미백치료",
        subtitle:
          "누렇게 착색된 치아의 법랑질과 상아질을 희고 밝게 치료합니다.",
        route: "prosthodontic",
        pro: false,
      },
    ],
  },
  {
    heading: "상담",
    description: "궁금한 사항을 문의하실 수 있습니다.",
    iconPathD:
      "M476-280q21 0 35.5-14.5T526-330q0-21-14.5-35.5T476-380q-21 0-35.5 14.5T426-330q0 21 14.5 35.5T476-280Zm-36-154h74q0-17 1.5-29t6.5-23q5-11 12.5-20.5T556-530q35-35 49.5-58.5T620-642q0-53-36-85.5T487-760q-55 0-93.5 27T340-658l66 26q7-27 28-43.5t49-16.5q27 0 45 14.5t18 38.5q0 17-11 36t-37 42q-17 14-27.5 27.5T453-505q-7 15-10 31.5t-3 39.5Zm40 394L360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600L480-40ZM200-240h192l88 88 88-88h192v-560H200v560Zm280-280Z",
    items: [
      {
        image: imgAlert,
        title: "상담문의",
        subtitle: "질문을 남겨주세요.",
        route: "consultation",
        pro: false,
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "전화문의",
        subtitle: "전화통화 연결하실 수 있습니다.",
        route: "contactus",
        pro: false,
      },
    ],
  },
];
