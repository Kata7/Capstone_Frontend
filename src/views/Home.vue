<template>
  <router-link to="/login">
    <div class="main">
      <h1 class="title">HUNGRii</h1>
    </div>
  </router-link>
</template>

<script>
export default {
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: row;
    background: #D00000;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .title {
    display: flex;
    border: 2vmin solid #FFBA08;
    padding: 3vmin;
    color: #FFFFFF;
    font-size: 12vmin;
  }

  a {
    text-decoration: none;
  }
</style>
