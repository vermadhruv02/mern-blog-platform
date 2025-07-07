import { IUser } from "../models/user.model";

class ApiResponse{
    
    statusCode: number;
    data: object | string | null;
    success: boolean;
    message: string;
    
    constructor(
        statusCode:number,
        data:object | string | null | IUser ,
        message="Success"
    ){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export { ApiResponse };