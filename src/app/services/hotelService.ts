interface IHotelService {
  getHotelsBySuppierId(supplierId: number): Promise<IHotel[]>;
}

const hotelService: IHotelService = {
  async getHotelsBySuppierId(supplierId) {
    console.log(supplierId);
    try {
      const response = await fetch(
        `https://localhost:7132/getHotelsBySupplierId/${supplierId}`,
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
        throw new Error("Failed to fetch hotel list");
      }
      const data = await response.json();
      console.log(data); // Trigger refetch after fetching
      return data;
    } 
    catch (error) {
      console.error("Error fetching hotel list:", error);
      throw error;
    }
  },
};
export default hotelService;
