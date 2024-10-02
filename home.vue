<template>
  <div class="home">
    <img src="@/assets/bini-banner.jpg" alt="BINI" class="bini" />
    <h1>{{ msg }}</h1>
    
    <section class="introduction">
      <p>BINI is a Filipino girl group formed under Star Hunt Academy, known for their catchy songs and captivating performances in the P-pop scene.</p>
    </section>

    <section class="follow-us">
      <h2>Follow them on their Social Media Accounts</h2>
        <a href="https://www.instagram.com/bini_ph">Instagram</a>
        <a href="https://twitter.com/bini_ph">Twitter</a>
        <a href="https://www.facebook.com/BINIph">Facebook</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to BINI FanPage!'
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  color: aliceblue;
}


h1 {
  color: black;
  padding-top: 1cm;
}

.follow-us {
  color: black;
}

p {
  font-size: .6cm;
}
</style>
