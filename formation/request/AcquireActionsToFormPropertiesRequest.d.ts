import IRequest from '../../core/interface/IRequest';
import * as Gs2Formation from '../model';
export default class AcquireActionsToFormPropertiesRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private moldModelName;
    private index;
    private acquireAction;
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
    getMoldModelName(): string | null;
    setMoldModelName(moldModelName: string | null): this;
    withMoldModelName(moldModelName: string | null): this;
    getIndex(): number | null;
    setIndex(index: number | null): this;
    withIndex(index: number | null): this;
    getAcquireAction(): Gs2Formation.AcquireAction | null;
    setAcquireAction(acquireAction: Gs2Formation.AcquireAction | null): this;
    withAcquireAction(acquireAction: Gs2Formation.AcquireAction | null): this;
    getConfig(): Gs2Formation.Config[] | null;
    setConfig(config: Gs2Formation.Config[] | null): this;
    withConfig(config: Gs2Formation.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireActionsToFormPropertiesRequest;
    toDict(): {
        [key: string]: any;
    };
}
