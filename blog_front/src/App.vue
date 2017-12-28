<template>
  <div id="app">
    <hellow></hellow>
    <navigation></navigation>
    <Article></Article>
  </div>
</template>

<script>
import Article from './components/Article'
import hellow from './components/HelloWorld'
import navigation from './components/nav'
export default {
  name: 'app',
  components:{
    hellow,
    Article,
    navigation
  }
}
</script>

<style>
@import './assets/css/style.css';
#app{
  height: 100%;
}
</style>
