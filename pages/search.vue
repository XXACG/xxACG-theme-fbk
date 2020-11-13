<template>
  <div>
    <h1>
      <span>搜索</span> "{{ keywords }}"
    </h1>
    <div class="section-title">厂商</div>
    balabala...
    <div class="section-title">游戏</div>
    balabala...
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {}
  },
  computed: {
    keywords() {
      return this.$route.query.keywords
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: -10px;
  margin-bottom: 0;
  color: var(--color-text);

  span {
    opacity: 0.58;
  }
}

.section-title {
  font-weight: 600;
  font-size: 22px;
  opacity: 0.88;
  color: var(--color-text);
  margin-bottom: 16px;
  margin-top: 46px;
}
</style>
