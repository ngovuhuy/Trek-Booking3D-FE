interface IUser{
    userId: number;
    userName: string;
    avatar: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    status: boolean;
    isVerify: boolean;
    roleId: number;
    // role:{
    //     roleId: number;
    //     roleName: string;
    //     roleDescription: string
    // }
}