const axios = require('axios').default

const getAllGigs = async () => {
  const response = await axios.get('https://mocki.io/v1/9e191462-d090-43af-ade2-f69f9f286fd2',{//TODO: URL Deployed
      
  });
  return response.data;
}

module.exports={getAllGigs}