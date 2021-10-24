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
        <div class="text-overline text-orange-9">{{item["charity"]}}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{item.charity}}</div>
        <div class="text-caption text-grey">
          {{item.cost_effectiveness}}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ item.description }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    </div>
  </div>
</template>



<style>
.q-card {
     width: 100%;
     max-width: 300px;
     max-height: 500px;
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
const expanded = ref(false)
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
  // computed: {
  //   // map `this.user` to `this.$store.getters.user`
  //   ...mapGetters({
  //     user: "user"
  //   })
  // },
  name: 'CharityGrid',
  data: function() {
    return {
      expanded: expanded
    }
  },
  async setup() {
    var cards = await getcards();
    return {
      items: cards,
    }
  },
}
</script>
