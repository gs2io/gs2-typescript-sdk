import IResult from '../../core/interface/IResult';
export default class VerifyStaminaMaxValueResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaMaxValueResult;
    toDict(): {
        [key: string]: any;
    };
}
