<template>
  <section id="section-container" class="container">
    <div class="item-container">
      <div class="content">
        <div class="title">
          <h3>訂購清單</h3>
        </div>

        <template v-if="checkOutList.length">
          <div v-for="list in checkOutList" :key="list.id" class="order">
            <div class="order-title">
              <h4>訂單編號：{{ list.orderId }}</h4>
              <h4>
                金額：{{
                  list.totalAmount | dollorsFormat(checkOutList.totalAmount)
                }}
              </h4>
            </div>

            <div class="order-info">
              <h4 class="title">訂購人資訊</h4>

              <div class="order-info-content">
                <div class="header">
                  <div class="name-title">姓名：</div>
                  <div class="name">{{ list.name }}</div>
                </div>
                <div class="header">
                  <div class="phone-title">電話：</div>
                  <div class="phone">{{ list.phone }}</div>
                </div>
                <div class="header">
                  <div class="delivery-title">取貨門市：</div>
                  <div class="delivery">{{ list.delivery | deliveryStoreFilter(list.delivery) }}</div>
                </div>
              </div>
            </div>

            <div class="line"></div>

            <div class="item-info">
              <h4 class="item-info-title">團購商品</h4>

              <div v-for="item in list.items" :key="item.id" class="order-item">
                <div class="image item">
                  <img class="photo" :src="item.image" alt="" />
                </div>

                <div class="description item">
                  <h4 class="desc desc-title">
                    {{ item.name }}
                  </h4>
                  <h6 class="desc">
                    <span class="delivery-title">到貨日</span>
                    {{ item.deliveryDate }}
                  </h6>
                </div>

                <div class="quantity item">
                  <h4>數量：</h4>
                  <h4>{{ item.inputQty }}</h4>
                </div>

                <div class="price-content item">
                  <h4 class="mobile-price">小計：</h4>
                  <h4 class="price">
                    ${{
                      (item.inputQty * item.price)
                        | dollorsFormat(list.buyQty * list.price)
                    }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="order-list-non">
            <div class="content order-content">
              <div class="form-content order-non">
                <img class="logo" src="../assets/icons/sad.svg" alt="" />
                <h4>目前沒有訂購紀錄</h4>
                <h5>您可以回到商品頁面選購商品唷！</h5>
                <button class="back" @click.stop.prevent="backToShop">
                  <u>回到商品頁面</u>
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { dollorsFormatFilter } from "../utils/mixin";

export default {
  mixins: [dollorsFormatFilter],
  data() {
    return {
      checkOutList: [],
    };
  },
  created() {
    this.getCheckOutList();
  },
  methods: {
    getCheckOutList() {
      this.checkOutList = JSON.parse(localStorage.getItem("order-list")) || [];
    },
    backToShop () {
      this.$router.push('/index')
    }
  },
  filters: {
    deliveryStoreFilter (deliveryStore) {
      if (deliveryStore === 'chitu') {
        return '七堵門市'
      }
      return '汐科門市'
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 8vw;
  width: 8vw;
}
.order {
  margin: 2rem 0;
  border: 1px solid var(--shopping-cart-border);
  border-radius: 5px;

  .order-title {
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    line-height: 3;
    border-radius: 5px 5px 0 0;
    color: var(--shopping-cart-title);
    background-color: var(--brand-color);
  }
}

.order-info {
  padding: 1rem 2.5rem;

  .header {
    display: flex;
    margin-top: 0.5rem;
    line-height: 2;
  }
}

.item-info-title {
  padding-left: 2.5rem;
  line-height: 3;
}

.order-item {
  display: grid;
  grid-template-columns: 8vw auto 15% 25%;
  align-items: center;
  padding: 1rem 2.5rem;

  .price-content {
    display: flex;
    align-items: center;
  }

  .item {
    justify-self: center;
  }
}

.line {
  display: flex;
  margin: 0 auto;
  width: 97%;
  height: 1px;
  background-color: var(--shopping-cart-border);
}

.quantity {
  display: flex;
  justify-content: center;
  align-items: center;
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
  .order-title {
    flex-direction: column;
  }

  .order-item {
    grid-template-columns: 30% auto;
    row-gap: 0.2rem;
  }

}
</style>
