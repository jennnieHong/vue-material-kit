<template>


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        전화번호
                    </h5>
                    <MaterialButton color="none" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </MaterialButton>
                </div>
                <div class="modal-body">
                    <!-- 전달받은 내용 슬롯
                    <br /><br /> -->
                    <slot class="text-md-center d-flex"></slot>
                </div>
                <div class="modal-footer ">
                    <MaterialButton variant="gradient" color="dark" data-bs-dismiss="modal">

                        <svg xmlns="http://www.w3.org/2000/svg" class="text-sm " viewBox="0 -960 960 960" width="18px"
                            fill="#fff">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>닫기
                    </MaterialButton>
                    <a class="btn bg-success  z-index-3 text-white " @click="copy($event)" href="javascript:;"><i
                            class="fas fa-copy text-sm me-1"></i>복사</a>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

import MaterialButton from "./../components/MaterialButton.vue";
// clipboard
import useClipboard from "vue-clipboard3";
const editorCode = ref(props.code);
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: true,
    },
    code: {
        type: String,
        required: false,
    }
})
defineEmits(['open-modal']);

// variables
const { toClipboard } = useClipboard();

// functions
const copy = async (event) => {
    try {
        await toClipboard(editorCode.value);
        const el = event.target.parentElement;
        console.log("el========");
        console.log(el);
        var alert = document.createElement("div");
        alert.classList.add(
            "alert",
            "alert-dark",
            "position-absolute",
            // "top-1",
            "border-0",
            "text-white",
            "w-25",
            "end-0",
            "start-0",
            // "mt-2",
            "mx-auto",
            "py-2",
            "z-index-2"
        );
        alert.style.transform = "translate3d(0px, 0px, 0px)";
        alert.style.opacity = "0";
        alert.style.transition = ".35s ease";
        setTimeout(function () {
            alert.style.transform = "translate3d(0px, 20px, 0px)";
            alert.style.setProperty("opacity", "0.7", "important");
        }, 100);
        alert.innerHTML = "복사되었습니다!";
        el.parentElement.appendChild(alert);
        setTimeout(function () {
            alert.style.transform = "translate3d(0px, 0px, 0px)";
            alert.style.setProperty("opacity", "0", "important");
        }, 800);
        setTimeout(function () {
            el.parentElement.querySelector(".alert").remove();
        }, 1000);

    } catch (e) {
        console.error(e);
    }
};
</script>