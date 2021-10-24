

<script>
import { ref } from 'vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

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
          <router-link tag = "button" style="text-decoration: none" to="/sign-up">
            <q-btn color="primary" label="Sign Up" />
          </router-link>
        </div>
        <div class="q-mr-sm">
          <router-link tag = "button" style="text-decoration: none" to="/Login">
            <q-btn color="primary" label="Sign In" />
          </router-link>
        </div>


      </q-toolbar>
    </q-header>



    <q-page-container>
      <Suspense>
      <template #default>
        <router-view/>
      </template>
      <template #fallback>
        <div style="position: absolute; left: 50%; right: 50%; top: 50%; bottom: 50%"> ...loading...
        </div>
      </template>
      </Suspense>

    </q-page-container>
  </q-layout>

</template>
