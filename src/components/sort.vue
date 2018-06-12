<template>
  <div class="sort">
    <input type="text" id="inputText" v-model="inputText">
    <button class="sortbtb" @click="sortFun">排序</button>
    <p class="result">{{result}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '1,2,6,1,1,2,7,4,4',
      result: ''
    }
  },
  methods: {
    sortFun() {
      if (this.inputText.length > 0) {
        this.result = this.inputText.split(',').sort((v1, v2) => {
          v1 = parseInt(v1);
          v2 = parseInt(v2);
          if (v1 > v2) {
            return 1;
          } else if (v1 < v2) {
            return -1;
          } else {
            return 0;
          }
        }).join(',');
      }
    }
  }
}
</script>

