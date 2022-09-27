<template>
  <nav class="navbar">
    <router-link to="/index" class="logo"><div>ABC團購網</div> </router-link>
    <input type="checkbox" id="toggler" />
    <label for="toggler"
      ><img src="../assets/icons/menu-icon.svg" alt=""
    /></label>
    <div class="menu">
      <ul class="list">
        <li class="search">
          <router-link to="" class="item item-search"
            ><img src="../assets/icons/search.svg" alt="" />
            <input class="search-text" placeholder="Search" />
          </router-link>
        </li>
        <li>
          <router-link to="/shopping/checkoutlist" class="item item-last"
            ><img src="../assets/icons/shopping-list.svg" alt="" />
            <div class="item-title">訂單查詢</div>
          </router-link>
        </li>
        <li>
          <router-link to="/shopping" class="item item-last">
            <div class="shipping-car">
              <img src="../assets/icons/shopping-cart.svg" alt="" />
              <div v-if="cartList.length" class="alert">
                {{ cartList.length }}
              </div>
            </div>
            <div class="item-title">購物車</div>
          </router-link>
        </li>
      </ul>
    </div>
    <label for="toggler" class="drawer-overlay drawer-toggle"></label>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      cartList: [],
    };
  },
  created() {
    this.getCartList();
  },
  computed: {
    ...mapState({ updateCartNow: "updateCartNow" }),
  },
  methods: {
    ...mapActions(["updateCart"]),
    getCartList() {
      this.cartList = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    },
  },
  watch: {
    updateCartNow() {
      if (this.updateCartNow === true) {
        this.getCartList();
        this.updateCart(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 25px;
  width: 25px;
}

.navbar {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: var(--nav-background);
  padding: 10px 30px;
  -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
}

.logo {
  align-self: center;
  color: var(--brand-color);
  font-size: 24px;
  font-weight: 700;
}

.list {
  display: flex;
  align-items: center;
  gap: 25px;
}

.item {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--brand-color);

  &.item-search {
    margin-right: -5px;
  }
}

#toggler,
.navbar label {
  display: none;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 40px;
  background-color: var(--shopping-cart-border);
  border-radius: 20px;

  &:hover {
    background-color: var(--shopping-cart-border);
    border-radius: 20px;
    padding: 0 15px;
    color: var(--brand-color);

    & .search-text {
      width: 120px;
      height: 40px;
      padding: 0 6px;
      color: var(--brand-color);
    }
  }
}

.search-text {
  border: none;
  background: none;
  outline: none;
  padding: 0;
  font-size: 18px;
  transition: 0.4s;
  line-height: 30px;
  width: 0px;

  &::placeholder {
    color: var(--brand-color);
  }
}

.shipping-car {
  position: relative;
  margin-right: 5px;
  .alert {
    position: absolute;
    display: flex;
    justify-content: center;
    top: -3px;
    right: -5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 12px;
    color: var(--shopping-cart-title);
    background-color: var(--brand-color);
  }
}

.drawer-overlay {
  display: none;
}

@media screen and (max-width: 576px) {
  .menu {
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }

  .list {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: var(--nav-background);
  }

  .item-last {
    width: 100px;

    .item-title {
      margin: 0 auto;
    }
  }

  .navbar label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  #toggler:checked ~ .menu {
    z-index: 50;
    max-height: 100%;
  }

  #toggler:checked ~ .drawer-overlay {
      position: fixed;
      z-index: 20;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      cursor: auto;
      // background-color: rgba(0, 0, 0, 0.2);
  }

  .search {
    background-color: var(--shopping-cart-border);
    border-radius: 20px;
    padding: 0 15px;
    color: var(--brand-color);

    & .search-text {
      width: 120px;
      height: 40px;
      padding: 0 6px;
      color: var(--brand-color);
    }
  }
}
</style>