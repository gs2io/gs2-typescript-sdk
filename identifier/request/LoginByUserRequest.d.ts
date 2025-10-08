import IRequest from '../../core/interface/IRequest';
export default class LoginByUserRequest implements IRequest {
    private requestId;
    private contextStack;
    private userName;
    private password;
    private otp;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    getOtp(): string | null;
    setOtp(otp: string | null): this;
    withOtp(otp: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LoginByUserRequest;
    toDict(): {
        [key: string]: any;
    };
}
