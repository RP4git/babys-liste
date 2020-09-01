<template>
  <div id="app">
    <h1 style="text-align: center;">Babys Wunschliste</h1>
    <br />
    <div id="app">
      <ol style="margin: 0% 10%;">
        <hello-world v-for="item in categories" v-bind:categories="item" v-bind:key="item.id"></hello-world>
      </ol>
    </div>
    <ul>
      <li class="d-flex justify-content-between align-items-center">
        <button type="button" class="btn btn-outline-secondary">Reisen</button>
        <span class="badge badge-primary badge-pill">14</span>
      </li>
      <li>
        <ul style="list-style-type: none;" v-show="false">
          <li>
            <a href="none" rel="none" target="_blank">Reisen</a>
          </li>
          <li>
            <a href="none" rel="none" target="_blank">Reisen2</a>
          </li>

          <!-- <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        Haushalt und Technik
        <span class="badge badge-primary badge-pill">2</span>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        babysichere WOhnung
        <span class="badge badge-primary badge-pill">1</span>
          </li>-->
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      categories: [
        { items: 0, text: "Reisen", show: true },
        { items: 1, text: "Haushalt und Technik", show: true },
        { items: 2, text: "babysichere Wohnung", show: false },
        { items: 2, text: "aus dem Möbelhaus", show: false },
        { items: 2, text: "Babypflege", show: false },
        { items: 2, text: "Babytextilien", show: false },
        { items: 0, text: "Babys Ernährung", show: false },
        { items: 0, text: "Babys erstes Spielzeug", show: false }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
