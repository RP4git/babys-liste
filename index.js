Vue.component('list-comp', {
  props: ['categories', 'entries'],
  template:
    '  <ul>    <li class="d-flex justify-content-between align-items-center">  <button type="button" class="btn btn-outline-secondary" >{{categories.text}}</button>    <span class="badge badge-primary badge-pill">{{categories.items}}</span></li>    <li>     <ul style="list-style-type:none;" v-show=categories.show>   <li v-for="item in entries"    v-bind:entries="item"    v-bind:key="item.id">item.entry  </li>      </ul></ul>',
});

var app = new Vue({
  el: '#app',
  data: {
    categories: [
      { items: 0, text: 'Reisen', show: true },
      { items: 1, text: 'Haushalt und Technik', show: true },
      { items: 2, text: 'babysichere Wohnung', show: false },
      { items: 2, text: 'aus dem Möbelhaus', show: false },
      { items: 2, text: 'Babypflege', show: false },
      { items: 2, text: 'Babytextilien', show: false },
      { items: 0, text: 'Babys Ernährung', show: false },
      { items: 0, text: 'Babys erstes Spielzeug', show: false },
    ],
    entries: [
      // {
      //   entry: (
      //     <a href="none" rel="none" target="_blank">
      //       Reisen
      //     </a>
      //   ),
      // },
      // {
      //   entry: (
      //     <a href="none" rel="none" target="_blank">
      //       Reisen2
      //     </a>
      //   ),
      // },
      { entry: 'sss' },
    ],
  },
});
