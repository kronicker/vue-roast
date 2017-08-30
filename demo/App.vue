<template>
  <section class="app">
    <navbar></navbar>
    <hero></hero>
    <div class="container">
      <guide></guide>
      <demo></demo>
    </div>
  </section>
</template>


<style lang="scss">
  body {
    background-color: #f5f5f5;

    h2 {
      text-transform: uppercase;
      font-weight: 200;
    }

    a { text-decoration: none; }
  }
</style>


<script>
import Demo from './Demo.vue';
import Guide from './Guide.vue';
import Hero from './Hero.vue';
import Navbar from './Navbar.vue';

export default {
  methods: {
    toast() {
      this.$toast({
        title: 'Toast',
        content: 'New toast'
      });
    }
  },
  components: {
    Demo,
    Guide,
    Hero,
    Navbar
  }
};
</script>
