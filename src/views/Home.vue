<template>
  <div class="home">
    <Header title="Home" path=""></Header>
    <b-container>
      <div class="row justify-content-center container_product">
    <div class="row row-cols-2">
      <div class="col-2 main_color"></div>

      <div class="col-8 main_background_color">

        <div class="row row-cols-3">
          <div class="col-12 sub_product"><CustomerForm/></div>
        </div>  

      </div>
      <div class="col-2 main_color"></div>      
    </div>
  </div>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import CustomerForm from './Customer_Form.vue';

export default {
  name: 'Home',
  components: {
    Header,
    CustomerForm,
  },
}
</script>
<style>
.sub_product{
  background-color: rgb(255, 255, 255);
}
</style>
