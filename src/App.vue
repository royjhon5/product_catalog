<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark" style="padding: 15px; color:white;">
    <h2>Product Catalog</h2>
  </nav>
  <div class="container" style="display: flex; justify-content: center; align-items: center; height: 70vh;">
    <router-view />
  </div>
</template>
<script>
  export default {
    name: 'App'
  };
</script>
