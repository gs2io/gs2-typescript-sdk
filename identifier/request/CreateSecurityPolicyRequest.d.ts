import IRequest from '../../core/interface/IRequest';
export default class CreateSecurityPolicyRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private policy;
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
    getPolicy(): string | null;
    setPolicy(policy: string | null): this;
    withPolicy(policy: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateSecurityPolicyRequest;
    toDict(): {
        [key: string]: any;
    };
}
