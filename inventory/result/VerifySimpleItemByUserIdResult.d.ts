import IResult from '../../core/interface/IResult';
export default class VerifySimpleItemByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): VerifySimpleItemByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
