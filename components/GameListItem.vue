<template>
  <div
    class="game gamelist"
    :class="{'disable': !game.enable}"
    :style="trackStyle"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <img
      :src="'http://api.btstu.cn/sjtx/api.php?lx=c1&format=images&' + 'v=' + Math.random().toString(36).substr(2)"
      @click="goToGameDetail" class="hover" alt=""/>
    <div class="title-and-artist">
      <div class="container">
        <div class="title">
          {{ game.name }}
        </div>
        <div class="artist">
          <PublishersInLine :artists="game.publisher"/>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import PublishersInLine from "@/components/PublishersInLine";

export default {
  name: "GameListItem",
  components: {PublishersInLine},
  props: {
    game: Object,
  },
  data() {
    return {hover: false, trackStyle: {}};
  },
  created() {
    if (this.$parent.itemWidth !== -1)
      this.trackStyle = {width: this.$parent.itemWidth + "px"};
  },
  methods: {
    goToGameDetail() {
      this.$router.push({path: "/game/" + this.game.id});
    },
  }
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: transparent;
  border-radius: 25%;
  transition: transform 0.2s;

  .svg-icon {
    height: 16px;
    width: 16px;
    color: var(--color-primary);
  }

  &:active {
    transform: scale(0.92);
  }
}

.game {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 12px;
  user-select: none;

  .no {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin: 0 20px 0 10px;
    width: 12px;
    color: var(--color-text);
    cursor: default;

    span {
      opacity: 0.58;
    }
  }

  .explicit-symbol {
    opacity: 0.28;
    color: var(--color-text);

    .svg-icon {
      margin-bottom: -3px;
    }
  }

  .explicit-symbol.before-artist {
    margin-right: 2px;

    .svg-icon {
      margin-bottom: -3px;
    }
  }

  img {
    border-radius: 8px;
    height: 56px;
    width: 56px;
    margin-right: 20px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  img.hover {
    filter: drop-shadow(100 200 0 black);
  }

  .title-and-artist {
    flex: 1;
    display: flex;

    .container {
      display: flex;
      flex-direction: column;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      color: var(--color-text);
      cursor: default;
      padding-right: 16px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      word-break: break-all;

      .featured {
        margin-right: 2px;
        font-weight: 500;
        font-size: 14px;
        opacity: 0.72;
      }
    }

    .artist {
      margin-top: 2px;
      font-size: 13px;
      opacity: 0.68;
      color: var(--color-text);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;

      a {
        span {
          margin-right: 3px;
          opacity: 0.8;
        }

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }

  .album {
    flex: 1;
    display: flex;
    font-size: 16px;
    opacity: 0.88;
    color: var(--color-text);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .time {
    font-size: 16px;
    width: 50px;
    cursor: default;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    font-variant-numeric: tabular-nums;
    opacity: 0.88;
    color: var(--color-text);
  }
}

.game:hover {
  transition: all 0.3s;
  background: var(--color-secondary-bg);
}

.game.disable {
  img {
    filter: grayscale(1) opacity(0.6);
  }

  .title,
  .artist,
  .album,
  .time,
  .no,
  .featured {
    opacity: 0.28 !important;
  }

  &:hover {
    background: none;
  }
}

.game.gamelist {
  width: 256px;

  img {
    height: 36px;
    width: 36px;
    border-radius: 6px;
    margin-right: 14px;
    cursor: pointer;
  }

  .title {
    font-size: 16px;
  }

  .artist {
    font-size: 12px;
  }
}

.game.album {
  height: 32px;
}

.actions {
  width: 80px;
  display: flex;
  justify-content: flex-end;
}
</style>
