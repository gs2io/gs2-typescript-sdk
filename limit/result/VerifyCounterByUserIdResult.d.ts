import IResult from '../../core/interface/IResult';
export default class VerifyCounterByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCounterByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
