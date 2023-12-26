import IResult from '../../core/interface/IResult';
export default class VerifyGradeByStampTaskResult implements IResult {
    private newContextStack;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyGradeByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
