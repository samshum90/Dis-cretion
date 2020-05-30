<template>
    <v-container>
        <form v-on:submit="update">
            <v-row no-gutters>
                <v-col cols="10">
                      <v-card
                        class="pa-6"
                        outlined
                        tile
                    >

                    <v-row>

                        <v-col>
                            <h3 class="pl-3 primary--text"> {{request.summery}} </h3>
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row no-gutters>
                        <v-col>
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
                                    <p class="primary--text">Summery:</p>
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
                                    <label class="primary--text" for="arrangments">{{request.arrangements}}</label>
                                </v-col> 
                           </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <p class="primary--text">Arrangements:</p>
                                </v-col> 
                                <v-col>                                 
                                    <label class="primary--text" for="details">{{request.details}}</label>
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
                                    v-model="request.furtherApproval"
                                    ></v-select>
                                </v-col> 
                            </v-row>   
                                 
                            <v-row>
                                <v-col cols="3">
                                    <p class="primary--text">Rational:</p>
                                </v-col> 
                                <v-col>                                 
                                    <v-textarea
                                    outlined
                                    color="brightBlue"
                                    v-model="request.rational"
                                    ></v-textarea>
                                </v-col> 
                            </v-row>    

                            <v-btn 
                                rounded 
                                color="button" 
                                dark
                                class="float-md-right"
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

                <v-col>
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
      options: ['Approved', 'Rejected', 'Pending'],
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
            console.log("emit")
            eventBus.$emit('update-request', this.request);
        },
    },
    components:{
        "Assistent": Assistent
    }

}
</script>
