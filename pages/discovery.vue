<template>
  <div>
    <vs-row style="display: flex; justify-content: center">
      <vs-col lg="8" xs="12">
        <vs-row>
          <vs-col :key="index" v-for="(block, index) in 3" lg="4" xs="12">
            <vs-card type="3">
              <template #title>
                <h3>Lorem ipsum</h3>
              </template>
              <template #text>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </template>
            </vs-card>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "discovery"
}
</script>

<style scoped>
</style>
