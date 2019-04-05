<template>
  <div class="main">
    <h1 class="title">LOGIN</h1>
    <div class="form">
      <input class="login" placeholder="email" type="text">
      <button class="enter-btn">Enter</button>
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
    /* border: 4px solid #FFFFFF; */
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .title {
    display: flex;
    border: 8px solid #FFBA08;
    padding: 10px;
    color: #FFFFFF;
    font-size: 4rem;
  }

  a {
    text-decoration: none;
  }

  .form {
    display: inline;
    margin: 10px;
  }

  .enter-btn {
    height: 2rem;
    width: 3rem;
  }

  .login {
    height: 2rem;
  }
</style>
