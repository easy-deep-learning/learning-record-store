const app = require('./api/server');

// Start application
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
