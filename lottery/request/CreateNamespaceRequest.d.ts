import IRequest from '../../core/interface/IRequest';
import * as Gs2Lottery from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private lotteryTriggerScriptId;
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
    getTransactionSetting(): Gs2Lottery.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Lottery.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Lottery.TransactionSetting | null): this;
    getLotteryTriggerScriptId(): string | null;
    setLotteryTriggerScriptId(lotteryTriggerScriptId: string | null): this;
    withLotteryTriggerScriptId(lotteryTriggerScriptId: string | null): this;
    getLogSetting(): Gs2Lottery.LogSetting | null;
    setLogSetting(logSetting: Gs2Lottery.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Lottery.LogSetting | null): this;
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
