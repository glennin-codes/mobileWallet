export const pollForCallbackData = async () => {
    try {
      const response = await fetch('http://localhost:3500/api/deposit/call_back/data');
      if (!response.ok) {
        throw new Error('Failed to fetch callback data');
      }
      const data = await response.json();
      if (data && data.callbackDataReady) {
        // Callback data is ready, you can process it
        console.log(data.callbackData);
        return data;
      } else {
        // Callback data is not yet ready, continue polling
        setTimeout(pollForCallbackData, 1000); // Poll every second (adjust as needed)
      }
    } catch (error) {
      console.error(error);
    }
  };