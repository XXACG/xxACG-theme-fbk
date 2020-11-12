<template>
  <div class="track-list" :style="listStyles">
    <GameListItem
      v-for="game in games"
      :game="game"
      :key="game.id"
    />
  </div>
</template>

<script>
import GameListItem from "@/components/GameListItem";

export default {
  name: "GameList",
  components: {GameListItem},
  props: {
    games: Array,
    type: String,
    id: Number,
    itemWidth: {
      type: Number,
      default: -1,
    },
    dbclickTrackFunc: {
      type: String,
      default: "default",
    },
    albumObject: {
      type: Object,
      default: () => {
        return {
          artist: {
            name: "",
          },
        };
      },
    },
  },
  data() {
    return {
      listStyles: {},
    };
  },
  created() {
    if (this.type === "tracklist")
      this.listStyles = {display: "flex", flexWrap: "wrap"};
  },
};
</script>

<style lang="scss" scoped></style>
