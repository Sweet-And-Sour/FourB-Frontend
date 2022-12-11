
self.onmessage = (event) => {
  self.importScripts('https://unpkg.com/axios/dist/axios.min.js')

  let accessToken = event.data;

  setInterval(async () => {
    if (accessToken && accessToken !== '') {
      try {
        const response = await axios
          .get('/api/sign/refresh', {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            }
          });
        const token = response.data.access_token;
    
        if (token) {
          postMessage(token);
          accessToken = token;
        } else {
          postMessage('');
          accessToken = '';
        }
      } catch (error) {
        console.log(error);
        postMessage('');
        accessToken = '';
      }
    }
  }, 30000);
};

