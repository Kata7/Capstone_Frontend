<template>
  <div class="main">
    <Navbar title="{Restaurant Name}" routerPathBack="/main" routerPathForward=""/>
    <div class="info-container">
      <div class="info-col">
        <p>Street: {street}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
      </div>
      <div class="info-row">
        <p>Contact</p>
      </div>
      <div class="info-col">
        <p>Schedule</p>
        <ul>
          <li>Monday: {time}</li>
          <li>Monday: {time}</li>
          <li>Monday: {time}</li>
          <li>Monday: {time}</li>
          <li>Monday: {time}</li>
          <li>Monday: {time}</li>
          <li>Monday: {time}</li>
        </ul>
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
  min-height: 100vh;
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
  margin: 10px 10px 0px 10px;
  padding: 5px;
  border: 5px solid #FFBA08;
}

.info-col {
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 10px;
  padding: 5px;
  border: 5px solid #FFBA08;
  align-content: left;
}

a {
  text-decoration: none;
}

p {
  color: white;
  text-align: left;
}

ul {
  list-style-type: none;
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
  border: 5px solid #FFBA08;
}
</style>
