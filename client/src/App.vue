<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="#FFFBFE"
      permanent
      absolute
    >
          <v-list
            dense
            nav
            class="py-0"
          >
            <v-list-item two-line class="px-0">
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/81.jpg">
              </v-list-item-avatar>
  
              <v-list-item-content>
                <v-list-item-subtitle
                  class="brightBlue--text"
                >
                  Log out
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
  
            <v-divider></v-divider>

          <v-list-item-group
            color="#00B4D8"
            mandatory
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
              :requests="requests"
              link
            >
              <v-list-item-icon>
                <v-icon
                color="#00B4D8"
                >
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title
                  class="brightBlue--text"
                >
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

  
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#00B4D8"
      dark
    >
      <div class="d-flex align-center">

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="200"
          src="@/assets/Dis-cretion_Logo.png"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="myGrey">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { eventBus } from '@/main.js';
import Service from '@/services/service.js'
  export default {
    props: {
    },
    mounted(){
    console.log('Mounted is being triggered!')
    Service.get()
    // .then( res => res.json())
    .then( requests => this.requests = requests )

    eventBus.$on('update-request', requestToUpdate => {
        console.log("on")
        const updateRequest = {...requestToUpdate};
        Service.update(updateRequest );
        console.log(updateRequest)
        const index = this.requests.findIndex(need => need._id === requestToUpdate._id);
        this.requests.splice(index, 1, updateRequest);
      })
    },
    data: () => ({
      requests: [],
      drawer: null,
      items: [
        { title: 'Dashboard', icon: 'fas fa-tachometer-alt', link: '/' },
        { title: 'Latest Changes', icon: 'fas fa-rss', link: '/latestchange' },
        { title: 'Employee requests', icon: 'fas fa-tasks' },
      ],
  })
}
  
</script>