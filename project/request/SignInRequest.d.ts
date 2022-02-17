import IRequest from '@/gs2/core/interface/IRequest';
export declare class SignInRequest implements IRequest {
    private requestId;
    private contextStack;
    private email;
    private password;
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
    static fromDict(data: {
        [key: string]: any;
    }): SignInRequest;
    toDict(): {
        [key: string]: any;
    };
}
