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
            Employee requests
        </p>
        <h2>
                {{requests.length}}    
        </h2>
    </v-card>
</template>

<script>
export default {
    name:"RequestStatus",
    props:["requests"]

}
</script>