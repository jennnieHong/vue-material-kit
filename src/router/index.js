import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import DigitalImplantView from "../views/LandingPages/DigitalImplant/AboutView.vue";
import SinusLiftView from "../views/LandingPages/SinusLift/AboutView.vue";
import InsuranceView from "../views/LandingPages/Insurance/AboutView.vue";
import ConsciousSedationView from "../views/LandingPages/ConsciousSedation/AboutView.vue";
import CavityView from "../views/LandingPages/Cavity/AboutView.vue";
import RootCanalView from "../views/LandingPages/RootCanal/AboutView.vue";
import GumView from "../views/LandingPages/Gum/AboutView.vue";
import WisdomToothView from "../views/LandingPages/WisdomTooth/AboutView.vue";
import CrownView from "../views/LandingPages/Crown/AboutView.vue";
import OrthodonticView from "../views/LandingPages/Orthodontic/AboutView.vue";
import ProsthodonticView from "../views/LandingPages/Prosthodontic/AboutView.vue";
import PrivacyPolicy from "../views/LandingPages/PrivacyPolicy/AboutView.vue";
import TermsOfService from "../views/LandingPages/TermsOfService/AboutView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import AuthorView from "../views/LandingPages/Author/AuthorView.vue";
import IntroductionView from "../views/LandingPages/Introduction/AuthorView.vue";
import UniquenessView from "../views/LandingPages/Uniqueness/AuthorView.vue";
import ValuesView from "../views/LandingPages/Values/AuthorView.vue";
import CurriculumViewBij from "../views/LandingPages/Curriculum/AuthorViewBij.vue";
import CurriculumViewLjs from "../views/LandingPages/Curriculum/AuthorViewLjs.vue";
import HoursView from "../views/LandingPages/Hours/AuthorView.vue";
import MapView from "../views/LandingPages/Map/AuthorView.vue";
import SignInBasicView from "../views/LandingPages/SignIn/BasicView.vue";
import PageHeaders from "../layouts/sections/page-sections/page-headers/HeadersView.vue";
import PageFeatures from "../layouts/sections/page-sections/features/FeaturesView.vue";
import NavigationNavbars from "../layouts/sections/navigation/navbars/NavbarsView.vue";
import NavigationNavTabs from "../layouts/sections/navigation/nav-tabs/NavTabsView.vue";
import NavigationPagination from "../layouts/sections/navigation/pagination/PaginationView.vue";
import InputAreasInputs from "../layouts/sections/input-areas/inputs/InputsView.vue";
import InputAreasForms from "../layouts/sections/input-areas/forms/FormsView.vue";
import ACAlerts from "../layouts/sections/attention-catchers/alerts/AlertsView.vue";
import ACModals from "../layouts/sections/attention-catchers/modals/ModalsView.vue";
import ACTooltipsPopovers from "../layouts/sections/attention-catchers/tooltips-popovers/TooltipsPopoversView.vue";
import ElAvatars from "../layouts/sections/elements/avatars/AvatarsView.vue";
import ElBadges from "../layouts/sections/elements/badges/BadgesView.vue";
import ElBreadcrumbs from "../layouts/sections/elements/breadcrumbs/BreadcrumbsView.vue";
import ElButtons from "../layouts/sections/elements/buttons/ButtonsView.vue";
import ElButtonGroups from "../layouts/sections/elements/button-groups/ButtonGroupsView.vue";
import ElDropdowns from "../layouts/sections/elements/dropdowns/DropdownsView.vue";
import ElProgressBars from "../layouts/sections/elements/progress-bars/ProgressBarsView.vue";
import ElToggles from "../layouts/sections/elements/toggles/TogglesView.vue";
import ElTypography from "../layouts/sections/elements/typography/TypographyView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/digital-implant",
      name: "digital-implant",
      component: DigitalImplantView,
    },
    {
      path: "/pages/landing-pages/sinus-lift",
      name: "sinus-lift",
      component: SinusLiftView,
    },
    {
      path: "/pages/landing-pages/insurance",
      name: "insurance",
      component: InsuranceView,
    },
    {
      path: "/pages/landing-pages/conscious-sedation",
      name: "conscious-sedation",
      component: ConsciousSedationView,
    },
    {
      path: "/pages/landing-pages/cavity",
      name: "cavity",
      component: CavityView,
    },
    {
      path: "/pages/landing-pages/root-canal",
      name: "root-canal",
      component: RootCanalView,
    },
    {
      path: "/pages/landing-pages/gum",
      name: "gum",
      component: GumView,
    },
    {
      path: "/pages/landing-pages/wisdom-tooth",
      name: "wisdom-tooth",
      component: WisdomToothView,
    },
    {
      path: "/pages/landing-pages/crown",
      name: "crown",
      component: CrownView,
    },
    {
      path: "/pages/landing-pages/orthodontic",
      name: "orthodontic",
      component: OrthodonticView,
    },
    {
      path: "/pages/landing-pages/prosthodontic",
      name: "prosthodontic",
      component: ProsthodonticView,
    },
    {
      path: "/pages/landing-pages/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicy,
    },
    {
      path: "/pages/landing-pages/terms-of-service",
      name: "terms-of-service",
      component: TermsOfService,
    },
    {
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: ProsthodonticView,
    },
    {
      path: "/pages/landing-pages/contact-us",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/pages/landing-pages/author",
      name: "author",
      component: AuthorView,
    },
    {
      path: "/pages/landing-pages/introduction",
      name: "introduction",
      component: IntroductionView,
    },
    {
      path: "/pages/landing-pages/uniqueness",
      name: "uniqueness",
      component: UniquenessView,
    },
    {
      path: "/pages/landing-pages/values",
      name: "values",
      component: ValuesView,
    },
    {
      path: "/pages/landing-pages/curriculum",
      name: "curriculumBij",
      component: CurriculumViewBij,
    },
    {
      path: "/pages/landing-pages/curriculum",
      name: "curriculumLjs",
      component: CurriculumViewLjs,
    },
    {
      path: "/pages/landing-pages/hours",
      name: "hours",
      component: HoursView,
    },
    {
      path: "/pages/landing-pages/map",
      name: "map",
      component: MapView,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },
    {
      path: "/sections/page-sections/page-headers",
      name: "page-headers",
      component: PageHeaders,
    },
    {
      path: "/sections/page-sections/features",
      name: "page-features",
      component: PageFeatures,
    },
    {
      path: "/sections/navigation/navbars",
      name: "navigation-navbars",
      component: NavigationNavbars,
    },
    {
      path: "/sections/navigation/nav-tabs",
      name: "navigation-navtabs",
      component: NavigationNavTabs,
    },
    {
      path: "/sections/navigation/pagination",
      name: "navigation-pagination",
      component: NavigationPagination,
    },
    {
      path: "/sections/input-areas/inputs",
      name: "inputareas-inputs",
      component: InputAreasInputs,
    },
    {
      path: "/sections/input-areas/forms",
      name: "inputareas-forms",
      component: InputAreasForms,
    },
    {
      path: "/sections/attention-catchers/alerts",
      name: "ac-alerts",
      component: ACAlerts,
    },
    {
      path: "/sections/attention-catchers/modals",
      name: "ac-modals",
      component: ACModals,
    },
    {
      path: "/sections/attention-catchers/tooltips-popovers",
      name: "ac-tooltips-popovers",
      component: ACTooltipsPopovers,
    },
    {
      path: "/sections/elements/avatars",
      name: "el-avatars",
      component: ElAvatars,
    },
    {
      path: "/sections/elements/badges",
      name: "el-badges",
      component: ElBadges,
    },
    {
      path: "/sections/elements/breadcrumbs",
      name: "el-breadcrumbs",
      component: ElBreadcrumbs,
    },
    {
      path: "/sections/elements/buttons",
      name: "el-buttons",
      component: ElButtons,
    },
    {
      path: "/sections/elements/button-groups",
      name: "el-button-groups",
      component: ElButtonGroups,
    },
    {
      path: "/sections/elements/dropdowns",
      name: "el-dropdowns",
      component: ElDropdowns,
    },
    {
      path: "/sections/elements/progress-bars",
      name: "el-progress-bars",
      component: ElProgressBars,
    },
    {
      path: "/sections/elements/toggles",
      name: "el-toggles",
      component: ElToggles,
    },
    {
      path: "/sections/elements/typography",
      name: "el-typography",
      component: ElTypography,
    },
  ],
  // scrollBehavior 추가
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        };
      }

      // 특정 경로에 대한 스크롤 위치 설정
      // if (to.name === 'digital-implant') {
      //   // 디지털 임플란트 페이지에서 특정 위치로 스크롤
      //   return { left: 0, top: 300, behavior: 'smooth' };
      // }

      if (to.name === 'about') {
        // About 페이지에서 특정 위치로 스크롤
        return { left: 0, top: 200, behavior: 'smooth' };
      }

      return { left: 0, top: 0 };
    }
  },
});

export default router;
