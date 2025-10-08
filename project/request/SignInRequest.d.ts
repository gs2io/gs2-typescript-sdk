import IRequest from '../../core/interface/IRequest';
export default class SignInRequest implements IRequest {
    private requestId;
    private contextStack;
    private email;
    private password;
    private otp;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getEmail(): string | null;
    setEmail(email: string | null): this;
    withEmail(email: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    getOtp(): string | null;
    setOtp(otp: string | null): this;
    withOtp(otp: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SignInRequest;
    toDict(): {
        [key: string]: any;
    };
}
