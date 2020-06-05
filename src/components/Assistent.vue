<template>
    <v-card
    color="blueBlue"
    class="darkBlue--text pa-3 ml-4"
    height="100%"
    >
         <v-list-item-title class="headline mb-1">
             <v-icon
            color="darkBlue"        
             >
                fas fa-lightbulb
            </v-icon>     
                 Dis-cretion assistant
        </v-list-item-title>

        <p>You can find some relevant policy information 
            <ul>
                <li v-for="(link, index) in assistent.poldocs" :key="index">
                <a v-bind:href="link">Link {{ index + 1 }}</a>
                </li>
            </ul>
        </p>
    
        <p>There were <b>{{assistent.cases.length}}</b> similar types of requests in the last 18 months. See details <a href="/">here</a>.
        </p>

        <p>You may use the <a href="/">Areas of Consideration</a> when discussing with the colleague {{request.firstname}} and/or forming arrangements for your team and the business. </p>

        <p><b>Support and Well-being</b></p>
            <ul>
                <li>What would I be doing differently once I start the flexible working pattern?</li>
                <li>How would I manage a balance among study, work and life?</li>
            </ul>
        <p><b>Operations</b></p>
            <ul>
                <li>How would the day-to-day operations be impacted by flexible working pattern?</li>
                <li>What resources / arrangements would I need to ensure acceptable operations?</li>
            </ul>
    </v-card>
</template>

<script>
import Service from '@/services/service.js'
export default {
    name: "Assistent",
    props: ["request"],
        data(){
    return {
      assistent: [],
    }
    },
    mounted(){
    const payload = {
            "row":[ 
                this.request.summary, 
                this.request.situation, 
                this.request.arrangement, 
                this.request.anything_else, 
            ],
            "count": 2
        }
        
        Service.addAssistent(payload)    
        .then( data => this.assistent = data )        
    },

    computed:{
        // getUrls: function(){ this.assistent.poldocs.map((url) => {
		// 	return <a
        //         href={{url}}
		// 	/>
		// })
        // }
    }

}
</script>
