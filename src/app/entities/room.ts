interface IRoom{
    roomId: number;
    roomName: string;
    hotelPhone: string;
    hotelEmail: string;
    roomNote: string;
    roomStatus: boolean;
    roomAvailable: number;
    roomPrice: number;
    roomCapacity: number;
    discountPercent: number;
    roomDescription: string;
    hotelDistrict: string;
    hotelId: number;
    hotelInformation: string;
    hotel: {
        hotelId: number;
        hotelName: string;
        hotelPhone: string;
        hotelEmail: string;
        hotelAvatar: string;
        hotelFulDescription: string;
        hotelDistrict: string;
        hotelCity: string;
        hotelInformation: string;
        supplierId: number;
        isVerify: boolean;
        supplier: {
            supplierId: number;
            supplierName: string;
        }
    }
}