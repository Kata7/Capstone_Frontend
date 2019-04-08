<template>
  <div class="main">
    <Navbar title="{Restaurant Name}" routerPathBack="/main" routerPathForward=""/>
    <div class="info-container">
      <div class="info-row">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Mon_Ami_Boulangerie_%288119944759%29.jpg" />
      </div>
      <div class="info-row">
        <h2 class="header">Address</h2>
        <div class="info-sub-col">
          <div class="sub-row">
            <h3 class="subHeader">Street</h3>
            <p>{address}</p>
          </div>
          <div class="sub-row bottom">
            <h3 class="subHeader">City</h3>
            <p>{city}, {state}</p>
          </div>
        </div>
      </div>
      <div class="info-row">
        <h2 class="header">Hours</h2>
        <div class="info-sub-col">
          <div class="sub-row">
            <h3 class="subHeader">Mon</h3>
            <p>{XXXX-YYYY}</p>
          </div>
          <div class="sub-row">
            <h3 class="subHeader">Tue</h3>
            <p>{XXXX-YYYY}</p>
          </div>
          <div class="sub-row">
            <h3 class="subHeader">Wed</h3>
            <p>{XXXX-YYYY}</p>
          </div>
          <div class="sub-row">
            <h3 class="subHeader">Thu</h3>
            <p>{XXXX-YYYY}</p>
          </div>
          <div class="sub-row">
            <h3 class="subHeader">Fri</h3>
            <p>{XXXX-YYYY}</p>
          </div>
          <div class="sub-row">
            <h3 class="subHeader">Sat</h3>
            <p>{XXXX-YYYY}</p>
          </div>
          <div class="sub-row bottom">
            <h3 class="subHeader">Sun</h3>
            <p>{XXXX-YYYY}</p>
          </div>
        </div>
      </div>
      <div class="info-row">
        <h2 class="header">Contact</h2>
        <div class="info-sub-col">
          <div class="sub-row">
            <h3 class="subHeader">Phone</h3>
            <p>{(757) 555-3456}</p>
          </div>
          <div class="sub-row bottom">
            <h3 class="subHeader">Web</h3>
            <p>{url}</p>
          </div>
        </div>
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
  padding: 1vmin 0;
}

.info-row {
  display: flex;
  flex-direction: row;
  /* flex-flow: wrap; */
  width: 80vw;
  border: 1.5vmin solid #ffba08;
  margin-bottom: 2vmin;
}

.header {
  color: white;
  text-align: center;
  border-right: 1vmin solid #ffba08;
  width: 30vw;
}

.subHeader {
  color: white;
  text-align: center;
  width: 20vw;
  border-right: 0.5vmin solid #ffba08;
}

.info-sub-col {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.sub-row {
  display: flex;
  flex-direction: row;
  align-self: center;
  border-bottom: 0.5vmin solid #ffba08;
  width: 100%;
}

.bottom {
  border-bottom: none;
}

p {
  display: flex;
  flex-direction: row;
  color: white;
  padding: 1vmin 1vmin 1vmin 5vmin;
}

img {
  padding: 2vmin;
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>
