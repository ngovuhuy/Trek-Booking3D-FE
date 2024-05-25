interface ITour{
    tourId: number;
    tourName: string;
    tourDescription: string;
    tourPrice: number;
    tourAddress: string;
    tourTime: string|Date;
    tourTransportation: string;
    tourCapacity: number;
    status: boolean;
    supplierId: number;
    supplier: {
        supplierId: number;
        supplierName: string;
    }
}