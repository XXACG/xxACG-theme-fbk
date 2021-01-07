<template>
  <div class="card">
    <div class="background" :style="'background-image: url(\'' + background + '\')'"></div>
    <div class="overlay"></div>
    <div style="position: relative;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: ['background']
}
</script>

<style scoped>
.card {
  position: relative;
  margin: 8px -4px;
  padding: 12px 24px 16px;
  border-radius: 4px;
  border-left: 4px solid #728ce4;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
}

.card .background,
.card .overlay {
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
  transition: .2s cubic-bezier(.215, .61, .355, 1);
}

.card .background {
  background-size: cover;
  background-position: center;
}

.card .overlay {
  background-color: rgba(0, 0, 0, .5);
}

.card:hover .background {
  transform: scale(1.05);
  filter: brightness(.85);
}
</style>
