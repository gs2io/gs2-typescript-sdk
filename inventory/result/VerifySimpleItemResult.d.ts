import IResult from '../../core/interface/IResult';
export default class VerifySimpleItemResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifySimpleItemResult;
    toDict(): {
        [key: string]: any;
    };
}
