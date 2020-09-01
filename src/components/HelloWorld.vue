<template>
  <div class="hello">
    <ul>
      <li class="d-flex justify-content-between align-items-center">
        <button type="button" class="btn btn-outline-secondary">{{ categories.text }}</button>
        <span class="badge badge-primary badge-pill">{{ categories.items }}</span>
      </li>
      <li>
        <ul style="list-style-type:none;" v-show="categories.show">
          <li>
            <a href="https://vuejs.org/v2/api/#v-for" rel="none" target="_blank">Reisen</a>
          </li>
          <li v-for="(item, index) in entries" :key="index">{{ item.entry }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    categories: { type: Object, required: true }
  },
  data() {
    return {
      entries: [
        // {
        //   entry: (
        //     <a href="none" rel="none" target="_blank">
        //       Reisen
        //     </a>
        //   )
        // },
        // {
        //   entry: (
        //     <a href="none" rel="none" target="_blank">
        //       Reisen2
        //     </a>
        //   )
        // },
        { entry: "sss" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
