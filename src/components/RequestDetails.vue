<template>
    <b-container fluid class="detail">
        <b-row class="banner">
            <b-col cols="1">
                <h2> id </h2>
            </b-col>
            <b-col cols="10">
                <h2> {{request.summeryOfRequests}} </h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="8">
                    <b-form @submit="update">
                        <div class="grid">
                           <p>Date Of Request:</p> 
                           <label for="postdate"> {{ request.date }}</label>

                            <p>Request Summery:</p>
                            <label for="summeryOfRequests"> {{request.summeryOfRequests}}</label>
                            
                            <p>Request Details:</p>
                            <label for="summeryOfRequests"> {{request.reasonOfRequest}}</label>
                        </div>
                    <b-form-group id="input-group-4" label="Approval:" label-for="approval">
                        <b-form-select id="approval" v-model="request.approval" :options="options" >               
                        </b-form-select>
                    </b-form-group>
                    <b-form-group id="input-group-5" label="Rationale:" label-for="rationale">
                        <b-form-textarea id="rationale" v-model="request.rationale"
                        rows="3" max-rows="6">
                        </b-form-textarea>
                    </b-form-group>

            <span class="buttons">
                <b-button type="submit" id="update" >Save</b-button>
                <b-button id="send">Send </b-button>
            </span>
            
          </b-form>
      </b-col>
      <b-col cols="4">
          <bot />
          </b-col>
       </b-row>
    </b-container>
</template>

<script>
import Service from '@/services/service.js';
import Bot from '@/components/Bot';
export default {
    props: ['id'], 
    data(){
    return {
      request: null,
      options: ['Approved', 'Rejected', 'Pending']
    }

    },
    mounted(){
        console.log('Mounted is being triggered!')
        Service.getById(this.id)
        .then( request => this.request = request )
    },
    components:{
        "bot": Bot
    }

}
</script>

<style>
.banner{
    padding: 30px 0 10px 0;
    border-bottom: 1px solid var(--paleGrey)
}
.detail{
    color: #6C756B;
}
.buttons{
    display: flex;
    flex-direction: row;
    float: right;
}

#update{
    margin-top: 0;
}

.grid{
    margin-top: 30px;
    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: 1fr 100px 100px;
}

.grid p{
    font-weight: bold;
}
</style>