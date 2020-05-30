<template>
<v-app>
    <v-card>
        <v-card-title>
            Employee requests
        </v-card-title>
    <v-data-table
      :headers="headers"
      :items="requests"

      class="elevation-1"
    >

      <template v-slot:item.actions="{ item }">
        <router-link :to="{ name: 'RequestDetails', params:{id: item._id, request: item }}" target="_blank">
        <v-icon
          small
          class="mr-2"
     
        >
         fas fa-play
        </v-icon>
      </router-link>
      </template>
    </v-data-table>
    </v-card>
    </v-app>
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
        },
        { text: 'Id', value: '_id' },
        { text: 'Summary', value: 'summery' },
        { text: 'Type', value: 'type' },
        { text: 'Details', value: 'actions'},
        
        ],
    }
    }
}
</script>
