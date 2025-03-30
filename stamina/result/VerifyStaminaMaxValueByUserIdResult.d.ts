import IResult from '../../core/interface/IResult';
export default class VerifyStaminaMaxValueByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaMaxValueByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
