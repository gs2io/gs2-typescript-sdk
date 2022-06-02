import IRequest from '../../core/interface/IRequest';
import * as Gs2Enhance from '../model';
export default class EndByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private rateName;
    private progressName;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getProgressName(): string | null;
    setProgressName(progressName: string | null): this;
    withProgressName(progressName: string | null): this;
    getConfig(): Gs2Enhance.Config[] | null;
    setConfig(config: Gs2Enhance.Config[] | null): this;
    withConfig(config: Gs2Enhance.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EndByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
