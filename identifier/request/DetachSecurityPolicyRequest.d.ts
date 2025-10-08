import IRequest from '../../core/interface/IRequest';
export default class DetachSecurityPolicyRequest implements IRequest {
    private requestId;
    private contextStack;
    private userName;
    private securityPolicyId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    getSecurityPolicyId(): string | null;
    setSecurityPolicyId(securityPolicyId: string | null): this;
    withSecurityPolicyId(securityPolicyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DetachSecurityPolicyRequest;
    toDict(): {
        [key: string]: any;
    };
}
