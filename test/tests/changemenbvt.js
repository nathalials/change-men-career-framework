module.exports = {
  'demo test' : function (client) {
    client
      .url("https://change-men-career-framework-test.mybluemix.net/")
      .waitForElementPresent('body', 1000)
      .end();
  },


};
