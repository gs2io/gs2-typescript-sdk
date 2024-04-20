import IRequest from '../../core/interface/IRequest';
import * as Gs2Mission from '../model';
export default class SetCounterByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private counterName;
    private userId;
    private values;
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
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getValues(): Gs2Mission.ScopedValue[] | null;
    setValues(values: Gs2Mission.ScopedValue[] | null): this;
    withValues(values: Gs2Mission.ScopedValue[] | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetCounterByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
