import IResult from '../../core/interface/IResult';
export default class VerifyTriggerByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyTriggerByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
