import IResult from '../../core/interface/IResult';
export default class VerifyStaminaOverflowValueResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaOverflowValueResult;
    toDict(): {
        [key: string]: any;
    };
}
