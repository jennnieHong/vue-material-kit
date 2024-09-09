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

export default [
  {
    heading: "디지털 임플란트",
    description:
      "잇몸 절개 없이도 가능하여 적은 통증, 빠른 치료기간의 장점을 갖습니다.",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        title: "디지털 네비게이션 임플란트",
        subtitle:
          "골조직, 신경위치 정확하게 파악하여 안전한 최적의 수술경로를 찾습니다.",
        route: "digital-implant",
        pro: false,
      },
      {
        image: imgFeatures,
        title: "상악동 거상술",
        subtitle: "인공뼈를 이식하여 임플란트를 지지할 수 있도록 합니다.",
        route: "sinus-lift",
        pro: false,
      },
      {
        image: imgPricing,
        title: "보험 임플란트",
        subtitle: "임플란트 비용의 30%만 부담하여 치료받으실 수 있습니다.",
        route: "insurance",
        pro: false,
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
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
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        title: "충치치료",
        subtitle:
          "손상된 치아를 치과용 재료로 충전하여 기능과 형태를 회복합니다.",
        route: "cavity",
        pro: false,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        title: "신경치료",
        subtitle:
          "세균에 감염된 혈관, 신경만 치료하거나 제거하여 발치없이 보존하는 치료법입니다.",
        route: "root-canal",
        pro: false,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        title: "잇몸치료",
        subtitle: "치주염으로 치주낭이 형성된 경우 진행합니다.",
        route: "gum",
        pro: false,
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
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
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        title: "크라운 보철",
        subtitle:
          "치아가 많이 손상된 경우 자연 치아에 가까운 기능과 형태로 회복시키는 치료입니다.",
        route: "crown",
        pro: false,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        title: "교정치료",
        subtitle:
          "턱의 비대칭이나, 상하악의 부정교합 상태를 바로잡아 정상 기능으로 교정합니다.",
        route: "orthodontic",
        pro: false,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
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
