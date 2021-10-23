<template>
  <div class="row container">
    <!--
      In this example every card has a "style" tag with a width.
      Consider defining a CSS class instead to ease the template syntax.
    -->
    <div class="q-pa-md row items-start q-gutter-md" style="justify-content: center">
    <q-card v-for="item in items" :key="item.id" inline class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">{{item.title}}</div>
        <div class="text-subtitle2">{{item.subtitle}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        This is a description of the item: {{ item.desc }}
        This is a description of the item: {{ item.desc }}
        This is a description of the item: {{ item.desc }}
      </q-card-section>
    </q-card>
    </div>
  </div>

</template>

<style>
.q-card {
     width: 100%;
     max-width: 300px
}
.container {
  margin-top: 4em;
}

</style>

<script>
// import {db, functions} from '../database';
// //console.log(db.collection('users').forEach((doc) => console.log(doc.id, " => ", doc.data())));
// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data());
//     });
// });
// functions.httpsCallable('helloWorld')().then(function(result) {
//   console.log("Queue cleared!")
//   console.log(result)
// })
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      items: [
        {title: "title1", subtitle: "subtitle1", desc: "desc1"},
        {title: "title2", subtitle: "subtitle2", desc: "desc2"},
        {title: "title3", subtitle: "subtitle3", desc: "desc3"},
        {title: "title4", subtitle: "subtitle4", desc: "desc4"},
        {title: "title5", subtitle: "subtitle5", desc: "desc5"},
        {title: "title6", subtitle: "subtitle6", desc: "desc6"},
      ]
    }
  }
}
</script>
