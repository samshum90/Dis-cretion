<template>
  <b-container fluid class="requestitem">
    <b-row>
      Type Of Requests: {{request.typeOfRequests}}
      Summery Of Requests: {{request.summeryOfRequests}}            
      Reason Of Request: {{request.reasonOfRequest}}
      Out Of Policy: {{request.outOfPolicy}}
      Further Approval: {{request.furtherApproval}}
      Approval: {{request.approval}}
      Your Rationale: {{request.yourRationale}}
      <router-link :to="{ name: 'requestDetails', params:{id: request._id }}">
         Show Details
      </router-link>
    </b-row>
  </b-container>
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


</style>