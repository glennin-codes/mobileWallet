// const axios = require('axios'); // Import Axios

// export const pollForCallbackData = async () => {
//   try {
//     const maxPollingAttempts = 10; // Maximum number of polling attempts
//     let pollingAttempts = 0;
    
//     while (pollingAttempts < maxPollingAttempts) {
//       // Poll for callback data using Axios
//       const response = await axios.get('http://localhost:3500/api/deposit/call_back/data');
      
//       // if (!response || response.status !== 200) {
//       //   throw new Error('Failed to fetch callback data');
//       // }

//       // const contentType = response.headers['content-type'];
//       // if (!contentType || !contentType.includes('application/json')) {
//       //   // The response does not contain JSON data, continue polling
//       //   pollingAttempts++;
//       //   await new Promise(resolve => setTimeout(resolve, 1000)); // Poll every second (adjust as needed)
//       //   continue;
//       // }

//       const data = response.data;
//       if (data) {
//         // Callback data is ready, you can process it
//         console.log(data);
//         return data;
//       } else {
//         // Callback data is not yet ready, continue polling
//         pollingAttempts++;
//         await new Promise(resolve => setTimeout(resolve, 1000)); // Poll every second (adjust as needed)
//       }
//     }
    
//     // Handle the case where callback data is not available within maxPollingAttempts
//     console.error('Callback data not available within max polling attempts');
//     return null; // Or you can throw an error if needed
//   } catch (error) {
//     console.error(error);
//     // You can throw an error here if needed
//     return null;
//   }
// };
