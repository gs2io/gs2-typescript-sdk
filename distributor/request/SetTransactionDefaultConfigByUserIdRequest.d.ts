import IRequest from '../../core/interface/IRequest';
import * as Gs2Distributor from '../model';
export default class SetTransactionDefaultConfigByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private userId;
    private config;
    private timeOffsetToken;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getConfig(): Gs2Distributor.Config[] | null;
    setConfig(config: Gs2Distributor.Config[] | null): this;
    withConfig(config: Gs2Distributor.Config[] | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetTransactionDefaultConfigByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
