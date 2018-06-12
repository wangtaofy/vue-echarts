<template>
  <div class="hello">
    <div class="shop-list">
      <ul class="shopLists">
        <li class="shopItem" v-for="good in shopData" :key="good.id">
          <input type="checkbox" name="" id="" class="good-select" :checked="selectGoodId.indexOf(good.id)>-1" @click="selectGood(good.id)">
          <img :src="good.img" alt="" class="good-img">
          <!-- <p class="name">{{good.name}}</p> -->
          <p class="price">￥{{good.price}}</p>
          <div class="counts">
            <span class="jian" @click="jiancount(good.id)">-</span>
            <span class="count">{{good.count}}</span>
            <span class="jia" @click="addcount(good.id)">+</span>
          </div>
          <p class="goodallprice">￥{{good.price * good.count}}</p>
        </li>
      </ul>
    </div>
    <div class="buttons">
      <p class="allselect-cont"><input type="checkbox" name="全选" id="" class="allselect" :checked="shopData.length === selectGoodId.length" @click="allselect">全选</p>
      <p class="button-text">已选择{{selectGoodId.length}}件商品</p>
      <p class="allprice">总价：<span class="num">￥{{allprice}}</span></p>
      <p class="button" @click="showEcharts">确定</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 选择的商品id
      selectGoodId: []
    };
  },
  computed: {
    shopData: {
      get() {
        return this.$store.state.shopData;
      },
      set(value) {
        this.$store.commit("setShopData", value);
      }
    },
    buyShop: {
      get() {
        return this.$store.state.buyShop;
      },
      set(value) {
        this.$store.commit("setBuyShop", value);
      }
    },
    allprice() {
      let selectGoodId = this.selectGoodId;
      let shopData = this.shopData;
      let price = 0;
      shopData.forEach(ele => {
        if (selectGoodId.indexOf(ele.id) !== -1) {
          price += ele.price * ele.count;
        }
      });
      return price;
    }
  },
  methods: {
    selectGood(goodid) {
      this.setSelectGoodId(goodid);
    },
    // 刷新selectGoodId
    setSelectGoodId(goodid) {
      let selectGoodId = this.selectGoodId;
      if (selectGoodId.indexOf(goodid) !== -1) {
        selectGoodId.splice(selectGoodId.indexOf(goodid), 1);
      } else {
        selectGoodId.push(goodid);
      }
    },
    // 全选
    allselect() {
      if (this.selectGoodId.length === this.shopData.length) {
        this.selectGoodId = [];
      } else {
        this.selectGoodId = this.shopData.map(ele => {
          return ele.id;
        });
      }
    },
    // 加商品
    addcount(goodid) {
      let shopData = this.shopData;
      shopData.map((ele) => {
        if (ele.id === goodid) {
          ele.count++;
        }
        return ele;
      })
    },
    // 减商品
    jiancount(goodid) {
      let shopData = this.shopData;
      shopData.map((ele) => {
        if (ele.id === goodid && ele.count > 1) {
          ele.count--;
        }
        return ele;
      })
    },
    // 显示echarts
    showEcharts() {
      let that = this;
      this.buyShop = [];
      let shopData = this.shopData;
      let selectGoodId = this.selectGoodId;
      let buyShop = this.buyShop;
      shopData.filter((ele, index) => {
        if (selectGoodId.indexOf(ele.id) !== -1) {
          buyShop.push(ele);
        }
      });
      this.$router.push({path: '/showecharts'});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  margin: 0 auto;
  padding-bottom: 100px;
  width: 900px;
}

.shopLists {
  display: flex;
  flex-direction: column;
}
.shopItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 20px;
}

.good-select {
  margin-right: 30px;
}

.good-img {
  margin-right: 100px;
}

.name {
  margin-right: 100px;
  width: 300px;
  height: 2.5em;
  overflow: hidden;
}

.price {
  margin-right: 200px;
  width: 50px;
}

.counts {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 100px;
  height: 30px;
  border: 1px solid #ccc;
}

.jia,
.jian {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.jia {
  border-left: 1px solid #ccc;
}

.jian {
  border-right: 1px solid #ccc;
}

.count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 100px;
  height: 50px;
  background-color: #ccc;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  width: 100px;
  height: 50px;
  color: #fff;
  border-radius: 5px;
  background-color: red;
  cursor: pointer;
}

.button-text {
  margin-right: 50px;
}

.allprice {
  margin-right: 50px;
}

.num {
  display: inline-block;
  width: 60px;
}

.allselect-cont {
  margin-right: 330px;
}
</style>
