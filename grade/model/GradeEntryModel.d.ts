import IModel from '../../core/interface/IModel';
export default class GradeEntryModel implements IModel {
    private metadata;
    private rankCapValue;
    private propertyIdRegex;
    private gradeUpPropertyIdRegex;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getRankCapValue(): number | null;
    setRankCapValue(rankCapValue: number | null): this;
    withRankCapValue(rankCapValue: number | null): this;
    getPropertyIdRegex(): string | null;
    setPropertyIdRegex(propertyIdRegex: string | null): this;
    withPropertyIdRegex(propertyIdRegex: string | null): this;
    getGradeUpPropertyIdRegex(): string | null;
    setGradeUpPropertyIdRegex(gradeUpPropertyIdRegex: string | null): this;
    withGradeUpPropertyIdRegex(gradeUpPropertyIdRegex: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GradeEntryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
