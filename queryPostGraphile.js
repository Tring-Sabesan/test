const axios = require('axios');

async function queryPostGraphile(query = `query MyQuery {
  allTodos {
    nodes {
      completed
      id
    }
  }
}`, variables = {}) {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1', {
      query,
      variables,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error querying PostGraphile:', error);
    throw new Error('Failed to query PostGraphile');
  }
}

// If you want to run this script directly
if (require.main === module) {
  // Example usage
  queryPostGraphile().catch(error => {
    console.error('Error in script:', error);
    process.exitCode = 1; // Set exit code to indicate failure
  });
}

module.exports = queryPostGraphile;
