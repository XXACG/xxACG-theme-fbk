<template>
  <div>
    <vs-navbar padding-scroll fixed shadow-scroll square center-collapsed v-model="navActive">
      <template #left>
        <div
          style="display: flex;justify-content: center; align-items: center;font-size: 20px;font-weight: bold;background-color: rgba(0, 0, 0, .1);border-radius: 10px;padding: 5px 10px">
          xxACG
        </div>
      </template>
      <vs-navbar-item to="discovery" :active="navActive === 'discovery'" id="discovery">
        探索
      </vs-navbar-item>
      <vs-navbar-item to="daily" :active="navActive === 'daily'" id="daily">
        今日推荐
      </vs-navbar-item>
      <vs-navbar-item to="catalog" :active="navActive === 'catalog'" id="catalog">
        库
      </vs-navbar-item>
      <template #right>
        <vs-button flat>登录</vs-button>
        <vs-button>加入 xxACG</vs-button>
      </template>
    </vs-navbar>

    <div style="margin-top: 84px">
      <Nuxt/>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';

export default {
  created() {
    Vue.config.ignoredElements = ['ion-icon'];
  },
  data: () => ({
    navActive: null
  }),
  mounted() {
    this.navActive = this.$route.path.substr(1);
  }
}
</script>

<style scoped>
</style>
