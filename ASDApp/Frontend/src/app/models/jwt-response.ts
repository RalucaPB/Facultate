export interface JwtResponse {
    dataUser:{
        _id:string,
        username:string,
        email:string,
        accessToken:string,
        expiresIn: string,
        autism:boolean,
        sindromDown:boolean
    }
}

