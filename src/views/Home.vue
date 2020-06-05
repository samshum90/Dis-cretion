<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center pa-3 darkBlue--text display-3"> Welcome to your Dis-cretion dashboard! </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <status :requests="requests" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <employee-request-list :requests="requests" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <further-approval-list :requests="requests" />
        </v-col>
       </v-row>
       <v-row> 
        <v-col>
          <decision-provided-list :requests="requests" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Service from '../services/service.js'
import Status from '../components/Status.vue'
import EmployeeRequestList from '../components/EmployeeRequestList.vue'
import FurtherApprovalList from '../components/FurtherApprovalList.vue'
import DecisionProvidedList from '../components/DecisionProvidedList.vue'

export default {
  name: 'Home',
  data(){
    return {
      requests: [],
      

    }
  },
  components: {
    "status": Status,
    "employee-request-list": EmployeeRequestList,
    "further-approval-list": FurtherApprovalList,
    "decision-provided-list": DecisionProvidedList,
  },
  mounted(){
    console.log('Mounted is being triggered!')
    Service.get()
    // .then( res => res.json())
    .then( requests => this.requests = requests )

    },
  computed:{

  }
}
</script>

<style scoped>
h1 {
 align-items: center !important; 
}
</style>
