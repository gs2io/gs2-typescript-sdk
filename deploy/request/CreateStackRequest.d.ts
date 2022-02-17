import IRequest from '@/gs2/core/interface/IRequest';
export declare class CreateStackRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private template;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getTemplate(): string | null;
    setTemplate(template: string | null): this;
    withTemplate(template: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateStackRequest;
    toDict(): {
        [key: string]: any;
    };
}
