const axios = require('axios');

axios.post('http://localhost:3000/meetings', {
    id: 6,
    first_name: 'Fred',
    last_name: 'Blair',
    email: 'freddyb34@gmail.com'
})