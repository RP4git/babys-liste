Vue.component('list-comp', {
  props: ['category', 'entries'],
  template:
    '  <ul>    <li class="d-flex justify-content-between align-items-center">  <button type="button" class="btn btn-outline-secondary" >{{category.text}}</button>    <span class="badge badge-primary badge-pill">{{category.items}}</span></li>    <li style="list-style-type:none;">     <ul style="list-style-type:none;" v-show=category.show>   <li v-for="(entry, index) in entries" :entry="entry" :key="index"><test-comp :entry="entry"></test-comp></li>      </ul></li></ul>',
});

Vue.component('test-comp', {
  props: ['entry'],
  template: '<span v-html="entry"></span>',
});
// <li> v-for="(item,index) in entries"    :entries="item"    :key="index">{{{item}}}  </li>

var app = new Vue({
  el: '#app',
  data: {
    categories: [
      { items: 0, text: 'Reisen', show: true, link: '' },
      { items: 1, text: 'Haushalt und Technik', show: true },
      { items: 2, text: 'babysichere Wohnung', show: false },
      { items: 2, text: 'aus dem Möbelhaus', show: false },
      { items: 2, text: 'Babypflege', show: false },
      { items: 2, text: 'Babytextilien', show: false },
      { items: 0, text: 'Babys Ernährung', show: false },
      { items: 0, text: 'Babys erstes Spielzeug', show: false },
    ],
    entries: [
      '<a href="none" rel="none" target="_blank">        Reisennnnn      </a>',
      '<a href="none" rel="none" target="_blank">           Reisen2          </a>',
      'sss',
    ],
  },
});
