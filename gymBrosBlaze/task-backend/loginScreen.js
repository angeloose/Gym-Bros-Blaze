const handleLogin = async () => {
    try {
      const response = await fetch("https://your-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("Login response:", data);
      // Handle success (e.g., navigate, store token)
    } catch (error) {
      console.error("Login error:", error);
    }
  };