<template>
  <div>
    <table>
      <tr>
          <th> Status </th>
          <th> Id </th>
          <th> Summary </th>
          <th>Type </th>
          <th> Details </th>
      </tr>
        <request-item v-for="(request, index) in requests" :request="request" :key="index" />        
    </table>
  </div>
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
table{
  width: 100%;

}

th, td{

  padding: 10px;

}

th{
  font-size: 1.6em;
}
td{
  border: 1px solid;
  text-align: center;
}

</style>