
Vue.component('list-comp', {
  props: ['categories'],
  template: 
  '  <ul class="list-group">    <li      class="list-group-item d-flex justify-content-between align-items-center"    >Reisen      <span class="badge badge-primary badge-pill">14</span>    </li>    <li>  <ul style="list-style-type:none;" v-show=categories.show>    <li>      <a href="none" rel="none" target="_blank">Reisen</a></li>    <li>      <a href="none" rel="none" target="_blank">Reisen2</a></li>  </li>      </ul></ul>'
})

var app = new Vue({
  el: '#app',
  data: {
    categories: [
      { items: 0, text: 'Reisen', show: false },
      { items: 1, text: 'Haushalt und Technik', show: true },
      { items: 2, text: 'babysichere Wohnung', show: false },
      { items: 2, text: 'aus dem Möbelhaus', show: false },
      { items: 2, text: 'Babypflege', show: false },
      { items: 2, text: 'Babytextilien', show: false },
      { items: 0, text: 'Babys Ernährung', show: false },
      { items: 0, text: 'Babys erstes Spielzeug', show: false }
    ]
  }
})

