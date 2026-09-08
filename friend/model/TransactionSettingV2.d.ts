import IModel from '../../core/interface/IModel';
export default class TransactionSettingV2 implements IModel {
    private distributorNamespaceId;
    private enableParallelExecution;
    getDistributorNamespaceId(): string | null;
    setDistributorNamespaceId(distributorNamespaceId: string | null): this;
    withDistributorNamespaceId(distributorNamespaceId: string | null): this;
    getEnableParallelExecution(): boolean | null;
    setEnableParallelExecution(enableParallelExecution: boolean | null): this;
    withEnableParallelExecution(enableParallelExecution: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TransactionSettingV2 | null;
    toDict(): {
        [key: string]: any;
    };
}
