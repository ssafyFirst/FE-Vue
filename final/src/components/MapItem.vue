<template>
  <div>
    <div id="map" class="map"></div>
    <b-button @click="initMap">이거 눌러바</b-button>
    {{ dmap }}
    <div></div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      dmap : null,
    }
  },
  mounted() {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript()
  },
  methods: {
    addKakaoMapScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_MAP}`
      document.head.appendChild(script);
    },
    initMap() {
      var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      };

      var map = new kakao.maps.Map(container, options)
      this.dmap = map //지도 생성 및 객체 리턴
    },
    addMap() {
      // this.addKakaoMapScript()
      this.initMap()
    },
    getLocation() {
    if (navigator.geolocation) { // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(function(position) {
        alert(position.coords.latitude + ' ' + position.coords.longitude);
      }, function(error) {
        console.error(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
        alert('GPS를 지원하지 않습니다');
      }
    }
  },
};
</script>

<style>
.map {
  width: 100%;
  height: 400px;
}
</style>