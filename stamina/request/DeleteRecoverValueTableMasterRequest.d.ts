import IRequest from '../../core/interface/IRequest';
export default class DeleteRecoverValueTableMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private recoverValueTableName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRecoverValueTableName(): string | null;
    setRecoverValueTableName(recoverValueTableName: string | null): this;
    withRecoverValueTableName(recoverValueTableName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteRecoverValueTableMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
