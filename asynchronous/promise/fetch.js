// fetch("https://jsonplaceholder.typicode.com/users/100")
//   .then((user) => {
//     console.log("User Data:", user);
//   })
//   .catch((error) => {
//     console.error("Failed to fetch user:", error);
//   });

// fetch("https://thisurldoesnotexist.example1234.com")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); // Parse response body
//   })
//   .then((user) => {
//     console.log("User Data:", user); // This is the real data
//   })
//   .catch((error) => {
//     console.log(error);
//   });

navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then((stream) => {
    console.log("Stream granted:", stream);
  })
  .catch((err) => {
    console.log(err);
  });
