import IResult from '../../core/interface/IResult';
export default class VerifyBigItemResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyBigItemResult;
    toDict(): {
        [key: string]: any;
    };
}
