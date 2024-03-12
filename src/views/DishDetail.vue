<template>
  <!--  need fix style before send work   -->
  <div v-if="innerObject">
    <img :src="imageSrc" :alt="innerObject.Name" width="300" height="250" />

    <h1 class="head name">
      {{ innerObject.Name }}
    </h1>
    <hr />
    <br />
    <h2>Description</h2>
    <p>{{ innerObject.Description }}</p>
    <hr />
    <br />
    <h2>List of ingredients</h2>
    <ul v-for="list in innerObject.RecipeIngredientParts" :key="list">
      <li>► {{ list }}</li>
    </ul>
    <hr />
    <br />
    <h2>Cooking Processes</h2>
    <ol v-for="list in innerObject.RecipeInstructions" :key="list">
      <li>►{{ list }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  inject: ["GStore"],
  data() {
    return {
      keys: [],
      innerObject: {},
    };
  },
  computed: {
    imageSrc() {
      // Assuming 'Images' is the property containing an array of image URLs in innerObject
      return this.innerObject.Images ? this.innerObject.Images[0] : ""; // Using the first image URL as an example
    },
  },
  mounted() {
    // Extract the keys when the component is mounted
    this.extractKeys();
  },
  methods: {
    extractKeys() {
      // Get the keys of the inner object (e.g., '18200')
      this.keys = Object.keys(this.GStore.event);

      // Access the inner object using the key
      this.innerObject = this.GStore.event[this.keys[0]]; // Using the first key as an example
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Nunito);

.name {
  color: rgb(123, 16, 16);
}
.head {
  margin: 2vh 0;
}
div#Docform {
  border: 1px solid;
  margin: 6vh 4vh;
  background: rgba(255, 255, 255, 0.6);
  padding: 2vh;
}
a {
  margin: 2vh 0 2vh 0;
  display: inline-block;
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
  -webkit-transition: color 0.25s;
  transition: color 0.25s;
  text-align: left;
}

a div {
  text-shadow: 1px 1px 1px black;
}

a:hover {
  color: rgba(0, 255, 0, 1);
}

a span {
  color: black;
  font-size: 16px;

  position: absolute;
  top: 10px;
  right: 50%;
  margin-right: -430px;

  padding: 50px 50px;

  border-style: solid;
  border-radius: 175px;

  transform: scale(0);
  -webkit-transform: scale(0);

  transition: opacity 1s, transform 1.5s;
  -webkit-transition: opacity 1s, transform 1.5s;
  transition-delay: 0.5s;
  -webkit-transition-delay: 0.5s;

  opacity: 0;
}

a div:hover ~ span {
  opacity: 1;
  transform: scale(1);
  -webkit-transform: scale(1);
}

a svg {
  position: absolute;
  top: 50%;
  margin-top: -70px;
  left: 50%;
  margin-left: 100px;
}

a svg circle {
  fill-opacity: 0;
  opacity: 0;
}

a svg #c1 {
  transition: opacity 1s;
  -webkit-transition: opacity 1s;
}

a svg #c2 {
  transition: opacity 2s;
  -webkit-transition: opacity 2s;
}

a svg #c3 {
  transition: opacity 3s;
  -webkit-transition: opacity 3s;
}

a div:hover ~ svg circle {
  opacity: 1;
}

a div {
  cursor: pointer;
}
</style>
