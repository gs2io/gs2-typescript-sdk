import IResult from '../../core/interface/IResult';
export default class VerifyCompleteByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCompleteByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
