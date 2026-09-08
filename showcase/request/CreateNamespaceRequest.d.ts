import IRequest from '../../core/interface/IRequest';
import * as Gs2Showcase from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private transactionSettingV2;
    private buyScript;
    private queueNamespaceId;
    private keyId;
    private logSetting;
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
    /** @deprecated */
    getTransactionSetting(): Gs2Showcase.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2Showcase.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2Showcase.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2Showcase.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2Showcase.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2Showcase.TransactionSettingV2 | null): this;
    getBuyScript(): Gs2Showcase.ScriptSetting | null;
    setBuyScript(buyScript: Gs2Showcase.ScriptSetting | null): this;
    withBuyScript(buyScript: Gs2Showcase.ScriptSetting | null): this;
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
    getLogSetting(): Gs2Showcase.LogSetting | null;
    setLogSetting(logSetting: Gs2Showcase.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Showcase.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
