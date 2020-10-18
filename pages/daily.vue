<template>
  <div>
    <vs-card-group>
      <vs-card :key="index" v-for="(card, index) in 6" type="1">
        <template #title>
          <h3>Pot with a plant</h3>
        </template>
        <template #img>
          <img src="https://picbed-1253315888.file.myqcloud.com/images/bg1.jpg" alt="">
        </template>
        <template #text>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <ion-icon name="heart"></ion-icon>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <ion-icon name="chatbubbles"></ion-icon>
            <span class="span">&nbsp;54</span>
          </vs-button>
        </template>
      </vs-card>
    </vs-card-group>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
