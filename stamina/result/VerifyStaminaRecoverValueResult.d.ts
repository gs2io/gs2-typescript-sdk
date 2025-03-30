import IResult from '../../core/interface/IResult';
export default class VerifyStaminaRecoverValueResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyStaminaRecoverValueResult;
    toDict(): {
        [key: string]: any;
    };
}
