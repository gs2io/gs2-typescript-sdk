import IRequest from '../../core/interface/IRequest';
export default class ForgetRequest implements IRequest {
    private requestId;
    private contextStack;
    private email;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getEmail(): string | null;
    setEmail(email: string | null): this;
    withEmail(email: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ForgetRequest;
    toDict(): {
        [key: string]: any;
    };
}
