<template>
  <div class="navbar">
    <div class="space">
      <router-link v-if="routerPathBack" v-bind:to="routerPathBack"><&nbsp;</router-link>
    </div>
    <div>
      <h2 class="title">{{title}}</h2>
    </div>
    <div class="space right">
      <router-link v-if="routerPathForward" v-bind:to="routerPathForward">&nbsp;></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    routerPathForward: String,
    routerPathBack: String,
    title: String
  }
}
</script>

<style scoped>
  .navbar {
    display: flex;
    flex-direction: row;
    border: none;
    background: #D00000;
    color: #FFFFFF;
    width: 100%;
    height: 16vmin;
    align-items: center;
    justify-content: space-between;
    font-size: 12vmin;
  }

  .title {
    color: #FFFFFF;
    border: 1vmin solid orange;
    padding: 1.2vmin;
  }

  .space {
    width: 20vmin;
  }

  .right {
    text-align: right;
  }

  a {
    font-size: 12vmin;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 700;
  }
</style>
