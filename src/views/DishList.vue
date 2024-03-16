<template>
  <div>
    <div>
      <input type="text" v-model="search" @keyup.enter="executeFunction" />

      <button @click="switchToFunction1">Name</button>
      <button @click="switchToFunction2">Ingredient</button>
      <button @click="switchToFunction3">Cooking Process</button>
    </div>
    <div class="events">
      <EventCard
        style="margin: 2%"
        v-for="event in events"
        :key="event.id"
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
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    EventCard, // register it as a child component
  },

  data() {
    return {
      events: null,
      search: "",
      selectedFunction: "function1",
    };
  },
  methods: {
    executeFunction() {
      // Execute the selected function based on selectedFunction value
      switch (this.selectedFunction) {
        case "function1":
          this.searchByName();
          break;
        case "function2":
          this.searchByIngredient();
          break;
        case "function3":
          this.searchByProcess();
          break;
        default:
          console.error("Invalid function selected");
      }
    },
    searchByName() {
      EventService.searchByName(this.search).then((response) => {
        this.events = response.data;
      });
    },
    searchByIngredient() {
      EventService.searchByIngredient(this.search).then((response) => {
        this.events = response.data;
      });
    },
    searchByProcess() {
      EventService.searchByProcess(this.search).then((response) => {
        this.events = response.data;
      });
    },
    switchToFunction1() {
      this.selectedFunction = "function1";
    },
    switchToFunction2() {
      this.selectedFunction = "function2";
    },
    switchToFunction3() {
      this.selectedFunction = "function3";
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
