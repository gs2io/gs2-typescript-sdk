import IModel from '../../core/interface/IModel';
export default class UnleashIndividualMaterialSetting implements IModel {
    private matchType;
    private gradeCondition;
    private gradeValue;
    private count;
    getMatchType(): string | null;
    setMatchType(matchType: string | null): this;
    withMatchType(matchType: string | null): this;
    getGradeCondition(): string | null;
    setGradeCondition(gradeCondition: string | null): this;
    withGradeCondition(gradeCondition: string | null): this;
    getGradeValue(): number | null;
    setGradeValue(gradeValue: number | null): this;
    withGradeValue(gradeValue: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnleashIndividualMaterialSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
