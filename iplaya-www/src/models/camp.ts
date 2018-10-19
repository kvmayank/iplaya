interface ICampLocation {
    dimensions: string,
    frontage: string,
    intersection: string,
    intersection_type: string,
    string: string,
}

export default interface ICamp {
    description: string,
    name: string,
    _id: string,
    uid: string,
    contact_email: string,
    hometown: string,
    location: ICampLocation,
    location_string: string,
    url: string,
}
