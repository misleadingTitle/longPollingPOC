const http = require("http");
var i = 0;
http.createServer(function (req, res) {
    res.writeHeader(200, {
        "Content-Type": "application/json", "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
    });
    i=0;
    longPolling(res)

}).listen(9999, "0.0.0.0", function () {
    console.log('Server running at http://');
});
/*
new Vue({
	el: '#app',
  data: function() {
  	return {
    	stream: ""
    }
  },
  computed: Vuex.mapState(['posts', 'loading']),
  store,
  created() {
  	//console.log(this.$store)
  	this.getDeta();
  },
  methods: {
  	getDeta: async function() {
    	const { data: stream } = await axios({
      method: 'GET',
      url: 'http://localhost:9999',
      responseType: 'stream',
      onDownloadProgress: (progressEvent) => {
      console.log(progressEvent.currentTarget.response)
      	this.stream = progressEvent.currentTarget.response;
      }
    });
     	this.stream = stream;
    }
  }
})
*/

function longPolling(res) {
    setTimeout(function () {
        if (i > 500) {
            console.log("end", i)
            res.end()
        } else {
            console.log("aaa", i)
            res.write("Valore " + i + "\n");
            i++
            longPolling(res)
        }
    }, 1000)
}