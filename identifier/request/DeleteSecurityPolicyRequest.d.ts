import IRequest from '../../core/interface/IRequest';
export default class DeleteSecurityPolicyRequest implements IRequest {
    private requestId;
    private contextStack;
    private securityPolicyName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getSecurityPolicyName(): string | null;
    setSecurityPolicyName(securityPolicyName: string | null): this;
    withSecurityPolicyName(securityPolicyName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteSecurityPolicyRequest;
    toDict(): {
        [key: string]: any;
    };
}
