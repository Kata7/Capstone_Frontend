<template>
  <div class="main">
    <Navbar title="SETTINGS" routerPathBack="/main" routerPathForward=""/>
    <div class="settings-form">
      <div class="settings-row">
        <input id="address" name="address" placeholder="street address" type="text">
        <button>Street</button>
      </div>
      <div class="settings-row">
        <input id="city" name="city" placeholder="city" type="text">
        <button>City</button>
      </div>
      <div class="settings-row">
        <input id="state" name="state" placeholder="state" type="text">
        <button>State</button>
      </div>
      <div class="settings-row">
        <input id="distance" type="number" placeholder="travel distance (mi.)" min=1 max=10>
        <button>Distance</button>
      </div>
      <div class="settings-row">
        <input id="cache" type="number" placeholder="# of results stored" min=1 max=10>
        <button>Cache</button>
      </div>
      <div class="settings-row">
        <div class="space"></div>
        <button class="save">SUBMIT</button>
      </div>
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
// FIELDS USED ON THE BACKEND
// id (int)
// username (string)
// address (text)
// city (string)
// state (string)
// geo_lat (decimal)
// geo_long (decimal)
// distance (integer)

// (address, city, state) -> Geocoding API
// distance
// # of results (picks random from all results)
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

.settings-form {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
}

.settings-row {
  display: flex;
  flex-direction: row;
  width: 80vw;
  margin: 1.5vmin;
}

a {
  text-decoration: none;
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
  border: 1.5vmin solid #FFBA08;
}

.save:hover {
  background: black;
}

.space {
  width: 27.5vw;
}
</style>
