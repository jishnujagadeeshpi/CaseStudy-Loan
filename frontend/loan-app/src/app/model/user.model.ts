export class User{
    constructor(
        public name : string = "",
        public dob : string = "",
        public mobile : string = "",
        public email : string = "",
        public password : string = "",
        public cnfPassword : string = "",
        public address : string = "",
        public nationality : string = "",
        public aadhaar : string = "",
        public empId : string = "",
        public amount : string = "",
        public pan : string = "",
        public status : string =''
    ){}
}

export class LoginUser{
    constructor(
        public name : string = "",
        public password : string = ""
    ){}
}

export class applyDetails{
    constructor(
        public address : string = "",
        public nationality : string = "",
        public aadhaar : string = "",
        public empId : string = "",
        public amount : string = "",
        public pan : string = ""
    ){}
}

