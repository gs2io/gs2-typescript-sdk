import IRequest from '../../core/interface/IRequest';
export default class UpdateSecurityPolicyRequest implements IRequest {
    private requestId;
    private contextStack;
    private securityPolicyName;
    private description;
    private policy;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getSecurityPolicyName(): string | null;
    setSecurityPolicyName(securityPolicyName: string | null): this;
    withSecurityPolicyName(securityPolicyName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getPolicy(): string | null;
    setPolicy(policy: string | null): this;
    withPolicy(policy: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateSecurityPolicyRequest;
    toDict(): {
        [key: string]: any;
    };
}
