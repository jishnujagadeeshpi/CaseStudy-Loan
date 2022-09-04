export class User{
    constructor(
        public name : string = "",
        public dob : string = "",
        public mobile : string = "",
        public email : string = "",
        public password : string = "",
        public cnfPassword : string = ""
    ){}
}

export class LoginUser{
    constructor(
        public name : string = "",
        public password : string = ""
    ){}
}
