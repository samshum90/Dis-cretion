<template>
   <v-container>
       <v-row>
           <v-col>
               <RequestStatus :requests="requests" />
           </v-col>
            <v-col>
                <NewCases :requests="requests" />
           </v-col>
           <v-col>
                <ApprovalStatus :requests="requests" />
           </v-col>
           <v-col>
               <NewGuidances />
           </v-col>
        </v-row>
    </v-container>
</template>

<script>
import RequestStatus from './RequestStatus'
import ApprovalStatus from './ApprovalStatus'
import NewGuidances from './NewGuidances'
import NewCases from './NewCases'
export default {
    name: 'Status',
    props: ["requests"],
    components: {
        "RequestStatus": RequestStatus,
        "ApprovalStatus": ApprovalStatus,
        "NewGuidances": NewGuidances,
        "NewCases": NewCases,
    }
}

</script>
