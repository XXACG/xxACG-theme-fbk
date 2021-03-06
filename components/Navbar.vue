<template>
  <nav>
    <div class="navigation-buttons">
      <button-icon @click.native="go('back')">
        <icon-frame>
          <ion-icon name="caret-back"></ion-icon>
        </icon-frame>
      </button-icon>
      <button-icon @click.native="go('forward')">
        <icon-frame>
          <ion-icon name="caret-forward"></ion-icon>
        </icon-frame>
      </button-icon>
    </div>
    <div class="navigation-links">
      <router-link to="/" :class="{ active: this.$route.name === 'home' }">
        首页
      </router-link>
      <router-link to="/topic" :class="{ active: this.$route.name === 'topic' }">
        茶谈
      </router-link>
      <router-link to="/library" :class="{ active: this.$route.name === 'library' }">
        库
      </router-link>
    </div>
    <div class="right-part">
      <button-icon @click="switchAppearance">
        <icon-frame>
          <ion-icon name="moon"></ion-icon>
        </icon-frame>
      </button-icon>
      <div class="search-box">
        <div class="container" :class="{ active: inputFocus }">
          <icon-frame>
            <ion-icon name="search"></ion-icon>
          </icon-frame>
          <div class="input">
            <input
              :placeholder="inputFocus ? '' : '搜索'"
              v-model="keywords"
              @keydown.enter="goToSearchPage"
              @focus="inputFocus = true"
              @blur="inputFocus = false"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue';
import ButtonIcon from "@/components/ButtonIcon";
import IconFrame from "@/components/IconFrame";
import {changeAppearance, THEME} from "@/utils/common";

export default {
  name: "Navbar",
  created() {
    Vue.config.ignoredElements = ['ion-icon'];
  },
  components: {
    IconFrame,
    ButtonIcon,
  },
  data() {
    return {
      inputFocus: false,
      keywords: "",
      langs: ["zh-CN", "en"],
    };
  },
  computed: {
    appearance: {
      get() {
        return document.body.getAttribute('data-theme')
      },
      set(appearance) {
        this.$store.commit("updateSettings", {
          key: "appearance",
          value: appearance,
        });
        changeAppearance(appearance);
      }
    }
  },
  methods: {
    go(where) {
      if (where === "back") this.$router.go(-1);
      else this.$router.go(1);
    },
    goToSearchPage() {
      if (!this.keywords) return;
      if (
        this.$route.name === "search" &&
        this.$route.query.keywords === this.keywords
      )
        return;
      this.$router.push({
        name: "search",
        query: {keywords: this.keywords},
      });
    },
    switchAppearance() {
      console.log(this.appearance)
      this.appearance = !(this.appearance === THEME.dark) ? THEME.dark : THEME.light;
    }
  },
}
</script>

<style lang="scss" scoped>
ion-icon {
  color: var(--color-text);
  //--ionicon-stroke-width: 32px;
}

nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: {
    right: 10vw;
    left: 10vw;
  }
  backdrop-filter: saturate(180%) blur(20px);
  background-color: var(--color-navbar-bg);
  z-index: 100;
  -webkit-app-region: drag;
}

.navigation-buttons {
  flex: 1;
  display: flex;
  align-items: center;

  button {
    -webkit-app-region: no-drag;
  }
}

.navigation-links {
  flex: 1;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  user-select: none;

  a {
    -webkit-app-region: no-drag;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 6px;
    padding: 6px 10px;
    color: var(--color-text);
    transition: 0.2s;
    margin: {
      right: 12px;
      left: 12px;
    }

    &:hover {
      background: var(--color-secondary-bg-for-transparent);
    }

    &:active {
      transform: scale(0.92);
      transition: 0.2s;
    }
  }

  a.active {
    color: var(--color-primary);
  }
}

.search {
  .svg-icon {
    height: 18px;
    width: 18px;
  }
}

.search-box {
  display: flex;
  justify-content: flex-end;
  -webkit-app-region: no-drag;

  .container {
    display: flex;
    align-items: center;
    height: 32px;
    background: var(--color-secondary-bg-for-transparent);
    border-radius: 8px;
    width: 200px;
  }

  input {
    font-size: 16px;
    border: none;
    background: transparent;
    width: 96%;
    font-weight: 600;
    margin-top: -1px;
    color: var(--color-text);
  }

  .active {
    background: var(--color-primary-bg-for-transparent);

    input,
    .svg-icon {
      opacity: 1;
      color: var(--color-primary);
    }
  }
}

[data-theme="dark"] {
  .search-box {
    .active {
      input,
      .svg-icon {
        color: var(--color-text);
      }
    }
  }
}

.right-part {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .github {
    margin-right: 16px;
    height: 24px;
    width: 24px;
    color: var(--color-text);
    -webkit-app-region: no-drag;
  }
}
</style>
