var axios = require('axios');
module.exports = async name => {
if(!name) throw Error('Please enter the name')
try {
if(await axios.get(`https://registry.npmjs.org/${name}`)) return true
}
catch(err) {
return !err.response.status==404
}   
}