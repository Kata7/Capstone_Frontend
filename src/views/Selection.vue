<template>
  <div class="main">
    <Navbar title="{Restaurant Name}" routerPathBack="/main" routerPathForward/>
    <div class="info-container">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Mon_Ami_Boulangerie_%288119944759%29.jpg"
        >
      </div>
      <div class="info-col">
        <!-- <h2 class="header">Location</h2> -->
        <div class="info-row">
          <div class="subheader">
            <h3>Street</h3>
          </div>
          <div class="content">
            <p>{street}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>City, State</h3>
          </div>
          <div class="content">
            <p>{city, state}</p>
          </div>
        </div>
      </div>
      <div class="info-col">
        <!-- <h2 class="header">Contact</h2> -->
        <div class="info-row">
          <div class="subheader">
            <h3>Phone</h3>
          </div>
          <div class="content">
            <p>{phone_number}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Website</h3>
          </div>
          <div class="content">
            <p>{url}</p>
          </div>
        </div>
      </div>
      <div class="info-col">
        <!-- <h2 class="header">Hours</h2> -->
        <div class="info-row">
          <div class="subheader">
            <h3>Mon</h3>
          </div>
          <div class="content">
            <p>{0000-0000}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Tue</h3>
          </div>
          <div class="content">
            <p>{0000-0000}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Wed</h3>
          </div>
          <div class="content">
            <p>{0000-0000}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Thu</h3>
          </div>
          <div class="content">
            <p>{0000-0000}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Fri</h3>
          </div>
          <div class="content">
            <p>{0000-0000}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Sat</h3>
          </div>
          <div class="content">
            <p>{0000-0000}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Sun</h3>
          </div>
          <div class="content">
            <p>{0000-0000}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//name, street, city, state, MTWTFSS (7), phone_number, url, price_rank, description
import Navbar from "../components/Navbar.vue";
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
  background: whitesmoke;
  width: 100%;
  min-height: 100vh;
  align-items: center;
}

.info-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 1vmin 0;
  align-items: center;
}

.info-col {
  display: flex;
  flex-direction: column;
  width: 80%;

}

.info-row {
  display: flex;
  flex-direction: row;
}

.header {
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.subheader {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vmin;
  width: 30%;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10vmin;
  width: 70%;
}

h2, p {
  display: flex;
  flex-direction: row;
  color: #000;
}

p {
  margin: 0 0 0 10px;
}

img {
  padding: 2vmin;
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>
