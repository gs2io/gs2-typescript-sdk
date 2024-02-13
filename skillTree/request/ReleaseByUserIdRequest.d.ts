import IRequest from '../../core/interface/IRequest';
import * as Gs2SkillTree from '../model';
export default class ReleaseByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private propertyId;
    private nodeModelNames;
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
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getNodeModelNames(): string[] | null;
    setNodeModelNames(nodeModelNames: string[] | null): this;
    withNodeModelNames(nodeModelNames: string[] | null): this;
    getConfig(): Gs2SkillTree.Config[] | null;
    setConfig(config: Gs2SkillTree.Config[] | null): this;
    withConfig(config: Gs2SkillTree.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReleaseByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
