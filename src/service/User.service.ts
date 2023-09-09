import { User } from "../model/entities/User.entity"

export interface IUser {
    name: string,
    lastname: string,
    email: string,
    phone: string,
    adress: string,
}

export const createUser = async(user: IUser) => {
    try {
        const newUser = new User();
        newUser['name'] = user.name;
        newUser['lastname'] = user.lastname;
        newUser['email'] = user.email;
        newUser['phone'] = user.phone;
        newUser['adress'] = user.adress;
        return await newUser.save();
    } catch (error) {
        console.log(error);
    }
}