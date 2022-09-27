<template>
  <section id="section-container" class="container">
    <div class="product-info">
      <!-- 左上商品圖 -->
      <div class="variant-photos top">
        <div class="photo">
          <img class="top-photo" :src="item.image" alt="" />
        </div>
      </div>
      <!-- 右上商品簡述 -->
      <div class="product-content top">
        <h2 class="title">
          {{ item.name }}
        </h2>
        <h5 class="description">
          {{ item.description }}
        </h5>
        <div class="delivery">
          <h4>結單日：{{ item.statementDate }}</h4>
          <h4>到貨日：{{ item.deliveryDate }}</h4>
        </div>
        <div class="price-content">
          <h3 class="price-title">售價</h3>
          <h3 class="price-much">
            NT${{ item.price | dollorsFormat(item.price) }}
          </h3>
        </div>
        <div class="product-variant-quantity">
          <div class="btn-group">
            <button
              @click.stop.prevent="reduceProductQty(item.id)"
              class="btn btn-qty add-down"
            >
              <span>－</span>
            </button>
            <input
              type="text"
              class="btn btn-qty item-quantity"
              name="quatity"
              v-model="item.inputQty"
              @keyup.stop.prevent="productQtyCheck"
            />
            <button
              @click.stop.prevent="addProductQty(item.id)"
              class="btn btn-qty add-up"
            >
              <span>＋</span>
            </button>
          </div>
        </div>

        <!-- 跟團按鈕 -->
        <div class="product-button">
          <button
            @click.stop.prevent="addCartList(item.id)"
            class="btn btn-buy btn-to-cart"
          >
            加入購物車
          </button>
          <button @click.stop.prevent="buyItemNow(item.id)" class="btn btn-buy btn-quick-buy">立即跟團</button>
        </div>
      </div>
    </div>
    <hr />
    <div class="desc section-1">
      <div class="section-title">
        <h3>｜商品介紹</h3>
      </div>
      <div class="section-photos">
        <div
          v-for="sectionPhoto in sectionPhotos"
          :key="sectionPhoto.id"
          class="section-photo"
        >
          <img :src="sectionPhoto.image" alt="" />
        </div>
      </div>
    </div>
    <div class="desc section-2">
      <div class="section-title">
        <h3>｜取貨注意事項</h3>
      </div>
      <h4>
        由於門市空間有限，請大家多多配合：<br />
        冷藏、蛋糕類商品，盡可能到貨2日內取貨！<br />
        冷凍、常溫類商品，盡可能到貨5日內取貨！<br />
        如有特殊狀況請聯繫我們，好讓我們有時間處裡。<br />
      </h4>
    </div>
    <div class="desc section-3">
      <div class="section-title">
        <h3>｜取貨門市</h3>
      </div>
      <h4>
        汐止門市：<br />
        新北市汐止區大同路二段999號 (近汐止國小)<br />
        tel：02-12345678<br />
        <br />
        七堵門市：<br />
        基隆市七堵區東新街999號 (近基隆商工) <br />
        tel：02-12345678<br />
      </h4>
    </div>
  </section>
</template>

<script>
import { Toast } from '../utils/helpers'
import { dollorsFormatFilter } from '../utils/mixin'
import { mapActions } from 'vuex'

const dummyData = {
  items: [
    {
      id: 1,
      name: '小潘潘鳳梨酥',
      categoryName: '甜點',
      price: 398,
      image: require('../assets/img/01-3.jpg'),
      description: '鳳凰酥禮盒(12入/盒)',
      statementDate: '2022/10/5',
      deliveryDate: '2022/10/25',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/01-1.jpg')
        },
        {
          id: 2,
          image: require('../assets/img/01-2.jpg')
        },
        {
          id: 3,
          image: require('../assets/img/01-4.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    },
    {
      id: 2,
      name: '紅龍雞塊',
      categoryName: '炸物',
      price: 165,
      image: require('../assets/img/02-1.jpg'),
      description:
        '經典雞塊-金黃薄酥外皮包裹柔嫩鮮美的多汁肉塊，順口不膩，是大人小孩都愛不釋手的正餐小食或解饞點心。(1Kg/包)',
      statementDate: '2022/10/15',
      deliveryDate: '2022/10/31',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/02-2.jpg')
        },
        {
          id: 2,
          image: require('../assets/img/02-3.jpg')
        },
        {
          id: 3,
          image: require('../assets/img/02-4.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    },
    {
      id: 3,
      name: '瑪莉屋披薩-豪華夏威夷',
      categoryName: '比薩',
      price: 80,
      image: require('../assets/img/03-1.jpg'),
      description: '輕油薄皮-豪華夏威夷(6吋/個)',
      statementDate: '2022/10/1',
      deliveryDate: '2022/10/15',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/03-2.jpg')
        },
        {
          id: 2,
          image: require('../assets/img/03-3.jpg')
        },
        {
          id: 3,
          image: require('../assets/img/03-4.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    },
    {
      id: 4,
      name: '劉家肉粽-南部蛋黃粽(4顆)',
      categoryName: '冷凍',
      price: 250,
      image: require('../assets/img/04-1.jpg'),
      description: '水煮製程，口感綿密的劉家經典南部蛋黃粽。',
      statementDate: '2022/10/15',
      deliveryDate: '2022/10/25',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/04-2.jpg')
        },
        {
          id: 2,
          image: require('../assets/img/04-1.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    },
    {
      id: 5,
      name: '彰化不二坊-蛋黃酥(6顆)',
      categoryName: '糕點',
      price: 450,
      image: require('../assets/img/05-1.jpg'),
      description: '超人氣不二坊蛋黃酥\n 餅皮酥脆、內饀香濃的美味',
      statementDate: '2022/10/1',
      deliveryDate: '2022/10/15',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/05-2.jpg')
        },
        {
          id: 2,
          image: require('../assets/img/05-3.jpg')
        },
        {
          id: 3,
          image: require('../assets/img/05-4.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    },
    {
      id: 6,
      name: '老江紅茶-紅茶牛奶(500ml/瓶)',
      categoryName: '飲料',
      price: 85,
      image: require('../assets/img/06-1.jpg'),
      description:
        '五十八年來，老闆秉持著貨真價實、絕不偷工減料的經營理念，堅持用純糖，絕不添加冰塊在飲料內。讓人為之惶恐的化學香料、防腐劑，更是拒絕在外。「老江」堅持使用古法製成，讓濃濃的香氣飄香在地，也讓遠道而來的客人唇留齒香，難以忘懷在這大高雄嚐到五星級般的平價美食。',
      statementDate: '2022/11/5',
      deliveryDate: '2022/11/20',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/06-2.jpg')
        },
        {
          id: 2,
          image: require('../assets/img/06-3.jpg')
        },
        {
          id: 3,
          image: require('../assets/img/06-4.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    },
    {
      id: 7,
      name: '史家庄-清燉牛肉湯(3包)',
      categoryName: '湯品',
      price: 1250,
      image: require('../assets/img/07-1.jpg'),
      description:
        '招牌清燉牛肉湯，細火慢熬濃郁\n 不膩澳洲牛腩筋肉比例適中，口感軟嫩多汁\n 一包約4～5人份，濃縮湯頭可依口味稀釋',
      statementDate: '2022/10/31',
      deliveryDate: '2022/11/20',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/07-2.jpg')
        },
        {
          id: 2,
          image: require('../assets/img/07-3.jpg')
        },
        {
          id: 3,
          image: require('../assets/img/07-4.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    },
    {
      id: 8,
      name: '基隆三記-手工魚餃(10顆/盒)',
      categoryName: '冷凍',
      price: 80,
      image: require('../assets/img/08-1.jpg'),
      description: '手工餃皮Q彈\n料實多汁的內餡',
      statementDate: '2022/11/3',
      deliveryDate: '2022/11/25',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/08-1.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    },
    {
      id: 9,
      name: '弘宇蛋糕-芋泥奶酪',
      categoryName: '糕點',
      price: 300,
      image: require('../assets/img/09-1.jpg'),
      description: '團購人氣冠軍\n台灣產檳榔心芋使用',
      statementDate: '2022/10/31',
      deliveryDate: '2022/11/20',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/09-1.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    },
    {
      id: 10,
      name: '檸檬大叔-蜂蜜檸檬磚12入/盒',
      categoryName: '飲品',
      price: 370,
      image: require('../assets/img/10-1.jpg'),
      description:
        '連皮榨汁的完整天然C\n無濃縮還原、不加酸、不加水\n完美比例純蜂蜜+純檸檬',
      statementDate: '2022/10/12',
      deliveryDate: '2022/11/12',
      sectionPhotos: [
        {
          id: 1,
          image: require('../assets/img/10-2.jpg')
        },
        {
          id: 2,
          image: require('../assets/img/10-3.jpg')
        }
      ],
      inputQty: 1,
      buyQty: 1
    }
  ]
}

export default {
  mixins: [dollorsFormatFilter],
  data () {
    return {
      item: {
        id: -1,
        name: '',
        categoryName: '',
        price: -1,
        image: '',
        description: '',
        statementDate: '',
        deliveryDate: '',
        inputQty: -1,
        buyQty: -1
      },
      sectionPhotos: [],
      cartList: []
    }
  },
  created () {
    const { id: itemId } = this.$route.params
    this.fetchItem(itemId)
    this.getCartList()
  },
  beforeRouteUpdate (to, from, next) {
    const { id: itemId } = to.params
    this.fetchItem(itemId)
    next()
  },
  methods: {
    ...mapActions(['updateCart']),
    fetchItem (itemId) {
      const currentItemId = itemId - 1
      this.item = {
        id: dummyData.items[currentItemId].id,
        name: dummyData.items[currentItemId].name,
        categoryName: dummyData.items[currentItemId].categoryName,
        price: dummyData.items[currentItemId].price,
        image: dummyData.items[currentItemId].image,
        description: dummyData.items[currentItemId].description,
        statementDate: dummyData.items[currentItemId].statementDate,
        deliveryDate: dummyData.items[currentItemId].deliveryDate,
        inputQty: dummyData.items[currentItemId].inputQty,
        buyQty: dummyData.items[currentItemId].buyQty
      }
      this.sectionPhotos = dummyData.items[currentItemId].sectionPhotos
    },
    addProductQty () {
      this.item.inputQty += 1
    },
    reduceProductQty () {
      if (this.item.inputQty === 1) {
        Toast.fire({
          icon: 'error',
          title: '數量不得少於1'
        })
        return
      }
      this.item.inputQty -= 1
    },
    productQtyCheck () {
      if (this.item.inputQty < 1) {
        Toast.fire({
          icon: 'error',
          title: '數量不得少於1'
        })
        this.item.inputQty = 1
      }
    },
    getCartList () {
      this.cartList = JSON.parse(localStorage.getItem('shopping-cart')) || []
    },
    addCartList (itemId) {
      const sameItem = this.cartList.findIndex((list) => list.id === itemId)
      if (sameItem >= 0) {
        this.cartList[sameItem].buyQty += this.item.inputQty
      } else {
        this.item.buyQty += this.item.inputQty - 1
        this.cartList.push(this.item)
      }
      localStorage.setItem('shopping-cart', JSON.stringify(this.cartList))
      Toast.fire({
        icon: 'success',
        title: '已加入購物車'
      })
      this.updateCart(true)
    },
    buyItemNow (itemId) {
      this.addCartList(itemId)
      this.$router.push('/shopping')
    }
  }
}
</script>

<style lang="scss" scoped>
.product-info {
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  column-gap: 1.5rem;
  margin: 2rem 0;
}

.top {
  width: 100%;
}
.variant-photos {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-content {
  display: grid;
  padding: 0.5rem 1rem;
  row-gap: 1.2rem;
}

.description {
  white-space: pre-line;
  color: var(--text);
}

.delivery {
  color: var(--delivery-date);
}

.price-title {
  color: var(--price-title);
}

.price-much {
  color: var(--price);
}

.product-variant-quantity {
  display: flex;

  .btn-group {
    display: flex;
    align-items: center;
    height: 45px;
  }
}

.item-quantity {
  font-size: 1rem;
  height: 100%;
  width: 15vw;
  border: 1px solid var(--border);
  color: var(--brand-color);
}

.add-down {
  height: 45px;
  font-size: 2rem;
  color: var(--text);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  border-left: 1px solid var(--border);
}

.add-up {
  height: 45px;
  font-size: 2rem;
  color: var(--text);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
}

.product-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.btn-buy {
  width: calc(50% - 12px);
  height: 50px;
  border: 1px solid var(--brand-color);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;

  &.btn-to-cart {
    color: var(--brand-color);
  }

  &.btn-quick-buy {
    color: var(--border);
    background-color: var(--brand-color);
  }
}

.desc {
  margin: 3rem 0 5rem 0;

  .section-title {
    margin: 0.5rem 0;
  }

  .section-photo {
    margin: 10px 0 30px 0;
  }
}

@media (max-width: 576px) {
  .product-info {
    display: flex;
    flex-direction: column;

    .top {
      margin: 0.5rem 0;
    }
    .product-content {
      display: grid;
      grid-template-rows: repeat(6, auto);
      row-gap: 1rem;
    }
  }
}
</style>
