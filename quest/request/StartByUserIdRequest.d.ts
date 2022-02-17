import IRequest from '../../core/interface/IRequest';
import * as Gs2Quest from '../model';
export default class StartByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private questGroupName;
    private questName;
    private userId;
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
    getQuestGroupName(): string | null;
    setQuestGroupName(questGroupName: string | null): this;
    withQuestGroupName(questGroupName: string | null): this;
    getQuestName(): string | null;
    setQuestName(questName: string | null): this;
    withQuestName(questName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getForce(): boolean | null;
    setForce(force: boolean | null): this;
    withForce(force: boolean | null): this;
    getConfig(): Gs2Quest.Config[] | null;
    setConfig(config: Gs2Quest.Config[] | null): this;
    withConfig(config: Gs2Quest.Config[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StartByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
