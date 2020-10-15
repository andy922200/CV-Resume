<template>
  <div
    class="arrowUpIconWrapper"
    v-if="isButtonShown"
    @click="triggerBackToTop"
  >
    <font-awesome-icon :icon="['fas', 'arrow-up']" class="arrowUpIcon" />
  </div>
</template>

<script>
export default {
  name: "ScrollTop",
  data() {
    return {
      isButtonShown: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.showButton);
  },
  destroyed() {
    window.removeEventListener("scroll", this.showButton);
  },
  methods: {
    showButton() {
      let scrollTop = document.documentElement.scrollTop;
      let currentView = this;
      currentView.scrollTop = scrollTop;
      if (currentView.scrollTop > 40) {
        this.isButtonShown = true;
      } else {
        this.isButtonShown = false;
      }
    },
    triggerBackToTop() {
      let currentView = this;
      let timer = setInterval(() => {
        // 用 scrollTop 取得滾動條的垂直位置，並用 Math.floor() 無條件捨去
        let speed = Math.floor(-currentView.scrollTop / 10);
        // document.documentElement.scrollTop 取得新的滾動條垂直位置
        // 將現有的位置扣除掉 speed 後，存成新的 scrollTop 數值，並更新 document.documentElement.scrollTop
        document.documentElement.scrollTop = document.body.scrollTop =
          currentView.scrollTop + speed;
        // 抵達頂端後，清除計時器。
        if (currentView.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 10);
    }
  }
};
</script>

<style lang="scss" scoped>
.arrowUpIconWrapper {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 40px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27ae60;
  border-radius: 50%;
  @media (max-width: 576px) {
    right: 20px;
  }
  .arrowUpIcon {
    font-size: 20px;
  }
}
</style>
