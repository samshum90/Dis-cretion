<template>
    <v-card
    class="pa-3 darkBlue white--text"
    >
        <p>
            <v-icon
                class="mr-2 white--text"
            >   
            fas fa-tasks
        </v-icon>
            Further Approval
        </p>
        <h2>
               {{getNumber}}
        </h2>
    </v-card>
  
</template>

<script>
export default {
    name:"ApprovalStatus",
    props: ["requests"],
  data() { 
      return { 
      
      } 
      },
  computed: {
    getNumber() {
        const approvalArray = this.requests.filter(request => request.decision === "notdecided")
        return approvalArray.length
    }

  }
}
</script>
