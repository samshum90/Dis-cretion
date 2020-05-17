<template>
    <b-container fluid >
      <b-row>
        <h1>Welcome to Dis-cretion</h1>
      </b-row>
      <b-row>
        <requests-list :requests="requests"/>
      </b-row>
    </b-container>
</template>

<script>
import RequestsList from "@/components/RequestsList.vue"
import Service from '@/services/service.js';

export default {
    name: "home",
    data(){
    return {
      requests: [],

    }
  },

    components: {
        "requests-list": RequestsList
    },
      mounted(){
    console.log('Mounted is being triggered!')
    Service.get()
    // .then( res => res.json())
    .then( requests => this.requests = requests )
    }
}
</script>

<style>

</style>