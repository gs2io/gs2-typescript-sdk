import IResult from '../../core/interface/IResult';
export default class VerifyCounterValueByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCounterValueByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
