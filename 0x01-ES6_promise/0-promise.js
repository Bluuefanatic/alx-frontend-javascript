function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    const success = true; // This could be based on some condition

    if (success) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  });
}
