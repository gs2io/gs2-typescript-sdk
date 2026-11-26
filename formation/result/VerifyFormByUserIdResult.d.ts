import IResult from '../../core/interface/IResult';
export default class VerifyFormByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyFormByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
