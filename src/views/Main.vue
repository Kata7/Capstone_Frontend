<template>
  <div class="main">
    <Navbar title="HUNGRii" routerPathBack="" routerPathForward="/settings"/>
    <div class="container">
      <button class="reject">X</button>
      <img src="https://www.gannett-cdn.com/-mm-/1fecae5856e58374cc9e1c0fd6dcc3c6aae79d4e/c=0-293-5760-3547/local/-/media/2018/07/17/IAGroup/DesMoines/636674359927753055-0717-NEW-STATEFAIR-FOODS-00029.jpg?width=3200&height=1680&fit=crop">
      <button class="keep">✔</button>
      <!-- <button class="select">Pick this one</button> -->
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
  background: whitesmoke;
  width: 100%;
  height: 100vh;
  align-items: center;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  overflow: hidden;
}

.reject, .keep {
  width: 20vmin;
  z-index: 1;
  color: white;
  font-size: 5vmin;
  border-radius: 50%;
  height: 16vmin;
  width: 16vmin;
  border: none;
}

.reject {
  position: absolute;
  top: 42%;
  left: 10vw;
  background: #D00000;
  font-weight: 700;
}

.keep {
  position: absolute;
  top: 42%;
  right: 10vw;
  background: blue;
}

.select {
  /* position: absolute; */
  bottom: 0;
  height: 10vmin;
  width: 100%;
  background: green;
  opacity: 0.5;
  border: none;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

</style>
