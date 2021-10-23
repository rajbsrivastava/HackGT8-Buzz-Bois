

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',

  components: {
    
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>


<template>
<q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-10">
      <q-toolbar>
        
        <q-toolbar-title class = "q-ml-lg">
          PriorityCharity
        </q-toolbar-title>

        <div class="q-mr-sm">
          <router-link tag = "button" to="/">
            <q-btn color="primary" label="Sign Up" />
          </router-link> 
        </div>
        <div class="q-mr-sm">
          <router-link tag = "button" to="/about">
            <q-btn color="primary" label="Sign In" />
          </router-link> 
        </div>

        
      </q-toolbar>
    </q-header>

    

    <q-page-container>
      
      <router-view></router-view>
    
    </q-page-container>
  </q-layout>

</template>
