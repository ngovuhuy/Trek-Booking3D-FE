interface ITourService {
    getToursBySuppierId(supplierId: number): Promise<ITour[]>;
  }
  
  const tourService: ITourService = {
    async getToursBySuppierId(supplierId) {
      console.log(supplierId);
      try {
        const response = await fetch(
          `https://localhost:7132/getTourBySupplierId/${supplierId}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
              // Include the token in the headers
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Retrieve token from localStorage
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch tour list");
        }
        const data = await response.json();
        console.log(data); // Trigger refetch after fetching
        return data;
      } 
      catch (error) {
        console.error("Error fetching tour list:", error);
        throw error;
      }
    },
  };
  export default tourService;
  