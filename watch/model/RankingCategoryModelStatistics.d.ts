import IModel from '../../core/interface/IModel';
export default class RankingCategoryModelStatistics implements IModel {
    private put;
    getPut(): number | null;
    setPut(put: number | null): this;
    withPut(put: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingCategoryModelStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
