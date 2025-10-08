import IResult from '../../core/interface/IResult';
export default class VerifyGradeUpMaterialByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyGradeUpMaterialByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
