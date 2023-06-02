import IModel from '../../core/interface/IModel';
import RankingNamespacePutDistribution from './RankingNamespacePutDistribution';
export default class RankingNamespaceDistributions implements IModel {
    private put;
    getPut(): RankingNamespacePutDistribution | null;
    setPut(put: RankingNamespacePutDistribution | null): this;
    withPut(put: RankingNamespacePutDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
