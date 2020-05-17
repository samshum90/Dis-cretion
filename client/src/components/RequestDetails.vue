<template>
    <b-container fluid>
        <b-row>
            <b-col cols="8">
     User {{ id }}
           Type Of Requests: {{request.typeOfRequests}}
      Summery Of Requests: {{request.summeryOfRequests}}            
      Reason Of Request: {{request.reasonOfRequest}}
      Out Of Policy: {{request.outOfPolicy}}
      Further Approval: {{request.furtherApproval}}
      Approval: {{request.approval}}
      Your Rationale: {{request.yourRationale}}
      </b-col>
      <b-col cols="4">
          <bot />
          </b-col>
       </b-row>
    </b-container>
</template>

<script>
import Service from '@/services/service.js';
import Bot from '@/components/Bot';
export default {
    props: ['id'], 
    data(){
    return {
      request: null,

    }
    },
    mounted(){
        console.log('Mounted is being triggered!')
        Service.getById(this.id)
        .then( request => this.request = request )
    },
    components:{
        "bot": Bot
    }

}
</script>

<style>

</style>