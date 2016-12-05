module.exports = {
  db: {
    mongo: {
      mongodbUri: 'mongodb://username:password@ds119718.mlab.com:19718/learning-record-store',
      // http://blog.mlab.com/2014/04/mongodb-driver-mongoose/
      mongooseOptions: {
        server: {
          socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
          }
        },
        replset: {
          socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
          }
        }
      }
    }
  },
  server: {
    port: 5000
  }
};
