import IRequest from '../../core/interface/IRequest';
export default class UpdateTakeOverRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private type;
    private oldPassword;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getType(): number | null;
    setType(type: number | null): this;
    withType(type: number | null): this;
    getOldPassword(): string | null;
    setOldPassword(oldPassword: string | null): this;
    withOldPassword(oldPassword: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateTakeOverRequest;
    toDict(): {
        [key: string]: any;
    };
}