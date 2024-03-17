import IRequest from '../../core/interface/IRequest';
export default class SkipByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private awaitName;
    private skipType;
    private minutes;
    private rate;
    private timeOffsetToken;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getAwaitName(): string | null;
    setAwaitName(awaitName: string | null): this;
    withAwaitName(awaitName: string | null): this;
    getSkipType(): string | null;
    setSkipType(skipType: string | null): this;
    withSkipType(skipType: string | null): this;
    getMinutes(): number | null;
    setMinutes(minutes: number | null): this;
    withMinutes(minutes: number | null): this;
    getRate(): number | null;
    setRate(rate: number | null): this;
    withRate(rate: number | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SkipByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
