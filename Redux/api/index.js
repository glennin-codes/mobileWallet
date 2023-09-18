
export const getUserData = async (userId) => {
    const response = await fetch(`http://localhost:3500/api/user/getuser/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    return  await response.json();
  };
  
 export  const makeDeposit = async (userId, amount,phone) => {
   console.log(phone);
    const response = await fetch(`http://localhost:3500/api/deposit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, amount,phone }),
    });
    if (!response.ok) {
      throw new Error('Failed to make a deposit');
    }
    console.log(response);
      const data = await response.json();

    return data;
  };
  
  export const makeWithdrawal = async (userId, amount,phone) => {
    const response = await fetch(`http://localhost:3500/api/widthraw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, amount,phone }),
    });
    if (!response.ok) {
      throw new Error('Failed to make a withdrawal');
    }

    const data = await response.json();

    return data;
  };
  