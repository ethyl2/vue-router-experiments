<template>
  <div id="navbarMenuHeroA" class="navbar-menu">
    <div class="navbar-end">
      <router-link to="/" exact class="navbar-item"> Home </router-link>

      <router-link to="/about" class="navbar-item"> About </router-link>

      <router-link to="/contact" class="navbar-item"> Contact </router-link>

      <router-link to="/json" class="navbar-item">
        JSON Placeholder
      </router-link>

      <router-link to="/make-image" class="navbar-item">
        HTML to Image
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>
