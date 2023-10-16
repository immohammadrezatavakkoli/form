const sendDataToServer = async (data) => {
  try {
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    throw new Error(error.message || "Network Error");
  }
};

export default sendDataToServer;
