<template>
  <div>
    <div>
      <input type="text" v-model="search" @keyup.enter="searchAll" />
      <div v-if="suggest">
        Did you mean this word?:
        <div v-on:click="useword(suggest.suggest)">{{ suggest.suggest }}</div>
      </div>
    </div>
    <div class="events" v-if="events">
      <EventCard
        style="margin: 2%"
        v-for="event in events.results"
        :key="event.RecipeId"
        :event="event"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
// import axios from 'axios'
export default {
  name: "DishList",
  components: {
    EventCard, // register it as a child component
  },

  data() {
    return {
      events: null,
      search: "",
      suggest: null,
    };
  },
  methods: {
    searchAll() {
      EventService.searchAll(this.search).then((response) => {
        this.events = response.data;
      });
      EventService.suggest(this.search).then((response) => {
        this.suggest = response.data;
      });
      // if (this.events.total_hit < 1 || this.search != this.suggest.suggest) {
      //   console.log(this.suggest.suggest);
      //   console.log(this.search);
      // } else {
      //   this.suggest = null;
      // }
    },
    useword(query) {
      this.search = query;
      this.searchAll();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
