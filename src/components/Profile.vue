<template>
  <p> profile page rendered here </p>

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
import {db, functions} from '../database';
//console.log(db.collection('users').forEach((doc) => console.log(doc.id, " => ", doc.data())));
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
});
// functions.httpsCallable('helloWorld')().then(function(result) {
//   console.log("Queue cleared!")
//   console.log(result)
// })
export default {
  name: 'Profile',
  data: function() {
    console.log("whens this called?")
    return {
      items: [{id: '0', title: 'title1', subtitle: 'subtitle1', desc: 'desc1'},
      {id: '1', title: 'title2', subtitle: 'subtitle2', desc: 'desc2'},
      {id: '2', title: 'title3', subtitle: 'subtitle3', desc: 'desc3'},
      {id: '3', title: 'title4', subtitle: 'subtitle4', desc: 'desc4'},
      {id: '4', title: 'title5', subtitle: 'subtitle5', desc: 'desc5'},
      {id: '5', title: 'title6', subtitle: 'subtitle6', desc: 'desc6'},
      {id: '6', title: 'title7', subtitle: 'subtitle7', desc: 'desc7'}]
    }
  }
}
</script>
