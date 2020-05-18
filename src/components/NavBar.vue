<template>
<b-container class="top">
  <b-nav vertical class="sidenav">
    <h2>Dis-cretion</h2>
    <svg id = "person" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" class="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
      <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z">
      </path>
    </svg>
    <div class="navLinks">

      <b-nav-item active>
        <span class="navLink">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tachometer-alt" class="svg-inline--fa fa-tachometer-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor" d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z">
        </path>
      </svg>
        <router-link :to="{ name: 'home' }">
            <h3>Dashboard</h3>
        </router-link>
        </span>
      </b-nav-item> 

      
        <b-nav-item>
          <span class="navLink">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rss-square" class="svg-inline--fa fa-rss-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM112 416c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm157.533 0h-34.335c-6.011 0-11.051-4.636-11.442-10.634-5.214-80.05-69.243-143.92-149.123-149.123-5.997-.39-10.633-5.431-10.633-11.441v-34.335c0-6.535 5.468-11.777 11.994-11.425 110.546 5.974 198.997 94.536 204.964 204.964.352 6.526-4.89 11.994-11.425 11.994zm103.027 0h-34.334c-6.161 0-11.175-4.882-11.427-11.038-5.598-136.535-115.204-246.161-251.76-251.76C68.882 152.949 64 147.935 64 141.774V107.44c0-6.454 5.338-11.664 11.787-11.432 167.83 6.025 302.21 141.191 308.205 308.205.232 6.449-4.978 11.787-11.432 11.787z">
            </path>
          </svg>
      
          <router-link :to="{ name: 'latestChanges' }">
              <h3>Latest Changes</h3>
          </router-link>
          </span>
        </b-nav-item>
      
      <b-nav-item>
        <span class="navLink">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tasks" class="svg-inline--fa fa-tasks fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69 72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z">
            </path> 
          </svg>
            
          <router-link :to="{ name: 'home' }">
              <h3>Dis-cretion cases</h3>
          </router-link>
        </span>
      </b-nav-item>

      <b-nav-item> 
        <span class="navLink">
          <svg>
          </svg>
            
          <router-link :to="{ name: 'makeRequest' }">
              <h3>Make a Request</h3>
          </router-link>
        </span>
      </b-nav-item>
    </div>
  </b-nav>
  </b-container>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style>

#person{
  margin-left: 20px;
  margin-bottom: 20px;
    height: auto; 
    width: auto; 
    max-width: 100px; 
    max-height: 100px;
}

.navLink{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
}
.navLinks{
  border-top: 1px solid rgba(255, 255, 255, .5);
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  /* display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: auto;
  text-align: left;
  align-items: center; */
}
.sidenav svg{
    height: 50px; 
    width: auto; 
    max-width: 50px; 
    max-height: 50px;
    
}


.sidenav{
  height: 100%;
  width: 24%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  transition: all 0.3s;
  background-color: var(--paleGreen);
  color: var(--white);
}
.sidenav a {
  text-decoration: none;
  font-size: 10px;
  display: block;
  transition: 0.3s;
  color: var(--white);
  margin-left: 10px;
}
.sidenav a:hover{
  color:white;
  background-color: #818181;
}
.sidenav h2 {
  text-align: right;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 2em;
  display: block;
  transition: 0.3s;
}

.sidenav img {
  color: var(--white)

}
</style>