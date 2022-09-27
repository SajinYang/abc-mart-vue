<template>
  <section id="section-container" class="container">
    <div v-if="cartList.length" class="shopping-cart-info">
      <div class="title">
        <h3>我的購物車</h3>
      </div>

      <div class="item-container">
        <div class="content">
          <div class="title">
            <h4>商品明細</h4>
          </div>

          <div v-for="list in cartList" :key="list.id" class="item">
            <div @click.stop.prevent="linkToDetail(list.id)" class="image">
              <img class="photo" :src="list.image" alt="" />
            </div>

            <div class="description">
              <h4
                @click.stop.prevent="linkToDetail(list.id)"
                class="desc desc-title"
              >
                {{ list.name }}
              </h4>
              <h6 class="desc">
                <span class="delivery-title">到貨日</span>
                {{ list.deliveryDate }}
              </h6>
            </div>

            <div class="quantity">
              <button
                @click.stop.prevent="reduceProductQty(list.id)"
                class="btn minus-btn"
                type="button"
                name="button"
              >
                <img src="../assets/icons/minus.svg" alt="" />
              </button>

              <input
                @keyup.stop.prevent="productQtyCheck(list.id)"
                v-model="list.buyQty"
                type="text"
                name="quatity"
              />

              <button
                @click.stop.prevent="addProductQty(list.id)"
                class="btn plus-btn"
                type="button"
                name="button"
              >
                <img src="../assets/icons/plus.svg" alt="" />
              </button>
            </div>

            <div class="price-content">
              <h4 class="mobile-price">小計：</h4>
              <h4>$</h4>
              <h4 class="price">
                {{
                  (list.buyQty * list.price)
                    | dollorsFormat(list.buyQty * list.price)
                }}
              </h4>
            </div>

            <div class="trash">
              <button
                @click.stop.prevent="deleteCartList(list.id)"
                class="btn trash-btn"
                type="button"
                name="button"
              >
                <img src="../assets/icons/trash.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div class="amount">
          <h4>合計： $</h4>
          <h4>
            {{
              checkOutList.totalAmount | dollorsFormat(checkOutList.totalAmount)
            }}
          </h4>
        </div>
      </div>

      <div class="oder-container">
        <div class="content delivery-content">
          <div class="title">
            <h4>訂購人資訊</h4>
          </div>

          <div class="form-content">
            <div class="form">
              <label for="name" class="form-order-info">
                <h4 class="name">訂購人姓名：</h4>
                <input
                  v-model="checkOutList.name"
                  id="order-name"
                  type="text"
                  placeholder="請輸入訂購人姓名"
                />
              </label>
            </div>

            <div class="form">
              <label for="phone" class="form-order-info">
                <h4 class="phone">手機號碼：</h4>
                <input
                  v-model="checkOutList.phone"
                  id="order-phone"
                  type="text"
                  placeholder="請輸入手機號碼"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="delivery-container">
        <div class="content delivery-content">
          <div class="title">
            <h4>取貨門市</h4>
          </div>

          <div class="delivery-methods-content">
            <div class="delivery">
              <!-- 汐科門市 -->
              <label for="sike" class="form-delivery" data-id="1">
                <input
                  v-model="checkOutList.delivery"
                  value="sike"
                  type="radio"
                  name="shipping"
                  id="sike"
                />
                <h4 class="address">
                  汐止門市：<br />
                  新北市汐止區大同路二段999號<br />
                  (近汐止國小)<br />
                  tel：02-12345678
                </h4>
              </label>
            </div>

            <div class="delivery">
              <!-- 七堵門市 -->
              <label for="chitu" class="form-delivery" data-id="2">
                <input
                  v-model="checkOutList.delivery"
                  value="chitu"
                  type="radio"
                  name="shipping"
                  id="chitu"
                />
                <h4 class="address">
                  七堵門市：<br />
                  基隆市七堵區東新街999號<br />
                  (近基隆商工)<br />
                  tel：02-12345678
                </h4>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="terms-container">
        <div class="content terms-content">
          <div class="title">
            <h4>注意事項</h4>
          </div>

          <div class="terms-text-container">
            <div class="text-content">
              <p>
                由於門市空間及食品效期有限，請大家多多配合：<br />
                冷藏、蛋糕類商品，請到貨2日內取貨！<br />
                冷凍、常溫類商品，請到貨5日內取貨！<br />
                如有特殊狀況請聯繫我們，好讓我們有時間處裡。
              </p>
            </div>
            <div class="terms-check-container">
              <label for="terms-check">
                <input
                  v-model="checkOutList.agree"
                  id="terms-check"
                  type="checkbox"
                />
                <h4>我已詳細閱讀以上內容，並同意接受內容所有規定</h4></label
              >
            </div>
          </div>
        </div>
      </div>

      <div class="step-button-container">
        <button
          @click.stop.prevent="$router.push('/index')"
          class="step-button btn-back"
        >
          繼續選購
        </button>
        <button @click.stop.prevent="nextStep" class="step-button btn-next">
          確認送出
        </button>
      </div>
    </div>
    <div v-else class="shopping-cart-non">
      <div class="content delivery-content">
        <div class="title">
          <h4>我的購物車</h4>
        </div>

        <div class="form-content cart-non">
          <img class="logo" src="../assets/icons/sad.svg" alt="" />
          <h4>購物車目前是空的</h4>
          <h5>您可以回到商品頁面選購商品唷！</h5>
          <button class="back" @click.stop.prevent="backToShop">
            <u>回到商品頁面</u>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Toast } from '../utils/helpers'
import { dollorsFormatFilter } from '../utils/mixin'
import { v4 as uuidv4 } from 'uuid'
import { mapActions } from 'vuex'

export default {
  mixins: [dollorsFormatFilter],
  data () {
    return {
      cartList: [],
      checkOutList: {
        orderId: -1,
        items: {},
        name: '',
        phone: '',
        delivery: '',
        agree: false,
        totalAmount: 0
      },
      orderList: []
    }
  },
  created () {
    this.getCartList()
    this.accountTotalAmount()
    this.getOrderList()
  },
  methods: {
    ...mapActions(['updateCart']),
    getCartList () {
      this.cartList = JSON.parse(localStorage.getItem('shopping-cart')) || []
      this.checkOutList.items =
        JSON.parse(localStorage.getItem('shopping-cart')) || []
    },
    getOrderList () {
      this.orderList = JSON.parse(localStorage.getItem('order-list')) || []
    },
    addProductQty (itemId) {
      const currentList = this.cartList.findIndex((list) => list.id === itemId)
      if (currentList >= 0) {
        this.cartList[currentList].buyQty += 1
      }
      this.accountTotalAmount()
      this.updateCartList()
    },
    reduceProductQty (itemId) {
      const currentList = this.cartList.findIndex((list) => list.id === itemId)
      if (this.cartList[currentList].buyQty === 1) {
        Toast.fire({
          icon: 'error',
          title: '數量不得少於1'
        })
        return
      }
      if (currentList >= 0) {
        this.cartList[currentList].buyQty -= 1
      }
      this.accountTotalAmount()
      this.updateCartList()
    },
    productQtyCheck (itemId) {
      const currentList = this.cartList.findIndex((list) => list.id === itemId)
      if (this.cartList[currentList].buyQty < 1) {
        Toast.fire({
          icon: 'error',
          title: '數量不得少於1'
        })

        this.cartList[currentList].buyQty = 1
      }
      this.accountTotalAmount()
      this.updateCartList()
    },
    deleteCartList (listId) {
      const confirm = window.confirm('確定要將此商品從購物車移除嗎？')
      if (confirm === true) {
        this.cartList = this.cartList.filter((list) => list.id !== listId)
        localStorage.setItem('shopping-cart', JSON.stringify(this.cartList))
        Toast.fire({
          icon: 'success',
          title: '商品已從購物車移除'
        })
        this.accountTotalAmount()
        this.updateCartList()
        this.updateCart(true)
      }
    },
    updateCartList () {
      localStorage.setItem('shopping-cart', JSON.stringify(this.cartList))
      this.checkOutList.items =
        JSON.parse(localStorage.getItem('shopping-cart')) || []
    },
    accountTotalAmount () {
      this.checkOutList.totalAmount = 0
      this.cartList.forEach((list) => {
        this.checkOutList.totalAmount += list.price * list.buyQty
      })
    },
    linkToDetail (listId) {
      this.$router.push(`/item/${listId}`)
    },
    backToShop () {
      this.$router.push('/index')
    },
    nextStep () {
      if (!this.checkOutList.name) {
        Toast.fire({
          icon: 'warning',
          title: '訂購人姓名不可空白'
        })
        return
      }
      if (!this.checkOutList.phone) {
        Toast.fire({
          icon: 'warning',
          title: '手機號碼不可空白'
        })
        return
      }
      if (this.checkOutList.phone.length !== 10) {
        Toast.fire({
          icon: 'warning',
          title: '手機號碼請填正確(10碼)'
        })
        return
      }
      if (!this.checkOutList.delivery) {
        Toast.fire({
          icon: 'warning',
          title: '請選擇取貨門市'
        })
        return
      }
      if (this.checkOutList.agree === false) {
        Toast.fire({
          icon: 'warning',
          title: '請閱讀注意事項並勾選同意'
        })
      }
      if (this.checkOutList.items.length) {
        this.checkOutList.orderId = uuidv4()
      }
      const confirm = window.confirm('請確認填寫資訊是否皆正確！')
      if (confirm === true) {
        this.orderList.push(this.checkOutList)
        localStorage.setItem('order-list', JSON.stringify(this.orderList))
        localStorage.removeItem('shopping-cart')
        this.checkOutList = {}
        this.orderList = []
        this.$router.push('/shopping/checkout')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.shopping-cart-info {
  margin: 3rem 0;
}

.content {
  margin: 2rem 0 0 0;
  border: 1px solid var(--shopping-cart-border);
  border-radius: 5px 5px 0 0;

  .title {
    border-radius: 5px 5px 0 0;
    line-height: 3;
    color: var(--shopping-cart-title);
    background-color: var(--brand-color);
    padding-left: 1rem;
  }
}

.image,
.desc-title {
  cursor: pointer;
}

.item {
  display: grid;
  grid-template-columns: auto 25% auto 10% 5%;
  grid-gap: 0.2rem;
  justify-content: space-around;
  align-items: center;
  padding: 1.2rem 0.5rem;
}

.photo {
  height: 8vw;
  width: 8vw;
}

.desc {
  margin: 0.5rem 0;

  .delivery-title {
    color: var(--shopping-cart-title);
    background-color: var(--brand-color);
    border-radius: 12px;
    padding: 0.1rem 0.6rem;
  }
}

.quantity {
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 25px;
    width: 15vw;
    border: 1px solid var(--brand-color);
    border-radius: 5px;
    color: var(--brand-color);
    font-size: 1rem;
  }
}

.btn {
  all: unset;
  height: 28px;
  width: 28px;
  margin: 0 0.5rem;
  cursor: pointer;
}

.price-content {
  display: flex;

  .mobile-price {
    display: none;
  }

  .price {
    display: flex;
    justify-content: end;
  }
}

.trash-btn {
  height: 18px;
  width: 18px;
}

.amount {
  display: flex;
  justify-content: flex-end;
  padding-right: 1.2rem;
  line-height: 2.5;
  border: 1px solid var(--shopping-cart-border);
  border-radius: 0 0 5px 5px;
}

.form-content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1.2rem;
  .form {
    width: 45%;

    input[type="text"] {
      width: 80%;
      height: 35px;
      border: 1px solid var(--brand-color);
      border-radius: 5px;
      margin: 8px 0;
      font-size: 1rem;
    }
  }
}

.delivery-content,
.terms-content {
  border-radius: 5px;
}

.delivery-methods-content {
  display: grid;
  grid-template-columns: 50% 50%;

  .delivery {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px 5px;
  }
}

.form-delivery {
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 10px;
  border: 1px solid var(--heading);
  border-radius: 5px;
  cursor: pointer;

  &.active {
    border: 2px solid var(--brand-color);
    margin: -1px;
  }

  input[type="radio"] {
    all: unset;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid var(--brand-color);
    border-radius: 50%;

    &:checked {
      box-shadow: inset 0 0 0 5px var(--brand-color);
    }
  }

  .address {
    margin-left: 0.7rem;
  }
}

.text-content {
  padding: 10px 20px;
}

.terms-check-container {
  padding: 10px 20px;
  border-top: 1px dashed var(--brand-color);
  label {
    display: flex;
    cursor: pointer;
  }
}

.cart-non {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

.step-button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2.5rem;

  .step-button {
    width: 30%;
    height: 45px;
    border: 1px solid var(--brand-color);
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;

    &.btn-back {
      color: var(--brand-color);
    }

    &.btn-next {
      color: var(--border);
      background-color: var(--brand-color);
    }
  }
}

@media (max-width: 576px) {
  .item {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-areas:
      "image description description trash"
      "image quantity quantity trash"
      "image amount amount trash";
  }

  .image {
    grid-area: image;

    .photo {
      height: 80px;
      width: 80px;
    }
  }

  .description {
    grid-area: description;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .quantity {
    grid-area: quantity;
  }

  .price-content {
    grid-area: amount;
    display: flex;
    justify-content: center;
    align-items: center;

    .mobile-price {
      display: flex;
    }
  }

  .trash {
    grid-area: trash;
  }

  .form-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    .form {
      width: 80%;
      margin: 5px 0;

      input[type="text"] {
        width: 100%;
      }
    }
  }

  .delivery-methods-content {
    all: unset;
    grid-template-rows: 50% 50%;

    .delivery {
      all: unset;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding: 15px;
    }
  }
}
</style>
