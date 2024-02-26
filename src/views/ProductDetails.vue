<template>
  <div>
    <h1>Product Details</h1>
    <div>
      <p>Product ID: {{ $route.params.id }}</p>
      <p>Product Description: {{ $route.query.description }}</p>
      <p>Product Specification: {{ $route.query.specification }}</p>
      <p>Product Price: ${{ $route.query.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  mounted() {
    console.log('Product ID:', this.$route.params.id);
    console.log('Product Description:', this.$route.query.description);
    console.log('Product Specification:', this.$route.query.specification);
    console.log('Product Price:', this.$route.query.price);
  }
};
</script>
