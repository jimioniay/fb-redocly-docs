var request = require('request');
var options = {
  method: 'POST',
  url: 'https://api.freshbooks.com/auth/oauth/token',
  headers: {
    'Content-Type': 'application/json',
  },
  formData: {
    grant_type: 'authorization_code',
    code: '8b8f209586b84f112f2bc4e15620702e26dc93f402f0374ce71cd497090f4b32',
    client_id:
      '3c67785d9cf4cad97e7a8fec4bc77c5674e77e1890d0ba86de962cacb27bf847',
    client_secret:
      'adbd135a5054ff1216100acc51f89b191e7eb94cfe38b45eb6d333675974f255',
    redirect_uri: 'https://webhook.site/cc801071-8e12-40f0-b4e3-61cf6e22342c',
  },
};
request(options, function(error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
