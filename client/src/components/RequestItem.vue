<template>
    <tr class="requestitem">
            <td> Status </td>
            <td> {{request.key}} </td>
            <td> {{request.summeryOfRequests}}  </td>
            <td> Status </td>
            <td>      
              <router-link :to="{ name: 'requestDetails', params:{id: request._id }}" target="_blank">
                Show Details
              </router-link>
            </td>
    </tr>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
    name: "request-item",
    props: ['request'],
    methods: {
        // selectANeed() {
        //     eventBus.$emit('select-a-need',this.need);    
        }
    }
</script>

<style>
.table-borderless td{
  border: 5px;
}


</style>