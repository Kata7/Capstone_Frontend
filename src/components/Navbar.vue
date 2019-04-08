<template>
  <div class="navbar">
    <div class="space">
      <router-link v-if="routerPathBack" v-bind:to="routerPathBack"><&nbsp;</router-link>
    </div>
    <div>
      <h2>{{title}}</h2>
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
    border: 2vmin solid #FFBA08;
    color: #FFFFFF;
    width: 100%;
    height: 18vmin;
    align-items: center;
    justify-content: space-between;
    font-size: 12vmin;
    margin-bottom: 2vmin;
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
