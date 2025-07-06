{/**

// normal
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });


// promise.all

    const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts"
];

Promise.all(urls.map(url => fetch(url).then(res => {
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
})))
  .then(([users, posts]) => {
    console.log("Users:", users);
    console.log("Posts:", posts);
  })
  .catch(error => {
    console.error("Error during API calls:", error);
  });

    // 2
    const fetchUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    });
};

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json();
    });
};

Promise.all([fetchUsers(), fetchPosts()])
  .then(([users, posts]) => {
    console.log("Users:", users);
    console.log("Posts:", posts);
  })
  .catch(error => {
    console.error("Error in API calls:", error);
  });  
   
  


  // 3
const getData = async () => {
  try {
    const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
    console.log("Users:", users);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
};

getData();


const api1 = fetch('/api/data1'); // resolves
const api2 = fetch('/api/data2'); // fails
const api3 = fetch('/api/data3'); // resolves

Promise.all([api1, api2, api3])
  .then((responses) => {
    // This won't run if any API fails
    return Promise.all(responses.map(res => res.json()));
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    // This will run if any API fails
    console.error('One of the APIs failed:', error);
  });


*/}

// allSettled

const safeFetch = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return await res.json();
  } catch (error) {
    throw error;
  }
};

Promise.allSettled([
  safeFetch("https://jsonplaceholder.typicode.com/users"),
  safeFetch("https://jsonplaceholder.typicode.com/posts")
])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Safe fetch ${index + 1}:`, result.value);
      } else {
        console.error(`Safe fetch error ${index + 1}:`, result.reason);
      }
    });
  });



// 2

const fetchData = async () => {
  const results = await Promise.allSettled([
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
  ]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Async result ${index + 1}:`, result.value);
    } else {
      console.error(`Async error ${index + 1}:`, result.reason);
    }
  });
};

fetchData();
// 3

const fetchData = async () => {
  const results = await Promise.allSettled([
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
  ]);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Async result ${index + 1}:`, result.value);
    } else {
      console.error(`Async error ${index + 1}:`, result.reason);
    }
  });
};

fetchData();

// pollyfil for Object

function deepCopy(obj) {
  // Handle null or non-object types (primitives)
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepCopy(obj[i]);
    }
    return copy;
  }

  // Handle plain objects
  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}


// object create all ways
// methods
// deep clone with and without inbuilt functionality
// other dsa
// differemce between __proto__ and prototype, prototype_chain
// object copy and array copy without inbuilt
// new Set and new Map
// weakMap and weakset
// class
// this
// call apply and bind
// Object.createProperty or Properties
// Object.defineProperties.

