<template>
      <v-card
    class="pa-3 primary white--text"
    >
        <p>
            <v-icon
                class="mr-2 white--text"
            >   
            fas fa-tasks
        </v-icon>
            New Cases
        </p>
        <h2>
           {{getNumber}}          
        </h2>
    </v-card>
</template>

<script>
export default {
    name:"NewCases",
    props: ["requests"],
    data() { 
      return { 
      
      } 
      },
    computed: {
        getNumber() {
            const approvalArray = this.requests.filter(request => request.status === "new")
            return approvalArray.length
        }

    }
    }


</script>