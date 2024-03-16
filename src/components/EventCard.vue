<template>
  <div class="row">
    <div class="col">
      <dishModal :open="isOpen" @close="isOpen = !isOpen">
        <img
          :src="event.Images[0]"
          :alt="event.Name"
          width="300"
          height="250"
        />
        <h1 class="head name">
          {{ event.Name }}
        </h1>
        <hr />
        <br />
        <h2>Description</h2>
        <p>{{ event.Description }}</p>
        <hr />
        <br />
        <h2>List of ingredients</h2>
        <ul v-for="list in event.RecipeIngredientParts" :key="list">
          <li>► {{ list }}</li>
        </ul>
        <hr />
        <br />
        <h2>Cooking Processes</h2>
        <ol v-for="list in event.RecipeInstructions" :key="list">
          <li>►{{ list }}</li>
        </ol>
      </dishModal>
      <div class="event-card">
        <img
          :src="event.Images[0]"
          :alt="event.Name"
          width="100"
          height="100"
        />
        <h3>{{ event.Name }}</h3>
        <button @click="isOpen = true">Show Modal</button>
      </div>
    </div>
  </div>
</template>

<script>
import dishModal from "./modals/dishModal.vue";
import { ref } from "vue";
export default {
  name: "DishCard",
  components: {
    dishModal,
  },
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.col {
  float: left;
  width: 50%;
  padding: 10px;
  height: 150px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
#id {
  color: rgb(252, 76, 76);
}

.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
