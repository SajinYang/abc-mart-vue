<template>
  <div id="app">
    <div class="app-container">
      <Navbar />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from '../src/components/Footer'

export default {
  name: 'app',
  components: { Navbar, Footer },
  watch: {
    // eslint-disable-next-line
    $route: function (to, from) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" src="@/assets/scss/global.scss">
</style>
