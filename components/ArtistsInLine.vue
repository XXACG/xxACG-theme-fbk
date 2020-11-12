<template>
  <span class="artist-in-line">
    {{ computedPrefix }}
    <span v-for="(pb, index) in filteredPublisher" :key="pb.id">
      <nuxt-link :to="`/publisher/${pb.id}`">{{ pb.name }}</nuxt-link>
      <span v-if="index !== filteredPublisher.length - 1">, </span>
    </span>
  </span>
</template>

<script>
export default {
  name: "ArtistInLine",
  props: {
    artists: {
      type: Array,
      required: true,
    },
    exclude: {
      type: String,
      default: "",
    },
    prefix: {
      type: String,
      default: "",
    },
  },
  computed: {
    filteredPublisher() {
      return this.artists.filter((a) => a.name !== this.exclude);
    },
    computedPrefix() {
      if (this.filteredPublisher.length !== 0) return this.prefix;
      else return "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
