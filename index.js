const server = require('./server.js');
const PORT = 6119;

server.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`)
})