<script setup>
// example components
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import Header from "../../../examples/Header.vue";

// sections
// import Footer from "./Sections/AuthorFooter.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import Profile from "./Sections/AuthorProfile.vue";
import Posts from "./Sections/AuthorPosts.vue";
import Contact from "./Sections/AuthorContact.vue";
import Map from "../../../views/Presentation/Sections/Map.vue"; //오시는길 --
//D:/workspace/dentalClinic/vue-material-kit/src/views/Presentation/Sections/Map.vue
// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
  
  <!-- makeCall from globalMixin.js -->
  <NavbarDefault :sticky="true" :transparent="true" :darkText="false" @make-call="makeCall" @open-modal="openModal" />
  <Header>
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
      <!-- <span class="mask bg-gradient-dark opacity-8"></span> -->
      <span class="mask opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <Profile />
    <!-- <Posts /> -->
  </div>
  <!-- <Contact /> -->
  <DefaultFooter />
</template>
