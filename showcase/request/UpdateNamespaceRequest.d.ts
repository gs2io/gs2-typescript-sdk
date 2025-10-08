import IRequest from '../../core/interface/IRequest';
import * as Gs2Showcase from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private buyScript;
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
    getTransactionSetting(): Gs2Showcase.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Showcase.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Showcase.TransactionSetting | null): this;
    getBuyScript(): Gs2Showcase.ScriptSetting | null;
    setBuyScript(buyScript: Gs2Showcase.ScriptSetting | null): this;
    withBuyScript(buyScript: Gs2Showcase.ScriptSetting | null): this;
    getLogSetting(): Gs2Showcase.LogSetting | null;
    setLogSetting(logSetting: Gs2Showcase.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Showcase.LogSetting | null): this;
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
