<script setup>
// example component
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";
import { onMounted, ref } from "vue";

// clipboard
import useClipboard from "vue-clipboard3";
import View from "../../../layouts/sections/components/View.vue";

import BadgesSimple from "./../components/BadgesSimple.vue";
// images
import emma from "@/assets/img/team-5.jpg";
import william from "@/assets/img/bruce-mars.jpg";
import ivana from "@/assets/img/ivana-squares.jpg";
import marquez from "@/assets/img/ivana-square.jpg";
import imagePath from "@/assets/img/building-view.jpg";
import faviconPath from "@/assets/img/favicon2.png";


// prop
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: "",
  },

});

// 상태 설정
const isTransparent = ref(props.transparent);
const isMobile = ref(false);

const checkIfMobile = () => {
  console.log("!~")
  console.log(isMobile.value)
  // 576px 이하인 경우 모바일 사이즈로 간주
  isMobile.value = window.innerWidth <= 576;
};


// 스크롤 이벤트 추가
const handleScroll = () => {
  const scrollTop = window.scrollY || window.pageYOffset;
  isTransparent.value = scrollTop <= 200;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 초기 스크롤 상태 설정
  window.addEventListener("resize", checkIfMobile);
  checkIfMobile(); // 초기화 시 현재 상태 확인
});
// variables
const { toClipboard } = useClipboard();

// 업체 정보 배열 (이름, 위도, 경도, 기타 정보)
const pinupList = [
  { name: "서울온정치과", lat: 35.91826179961859, lng: 128.29387576487045, address: "경북 성주군 성주읍 성주로 3289(2층)", phone: "054-933-2875" },
  // { name: "업체 B", lat: 37.5655, lng: 126.9760, address: "서울 종로구", phone: "02-987-6543" },
  // { name: "업체 C", lat: 37.5645, lng: 126.9790, address: "서울 강남구", phone: "02-111-2222" },
]
// const markerImage = new kakao.maps.MarkerImage('@/assets/img/building-view.jpg', new kakao.maps.Size(24, 35));
const markerPosition = new kakao.maps.LatLng(35.91826179961859, 128.29387576487045); // 마커가 표시될 위치(위,경)
const marker = new kakao.maps.Marker({
  position: markerPosition,
  // image: markerImage // 사용자 지정 마커 이미지
});
const initMap = () => {
  // 지도 표시할 위치 설정 (위도, 경도)
  const mapContainer = document.getElementById('map'); // 지도를 표시할 div
  const mapOption = {
    center: new kakao.maps.LatLng(35.91826179961859, 128.29387576487045), // 지도 중심 좌표 (서울)
    level: 2 // 지도 확대 레벨
  };

  // 지도 생성
  const map = new kakao.maps.Map(mapContainer, mapOption);

  // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
  var zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


  const addMarkerAndInfo = (map, company) => {
    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(35.91826179961859, 128.29387576487045); // 마커가 표시될 위치(위,경)

    const markerImage = new kakao.maps.MarkerImage(faviconPath, new kakao.maps.Size(24, 24));
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      // image: markerImage
    });

    // 마커를 지도에 표시
    marker.setMap(map);

    // 인포윈도우 내용 생성
    const infowindowContent = `
        <div style="padding:5px;">
          <strong>${company.name}</strong><br>
          주소: ${company.address}<br>
          전화: ${company.phone}
        </div>
      `;
    const infowindow = new kakao.maps.InfoWindow({
      content: infowindowContent
    });

    // 마커에 클릭 이벤트 추가 (클릭 시 인포윈도우 열기)
    kakao.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker);
    });

    // 커스텀 오버레이의 내용 (HTML로 작성)
    const content = `
        <div class="customoverlay">
          <span class="title">매장 이름</span>
          <button id="infoButton_map" class="info-button">큰 지도 보기</button>
          <button id="infoButton_find" class="info-button">길찾기</button>
        </div>
      `;

    // 커스텀 오버레이 생성
    const customOverlay = new kakao.maps.CustomOverlay({
      position: markerPosition,
      content: content,
      xAnchor: 0.5,
      yAnchor: 1.5,
    });

    // 커스텀 오버레이를 지도에 표시
    customOverlay.setMap(map);


    // 버튼 클릭 이벤트 추가 (Vue 방식이 아닌 일반 JavaScript 이벤트)
    setTimeout(() => {
      document.getElementById("infoButton_map").addEventListener("click", () => {
        // 새 창을 열어 길찾기
        // window.open("https://map.kakao.com/?urlX=791955&urlY=674386&urlLevel=3&itemId=639674040&q=%EC%84%9C%EC%9A%B8%EC%98%A8%EC%A0%95%EC%B9%98%EA%B3%BC&srcid=%2C&rtTypes=%2C&map_type=TYPE_MAP", "_blank");
        window.open("https://map.kakao.com/link/map/639674040", "_blank");
      });
      document.getElementById("infoButton_find").addEventListener("click", () => {
        // 새 창을 열어 지도
        window.open("https://map.kakao.com/link/to/639674040", "_blank");
      });
      document.getElementById("infoButton_info").addEventListener("click", () => {
        // 새 창을 열어 상세보기
        window.open("https://place.map.kakao.com/639674040", "_blank");
      });
    }, 0); // DOM이 모두 렌더링된 후 이벤트 바인딩


  }

  // 업체 정보를 순회하며 마커와 인포윈도우를 생성
  pinupList.forEach(company => {
    addMarkerAndInfo(map, company);
  });
}
onMounted(() => {
  initMap();
})


const editorCode = ref(props.code);

// functions
const copy = async (event) => {
  try {
    await toClipboard(editorCode.value);
    const el = event.target.parentElement;
    var alert = document.createElement("div");
    alert.classList.add(
      "alert",
      "alert-success",
      "position-absolute",
      "top-5",
      "border-0",
      "text-white",
      "w-25",
      "end-0",
      "start-0",
      "mt-2",
      "mx-auto",
      "py-2"
    );
    alert.style.transform = "translate3d(0px, 0px, 0px)";
    alert.style.opacity = "0";
    alert.style.transition = ".35s ease";
    setTimeout(function () {
      alert.style.transform = "translate3d(0px, 20px, 0px)";
      alert.style.setProperty("opacity", "1", "important");
    }, 100);
    alert.innerHTML = "Code successfully copied!";
    el.parentElement.appendChild(alert);
    setTimeout(function () {
      alert.style.transform = "translate3d(0px, 0px, 0px)";
      alert.style.setProperty("opacity", "0", "important");
    }, 2000);
    setTimeout(function () {
      el.parentElement.querySelector(".alert").remove();
    }, 2500);

  } catch (e) {
    console.error(e);
  }
};

const highlighter = (code) => {
  return prism.highlight(code, prism.languages.html);
};
</script>

<template>

  <div class="container">
    <div class="row">
      <div class="row justify-content-center text-center my-sm-5">
        <div class="col-lg-12 tab-content tab-space">
          <!-- <MaterialBadge color="success" class="mb-3">진료과목</MaterialBadge> -->

          <h2 class="text-dark mb-0">찾아오시는 길</h2>
          <p class="text-dark opacity-8 mb-0 mt-3">
            경북 성주군 성주읍 성주로 3289, 더갤럭시빌딩 2층<br />
            성주군 종합사회복지관, 성주국민체육센터 부근
          </p>
          <div class="position-relative p-4 pb-2">

            <a class="btn btn-sm bg-gradient-dark  mt-3 z-index-3"
            :class="{'position-absolute end-4':!isMobile}" @click="copy($event)"
              href="javascript:;"><i class="fas fa-copy text-sm me-1"></i> 주소복사</a>
          </div>
        </div>
        <button class="btn black-background">버튼</button>


        <!-- <View title="gggs Simple" :code="badgesSimpleCode" id="badges-simple">
          <BadgesSimple />
        </View> -->
      </div>
    </div>
  </div>
  <section class=" position-relative bg-gradient-light mx-n3" id="map">
    <!-- 링크 버튼을 넣을 배경 -->
    <div class="container mt-3">
      <div class="row">

        <div class="col-3 text-left bg-white z-index-3 shadow-dark">
          <div class="row p-1">
            <div class="col-md-9">
              <h6>서울온정치과의원</h6>
              <p>경북 성주군 성주읍 성주로 3289, 더갤럭시빌딩 2층</p>
            </div>
            <div role="button" class="col-md-3" id="infoButton_find">

              <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px"
                fill="#1A73E8">
                <path
                  d="M440-80v-200q0-56-17-83t-45-53l57-57q12 11 23 23.5t22 26.5q14-19 28.5-33.5T538-485q38-35 69-81t33-161l-63 63-57-56 160-160 160 160-56 56-64-63q-2 143-44 203.5T592-425q-32 29-52 56.5T520-280v200h-80ZM248-633q-4-20-5.5-44t-2.5-50l-64 63-56-56 160-160 160 160-57 56-63-62q0 21 2 39.5t4 34.5l-78 19Zm86 176q-20-21-38.5-49T263-575l77-19q10 27 23 46t28 34l-57 57Z" />
              </svg>
              <a class="text-info">길찾기</a>
            </div>
            <div class="row">

              <p>전화번호:<a role="button" id="infoButton_map" class=" text-info mt-md-0 m-1">054-933-2875</a> </p>
            </div>

          </div>
          <div class="mt-md-0">

            <a role="button" id="infoButton_map" class=" text-info mt-md-0 m-1">큰 지도로
              보기</a> |
            <a role="button" id="infoButton_info" class="text-info  mt-md-0 m-1">상세 정보</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#map {
  height: 400px;
}

/* 커스텀 오버레이 스타일 */
.customoverlay {
  position: relative;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.customoverlay .title {
  font-weight: bold;
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
}

.customoverlay .info-button {
  background-color: #0089ff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.customoverlay .info-button:hover {
  background-color: #006fcf;
}

/* 지도 위에 나타날 흰색 네모난 배경 */
.info-box {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  /* 지도 위에 표시되도록 설정 */
}

/* 버튼 스타일 */
.info-button {
  background-color: #0089ff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.info-button:hover {
  background-color: #006fcf;
}
</style>