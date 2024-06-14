import IResult from '../../core/interface/IResult';
export default class VerifyIncludeParticipantResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyIncludeParticipantResult;
    toDict(): {
        [key: string]: any;
    };
}
