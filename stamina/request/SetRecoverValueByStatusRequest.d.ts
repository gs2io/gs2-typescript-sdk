import IRequest from '../../core/interface/IRequest';
export default class SetRecoverValueByStatusRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private staminaName;
    private accessToken;
    private keyId;
    private signedStatusBody;
    private signedStatusSignature;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getStaminaName(): string | null;
    setStaminaName(staminaName: string | null): this;
    withStaminaName(staminaName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    getSignedStatusBody(): string | null;
    setSignedStatusBody(signedStatusBody: string | null): this;
    withSignedStatusBody(signedStatusBody: string | null): this;
    getSignedStatusSignature(): string | null;
    setSignedStatusSignature(signedStatusSignature: string | null): this;
    withSignedStatusSignature(signedStatusSignature: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetRecoverValueByStatusRequest;
    toDict(): {
        [key: string]: any;
    };
}
