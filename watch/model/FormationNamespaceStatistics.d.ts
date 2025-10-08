import IModel from '../../core/interface/IModel';
export default class FormationNamespaceStatistics implements IModel {
    private update;
    private increase;
    getUpdate(): number | null;
    setUpdate(update: number | null): this;
    withUpdate(update: number | null): this;
    getIncrease(): number | null;
    setIncrease(increase: number | null): this;
    withIncrease(increase: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
