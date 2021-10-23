
<template>
<q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-10">
      <q-toolbar>

        <q-toolbar-title class = "q-ml-lg">
          <router-link style="text-decoration: none; color: inherit" to="/">
          PriorityCharity
          </router-link>
        </q-toolbar-title>

         <template v-if="user.loggedIn">
            <div class="q-mr-sm">
              <router-link tag = "button" style="text-decoration: none" to="/sign-up">
                <q-btn outline elevated style="color: #1976d2;" label="{{user.data.displayName}}" />
              </router-link>
            </div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
          <template v-else>
            <div class="q-mr-sm">
              <router-link tag = "button" style="text-decoration: none" to="/sign-up">
                <q-btn outline elevated style="color: #1976d2;" label="Sign Up" />
              </router-link>
            </div>
            <div class="q-mr-sm">
              <router-link tag = "button" style="text-decoration: none" to="/login">
                <q-btn color="blue-9" label="Sign In" />
              </router-link>
            </div>
          </template>

      </q-toolbar>
    </q-header>



    <q-page-container>

      <router-view></router-view>

    </q-page-container>
  </q-layout>

</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>