export class FormMessage {
    message?: string;
    status?: FormMessageStatus;

    constructor(message = '', state = FormMessageStatus.NONE) {
        this.message = message;
        this.status = state;
    }

    public static reset(obj) {
        if (!obj) return;
        obj.message = '';
        obj.status = FormMessageStatus.NONE;
    }
}

export enum FormMessageStatus {
    NONE = 0,
    SUCCESS = 1,
    FAILED = 2,
    PENDING = 3,
    READY = 4
};
