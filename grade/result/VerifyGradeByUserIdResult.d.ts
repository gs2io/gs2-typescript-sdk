import IResult from '../../core/interface/IResult';
export default class VerifyGradeByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyGradeByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
