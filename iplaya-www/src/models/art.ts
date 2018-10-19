interface IArtImage {
    gallery_ref: string,
    thumbnail_url: string,    
}

interface IArtLocation {
    category: string,
    distance: number,
    gps_latitude: number,
    gps_longitude: number,
    hour: number,
    minute: number,
    string: string,
}

export default interface IArt {
    description: string,
    uid: string,
    artist: string,
    category: string,
    donation_link: string,
    hometown: string,
    images: IArtImage[],
    location: IArtLocation,
    location_string: string,
    name: string,
    program: string,
    url: string,
}
