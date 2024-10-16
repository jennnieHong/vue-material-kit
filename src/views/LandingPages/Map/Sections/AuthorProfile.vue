<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";
import MaterialButton from "@/components/MaterialButton.vue";

import Map from "../../../../views/Presentation/Sections/Map.vue"; //오시는길 --
// image
import profilePic from "@/assets/img/bruce-mars.jpg";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>
<template>
  <section class="py-sm-7 py-5 position-relative">

    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div class="mt-n8 mt-md-n9 text-center">
            <div class="blur-shadow-avatar">
              <MaterialAvatar size="xxl" class="shadow-xl position-relative z-index-2" :image="profilePic"
                alt="Avatar" />
            </div>

            <!-- <Modal>전달합니다</Modal> -->
          </div>

          <div class="row py-7">


            <Map code="경북 성주군 성주읍 성주로 3289" @make-call="makeCall" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
