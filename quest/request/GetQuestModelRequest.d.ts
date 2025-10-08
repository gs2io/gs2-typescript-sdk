import IRequest from '../../core/interface/IRequest';
export default class GetQuestModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private questGroupName;
    private questName;
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
    static fromDict(data: {
        [key: string]: any;
    }): GetQuestModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
