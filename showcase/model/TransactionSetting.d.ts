import IModel from '../../core/interface/IModel';
export default class TransactionSetting implements IModel {
    private enableAutoRun;
    private enableAtomicCommit;
    private transactionUseDistributor;
    private acquireActionUseJobQueue;
    private distributorNamespaceId;
    private keyId;
    private queueNamespaceId;
    getEnableAutoRun(): boolean | null;
    setEnableAutoRun(enableAutoRun: boolean | null): this;
    withEnableAutoRun(enableAutoRun: boolean | null): this;
    getEnableAtomicCommit(): boolean | null;
    setEnableAtomicCommit(enableAtomicCommit: boolean | null): this;
    withEnableAtomicCommit(enableAtomicCommit: boolean | null): this;
    getTransactionUseDistributor(): boolean | null;
    setTransactionUseDistributor(transactionUseDistributor: boolean | null): this;
    withTransactionUseDistributor(transactionUseDistributor: boolean | null): this;
    getAcquireActionUseJobQueue(): boolean | null;
    setAcquireActionUseJobQueue(acquireActionUseJobQueue: boolean | null): this;
    withAcquireActionUseJobQueue(acquireActionUseJobQueue: boolean | null): this;
    getDistributorNamespaceId(): string | null;
    setDistributorNamespaceId(distributorNamespaceId: string | null): this;
    withDistributorNamespaceId(distributorNamespaceId: string | null): this;
    /** @deprecated */
    getKeyId(): string | null;
    /** @deprecated */
    setKeyId(keyId: string | null): this;
    /** @deprecated */
    withKeyId(keyId: string | null): this;
    getQueueNamespaceId(): string | null;
    setQueueNamespaceId(queueNamespaceId: string | null): this;
    withQueueNamespaceId(queueNamespaceId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TransactionSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
