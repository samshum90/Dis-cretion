<template>
    <v-container no-gutters>
        <form v-on:submit="update">
            <v-row no-gutters>
                <v-col cols="9">
                      <v-card
                        class="pa-6"
                        outlined
                        tile
                    >

                    <v-row>

                        <v-col>
                            <h3 class="pl-3 primary--text"> {{request.summary}} </h3>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row no-gutters>
                        <v-col>
                           <v-row>
                                <v-col cols="3">
                                    <p class="primary--text">Employee's Name:</p>
                                </v-col> 
                                <v-col>
                                    <label class="primary--text" for="submitted">{{ request.firstname }}</label>
                                </v-col> 
                           </v-row>

                           <v-row>
                                <v-col cols="3">
                                    <p class="primary--text">Request Date:</p>
                                </v-col> 
                                <v-col>
                                    <label class="primary--text" for="submitted">{{ request.submitted }}</label>
                                </v-col> 
                           </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <p class="primary--text">Summary:</p>
                                </v-col> 
                                <v-col>
                                    <label class="primary--text" for="situation">{{request.situation }}</label>
                                </v-col> 
                           </v-row>

                           <v-row>
                                <v-col cols="3">
                                    <p class="primary--text">Arrangements:</p>
                                </v-col> 
                                <v-col>
                                    <label class="primary--text" for="arrangments">{{request.arrangement}}</label>
                                </v-col> 
                           </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <p class="primary--text">Other Notes:</p>
                                </v-col> 
                                <v-col>                                 
                                    <label class="primary--text" for="details">{{request.anything_else}}</label>
                                </v-col> 
                            </v-row>   

                            <v-row>
                                <v-col cols="3">
                                    <p class="primary--text">Decision:</p>
                                </v-col> 
                                <v-col cols="4">                                 
                                    <v-select
                                    :items="options"
                                    color="brightBlue"
                                    v-model="request.decision"
                                    ></v-select>
                                </v-col> 
                            </v-row>   
                                 
                            <v-row>
                                <v-col cols="3">
                                    <p class="primary--text">Rationale:</p>
                                </v-col> 
                                <v-col>                                 
                                    <v-textarea
                                    outlined
                                    color="brightBlue"
                                    v-model="request.rationale"
                                    ></v-textarea>
                                </v-col> 
                            </v-row>    

                            <v-btn 
                                rounded 
                                color="button" 
                                dark
                                class="float-md-right ml-3"
                                value="Update" 
                                type="submit"
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

                <v-col cols="3">
                    <Assistent :request="request"/>
                </v-col>
            </v-row>
        </form>
    </v-container>
</template>

<script>
import { eventBus } from '@/main.js';
import Service from '@/services/service.js';
import Assistent from '@/components/Assistent';
export default {
    name: 'RequestDetails',
    props: ['id'], 
    data(){
    return {
      request: null,
      options: ["accepted", "rejected" , "nmi"],
      assistent: [],
    }

    },
    mounted(){
        Service.getById(this.id)
        .then( request => this.request = request )     
    },
    methods:{
            update(event){
            event.preventDefault();
            const payload = {
                token: this.request.token,
                decision: this.request.decision
            }
            console.log(payload)
            eventBus.$emit('update-request', payload);
        },
    },
    components:{
        "Assistent": Assistent
    }

}
</script>
