<template>
  <div v-show="true">
    <h1>
      晚上好~
    </h1>
    <div class="section-one">
      <div class="daily-explore" @click="goToDailyQueue">
        <div class="top">
          <p>
            <span>希望有朝一日能和士道同学再次见面呢</span>
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
          ]"
          :type="'tracklist'"
          :itemWidth="220"
        />
      </div>
    </div>

    <div class="section-two" id="liked">
      <div class="tabs">
        <div
          class="tab"
          :class="{ active: currentTab === 'playlists' }"
          @click="updateCurrentTab('playlists')"
        >
          Playlists
        </div>
        <div
          class="tab"
          :class="{ active: currentTab === 'albums' }"
          @click="updateCurrentTab('albums')"
        >
          Albums
        </div>
        <div
          class="tab"
          :class="{ active: currentTab === 'artists' }"
          @click="updateCurrentTab('artists')"
        >
          Artists
        </div>
        <div
          class="tab"
          :class="{ active: currentTab === 'mvs' }"
          @click="updateCurrentTab('mvs')"
        >
          MVs
        </div>
      </div>

      <div v-show="currentTab === 'playlists'">
        <div v-if="5 > 1">
          <CoverRow
            :items="[]"
            type="playlist"
            subText="creator"
            :showPlayButton="true"
          />
        </div>
      </div>

      <div v-show="currentTab === 'albums'">
        <CoverRow
          :items="albums"
          type="album"
          subText="artist"
          :showPlayButton="true"
        />
      </div>

      <div v-show="currentTab === 'artists'">
        <CoverRow :items="artists" type="artist" :showPlayButton="true"/>
      </div>

      <div v-show="currentTab === 'mvs'">
        <MvRow :mvs="mvs"/>
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
      currentTab: "playlists",
      albums: [],
      artists: [],
      mvs: [],
    };
  },
  methods: {
    updateCurrentTab(tab) {
      this.currentTab = tab;
      document
        .getElementById("liked")
        .scrollIntoView({block: "start", behavior: "smooth"});
      if (tab === "albums") {
        if (this.albums.length === 0) this.loadLikedAlbums();
      } else if (tab === "artists") {
        if (this.artists.length === 0) this.loadLikedArtists();
      } else if (tab === "mvs") {
        if (this.mvs.length === 0) this.loadLikedMVs();
      }
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
