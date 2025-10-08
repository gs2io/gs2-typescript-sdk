import IResult from '../../core/interface/IResult';
export default class ValidateResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ValidateResult;
    toDict(): {
        [key: string]: any;
    };
}
