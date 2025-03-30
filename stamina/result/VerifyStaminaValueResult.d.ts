import IResult from '../../core/interface/IResult';
export default class VerifyStaminaValueResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaValueResult;
    toDict(): {
        [key: string]: any;
    };
}
