<template>
  <div class="track-list" style="display: flex; flex-wrap: wrap">
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
    itemWidth: {
      type: Number,
      default: -1,
    },
  },
};
</script>

<style lang="scss" scoped></style>
