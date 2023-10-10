import IResult from '../../core/interface/IResult';
export default class CheckCleanUserDataByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): CheckCleanUserDataByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
