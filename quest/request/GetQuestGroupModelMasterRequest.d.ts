import IRequest from '../../core/interface/IRequest';
export default class GetQuestGroupModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private questGroupName;
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
    static fromDict(data: {
        [key: string]: any;
    }): GetQuestGroupModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
