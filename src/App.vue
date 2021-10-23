<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-10">
      <q-toolbar>
        
        <q-toolbar-title class = "q-ml-lg">
          PriorityCharity
        </q-toolbar-title>

        <div class="q-mr-sm"><q-btn color="primary" label="Sign Up" /> </div>
        <div class="q-mr-sm"><q-btn color="primary" label="Sign In" /> </div>

        
      </q-toolbar>
    </q-header>

    

    <q-page-container>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
