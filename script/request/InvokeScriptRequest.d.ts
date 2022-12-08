import IRequest from '../../core/interface/IRequest';
export default class InvokeScriptRequest implements IRequest {
    private requestId;
    private contextStack;
    private scriptId;
    private userId;
    private args;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getScriptId(): string | null;
    setScriptId(scriptId: string | null): this;
    withScriptId(scriptId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getArgs(): string | null;
    setArgs(args: string | null): this;
    withArgs(args: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InvokeScriptRequest;
    toDict(): {
        [key: string]: any;
    };
}
