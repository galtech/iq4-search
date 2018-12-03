fetch('http://api.heylinhosting.com/projects')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });


// const app = new Vue({
//   el: '#app',
  // name: 'Typeahead',
  // props: {
  //   source: {
  //     type: [String, Array],
  //     required: true
  //   },
  //   filterKey: {
  //     type: String,
  //     required: true
  //   },
  //   startAt: {
  //     type: Number,
  //     default: 3
  //   },
  //   placeholder: {
  //     type: String,
  //     default: ''
  //   }
  // }
  //
  // methods: {
  //   fetchItems(){
  //     if(typeof this.source === 'string'){
  //       fetch(this.source)
  //         .then(stream => stream.json())
  //         .then(data => this.jobs = data)
  //         .catch(error => console.error(error))
  //     } else {
  //       this.items = this.source
  //     }
  //   },
  //   reset(){
  //     this.query = ''
  //   }
  // },
  //
  // computed: {
  //   filtered(){
  //     if(this.query.length >= this.startAt){
  //       return this.jobs.filter(item => {
  //         if(job.hasOwnProperty(this.filterKey)){
  //           return item[this.filterKey]
  //           .toLowerCase()
  //           .indexOf(this.query.toLowerCase()) > -1
  //         } else {
  //           console.error(`Seems like property you passed down ${this.filterKey} doesn't exist on object !`)
  //         }
  //       })
  //     }
  //   },
  //   isEmpty(){
  //     if(typeof this.filtered === 'undefined'){
  //       return false
  //     } else {
  //       return this.filtered.length < 1
  //     }
  //   }
  // },
  //
  // mounted(){
  //   this.fetchItems()
  // },

  // data {
  //   return {
  //       jobs: [],
  //       query: ''
  //   }
  // }

  // created: async function() {
  //   await fetch('http://api.dataatwork.org/v1/jobs/autocomplete')
  //   .then(response => response.json())
  //   .then(json => {
  //       this.jobs = json.jobs
  //   })
  // }

// });
