<template>
  <div id="demo">
    <h2>Demo</h2>
    <h5>Message</h5>
    <div class="row">
      <div class="col">
        <label>Title</label>
        <input v-model="message.title" type="text">
        <label>Footer</label>
        <input v-model="message.footer" type="text">
      </div>
      <div class="col">
        <label>Body</label>
        <input v-model="message.body" type="text">
        <label>Level</label>
        <select v-model="message.level">
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
      </div>
    </div>
    <button @click="toast">TOAST</button>
  </div>
</template>


<style lang="scss" scoped>
  input,
  select {
    max-width: 100%;
    height: 35px;
    padding: 0;
  }

  input { text-indent: 5px; }
</style>


<script>
export default {
  data() {
    return {
      message: {
        title: '',
        body: '',
        footer: '',
        level: 'info'
      }
    };
  },
  methods: {
    toast() {
      this.$toast(Object.assign({}, this.message));
    }
  }
};
</script>
