import IRequest from '../../core/interface/IRequest';
import * as Gs2LoginReward from '../model';
export default class MissedReceiveByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private bonusModelName;
    private userId;
    private stepNumber;
    private config;
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
    getBonusModelName(): string | null;
    setBonusModelName(bonusModelName: string | null): this;
    withBonusModelName(bonusModelName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getStepNumber(): number | null;
    setStepNumber(stepNumber: number | null): this;
    withStepNumber(stepNumber: number | null): this;
    getConfig(): Gs2LoginReward.Config[] | null;
    setConfig(config: Gs2LoginReward.Config[] | null): this;
    withConfig(config: Gs2LoginReward.Config[] | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissedReceiveByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
