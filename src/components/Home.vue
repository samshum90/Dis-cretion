<template>
    <b-container fluid class="dash">
      <b-row>
        <h1>Dis-cretion cases needs your decision:</h1>
      </b-row>
      <b-row>
        <b-col cols="12">
           <requests-list :requests="requests"/>
        </b-col>
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
.dash{
  color: #6C756B;
}

</style>