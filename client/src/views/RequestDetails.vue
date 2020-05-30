<template>
        <v-container>
            <v-row no-gutters>
                <v-col cols="10">
                      <v-card
                        class="pa-6"
                        outlined
                        tile
                    >

                    <v-row>
                        <v-col cols="1">
                            <h3> id</h3>
                        </v-col>
                            <v-divider
                            vertical
                            ></v-divider>
                        <v-col cols="9">
                            <h3 class="pl-3"> {{request.summery}} </h3>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row no-gutters>
                        <v-col>
                           <v-row>
                                <v-col cols="3">
                                    <p>Request Date:</p>
                                </v-col> 
                                <v-col>
                                    <label for="submitted">{{ request.submitted }}</label>
                                </v-col> 
                           </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <p>Summery:</p>
                                </v-col> 
                                <v-col>
                                    <label for="situation">{{request.situation }}</label>
                                </v-col> 
                           </v-row>

                           <v-row>
                                <v-col cols="3">
                                    <p>Arrangements:</p>
                                </v-col> 
                                <v-col>
                                    <label for="arrangments">{{request.arrangements}}</label>
                                </v-col> 
                           </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <p>Arrangements:</p>
                                </v-col> 
                                <v-col>                                 
                                    <label for="details">{{request.details}}</label>
                                </v-col> 
                            </v-row>   

                            <v-row>
                                <v-col cols="3">
                                    <p>Decision:</p>
                                </v-col> 
                                <v-col cols="4">                                 
                                    <v-select
                                    :items="options"
                                    color="brightBlue"
                                    ></v-select>
                                </v-col> 
                            </v-row>   
                                 
                            <v-row>
                                <v-col cols="3">
                                    <p>Rational:</p>
                                </v-col> 
                                <v-col>                                 
                                    <v-textarea
                                    outlined
                                    color="brightBlue"
                                    ></v-textarea>
                                </v-col> 
                            </v-row>    

                            <v-btn 
                                rounded 
                                color="button" 
                                dark
                                class="float-md-right"
                            >
                                Save
                            </v-btn>

                            <v-btn 
                                rounded 
                                color="button" 
                                dark
                                class="float-md-right"
                            >
                                Send
                            </v-btn>
                                 
                        </v-col>

                    </v-row>
                                 
                      </v-card>
                </v-col>

                <v-col>

                </v-col>
            </v-row>
        </v-container>
</template>

<script>
import Service from '@/services/service.js';
// import Bot from '@/components/Bot';
export default {
    name: 'RequestDetails',
    props: ['id'], 
    data(){
    return {
      request: null,
      options: ['Approved', 'Rejected', 'Pending'],
      assistent: [],
    }

    },
    mounted(){
        Service.getById(this.id)
        .then( request => this.request = request )
        .then(()=>{
        const payload = {
            "row":[ 
                this.request.summery, 
                this.request.situation, 
                this.request.arrangements, 
                this.request.details, 
                this.request.endingId, 
                this.request.submitted, 
                this.request.token, 
            ],
            count: 2
        }
        console.log(payload)
        })
        .then((payload) => {
          Service.addAssistent(payload)})

        

        
    },
    components:{
        // "bot": Bot
    }

}
</script>
