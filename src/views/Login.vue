<template>
  <div class="main">
    <h1 class="title">LOGIN</h1>
    <div class="form">
      <input class="login" placeholder="email" type="text">
      <button class="enter-btn">ENTER</button>
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
    background: #D00000;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .title {
    display: flex;
    border: 2vmin solid #FFBA08;
    padding: 3vmin;
    color: #FFFFFF;
    font-size: 12vmin;
  }

  a {
    text-decoration: none;
  }

  .form {
    display: inline;
    margin: 5vmin;
  }

  .enter-btn {
    height: 12vmin;
    padding: 1vmin;
    margin: 0px 0px 0px 1px;
    color: #FFFFFF;
    background: #D00000;
    border: 1.5vmin solid #FFBA08;
  }

  .login {
    height: 12vmin;
  }

  button:hover {
    background: #000000;
  }
</style>
