

const app = new Vue({
  el: '#app',
  name: 'Typeahead',
  data() {
    return {
        items: [],
        query: ''
    }
  },

  props: {
    source: {
      type: [String, Array],
      required: true
    },
    filterKey: {
      type: String,
      required: true
    },
    startAt: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String,
      default: ''
    }
  },

  methods: {
    fetchItems(){
      if(typeof this.source === 'string'){
        fetch(this.source)
          .then(stream => stream.json())
          .then(data => this.items = data)
          .catch(error => console.error(error))
      } else {
        this.items = this.source
      }
    },
    reset(){
      this.query = ''
    }
  },

  mounted(){
    this.fetchItems()
  },

  computed: {
    filtered(){
      if(this.query.length >= this.startAt){
        return this.items
        // .filter(item => {
        //   if(item.hasOwnProperty(this.filterKey)){
        //     return item[this.filterKey]
        //     .toLowerCase()
        //     .indexOf(this.query.toLowerCase()) > -1
        //   } else {
        //     console.error(`Seems like property you passed down ${this.filterKey} doesn't exist on object !`)
        //   }
        // })
      }
    },
    isEmpty(){
      if(typeof this.filtered === 'undefined'){
        return false
      } else {
        return this.filtered.length < 1
      }
    }
  }

});
