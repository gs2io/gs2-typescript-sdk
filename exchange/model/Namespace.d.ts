import IModel from '../../core/interface/IModel';
import * as Gs2Exchange from '../../exchange/model';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private enableDirectExchange;
    private enableAwaitExchange;
    private transactionSetting;
    private exchangeScript;
    private incrementalExchangeScript;
    private acquireAwaitScript;
    private logSetting;
    private createdAt;
    private updatedAt;
    private queueNamespaceId;
    private keyId;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null): string | null;
    getNamespaceId(): string | null;
    setNamespaceId(namespaceId: string | null): this;
    withNamespaceId(namespaceId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getEnableDirectExchange(): boolean | null;
    setEnableDirectExchange(enableDirectExchange: boolean | null): this;
    withEnableDirectExchange(enableDirectExchange: boolean | null): this;
    getEnableAwaitExchange(): boolean | null;
    setEnableAwaitExchange(enableAwaitExchange: boolean | null): this;
    withEnableAwaitExchange(enableAwaitExchange: boolean | null): this;
    getTransactionSetting(): Gs2Exchange.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Exchange.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Exchange.TransactionSetting | null): this;
    getExchangeScript(): Gs2Exchange.ScriptSetting | null;
    setExchangeScript(exchangeScript: Gs2Exchange.ScriptSetting | null): this;
    withExchangeScript(exchangeScript: Gs2Exchange.ScriptSetting | null): this;
    getIncrementalExchangeScript(): Gs2Exchange.ScriptSetting | null;
    setIncrementalExchangeScript(incrementalExchangeScript: Gs2Exchange.ScriptSetting | null): this;
    withIncrementalExchangeScript(incrementalExchangeScript: Gs2Exchange.ScriptSetting | null): this;
    getAcquireAwaitScript(): Gs2Exchange.ScriptSetting | null;
    setAcquireAwaitScript(acquireAwaitScript: Gs2Exchange.ScriptSetting | null): this;
    withAcquireAwaitScript(acquireAwaitScript: Gs2Exchange.ScriptSetting | null): this;
    getLogSetting(): Gs2Exchange.LogSetting | null;
    setLogSetting(logSetting: Gs2Exchange.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Exchange.LogSetting | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
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
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Namespace | null;
    toDict(): {
        [key: string]: any;
    };
}
