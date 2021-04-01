<template>
  <section class="hero is-primary is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img alt="Vue logo" src="../assets/logo.png" class="px-1">
               Vue Experiments
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <TopNav></TopNav>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Vue Experiments
        </h1>
        <h2 class="subtitle">
          Using Vue-Router
        </h2>

      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot has-text-dark">
      <Nav></Nav>
    </div>
  </section>
</template>

<script>
import TopNav from './TopNav.vue';
import Nav from './Nav.vue';

export default {
  name: 'Header',
  components: {
    TopNav,
    Nav
  }

}
</script>
