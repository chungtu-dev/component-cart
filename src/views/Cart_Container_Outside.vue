<template>
  <div class="row justify-content-center container_product">
    <div class="row row-cols-2">
      <div class="col-2 main_color"></div>

      <div class="col-8 main_background_color">

        <div class="row row-cols-3">
          <!-- <div class="col-12 sub_product"><Product/></div> -->
          <div class="col-12 sub_product"><CustomerForm/></div>
          <!-- <div class="col-12 sub_product"><ThanhToan/></div> -->
        </div>  

      </div>
      <div class="col-2 main_color"></div>      
    </div>
  </div>
</template>

<script>
// import Product from './Product.vue'
import CustomerForm from './Customer_Form.vue';
// import ThanhToan from './Thanh_Toan.vue'

export default {  
  components: {
    name: "Cart_Container_Outside",        
    // Product,
    CustomerForm,
    // ThanhToan
  },
};
</script>

<style>
.sub_product{
  background-color: rgb(255, 255, 255);
}
</style>