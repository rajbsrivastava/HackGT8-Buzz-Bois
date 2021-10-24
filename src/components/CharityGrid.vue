<template>
  <div class="row container">
    <!--
      In this example every card has a "style" tag with a width.
      Consider defining a CSS class instead to ease the template syntax.
    -->
    <div class="q-pa-md row items-start q-gutter-lg cardContainer">
    <q-card v-for="item in items" :key="item.id" inline class="card full-height">
      <img :src="item.image" style="max-height: 220px; margin: auto; padding: 10px; object-fit: scale-down; min-height: 200px">

      <q-card-section>
        <div class="text-h6">{{item.charity}}</div>
        <div class="text-subtitle2">{{item.subtitle}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ item.description }}
      </q-card-section>
    </q-card>
    </div>
  </div>
</template>



<style>
.q-card {
     width: 100%;
     max-width: 300px;
     max-height: 450px;
}
.container {
  margin-top: 4em;
  margin-bottom: 4em;
}
.cardContainer {
  margin-bottom: 8em;
  justify-content: center;
}

</style>

<script>
import {db, functions} from '../database';
import { ref } from 'vue'
import { mapGetters } from "vuex";
async function getcards() {
  var charities = []
  //await new Promise(resolve => setTimeout(resolve, 1000));
  const querySnapshot = await db.collection("charities").get()
  querySnapshot.forEach(doc => {
    charities.push(doc.data())
  });

  return charities
}

export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  name: 'CharityGrid',
  async setup() {
    var cards = await getcards();
    console.log(cards);
    return {
      items: cards
    }
  },
}
</script>
