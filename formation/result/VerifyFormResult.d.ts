import IResult from '../../core/interface/IResult';
export default class VerifyFormResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyFormResult;
    toDict(): {
        [key: string]: any;
    };
}
