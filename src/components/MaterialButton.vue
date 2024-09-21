<script setup>
import { ref } from 'vue';
defineProps({
  variant: {
    type: String,
    validator(variant) {
      return ["contained", "gradient", "outline"].includes(variant);
    },
    default: "contained",
  },
  color: {
    validator(color) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "error",
        "light",
        "white",
        "dark",
        "none",
      ].includes(color);
    },
    default: "",
  },
  size: {
    validator(size) {
      return ["sm", "md", "lg"].includes(size);
    },
    default: "md",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
function getClasses(variant, color, size, fullWidth, disabled) {
  let colorValue, sizeValue, fullWidthValue, activeValue;

  // Setting the button variant and color
  if (variant === "gradient") {
    colorValue = `bg-gradient-${color}`;
  } else if (variant === "outline") {
    colorValue = `btn-outline-${color}`;
  } else {
    colorValue = `btn-${color}`;
  }

  sizeValue = size && `btn-${size}`;

  fullWidthValue = fullWidth && `w-100`;

  activeValue = disabled && `disabled`;

  return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`;
}

const emit = defineEmits(['click']);
const button = ref(null);
// 클릭 이벤트 핸들러
const handleClick = () => {
  emit('click');
}
// button에 대한 접근을 부모에게 제공하기 위해 expose
defineExpose({
  button
});
</script>
<template>
  <button ref="button" @click="handleClick" class="btn" :class="getClasses(variant, color, size, fullWidth, disabled)">
    <slot />
  </button>
</template>
