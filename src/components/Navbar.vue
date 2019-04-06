<template>
  <div class="navbar">
    <div class="space">
      <router-link v-if="routerPathBack" v-bind:to="routerPathBack"><&nbsp;</router-link>
    </div>
    <div>
      <p>{{title}}</p>
    </div>
    <div class="space">
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
    border: 5px solid #FFBA08;
    color: #FFFFFF;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
  }

  .space {
    width: 10vw;
    padding: 5px;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 700;
  }
</style>
