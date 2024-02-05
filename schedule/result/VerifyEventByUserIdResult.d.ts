import IResult from '../../core/interface/IResult';
export default class VerifyEventByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifyEventByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
