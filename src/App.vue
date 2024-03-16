<template>
  <header>
    <h1>Food Recipes</h1>
  </header>
  <nav>
    <button v-if="!isAuthenticated" @click="login">Log in/Sign up</button>
    <button v-if="isAuthenticated" @click="logout">Log out</button>
  </nav>
  <div>
    <pre v-if="isAuthenticated">
        <h2>Welcome! {{ user.nickname }}</h2>
      </pre>
  </div>
  <DishList v-if="isAuthenticated"></DishList>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import DishList from "@/views/DishList.vue";

export default {
  components: {
    DishList,
  },
  setup() {
    const { logout } = useAuth0();
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      user,
      isAuthenticated,
      logout: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      },
    };
  },
};
</script>

<style>
body {
  height: 1150px;
}
header {
  background: #8a96db;
  text-align: center;
  width: 100%;
  height: auto;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 85% 85% / 30%;
}

footer {
  background: #8a96db;
  padding: 3vh 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  margin: 7vh 0 5vh 0;
  color: #6070ca;
  text-decoration: underline;
}

h1 {
  font-family: cursive;
  font-size: 50px;
}
</style>
