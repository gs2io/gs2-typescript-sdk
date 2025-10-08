import IRequest from '../../core/interface/IRequest';
export default class DoTakeOverRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private type;
    private userIdentifier;
    private password;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getType(): number | null;
    setType(type: number | null): this;
    withType(type: number | null): this;
    getUserIdentifier(): string | null;
    setUserIdentifier(userIdentifier: string | null): this;
    withUserIdentifier(userIdentifier: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DoTakeOverRequest;
    toDict(): {
        [key: string]: any;
    };
}
