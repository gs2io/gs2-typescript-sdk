import IResult from '../../core/interface/IResult';
export default class VerifyGradeUpMaterialResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyGradeUpMaterialResult;
    toDict(): {
        [key: string]: any;
    };
}
