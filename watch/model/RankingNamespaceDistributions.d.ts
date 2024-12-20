import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class RankingNamespaceDistributions implements IModel {
    private put;
    getPut(): Gs2Watch.RankingNamespacePutDistribution | null;
    setPut(put: Gs2Watch.RankingNamespacePutDistribution | null): this;
    withPut(put: Gs2Watch.RankingNamespacePutDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
