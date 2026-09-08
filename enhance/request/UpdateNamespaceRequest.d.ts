import IRequest from '../../core/interface/IRequest';
import * as Gs2Enhance from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private transactionSettingV2;
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
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    /** @deprecated */
    getTransactionSetting(): Gs2Enhance.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2Enhance.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2Enhance.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2Enhance.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2Enhance.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2Enhance.TransactionSettingV2 | null): this;
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
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
