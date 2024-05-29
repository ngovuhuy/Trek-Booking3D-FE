interface ITourImage{
    tourImageId: number;
    tourImageURL: string;
    tourId: number;
    tour: {
        tourId: number;
        tourName: string;
    }
}