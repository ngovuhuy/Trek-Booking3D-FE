interface IRoomService {
    getRoomsByHotelId(hotelId: number): Promise<IRoom[]>;
    createRoom(room: IRoom): Promise<IRoom>;
    getRoomById(roomId: number): Promise<IRoom[]>;
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

      async getRoomById(roomId) {
        console.log(roomId);
        try {
          const response = await fetch(
            `https://localhost:7132/getRoombyId/${roomId}`,
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
            throw new Error("Failed to fetch room");
          }
          const data = await response.json();
          console.log(data); // Trigger refetch after fetching
          return data;
        } 
        catch (error) {
          console.error("Error fetching room:", error);
          throw error;
        }
      },

      async createRoom(room) {
        try {
          const response = await fetch(
            `https://localhost:7132/createRoom`,
            {
              method: "POST",
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`, // Retrieve token from localStorage
              },
              body: JSON.stringify(room),
            }
          );
          if (!response.ok) {
            throw new Error("Failed to create Room");
          }
          const data = await response.json();
          console.log(data); // Trigger refetch after fetching
          return data;
        } catch (error) {
          console.error("Error creating room:", error);
          throw error;
        }
      },
}
export default roomService;