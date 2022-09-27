<template>
  <section>
    <div class="container top-container">
      <div class="title">
        <h3>-本月熱銷-</h3>
      </div>

      <div class="top-item-container">
        <div v-for="item in topItems" :key="item.id" class="top-item">
          <div @click.stop.prevent="linkToDetail(item.id)" class="item-img">
            <img :src="item.image" alt="" />
          </div>
          <div @click.stop.prevent="linkToDetail(item.id)" class="item-title">
            {{ item.name }}
          </div>
          <div class="item-price">
            NT${{ item.price | dollorsFormat(item.price) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { dollorsFormatFilter } from '../utils/mixin'

const dummyData = {
  topItems: [
    {
      id: 1,
      name: '小潘潘鳳梨酥',
      price: 398,
      image: require('../assets/img/01-3.jpg')
    },
    {
      id: 2,
      name: '紅龍雞塊',
      price: 165,
      image: require('../assets/img/02-1.jpg')
    },
    {
      id: 3,
      name: '瑪莉屋披薩-豪華夏威夷',
      price: 80,
      image: require('../assets/img/03-1.jpg')
    }
  ]
}

export default {
  mixins: [dollorsFormatFilter],
  data () {
    return {
      topItems: []
    }
  },
  created () {
    this.fetchTopItems()
  },
  methods: {
    fetchTopItems () {
      this.topItems = dummyData.topItems
    },
    linkToDetail (itemId) {
      this.$router.push(`/item/${itemId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.top-container {
  width: 100%;
  height: 100%;
  margin: 3rem 0;
}

.title {
  display: flex;
  justify-content: center;
}

.top-item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .top-item {
    width: calc(100% / 3 - 25px);
    margin: 10px;
  }
}

img {
  height: 25vw;
  width: 25vw;
  margin-bottom: 12px;
  cursor: pointer;
}

.item-title {
  cursor: pointer;
}

.item-title,
.item-price {
  display: flex;
  justify-content: center;
  line-height: 1.8;
}

@media (max-width: 576px) {
  img {
    height: 35vw;
    width: 35vw;
  }

  .top-item-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .top-item {
      width: calc(100% / 2 - 25px);
      margin: 10px;
    }
  }
}
</style>
