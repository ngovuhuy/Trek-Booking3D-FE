import Cookies from 'js-cookie';

export async function addToBookingCart(data:any) {
    const response = await fetch('https://localhost:7132/createBookingCart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
               Authorization: `Bearer ${Cookies.get("tokenUser")}`
        },
        body: JSON.stringify(data)
    });

    const text = await response.text();

    if (!response.ok) {
        throw new Error(text || 'Failed to add to booking cart');
    }
   
    try {
        return JSON.parse(text);
    } catch (error) {
        return { message: text };
    }
}

export async function getBookingCartByUserId() {
    const response = await fetch(`https://localhost:7132/getBookingCartByUserId`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cookies.get("tokenUser")}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch booking cart');
    }

    return await response.json();
}
export async function getRoomById(roomId:number) {
    const response = await fetch(`https://localhost:7132/getRoombyId/${roomId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch room details');
    }

    return await response.json();
}

export async function getHotelById(hotelId:number) {
    const response = await fetch(`https://localhost:7132/getHotelById/${hotelId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch hotel details');
    }

    return await response.json();
}

export async function getRoomImagesByRoomId(roomId: number) {
    const response = await fetch(`https://localhost:7132/getRoomImagebyRoomId/${roomId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch room images');
    }
  
    return await response.json();
  }

  export const deleteBookingCart = async (cartId: number): Promise<void> => {
    const response = await fetch(`https://localhost:7132/deleteBookingCart/${cartId}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete booking cart item');
    }
  };