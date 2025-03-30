import IResult from '../../core/interface/IResult';
export default class VerifyStaminaRecoverValueByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaRecoverValueByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
