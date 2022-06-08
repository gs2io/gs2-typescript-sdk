import IRequest from '../../core/interface/IRequest';
import * as Gs2Quest from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private startQuestScript;
    private completeQuestScript;
    private failedQuestScript;
    private logSetting;
    private queueNamespaceId;
    private keyId;
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
    getTransactionSetting(): Gs2Quest.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Quest.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Quest.TransactionSetting | null): this;
    getStartQuestScript(): Gs2Quest.ScriptSetting | null;
    setStartQuestScript(startQuestScript: Gs2Quest.ScriptSetting | null): this;
    withStartQuestScript(startQuestScript: Gs2Quest.ScriptSetting | null): this;
    getCompleteQuestScript(): Gs2Quest.ScriptSetting | null;
    setCompleteQuestScript(completeQuestScript: Gs2Quest.ScriptSetting | null): this;
    withCompleteQuestScript(completeQuestScript: Gs2Quest.ScriptSetting | null): this;
    getFailedQuestScript(): Gs2Quest.ScriptSetting | null;
    setFailedQuestScript(failedQuestScript: Gs2Quest.ScriptSetting | null): this;
    withFailedQuestScript(failedQuestScript: Gs2Quest.ScriptSetting | null): this;
    getLogSetting(): Gs2Quest.LogSetting | null;
    setLogSetting(logSetting: Gs2Quest.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Quest.LogSetting | null): this;
    /** @deprecated */
    getQueueNamespaceId(): string | null;
    /** @deprecated */
    setQueueNamespaceId(queueNamespaceId: string | null): this;
    /** @deprecated */
    withQueueNamespaceId(queueNamespaceId: string | null): this;
    /** @deprecated */
    getKeyId(): string | null;
    /** @deprecated */
    setKeyId(keyId: string | null): this;
    /** @deprecated */
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
