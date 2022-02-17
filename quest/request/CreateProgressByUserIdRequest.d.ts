import IRequest from '../../core/interface/IRequest';
import * as Gs2Quest from '../model';
export default class CreateProgressByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private questModelId;
    private force;
    private config;
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
    getQuestModelId(): string | null;
    setQuestModelId(questModelId: string | null): this;
    withQuestModelId(questModelId: string | null): this;
    getForce(): boolean | null;
    setForce(force: boolean | null): this;
    withForce(force: boolean | null): this;
    getConfig(): Gs2Quest.Config[] | null;
    setConfig(config: Gs2Quest.Config[] | null): this;
    withConfig(config: Gs2Quest.Config[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateProgressByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
