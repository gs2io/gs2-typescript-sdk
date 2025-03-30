import IResult from '../../core/interface/IResult';
export default class VerifyStaminaRecoverIntervalMinutesResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaRecoverIntervalMinutesResult;
    toDict(): {
        [key: string]: any;
    };
}
