<template>
  <div id="app">
    <Navbar/>
    <main>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
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
#app {
  font-family: "Barlow", -apple-system, BlinkMacSystemFont, Helvetica Neue,
  PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC,
  WenQuanYi Micro Hei, sans-serif;
  width: 100%;
  transition: all 0.4s;
}

body {
  background-color: var(--color-body-bg);
}

html {
  overflow-y: overlay;
  min-width: 1000px;
}

main {
  margin-top: 96px;
  margin-bottom: 96px;
  padding: {
    right: 10vw;
    left: 10vw;
  }
}

select,
button {
  font-family: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

input,
button {
  &:focus {
    outline: none;
  }
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

/* Let's get this party started */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
  border-left: 1px solid rgba(128, 128, 128, 0.18);
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: var(--color-secondary-bg);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s;
}

.slide-up-enter, .slide-up-leave-to /* .fade-leave-active below version 2.1.8 */
{
  transform: translateY(100%);
}
</style>
