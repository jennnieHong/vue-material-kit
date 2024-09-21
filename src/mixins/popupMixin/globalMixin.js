// globalMixin.js
export const globalMixin = {
  methods: {
    makeCall() {
      // API 호출 함수 정의
      window.location.href = "tel:054-933-2875";
    },
    openModal() {
      console.log("openModal from globalMixin--------------");
    },
  },
};
