<template>
  <div class="main">
    <Navbar title="HUNGRii" routerPathBack="" routerPathForward="/settings"/>
    <div class="container">
      <button v-if="!$attrs.last" v-on:click="$emit('remove', $attrs.current.id), reset()" class="reject">X</button>
      <img v-on:click="nextImg" v-bind:src="$attrs.current.images[this._data.count]"
      >
      <button v-if="!$attrs.last" v-on:click="$emit('next'), reset()" class="keep">✔</button>
      <router-link to='/selection'><button v-if="$attrs.last" class="select">Info</button></router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    nextImg: function() {
      this._data.count++
      if (this._data.count > this.$attrs.current.images.length - 1) {
        this._data.count = 0
      }
    },
    reset: function() {
      console.log('yeet')
      this._data.count = 0
    }
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
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
}

.reject {
  position: absolute;
  left: 10vw;
  background: #D00000;
  font-weight: 700;
}

.keep {
  position: absolute;
  right: 10vw;
  background: blue;
}

.select {
  position: absolute;
  bottom: 08%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  height: 16vmin;
  width: 32vmin;
  background: green;
  color: #FFFFFF;
  border-radius: 10%;
  border: none;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

</style>
