import IModel from '../../core/interface/IModel';
export default class TransactionSetting implements IModel {
    private enableAutoRun;
    private distributorNamespaceId;
    private keyId;
    private queueNamespaceId;
    getEnableAutoRun(): boolean | null;
    setEnableAutoRun(enableAutoRun: boolean | null): this;
    withEnableAutoRun(enableAutoRun: boolean | null): this;
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
