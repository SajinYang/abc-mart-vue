<template>
  <section id="section-container" class="container">
    <div class="container top-container">
      <div class="title">
        <h3>-搜尋結果-</h3>
      </div>

      <template v-if="this.items.length === 0">
        <div class="order-list-non">
          <div class="content order-content">
            <div class="form-content order-non">
              <img class="logo" src="../assets/icons/sad.svg" alt="" />
              <h4>抱歉，搜尋無結果</h4>
              <h5>您也可以回到商品頁面選購商品唷！</h5>
              <button class="back" @click.stop.prevent="backToShop">
                <u>回到商品頁面</u>
              </button>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="top-item-container">
          <div v-for="item in items" :key="item.id" class="top-item">
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
      </template>
    </div>
  </section>
</template>

<script>
import { dollorsFormatFilter } from "../utils/mixin";
import { mapState } from "vuex";

const dummyData = {
  items: [
    {
      id: 1,
      name: "小潘潘鳳梨酥",
      price: 398,
      image: require("../assets/img/01-3.jpg"),
    },
    {
      id: 2,
      name: "紅龍雞塊",
      price: 165,
      image: require("../assets/img/02-1.jpg"),
    },
    {
      id: 3,
      name: "瑪莉屋披薩-豪華夏威夷",
      price: 80,
      image: require("../assets/img/03-1.jpg"),
    },
    {
      id: 4,
      name: "劉家肉粽-南部蛋黃粽(4顆)",
      price: 250,
      image: require("../assets/img/04-1.jpg"),
    },
    {
      id: 5,
      name: "彰化不二坊-蛋黃酥(6顆)",
      price: 450,
      image: require("../assets/img/05-1.jpg"),
    },
    {
      id: 6,
      name: "老江紅茶-紅茶牛奶(500ml/瓶)",
      price: 85,
      image: require("../assets/img/06-1.jpg"),
    },
    {
      id: 7,
      name: "史家庄-清燉牛肉湯(3包)",
      price: 1250,
      image: require("../assets/img/07-1.jpg"),
    },
    {
      id: 8,
      name: "基隆三記-手工魚餃(10顆/盒)",
      price: 80,
      image: require("../assets/img/08-1.jpg"),
    },
    {
      id: 9,
      name: "弘宇蛋糕-芋泥奶酪",
      price: 300,
      image: require("../assets/img/09-1.jpg"),
    },
    {
      id: 10,
      name: "檸檬大叔-蜂蜜檸檬磚12入/盒",
      price: 370,
      image: require("../assets/img/10-1.jpg"),
    },
  ],
};

export default {
  mixins: [dollorsFormatFilter],
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.filteredItems(this.keywordVuex);
  },
  computed: {
    ...mapState(["keywordVuex"]),
  },
  methods: {
    linkToDetail(itemId) {
      this.$router.push(`/item/${itemId}`);
    },
    filteredItems(keyword) {
      this.items = dummyData.items.filter((item) =>
        item.name.toLocaleLowerCase().includes(keyword)
      );

      if (this.items.length === 0) {
        return alert("Cannot find items with  keyword: " + keyword);
      }
    },
    backToShop () {
      this.$router.push('/index')
    }
  },
  watch: {
    keywordVuex() {
      this.filteredItems(this.keywordVuex);
    },
  },
};
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
    margin: 25px 10px;
  }
}

img {
  height: 25vw;
  width: 25vw;
  margin-bottom: 12px;
  cursor: pointer;
}

.item-title {
  font-size: 1rem;
  cursor: pointer;
}

.item-title,
.item-price {
  display: flex;
  justify-content: center;
  line-height: 1.8;
}

.order-non {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;

  .logo {
    height: 200px;
    width: 200px;
  }
  img,
  h4,
  h5,
  .back {
    margin: 0.3rem 0;
  }
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
