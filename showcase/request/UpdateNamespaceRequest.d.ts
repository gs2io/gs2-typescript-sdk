import IRequest from '../../core/interface/IRequest';
import * as Gs2Showcase from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
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
    getLogSetting(): Gs2Showcase.LogSetting | null;
    setLogSetting(logSetting: Gs2Showcase.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Showcase.LogSetting | null): this;
    getQueueNamespaceId(): string | null;
    setQueueNamespaceId(queueNamespaceId: string | null): this;
    withQueueNamespaceId(queueNamespaceId: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
