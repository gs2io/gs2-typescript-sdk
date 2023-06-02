import IModel from '../../core/interface/IModel';
export default class FormationFormStatistics implements IModel {
    private update;
    getUpdate(): number | null;
    setUpdate(update: number | null): this;
    withUpdate(update: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationFormStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
