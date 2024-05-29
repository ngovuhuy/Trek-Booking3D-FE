interface IRoomService {
    getRoomsByHotelId(hotelId: number): Promise<ITourImage[]>;
}

const roomService: IRoomService = {
    async getRoomsByHotelId(hotelId) {
        console.log(hotelId);
        try {
          const response = await fetch(
            `https://localhost:7132/getRoombyHotelId/${hotelId}`,
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
            throw new Error("Failed to fetch room list");
          }
          const data = await response.json();
          console.log(data); // Trigger refetch after fetching
          return data;
        } 
        catch (error) {
          console.error("Error fetching room list:", error);
          throw error;
        }
      },
}
export default roomService;