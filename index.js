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
      { items: 8, text: 'Reisen', show: false, link: '' },
      { items: 8, text: 'Haushalt und Technik', show: false },
      { items: 1, text: 'babysichere Wohnung', show: false },
      { items: 23, text: 'aus dem Möbelhaus', show: false },
      { items: 0, text: 'Babypflege', show: false },
      { items: 0, text: 'Babytextilien', show: false },
      { items: 0, text: 'Babys Ernährung', show: false },
      { items: 0, text: 'Babys erstes Spielzeug', show: false },
    ],
    entries: [
      {
        category: 'Reisen',
        entrylist: [
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Kindersitz (lange Fahrten)',
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Kinder-Reisebett inkl. Matratze', // </a>',
          '<a href="none" rel="noreferrer noopener" target="_blank"> Sonnenblende für das Autofenster </a>',
          '<a href="https://www.amazon.de/Kindersitzunterlage-geeignete-Unterlage-Kindersitze-Sitzschoner/dp/B074XCPNXV/ref=sr_1_2_sspa?adgrpid=70560690429&dchild=1&gclid=EAIaIQobChMItIi2sfus6gIVk9eyCh0nrQ5wEAAYASAAEgKvOPD_BwE&hvadid=352805541305&hvdev=c&hvlocphy=1004234&hvnetw=g&hvqmt=b&hvrand=15100898036617099247&hvtargid=kwd-300922602161&hydadcr=27956_1728818&keywords=unterlage+kindersitz&qid=1593637793&sr=8-2-spons&tag=googhydr08-21&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOEdUNFdCQVZaVURaJmVuY3J5cHRlZElkPUEwMzQ2NDM4MjVYRjZEQjk4SVROUSZlbmNyeXB0ZWRBZElkPUEwMjI5MTEzVjc1NjVITlRaUDlGJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==" rel="noreferrer noopener" target="_blank">Sitzschoner Auto </a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Kombikinderwagen mit Zubehör (Krokodile?)', // </a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Sonnenschirm für Kinderwagen/Sonnendach mit Insektenschutz', // </a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Regenschutz für Kindewagen', // </a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Schlafsack für Kinderwagen', // </a>',
        ],
      },
      {
        category: 'Haushalt und Technik',
        entrylist: [
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Trockner (Tiefe < 58 cm)',
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Nasensekretsauger',
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Babyfon evtl. mit Atemüberwachung',
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Waffeleisen (spülmaschinengeeignet)',
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'plastikfreie Messbecher',
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Nachtlicht',
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Wickeltischstrahler',
          //</a>',
          '<a href="https://www.amazon.de/Wickeltischstrahler-Standheizstrahler-Wandmontage-Kippsicherung-Medizinstandard/dp/B00QMMSB38/ref=sr_1_5?adgrpid=72166197278&dchild=1&gclid=EAIaIQobChMIq_rp3MKL6wIVh6ztCh1W0ACYEAAYASAAEgJoWvD_BwE&hvadid=352844908745&hvdev=c&hvlocphy=9042431&hvnetw=g&hvqmt=e&hvrand=4168861135928881367&hvtargid=kwd-301330742785&hydadcr=15324_1759709&keywords=heizstrahler+reer&qid=1596886764&sr=8-5&tag=googhydr08-21" rel="noreferrer noopener" target="_blank">Infrarotthermometer </a>',
        ],
      },
      {
        category: 'babysichere Wohnung',
        entrylist: [
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Schrank- und Steckdosensicherungen',
          //</a>',
        ],
      },
      {
        category: 'Moebelhaus',
        entrylist: [
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Kinderbett (Buckis?) + Matratze + Anti-Stoß-Kissen', // '<a href="none" rel="noreferrer noopener" target="_blank">
          //</a>',
          '	Wickeltisch? (oder Flurkommode umfunktionieren?)', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Wickelkommode mit Wickelauflage (fürs Babyzimmer)', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Material Wickelaufsatz auf die Waschmaschine', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Wickelauflage', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Kommode fürs Baby ins Wohnzimmer', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Stuhlhussen', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Sofabezug?', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Unterlegteppiche (Zeitungsersatz)', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Tischset rutschfest', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Matratze w', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Matratze Babybett', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'wasserdichte Einlagen fürs Kinderbett', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Hochstuhl mit Sitzverkleinerer', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Laufstall (Buckis?) mit Einlage', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Badewanne fürs Baby (auf Wäschekörben)', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Wäschekorb identisch wie im Bad', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Wannenbrett', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Mülleimer Küche (Plastik + Glas)',
          //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Bettdecke und Kissen', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Krabbeldecke (Buckis? Kropki?)', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'wärmende Unterlage Krabbeldecke?', //</a>', // '<a href="none" rel="noreferrer noopener" target="_blank">
          'Wand-/ Gaderobenhaken Flur', //</a>',
          //</a>',
        ],
      },
      {
        category: 'Babypflege',
        entrylist: [
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          //</a>',
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          //</a>',
        ],
      },
      {
        category: 'Babytextilien',
        entrylist: [
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          //</a>',
        ],
      },
      {
        category: 'Babys Ernährung',
        entrylist: [
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          //</a>',
        ],
      },
      {
        category: 'Spielzeug',
        entrylist: [
          // '<a href="none" rel="noreferrer noopener" target="_blank">
          //</a>',
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
