<template>
    <v-card>
        <v-card-title class="darkBlue--text">
             Open Requests
        </v-card-title>
    <v-data-table
      :headers="headers"
      :items="getRequests"
      :items-per-page="5"
      class="elevation-1 darkBlue--text"
    >

      <template v-slot:item.actions="{ item }">
        <router-link style="text-decoration: none" :to="{ name: 'RequestDetails', params:{id: item._id, request: item }}" target="_blank">
        <v-icon
          small
          class="mr-2 darkBlue--text"
     
        >
         fas fa-play
        </v-icon>
      </router-link>
      </template>
    </v-data-table>
    </v-card>
</template>

<script>
export default {
    name: 'EmployeeRequestList',
    props: ['requests'],
    data () {
    return {
    headers: [
        {
          text: 'Status',
          align: 'start',
          sortable: false,
          value: 'status',
          class: 'darkBlue--text title'
        },
        { text: 'Id', value: 'token', class: 'darkBlue--text title' },
        { text: 'Summary', value: 'summary', class: 'darkBlue--text title' },
        { text: 'Type', value: 'type', class: 'darkBlue--text title' },
        { text: 'Details', value: 'actions', class: 'darkBlue--text title'},
        
        ],
    }
    },
    computed: {
        getRequests(){
            return this.requests.filter(request => request.decision === "notdecided")
        }

    }
}
</script>