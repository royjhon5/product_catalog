   <template>
    <div class="flex">
      <h1>Product List</h1>
      <div style="display: flex; gap: 10px;">
        <div class="col-md-4" v-for="product in productListHere" :key="product.id">
          <div class="card" style="width: 18rem; height: 100%;">
            <div class="card-body">
              <h5 class="card-title">{{ product.description }}</h5>
              <p class="card-text">{{ product.specification}}</p>           
            </div>
            <div class="card-footer">
              <router-link :to="{ name: 'ProductDetails', params: { id: product.id }, query: { description: product.description, specification:product.specification, price: product.price  }}" class="btn btn-primary">View Details</router-link>
            </div>
          </div>
        </div>    
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          productListHere: [
            { id: 1, description: 'Iphone 15 Pro Max', specification: 'Super Retina XDR display footnote ¹ProMotion technology Always-On display', price: 10 },
            { id: 2, description: 'Samsung Galaxy S24 Ultra', specification: 'The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display.', price: 202 },
            { id: 3, description: 'ROG Phone 6', specification: 'The Asus ROG Phone 6 comes with 6.78-inch AMOLED display with 165Hz refresh rate and Qualcomm Snapdragon 8+ Gen 1 processor. Specs also include 6000mAh battery with 65W charging speed, Triple camera setup on the back with 50MP main sensor and 12MP front selfie camera.', price: 30 }
          ]
        };
      }
    };
    </script>
    
  