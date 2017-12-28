<template>
  <div class="article_left">
      <div>
          <div v-for="item in list1" class="arcticle_item">
              <div class="images">
              </div>
              <div class="essage">
                  <p class="title_name">{{item.name}}</p>
              </div>
          </div>
      </div>
      <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="size"
      :total="total"
     >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: "article_left",
  methods: {
    handleCurrentChange(val) {
      let index = (val - 1) * this.size;
      let size = this.size * val;
      let i = index;
      this.list1 = [];
      for (i; i < size; i++) {
        this.list1.push(this.list[i]);
        if (i + 1 >= this.list.length) {
          break;
        }
      }
    }
  },
  data() {
    return {
      total: 0,
      size: 4,
      currentPage: 1,
      list: [],
      list1: []
    };
  },
  created() {
    let a;
    this.$http.get("/api/front/getArticleAll")
      .then(data=>{
        console.log(data)
      })
    /* ({
      url: "/api/front/getArticleAll"
    }).then(data => {
      a = data.data;
      this.list = a;
      this.total=a.length;
      for (var i = 0; i < this.size; i++) {
        this.list1.push(this.list[i]);
      }
    }); */
  }
};
</script>
<style>
.article_left {
  width: 70%;
  float: left;
}
.arcticle_item {
  height: 120px;
  background: rgba(245, 108, 108, 0.863);
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
}
.essage {
  width: 65%;
  height: 100%;
  float: left;
  margin-left: 5.5%;
}
.title_name {
  width: 80%;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #000;
}
.images {
  float: left;
  width: 25%;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-left: 2.5%;
}
.el-pagination {
  text-align: center;
}
.el-pagination__rightwrapper {
  display: none;
}
</style>