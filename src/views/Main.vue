<template>
  <div class="main">
    <div class="images">
      <p>Pictures of food go here</p>
      <img src="/#"/>
    </div>
    <div class="description-short">
      <p>info goes here</p>
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

  img {
    max-width: 80%;
  }
</style>
