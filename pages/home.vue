<template>
  <div v-show="true">
    <h1>
      标题
    </h1>
    <div class="section-one">
      <div class="daily-explore" @click="goToDailyQueue">
        <div class="top">
          <p>
            <span>Hanbun gono tsuki</span>
          </p>
        </div>
        <div class="bottom">
          <div class="titles">
            <div class="title">随机探索队列</div>
            <div class="sub-title">
              探索今日推荐的十款游戏
            </div>
          </div>
          <button @click.stop="goToDailyQueue">
            <ion-icon name="enter" style="color: #fff; font-size: 24px;"></ion-icon>
          </button>
        </div>
      </div>
      <div class="songs">
        <GameList
          :games="
          [
            {
              id: 0,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 1,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 2,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 3,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 4,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 5,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 6,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 7,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 8,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 9,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 10,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 11,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
            {
              id: 12,
              name: 'Plastic Memories',
              description: 'Descriptions',
              publisher: [
                {id: 0, name: 'Key-soft'},
                {id: 1, name: 'ANIPLEX'},
              ],
              downloads: ['http://url.com', 'http://url1.com'],
              enable: true
            },
          ]"
          :itemWidth="220"
        />
      </div>
    </div>

    <div class="section-two" id="areas-block">
      <div class="tabs">
        <div v-for="(area, k) in areas"
             class="tab" :key="k"
             :class="{ active: currentTab === area.area }"
             @click="updateCurrentTab(area.area)"
        >
          {{ area.title }}
        </div>
      </div>

      <div v-show="currentTab === 'recommend1'">
        <div class="row">
          <div class="col-xs-6" style="padding: 0 .75rem">
            <GameCard background="/img/002.png">
              <h1 style="color: #fff">Test #1</h1>
            </GameCard>
          </div>
          <div class="col-xs-6" style="padding: 0 .75rem">
            <GameCard background="/img/005.png">
              <h1 style="color: #fff">Test #2</h1>
            </GameCard>
          </div>
          <div class="col-xs-6" style="padding: 0 .75rem">
            <GameCard background="/img/015.jpg">
              <h1 style="color: #fff">Test #3</h1>
            </GameCard>
          </div>
          <div class="col-xs-6" style="padding: 0 .75rem">
            <GameCard background="/img/002.png">
              <h1 style="color: #fff">Test #4</h1>
            </GameCard>
          </div>
        </div>
      </div>

      <div v-show="currentTab === 'card'">
        <GameCard background="/img/015.jpg">
          <h1 style="color: #fff">Test #2</h1>
        </GameCard>
      </div>
    </div>
  </div>
</template>

<script>
import GameListItem from "@/components/GameListItem";
import GameList from "@/components/GameList";

export default {
  name: "home",
  components: {GameList, GameListItem},
  data() {
    return {
      areas: [
        {
          area: 'recommend1',
          title: '推荐区 #1',
        },
        {
          area: 'card',
          title: '推荐区 Test#3',
        },
      ],
      show: true,
      playlists: [],
      hasMorePlaylists: true,
      likedSongsPlaylist: {
        id: 0,
        trackCount: 0,
      },
      likedSongs: [],
      likedSongIDs: [],
      lyric: undefined,
      currentTab: 'default',
      albums: [],
      artists: [],
      mvs: [],
    };
  },
  created() {
    this.currentTab = this.areas[0].area;
  },
  methods: {
    updateCurrentTab(tab) {
      this.currentTab = tab;
      document
        .getElementById("areas-block")
        .scrollIntoView({block: "start", behavior: "smooth"});
    },
    goToDailyQueue() {
      this.$router.push({path: "/explore"});
    },
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 42px;
  color: var(--color-text);

  .head {
    height: 44px;
    margin-right: 12px;
    vertical-align: -7px;
    border-radius: 50%;
    border: rgba(0, 0, 0, 0.2);
  }
}

.section-one {
  display: flex;
  margin-top: 24px;

  .songs {
    flex: 7;
    margin-top: 8px;
    margin-left: 36px;
    height: 216px;
    overflow: hidden;
  }
}

.daily-explore {
  flex: 3;
  margin-top: 8px;
  cursor: pointer;
  height: 216px;
  width: 300px;
  border-radius: 16px;
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s;
  box-sizing: border-box;

  background: var(--color-secondary-bg);

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-primary);

    .title {
      font-size: 24px;
      font-weight: 700;
    }

    .sub-title {
      font-size: 15px;
      margin-top: 2px;
    }

    button {
      margin-bottom: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      width: 44px;
      background: var(--color-primary);
      border-radius: 50%;
      transition: 0.2s;
      box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.2);
      cursor: default;

      .svg-icon {
        color: var(--color-primary-bg);
        margin-left: 4px;
        height: 16px;
        width: 16px;
      }

      &:hover {
        transform: scale(1.06);
        box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.4);
      }

      &:active {
        transform: scale(0.94);
      }
    }
  }

  .top {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    opacity: 0.88;
    color: var(--color-primary);

    p {
      margin-top: 2px;
    }
  }
}

.section-two {
  // margin-top: 42px;
  // padding-top: 14px;
  // border-top: 1px solid rgba(128, 128, 128, 0.18);
  margin-top: 54px;
  min-height: calc(100vh - 182px);
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  color: var(--color-text);
  margin-bottom: 6px;

  .tab {
    font-weight: 600;
    padding: 8px 14px;
    margin: 10px 14px 6px 0;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transition: 0.2s;
    opacity: 0.68;

    &:hover {
      opacity: 0.88;
      background-color: var(--color-secondary-bg);
    }
  }

  .tab.active {
    opacity: 0.88;
    background-color: var(--color-secondary-bg);
  }
}
</style>
