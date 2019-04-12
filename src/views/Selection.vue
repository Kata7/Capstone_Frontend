<template>
  <div class="main">
    <Navbar v-bind:title="$attrs.current.name" routerPathBack="/main" routerPathForward/>
    <div class="info-container">
      <div>
        <img
          v-bind:src="$attrs.current.image"
        >
      </div>
      <div class="info-col">
        <!-- <h2 class="header">Location</h2> -->
        <div class="info-row">
          <div class="subheader">
            <h3>Street</h3>
          </div>
          <div class="content">
            <p>{{$attrs.current.address}}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>City, State</h3>
          </div>
          <div class="content">
            <p>{{$attrs.current.city}}, {{$attrs.current.state}}</p>
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
            <p>{{$attrs.current.phone_number}}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Website</h3>
          </div>
          <div class="content">
            <p>{{$attrs.current.url}}</p>
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
            <p>{{$attrs.current.monday}}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Tue</h3>
          </div>
          <div class="content">
            <p>{{$attrs.current.tuesday}}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Wed</h3>
          </div>
          <div class="content">
            <p>{{$attrs.current.wednesday}}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Thu</h3>
          </div>
          <div class="content">
            <p>{{$attrs.current.thursday}}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Fri</h3>
          </div>
          <div class="content">
            <p>{{$attrs.current.friday}}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Sat</h3>
          </div>
          <div class="content">
            <p>{{$attrs.current.saturday}}</p>
          </div>
        </div>
        <div class="info-row">
          <div class="subheader">
            <h3>Sun</h3>
          </div>
          <div class="content">
            <p>{{$attrs.current.sunday}}</p>
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
  },
  props: {
    current: Object
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
  margin: 0 0 2vw 0;
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
