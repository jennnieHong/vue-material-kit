<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: [String, Object],
    text: String,
    class: String,
    default: () => ({
      class: "",
    }),
  },
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
  },
  error: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});

const formattedValue = ref(props.value);

watch(() => props.value, (newValue) => {
  if (props.type === 'phone') {
    console.log("~~")
    formattedValue.value = formatPhoneNumber(newValue);
  } else {
    formattedValue.value = newValue;
  }
});

function formatPhoneNumber(value) {
  // Remove all non-digit characters
  let digits = value.replace(/\D/g, '');
  // Format the digits into a phone number format
  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  } else {
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  }
}

function getClasses(size, success, error) {
  let sizeValue, isValidValue;

  sizeValue = size && `form-control-${size}`;

  if (error) {
    isValidValue = "is-invalid";
  } else if (success) {
    isValidValue = "is-valid";
  } else {
    isValidValue = "";
  }

  return `${sizeValue} ${isValidValue}`;
}
</script>

<template>
  <div class="input-group">
    <label v-if="label" :class="label.class">
      {{ typeof label == "string" ? label : label.text }}
    </label>
    <span v-if="icon" class="input-group-text">
      <i class="fas" :class="`fa-${icon}`" aria-hidden="true"></i>
    </span>
    <input :id="id" :type="type" class="form-control" :class="[getClasses(size, success, error), inputClass]"
      :value="formattedValue" :placeholder="placeholder" :required="isRequired" :disabled="isDisabled"
      @input="$emit('update:value', $event.target.value)" />
  </div>
</template>
