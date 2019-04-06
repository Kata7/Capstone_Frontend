<template>
  <div class="main">
    <Navbar title="Settings" routerPathBack="/main" routerPathForward=""/>
    <div class="setting-form">
      <input>
      <input>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background: #d00000;
  width: 100%;
  height: 100vh;
  align-items: center;
}

.title {
  display: flex;
  border: 8px solid #ffba08;
  padding: 10px;
  color: #ffffff;
  font-size: 4rem;
}

a {
  text-decoration: none;
}
</style>
