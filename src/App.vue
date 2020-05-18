<template>
  <div>
    <b-row>
    <b-col cols="3">
      <nav-bar />
    </b-col>
    <b-col cols="9">
      <router-view/>
    </b-col>
    </b-row>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
  name: 'App',
  data(){
    return {
      needs: []
    }
  },
  components: {
    "nav-bar": NavBar,
  }
}
</script>

<style>
*{
  font-family: Helvetica Neue;

}
:root{
--paleGreen: #779FA1;
--paleBlue: #F2F4FF;
--paleGrey: #6C756B;
}
.h1{
  background-color:#b3daff;
 padding: 20px;
  text-align: center; 
}
.title{
  background-color:#b3daff;
  padding: 20px;
  text-align: center;
  width: 100%
}

</style>