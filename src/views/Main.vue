<template>
  <div class="main">
    <Navbar title="HUNGRii" routerPathBack="" routerPathForward="/settings"/>
    <div class="container">
      <div class="row">
        <button class="reject">No</button>
        <div class="image-container">
          <img
          src="https://www.gannett-cdn.com/-mm-/1fecae5856e58374cc9e1c0fd6dcc3c6aae79d4e/c=0-293-5760-3547/local/-/media/2018/07/17/IAGroup/DesMoines/636674359927753055-0717-NEW-STATEFAIR-FOODS-00029.jpg?width=3200&height=1680&fit=crop">
        </div>
        <button class="keep">Yes</button>
      </div>
      <button class="select">Pick this one</button>
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
  min-height: 100vh;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  border: 1.5vmin solid orange;
  width: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.reject, .keep {
  width: 20%;
  z-index: 1;
  background: none;
}

.image-container {
  height: 57vh;
  width: 100%;
  margin: 0 -20%
}

.select {
  min-height: 20vh;
}

img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

</style>
