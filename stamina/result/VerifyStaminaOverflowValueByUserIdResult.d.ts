import IResult from '../../core/interface/IResult';
export default class VerifyStaminaOverflowValueByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaOverflowValueByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
