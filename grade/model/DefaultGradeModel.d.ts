import IModel from '../../core/interface/IModel';
export default class DefaultGradeModel implements IModel {
    private propertyIdRegex;
    private defaultGradeValue;
    getPropertyIdRegex(): string | null;
    setPropertyIdRegex(propertyIdRegex: string | null): this;
    withPropertyIdRegex(propertyIdRegex: string | null): this;
    getDefaultGradeValue(): number | null;
    setDefaultGradeValue(defaultGradeValue: number | null): this;
    withDefaultGradeValue(defaultGradeValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DefaultGradeModel | null;
    toDict(): {
        [key: string]: any;
    };
}
