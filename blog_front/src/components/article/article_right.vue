<template>
  <div class="article_right">
      <div class="Cut">
          <h1>全网搜索</h1>
          <div class="search">
            <input type="text">
            <button><i class="el-icon-search"></i>搜索</button>
          </div>
      </div>
      <div class="Cut">
          <h1>最新文章</h1>
          <div class="new">
              <ul>
                  <li v-for="(item,index) in time">
                      <span :style="item.col">{{index+1}}</span>
                       <a>{{item.name}}</a>
                      <b>
                          {{item.time}}
                          </b>
                  </li>
              </ul>
          </div>
      </div>
      <div class="Cut">
          <h1>点击排行</h1>
          <div class="look">
              <ul>
                  <li v-for="(item,index) in look">
                      <span :style="item.col">{{index+1}}</span>
                      <a>{{item.name}}</a>
                      <b>
                          <i class="el-icon-view"></i>
                          {{item.look}}
                          </b>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "right",
  data() {
    return {
      col: [
        {
          background: "#F56C6C"
        },
        {
          background: "#67C23A"
        },
        {
          background: "#409eff"
        },
        {
          background: "#909399"
        },
        {
          background: "#909399"
        }
      ],
      look: [],
      time: []
    };
  },
  methods: {
    objsort(arr, attr) {
      let i = 0,
        len = arr.length,
        j,
        d;
      for (; i < len; i++) {
        for (j = 0; j < len; j++) {
          if (arr[i][attr] < arr[j][attr]) {
            d = arr[j];
            arr[j] = arr[i];
            arr[i] = d;
          }
        }
      }
      return arr;
    },
    additional(arr, attr, newarr) {
      for (let a = 0; a < arr.length; a++) {
        arr[a][attr] = newarr[a];
      }
    },
    create(arr, newarr) {
      for (let i = arr.length - 1; i > arr.length - 6; i--) {
        newarr.push(arr[i]);
      }
    }
  },
  created() {
   /*  this.$http({
      url: "http://localhost:8080/index"
    }).then(data => {
      let c = data.data;
      let arr = this.objsort(c, "look");
      this.create(arr, this.look);
      this.additional(this.look, "col", this.col);
      let time = this.objsort(c, "time");
      this.create(time, this.time);
      this.additional(this.time, "col", this.col);
    }); */
  }
};
</script>
<style>
.article_right {
  float: right;
  width: 25%;
}
.Cut {
  margin-top: 10px;
}
.Cut span {
  display: inline-block;
  text-align: center;
  font-size: 8px;
  color: #fff;
  height: 16px;
  line-height: 16px;
  margin-left: 5 px;
}
.Cut li {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px dashed #ccc;
}
.new span {
  width: 16px;
  border-radius: 50%;
}
.look span {
  width: 20px;
  border-radius: 5px;
}
h1 {
  height: 40px;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  line-height: 40px;
  background: #409eff;
}
.search {
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}
.search > input {
  width: 75%;
  height: 30px;
  border: 1px solid #409eff;
  border-radius: 2px;
}
.search > button {
  width: 20%;
  height: 32px;
  background: #409eff;
  color: #fff;
  border: none;
  border-radius: 2px;
}
.Cut a {
  margin-left: 10px;
  cursor: pointer;
}
.look b {
  font-weight: normal;
  display: inline-block;
  width: 50px;
  text-align: left;
  float: right;
  margin-right: 10px;
  font-size: 14px;
}
.new b {
  font-weight: normal;
  display: inline-block;
  width: 100px;
  text-align: left;
  float: right;
  margin-right: 10px;
  font-size: 14px;
}
</style>

