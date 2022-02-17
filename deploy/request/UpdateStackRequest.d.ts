import IRequest from '@/gs2/core/interface/IRequest';
export declare class UpdateStackRequest implements IRequest {
    private requestId;
    private contextStack;
    private stackName;
    private description;
    private template;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getStackName(): string | null;
    setStackName(stackName: string | null): this;
    withStackName(stackName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getTemplate(): string | null;
    setTemplate(template: string | null): this;
    withTemplate(template: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateStackRequest;
    toDict(): {
        [key: string]: any;
    };
}
