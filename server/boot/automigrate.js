module.exports = (server) => {
  var ds = server.datasources.db;
  var lbTables = ['testbadsql'];
  ds.automigrate(lbTables, function(er) {
    if (er) throw er;
    console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
  });
};
