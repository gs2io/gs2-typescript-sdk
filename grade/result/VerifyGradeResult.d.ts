import IResult from '../../core/interface/IResult';
export default class VerifyGradeResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyGradeResult;
    toDict(): {
        [key: string]: any;
    };
}
