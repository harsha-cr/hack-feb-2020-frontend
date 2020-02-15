
export class SignUpModel {
  username?: string;
  mobileNumber?: string;
  email?: string;
  password?: string;
  profilePicture?: string;
  dob?: any;
  address?: string;
  designationId?: any;
  statusId?: any;
  roleId?: any;
  // tslint:disable-next-line: max-line-length
  constructor( username = "", mobileNumber = "",email=" ", password = " ",profilePicture = " ",dob = " ", address = " ",designationId = " ",statusId = " ",roleId = " ") 
  {
    this.username = username;
    this.mobileNumber = mobileNumber;
    this.email = email;
    this.password = password;
    this.profilePicture = profilePicture;
    this.dob = dob;
    this.address = address;
    this.designationId = designationId;
    this.statusId = statusId;
    this.roleId = roleId;
  }
  public static clearAll(model) {
    if (!model) {
      return;
    }
 
    model.username = '';
    model.mobileNumber = ' ';
    model.email = ' ';
    model.password = ' ';
    model.profilePicture = ' ';
    model.dob = '';
    model.address = ' ';
    model.designationId = ' ';
    model.statusId = ' ';
    model.roleId = ' ';
    }
 
    
 
  public static isValid(obj) {
    return !obj || !obj.name ? false : true;
  }
}