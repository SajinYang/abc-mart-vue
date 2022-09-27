<template>
  <div id="section-container" class="container-404">
    <div class="top">
      <img class="logo" src="../assets/icons/garlands.svg" alt="" />
      <h4>謝謝您的訂購</h4>
      <p>商品到貨時，將以手機簡訊提醒。</p>
    </div>
    <div class="down">
      <button class="back" @click.stop.prevent="linkToCheckout">訂單查詢</button>
      <button class="back" @click.stop.prevent="linkToIndex">回商品頁</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linkToCheckout() {
      this.$router.push({ name: 'checkout-list'})
    },
    linkToIndex() {
      this.$router.push({ name: 'index'})
    }
  }
}
</script>

<style scoped>
.container-404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 250px;
  height: 250px;
  margin: 1rem 0;
}

h4 {
  font-size: 2.5rem;
  color: var(--brand-color);
  margin: 1.5rem 0;
}

p {
  font-size: 1.3rem;
  color: var(--brand-color);
}

.back {
  font-size: 1rem;
  color: var(--brand-color);
  text-decoration: underline;
  margin: 2rem 0.5rem;
}
</style>
