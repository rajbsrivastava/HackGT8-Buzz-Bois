<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px">
  </q-page>
</template>

<style>
</style>

<script>
import {db} from '../database';
//console.log(db.collection('users').forEach((doc) => console.log(doc.id, " => ", doc.data())));
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
});
export default {
  name: 'HelloWorld'
}
</script>
