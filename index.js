// Add your code here

// For appending id number to appear on the page.
const body = document.querySelector('body')

let submitData = (username, emailAddress) => {
  // Data being sent in fetch() must be stored in the body of the configurationObject
  const submittedData = {
    name: username,
    email: emailAddress,
  }

  // The configurationObject contains three core components that are needed for standard POST requests: the HTTP verb, the headers, and the body.
  const configurationObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    // By passing an object in, JSON.stringify() will return a string.
    body: JSON.stringify(submittedData),
  }

  // Using fetch() to send GET requests by handling responses to fetch()
  return fetch('http://localhost:3000/users', configurationObject)
    .then((resp) => resp.json())
    .then((json) => {
      body.append(json.id)
    })
    .catch((error) => {
      alert('Kuna Bug Mahali!')
      body.append(error)
    })
}
