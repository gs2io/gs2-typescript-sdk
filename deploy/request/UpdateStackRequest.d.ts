import IRequest from '../../core/interface/IRequest';
export default class UpdateStackRequest implements IRequest {
    private requestId;
    private contextStack;
    private stackName;
    private description;
    private mode;
    private template;
    private uploadToken;
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
    getMode(): string | null;
    setMode(mode: string | null): this;
    withMode(mode: string | null): this;
    getTemplate(): string | null;
    setTemplate(template: string | null): this;
    withTemplate(template: string | null): this;
    getUploadToken(): string | null;
    setUploadToken(uploadToken: string | null): this;
    withUploadToken(uploadToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateStackRequest;
    toDict(): {
        [key: string]: any;
    };
}
