import IRequest from '../../core/interface/IRequest';
export default class ValidateRequest implements IRequest {
    private requestId;
    private contextStack;
    private template;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getTemplate(): string | null;
    setTemplate(template: string | null): this;
    withTemplate(template: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ValidateRequest;
    toDict(): {
        [key: string]: any;
    };
}
