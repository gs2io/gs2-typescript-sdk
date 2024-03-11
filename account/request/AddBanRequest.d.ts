import IRequest from '../../core/interface/IRequest';
import * as Gs2Account from '../model';
export default class AddBanRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private banStatus;
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
    getBanStatus(): Gs2Account.BanStatus | null;
    setBanStatus(banStatus: Gs2Account.BanStatus | null): this;
    withBanStatus(banStatus: Gs2Account.BanStatus | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddBanRequest;
    toDict(): {
        [key: string]: any;
    };
}
