import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import GStore from "./store";
import "nprogress/nprogress.css";
import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-azk71dxd7dxul6m8.us.auth0.com",
    clientId: "OZ1rOQCFrAI0QCj8CLmqrtym4nJ7Nypo",
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  })
);

app.use(router);

app.provide("GStore", GStore).mount("#app");
