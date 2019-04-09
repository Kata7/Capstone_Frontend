<template>
  <div class="main">
    <h1 class="title">LOGIN</h1>
    <div class="form">
      <input class="login" placeholder="email" type="text">
      <input class="login" placeholder="password" type="password">
      <router-link to="/settings"><button class="enter-btn">ENTER</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
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
    justify-content: center;
  }

  .title {
    display: flex;
    /* border: 2vmin solid #FFBA08; */
    background: #D00000;
    padding: 3vmin;
    color: #FFF;
    font-size: 12vmin;
  }

  a {
    text-decoration: none;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vmin;
  }

  .enter-btn {
    height: 12vmin;
    padding: 1vmin;
    margin-top: 2vmin;
    font-weight: 700;
    color: #FFFFFF;
    background: #D00000;
    /* border: 1.5vmin solid #FFBA08; */
    border: none;
  }

  .login {
    height: 12vmin;
    width: 60vw;
    margin: 2vmin;
  }

  button:hover {
    background: #000000;
  }
</style>
