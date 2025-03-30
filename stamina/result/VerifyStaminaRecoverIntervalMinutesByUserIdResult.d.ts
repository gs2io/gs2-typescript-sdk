import IResult from '../../core/interface/IResult';
export default class VerifyStaminaRecoverIntervalMinutesByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaRecoverIntervalMinutesByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
