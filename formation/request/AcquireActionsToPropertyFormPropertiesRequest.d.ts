import IRequest from '../../core/interface/IRequest';
import * as Gs2Formation from '../model';
export default class AcquireActionsToPropertyFormPropertiesRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private formModelName;
    private propertyId;
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
    getFormModelName(): string | null;
    setFormModelName(formModelName: string | null): this;
    withFormModelName(formModelName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getAcquireAction(): Gs2Formation.AcquireAction | null;
    setAcquireAction(acquireAction: Gs2Formation.AcquireAction | null): this;
    withAcquireAction(acquireAction: Gs2Formation.AcquireAction | null): this;
    getConfig(): Gs2Formation.AcquireActionConfig[] | null;
    setConfig(config: Gs2Formation.AcquireActionConfig[] | null): this;
    withConfig(config: Gs2Formation.AcquireActionConfig[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireActionsToPropertyFormPropertiesRequest;
    toDict(): {
        [key: string]: any;
    };
}
