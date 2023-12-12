import IModel from '../../core/interface/IModel';
export default class AutoRunTransactionSetting implements IModel {
    private distributorNamespaceId;
    private queueNamespaceId;
    getDistributorNamespaceId(): string | null;
    setDistributorNamespaceId(distributorNamespaceId: string | null): this;
    withDistributorNamespaceId(distributorNamespaceId: string | null): this;
    getQueueNamespaceId(): string | null;
    setQueueNamespaceId(queueNamespaceId: string | null): this;
    withQueueNamespaceId(queueNamespaceId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AutoRunTransactionSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
