import IRequest from '../../core/interface/IRequest';
import * as Gs2Exchange from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private enableAwaitExchange;
    private enableDirectExchange;
    private transactionSetting;
    private exchangeScript;
    private logSetting;
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
    getEnableAwaitExchange(): boolean | null;
    setEnableAwaitExchange(enableAwaitExchange: boolean | null): this;
    withEnableAwaitExchange(enableAwaitExchange: boolean | null): this;
    getEnableDirectExchange(): boolean | null;
    setEnableDirectExchange(enableDirectExchange: boolean | null): this;
    withEnableDirectExchange(enableDirectExchange: boolean | null): this;
    getTransactionSetting(): Gs2Exchange.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Exchange.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Exchange.TransactionSetting | null): this;
    getExchangeScript(): Gs2Exchange.ScriptSetting | null;
    setExchangeScript(exchangeScript: Gs2Exchange.ScriptSetting | null): this;
    withExchangeScript(exchangeScript: Gs2Exchange.ScriptSetting | null): this;
    getLogSetting(): Gs2Exchange.LogSetting | null;
    setLogSetting(logSetting: Gs2Exchange.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Exchange.LogSetting | null): this;
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
