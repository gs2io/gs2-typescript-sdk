import IModel from '../../core/interface/IModel';
import RankingCategory from './RankingCategory';
export default class RankingNamespace implements IModel {
    private namespaceName;
    private category;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getCategory(): RankingCategory[] | null;
    setCategory(category: RankingCategory[] | null): this;
    withCategory(category: RankingCategory[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
