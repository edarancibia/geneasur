import { User } from "../model/entities/User.entity";
import { UserRequest } from "../model/entities/UserRequest.entity";

export interface IcreateUserRerquestInput {
    requestedUser: User,
    userApprover: User | null, 
}

interface CreateUserRequestResponse {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    requestedUser: User;
    userApprover: User | null;
}  
  

export const createRequest = async (userData: IcreateUserRerquestInput): Promise<CreateUserRequestResponse> => {
    try {
        const newUserRequest = new UserRequest();
        newUserRequest.requestedUser = userData.requestedUser;
        
        if(userData.userApprover){
            newUserRequest.userApprover = userData.userApprover;
        }

        const createdUserRequest = await newUserRequest.save();

        const response = {
            id: createdUserRequest.id,
            createdAt: createdUserRequest.createdAt,
            updatedAt: createdUserRequest.updatedAt,
            requestedUser: createdUserRequest.requestedUser,
            userApprover: createdUserRequest.userApprover,
        }

        return response;
    } catch (error) {
        throw error;
    }
}