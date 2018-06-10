<template>
  <div class="hello">
    <div class="shop-list">
      <ul class="shopLists">
        <li class="shopItem" v-for="good in shopData" :key="good.id">
          <input type="checkbox" name="" id="" class="good-select" :checked="selectGoodId.indexOf(good.id)>-1" @click="selectGood(good.id)">
          <img :src="good.img" alt="" class="good-img">
          <p class="name">{{good.name}}</p>
          <p class="price">￥{{good.price}}</p>
          <div class="counts">
            <span class="jian">-</span>
            <span class="count">{{good.count}}</span>
            <span class="jia">+</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="buttons">
      <p class="button-text">已选择{{selectGoodId.length}}件商品</p>
      <p class="allprice">总价：<span class="num">￥{{allprice}}</span></p>
      <p class="button" @click="showEcharts">确定</p>
    </div>
    <div class="echarts">
      <p class="echarts-name" v-for="good in buyShop" :key="good.id">{{good.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // 选择的商品id
      selectGoodId: []
    }
  },
  computed: {
    shopData: {
      get () {
        return this.$store.state.shopData;
      }
    },
    buyShop: {
      get () {
        return this.$store.state.buyShop;
      },
      set (value) {
        this.$store.commit('setBuyShop', value);
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
    // 显示echarts
    showEcharts() {
      this.buyShop = [];
      let shopData = this.shopData;
      let selectGoodId = this.selectGoodId;
      let buyShop = this.buyShop;
      shopData.filter((ele, index) => {
        if (selectGoodId.indexOf(ele.id) !== -1) {
          buyShop.push(ele);
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
  margin-right: 30px;
}

.name {
  margin-right: 100px;
  width: 300px;
  height: 2.5em;
  overflow: hidden;
}

.price {
  margin-right: 50px;
  width: 50px;
}

.counts {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  border: 1px solid #ccc;
}

.jia, .jian {
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
  margin-right: 100px;
  height: 50px;
  background-color: #ccc;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
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
</style>
