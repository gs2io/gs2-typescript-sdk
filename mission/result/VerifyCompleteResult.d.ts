import IResult from '../../core/interface/IResult';
export default class VerifyCompleteResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCompleteResult;
    toDict(): {
        [key: string]: any;
    };
}
