<template>
  <div id="app">
    <link
      href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cosmo/bootstrap.min.css"
      rel="stylesheet"
    />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">VueJS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <!-- HOMEEEEEEE -->
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Home <span class="visually-hidden">(current)</span>
              </a>
            </li>

            <!-- Galleryyyy -->
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery">Gallery</router-link> <!-- Inserted here -->
            </li>

            <!-- Aboutt -->
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link> <!-- Inserted here -->
            </li>

            <!-- Contact -->
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link> <!-- Inserted here -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- ROUTER VIEW -->
    <router-view /> 
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #FFB0B0; 
  min-height: 100vh; 
}
</style>
