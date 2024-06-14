import IResult from '../../core/interface/IResult';
export default class VerifyIncludeParticipantByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyIncludeParticipantByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
