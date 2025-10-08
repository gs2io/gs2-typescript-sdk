import IRequest from '../../core/interface/IRequest';
import * as Gs2Enhance from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private enhanceScript;
    private logSetting;
    private enableDirectEnhance;
    private queueNamespaceId;
    private keyId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getTransactionSetting(): Gs2Enhance.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Enhance.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Enhance.TransactionSetting | null): this;
    getEnhanceScript(): Gs2Enhance.ScriptSetting | null;
    setEnhanceScript(enhanceScript: Gs2Enhance.ScriptSetting | null): this;
    withEnhanceScript(enhanceScript: Gs2Enhance.ScriptSetting | null): this;
    getLogSetting(): Gs2Enhance.LogSetting | null;
    setLogSetting(logSetting: Gs2Enhance.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Enhance.LogSetting | null): this;
    /** @deprecated */
    getEnableDirectEnhance(): boolean | null;
    /** @deprecated */
    setEnableDirectEnhance(enableDirectEnhance: boolean | null): this;
    /** @deprecated */
    withEnableDirectEnhance(enableDirectEnhance: boolean | null): this;
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
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
