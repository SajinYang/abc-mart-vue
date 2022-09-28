<template>
  <section id="section-container" class="container">
      <TopItem />
      <AbcItem />
  </section>
</template>

<script>
import TopItem from "../components/TopItem";
import AbcItem from "../components/AbcItem";

export default {
  components: {
    TopItem,
    AbcItem,
  }
};
</script>

<style lang="scss" scoped>
</style>
