<template>
  <div class="main">
    <Navbar title="HUNGRii" routerPathBack="" routerPathForward="/settings"/>
    <h2 class="title">Restaurant Name</h2>
    <div class="container">
      <!-- <img
        src="https://www.gannett-cdn.com/-mm-/1fecae5856e58374cc9e1c0fd6dcc3c6aae79d4e/c=0-293-5760-3547/local/-/media/2018/07/17/IAGroup/DesMoines/636674359927753055-0717-NEW-STATEFAIR-FOODS-00029.jpg?width=3200&height=1680&fit=crop"
      > -->
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
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
  border: 5px solid #ffba08;
  padding: 10px;
  color: #ffffff;
  font-size: 5vmin;
  margin: 2vmin;
}

a {
  text-decoration: none;
}

.container {
  width: 100vw;
}

.container img {
  max-width: 80%;
  padding: 10px;
  border: 1px solid #ffba08
}

.btn-yes {
  position: relative;
  top: 0;
}
</style>
