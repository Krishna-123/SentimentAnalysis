var $ = require('jquery');

module.exports = {
	getDataForHome: function () {
  var url="http://localhost:3001/homerender.json";
  $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      cache:false,
      data:{
        Switch:'on',
      },
      success: function(Hub) {
        console.log('success');
        console.log(Hub.status);
       this.setState({status: Hub.status});
          // console.log('success' + '{' + user.type + ' ' + user.status + '}');
      }.bind(this),
      error: function(xhr, status, err) {
          console.error(url, status, err.toString());
          console.log('fail to post');
      }
  });
}

}
