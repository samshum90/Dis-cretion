<template>
    <v-card
    class="pa-3 blueBlue darkBlue--text"
    >
        <p>
            <v-icon
                class="mr-2 darkBlue--text"
            >   
            fas fa-tasks
        </v-icon>
            Open Requests
        </p>
        <h2>
                {{getNumber}}    
        </h2>
    </v-card>
</template>

<script>
export default {
    name:"RequestStatus",
    props:["requests"],
    computed: {
    getNumber() {
        const approvalArray = this.requests.filter(request => request.status === "New" || request.decision ==="notdecided")
        return approvalArray.length
    }

  }

}
</script>