import IRequest from '../../core/interface/IRequest';
import * as Gs2Datastore from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private logSetting;
    private doneUploadScript;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getTransactionSetting(): Gs2Datastore.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Datastore.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Datastore.TransactionSetting | null): this;
    getLogSetting(): Gs2Datastore.LogSetting | null;
    setLogSetting(logSetting: Gs2Datastore.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Datastore.LogSetting | null): this;
    getDoneUploadScript(): Gs2Datastore.ScriptSetting | null;
    setDoneUploadScript(doneUploadScript: Gs2Datastore.ScriptSetting | null): this;
    withDoneUploadScript(doneUploadScript: Gs2Datastore.ScriptSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
