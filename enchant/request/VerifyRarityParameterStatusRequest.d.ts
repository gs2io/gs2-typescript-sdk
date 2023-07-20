import IRequest from '../../core/interface/IRequest';
export default class VerifyRarityParameterStatusRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private parameterName;
    private accessToken;
    private propertyId;
    private verifyType;
    private parameterValueName;
    private parameterCount;
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
    getParameterName(): string | null;
    setParameterName(parameterName: string | null): this;
    withParameterName(parameterName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getVerifyType(): string | null;
    setVerifyType(verifyType: string | null): this;
    withVerifyType(verifyType: string | null): this;
    getParameterValueName(): string | null;
    setParameterValueName(parameterValueName: string | null): this;
    withParameterValueName(parameterValueName: string | null): this;
    getParameterCount(): number | null;
    setParameterCount(parameterCount: number | null): this;
    withParameterCount(parameterCount: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyRarityParameterStatusRequest;
    toDict(): {
        [key: string]: any;
    };
}
