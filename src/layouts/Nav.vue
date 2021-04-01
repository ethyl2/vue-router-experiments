<template>
  <nav class="tabs is-boxed">
    <div class="container">
      <ul>
        <router-link tag="li" to="/" exact>
          <a>Home</a>
        </router-link>
        <router-link tag="li" to="/about">
          <a>About</a>
        </router-link>
        <router-link tag="li" to="/contact">
          <a>Contact</a>
        </router-link>
        <router-link tag="li" to="/json">
          <a>JSON Placeholder</a>
        </router-link>
        <router-link tag="li" to="/make-image">
          <a>HTML to Image</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>
