<template>
  <b-container fluid>
        <b-row class="w-100 p-3 mx-auto">
          <b-col>
            <request-item v-for="(request, index) in requests" :request="request" :key="index" /> 
          </b-col>
        </b-row>
  </b-container>
</template>

<script>
import RequestItem from '@/components/RequestItem.vue';
import Service from '@/services/service.js';


export default {
    name: "requests-list",
    props: ['requests'],
    components: {
      "request-item": RequestItem,
    },
    data(){
      return {
    
      }
    },
}
</script>

<style lang="css">

</style>