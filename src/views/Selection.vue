<template>
  <div class="main">
    <Navbar title="SELECTION" routerPathBack="/main" routerPathForward=""/>
    <div class="info-container">
      <h2 class="title">{restaurant name}</h2>
      <div class="info-row">
        <p>yeet</p>
      </div>
    </div>
  </div>
</template>

<script>
//name, street, city, state, MTWTFSS (7), phone_number, url, price_rank, description
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

.info-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
}

.info-row {
  display: flex;
  flex-direction: row;
  width: 80vw;
  margin: 10px;
  padding: 5px;
  border: 1px solid orange;
}

a {
  text-decoration: none;
}

.title {
  border: 5px solid #ffba08;
  padding: 10px;
  color: #ffffff;
  font-size: 5vmin;
  margin: 2vmin;
}

input {
  height: 10vh;
  width: 55vw;
}

button {
  width: 25vw;
  height: 10vh;
  background: #D00000;
  color: #FFFFFF;
  border: 5px solid orange;
}
</style>
