import IRequest from '../../core/interface/IRequest';
import * as Gs2Dictionary from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private entryScript;
    private duplicateEntryScript;
    private logSetting;
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
    getTransactionSetting(): Gs2Dictionary.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Dictionary.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Dictionary.TransactionSetting | null): this;
    getEntryScript(): Gs2Dictionary.ScriptSetting | null;
    setEntryScript(entryScript: Gs2Dictionary.ScriptSetting | null): this;
    withEntryScript(entryScript: Gs2Dictionary.ScriptSetting | null): this;
    getDuplicateEntryScript(): string | null;
    setDuplicateEntryScript(duplicateEntryScript: string | null): this;
    withDuplicateEntryScript(duplicateEntryScript: string | null): this;
    getLogSetting(): Gs2Dictionary.LogSetting | null;
    setLogSetting(logSetting: Gs2Dictionary.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Dictionary.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
