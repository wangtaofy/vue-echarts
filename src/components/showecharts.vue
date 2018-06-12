<template>
  <div class="echarts">
    <div class="myecharts" id="myecharts" style="width: 500px;height: 300px;"></div>
  </div>
</template>

<script>
export default {
  computed: {
    buyShop: {
      get() {
        return this.$store.state.buyShop;
      },
      set(value) {
        this.$store.commit("setBuyShop", value);
      }
    }
  },
  mounted() {
    console.log(323);
    this.myecharts = this.$echarts.init(document.querySelector("#myecharts"));
    let buyShop = this.buyShop;
    // echarts 的横坐标
    let xAxisData = buyShop.map(ele => {
      return ele.shortName;
    });
    // echarts 横坐标每一项的值
    let seriespriceData = buyShop.map(ele => {
      return ele.price;
    });
    let seriecountData = buyShop.map(ele => {
      return ele.count;
    });

    // echarts
    // let myecharts = this.$echarts.init(document.querySelector("#myecharts"));
    if (xAxisData.length > 0) {
      this.myecharts.setOption({
        title: {
          text: "购物"
        },
        tooltip: {},
        legend: {
          data: ["价格", "数量"]
        },
        xAxis: {
          data: xAxisData,
          axisLabel: {
            interval: 0,
            rotate: 40
          }
        },
        yAxis: {},
        series: [
          {
            name: "价格",
            type: "bar",
            data: seriespriceData
          },
          {
            name: "数量",
            type: "bar",
            data: seriecountData
          }
        ]
      });
    }
  }
};
</script>

<style>
</style>


