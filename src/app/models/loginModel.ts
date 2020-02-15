
export class LoginModel {
    email?: string;
    password?: string;
    rememberMe?: boolean;

    constructor(un = '', ps = '', rem = false) {
        this.email = un;
        this.password = ps;
        this.rememberMe = rem;
    }

    public static clearAll(model) {
        if (!model)
            return;

        model.email = '';
        model.password = '';
        model.rememberMe = false;
    }
}
