import IModel from '../../core/interface/IModel';
export default class UnleashRateEntryModel implements IModel {
    private gradeValue;
    private needCount;
    getGradeValue(): number | null;
    setGradeValue(gradeValue: number | null): this;
    withGradeValue(gradeValue: number | null): this;
    getNeedCount(): number | null;
    setNeedCount(needCount: number | null): this;
    withNeedCount(needCount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnleashRateEntryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
