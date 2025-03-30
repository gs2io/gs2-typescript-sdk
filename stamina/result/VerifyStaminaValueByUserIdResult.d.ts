import IResult from '../../core/interface/IResult';
export default class VerifyStaminaValueByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaValueByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
