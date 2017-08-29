<template>
  <section class="demo">
    <h1>vue-roast demo</h1>
    <iframe src="https://ghbtns.com/github-btn.html?user=kronicker&repo=vue-roast&type=star&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
    <button @click="toast">CLICK</button>
  </section>
</template>

<style lang="scss" scoped>
  .demo {
    max-width: 450px;
    margin: 0 auto;
    padding: 15px 30px;
  }
</style>

<script>
export default {
  methods: {
    toast() {
      this.$toast({
        title: 'Toast',
        content: 'New toast'
      });
    }
  }
};
</script>
