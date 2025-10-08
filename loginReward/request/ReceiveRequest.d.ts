import IRequest from '../../core/interface/IRequest';
import * as Gs2LoginReward from '../model';
export default class ReceiveRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private bonusModelName;
    private accessToken;
    private config;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getConfig(): Gs2LoginReward.Config[] | null;
    setConfig(config: Gs2LoginReward.Config[] | null): this;
    withConfig(config: Gs2LoginReward.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReceiveRequest;
    toDict(): {
        [key: string]: any;
    };
}
