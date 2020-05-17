<template>
<b-container fluid class="top">
  <b-nav vertical >
    <h1>Dis-cretion</h1>
    <b-nav-item active>
      <router-link :to="{ name: 'home' }">
          <h3>Dashboard</h3>
      </router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link :to="{ name: 'latestChanges' }">
          <h3>Latest Changes</h3>
      </router-link>
    </b-nav-item>
    <b-nav-item>      
      <router-link :to="{ name: 'makeRequest' }">
          <h3>Make a Request</h3>
      </router-link>
    </b-nav-item>
  </b-nav>
  </b-container>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style>

.sidenav{
  text-align: right;
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  transition: all 0.3s;

}
.sidenav a {
  text-align: left;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover{
  color:white;
  background-color: #818181;
}
.sidenav h1 {
  text-align: left;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 3em;
  color: #818181;
  display: block;
  transition: 0.3s;
}
</style>