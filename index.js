Vue.component('list-comp', {
  props: ['category', 'entries', 'catindex'],
  template:
    '  <ul>    <li class="d-flex justify-content-between align-items-center">  <button type="button" class="btn btn-outline-secondary" :disabled="category.items<=0" @click="showEntries(catindex)">{{category.text}}</button>    <span class="badge badge-primary badge-pill">{{category.items}}</span></li>    <li style="list-style-type:none;">     <ul style="list-style-type:none;" v-show=category.show>   <li><test-comp :entry="entries[[catindex]]" :entryNo="catindex" @toggle-check="toggleLinkState"></test-comp></li>      </ul></li></ul>',
  data() {
    return {
      disabledLinks: [],
    };
  },
  methods: {
    showEntries: function (catindex) {
      this.$emit('show-entries', catindex);
    },
    toggleLinkState(index) {
      this.$emit('toggle-link-state', index);
    },
  },
});

Vue.component('test-comp', {
  props: ['entry', 'entryNo'],
  template:
    '<ul style="list-style-type:none;">   <li v-for="(item, index) in entry.entrylist" :key="index"> <input type="checkbox" :id="index" @change="toggleCheck([entryNo,index])"><label :for="index" style="margin-left: .8%;"><span v-html="item"></span></label> </li></ul>',
  methods: {
    toggleCheck: function (index) {
      this.$emit('toggle-check', index);
    },
  },
});

var app = new Vue({
  el: '#app',
  data: {
    categories: [
      { items: 3, text: 'Reisen', show: true, link: '' },
      { items: 2, text: 'Haushalt und Technik', show: false },
      { items: 0, text: 'babysichere Wohnung', show: false },
      { items: 3, text: 'aus dem Möbelhaus', show: false },
      { items: 3, text: 'Babypflege', show: false },
      { items: 3, text: 'Babytextilien', show: false },
      { items: 3, text: 'Babys Ernährung', show: false },
      { items: 3, text: 'Babys erstes Spielzeug', show: false },
    ],
    entries: [
      {
        entrylist: [
          '<a href="https://www.google.de/" re="noreferrer noopener" target="_blank">        Reisennnnn      </a>',
          '<a href="none" re="noreferrer noopener" target="_blank">           Reisen2          </a>',
          'sss',
        ],
      },
      {
        entrylist: [
          '<a href="https://www.google.de/" re="noreferrer noopener" target="_blank">        haushalt1      </a>',
          '<a href="none" re="noreferrer noopener" target="_blank">           haushalt2          </a>',
        ],
      },
      {
        entrylist: [],
      },
      {
        entrylist: [
          '<a href="https://www.google.de/" re="noreferrer noopener" target="_blank">        Reisennnnn      </a>',
          '<a href="none" re="noreferrer noopener" target="_blank">           Reisen2          </a>',
          'sss',
        ],
      },
      {
        entrylist: [
          '<a href="https://www.google.de/" re="noreferrer noopener" target="_blank">        Reisennnnn      </a>',
          '<a href="none" re="noreferrer noopener" target="_blank">           Reisen2          </a>',
          'sss',
        ],
      },
      {
        entrylist: [
          '<a href="https://www.google.de/" re="noreferrer noopener" target="_blank">        Reisennnnn      </a>',
          '<a href="none" re="noreferrer noopener" target="_blank">           Reisen2          </a>',
          'sss',
        ],
      },
      {
        entrylist: [
          '<a href="https://www.google.de/" re="noreferrer noopener" target="_blank">        Reisennnnn      </a>',
          '<a href="none" re="noreferrer noopener" target="_blank">           Reisen2          </a>',
          'sss',
        ],
      },
      {
        entrylist: [
          '<a href="https://www.google.de/" re="noreferrer noopener" target="_blank">        Reisennnnn      </a>',
          '<a href="none" re="noreferrer noopener" target="_blank">           Reisen2          </a>',
          'sss',
        ],
      },
    ],
  },
  methods: {
    showAllEntries(catindex) {
      this.categories[[catindex]].show = !this.categories[[catindex]].show;
    },
    toggleLink(index) {
      console.log(index);
      console.log(this.entries[[index[0]]].entrylist[index[1]]);
    },
  },
});
