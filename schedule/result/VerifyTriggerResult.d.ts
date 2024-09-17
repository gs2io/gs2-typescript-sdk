import IResult from '../../core/interface/IResult';
export default class VerifyTriggerResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyTriggerResult;
    toDict(): {
        [key: string]: any;
    };
}
