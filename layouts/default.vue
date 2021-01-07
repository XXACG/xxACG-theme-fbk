<template>
  <div id="app">
    <Navbar/>
    <main>
      <keep-alive>
        <transition name="page" mode="out-in">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </transition>
      </keep-alive>
      <transition name="page" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import {changeAppearance, THEME} from "@/utils/common";

export default {
  components: {Navbar},
  mounted() {
    changeAppearance(THEME.light);
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
</style>
