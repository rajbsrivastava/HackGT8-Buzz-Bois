<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px">
  </q-page>
</template>

<style>
</style>

<script>
import {db, functions} from '../database';
//console.log(db.collection('users').forEach((doc) => console.log(doc.id, " => ", doc.data())));
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
});
functions.httpsCallable('helloWorld')().then(function(result) {
  console.log("Queue cleared!")
  console.log(result)
})
export default {
  name: 'HelloWorld'
}
</script>
