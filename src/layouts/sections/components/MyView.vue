<template>
  <div class="position-relative border-radius-xl overflow-hidden shadow-lg mb-7">
    <div class="container border-bottom">
      <div class="row justify-space-between py-2">
        <div :class="getTitleColumnClass(part1Ratio)">
          <!-- Title 표시 -->
          <h4 :class="{ 'text-center': textCenter }">{{ title }}</h4>
        </div>
        <div :class="getTitleColumnClass(12 - part1Ratio)">
          <div class="nav-wrapper position-relative end-0">
            <ul class="nav nav-pills nav-fill flex-row p-1" role="tablist">
              <li v-for="(item, index) in items" :key="item.id" class="nav-item">
                <a class="nav-link mb-0 px-0 py-1" :class="{ active: index === 0 }" data-bs-toggle="tab"
                  :href="`#preview-${item.id}`" role="tab" :aria-selected="index === 0 ? 'true' : 'false'"
                  @click="handleClick">
                  <i class="fas fa-desktop text-sm me-2"></i>{{ item.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content tab-space">
      <div v-for="(item, index) in items" :key="item.id" class="tab-pane p-2 container" :id="`preview-${item.id}`"
        :class="{ active: index === 0 }">
        <!-- 객체로 이용한 클래스 주기  -->
        <div class="row overflow-auto" :class="{
          [`height-${height}`]: height,
          'min-vh-25': !height
        }">
          <!-- Array로 클래스 주기 -->
          <!-- <div class="row overflow-auto" :class="[height ? `height-${height}` : 'min-vh-25']"> -->
          <div :class="getContentColumnClass()">
            <!-- <p :class="{ 'text-center': textCenter }">{{ item.content }}</p> -->
            <p :class="{ 'text-center': true }">{{ item.content }}</p>
          </div>
          <!-- 이미지가 전달된 경우에만 표시 -->
          <div v-if="!textCenter && item.img" class="col-md-5 ms-auto md-mt-0">
            <div class="position-relative">
              <img :src="item.img" class="max-width-50 w-100 max-height-300 position-relative z-index-2"
                alt="Item Image">
            </div>
          </div>
          <!-- Slot to render any children passed to this component -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue';

// Props 정의
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: '',
  },
  textCenter: {
    type: Boolean,
    default: false,
  },
  part1Ratio: {
    type: Number,
    default: 3, // 기본값을 설정할 수 있습니다.
  }
});

// emit 함수 정의
const emit = defineEmits(['click']);
// 클릭 핸들러 함수
function handleClick(event) {
  console.log('Component clicked:', event);
  emit('click', event);  // 부모 컴포넌트에 이벤트를 전달
}
// Helper function to determine the content column class
const getContentColumnClass = () => {
  return props.textCenter ? 'col-md-12 text-center m-auto' : 'col-md-6 m-auto';
};
// Helper function to determine the column class based on part1 value
const getTitleColumnClass = (size) => {
  return `col-lg-${size}`;
};
</script>

<style>
.my-editor {
  color: black;
  font-family: Consolas, Fira Mono, Menlo, Courier, monospace;
  font-size: 1em;
  line-height: 1.5;
  padding: 5px;
  tab-size: 4;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>
