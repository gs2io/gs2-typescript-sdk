import IResult from '../../core/interface/IResult';
export default class CleanUserDataByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): CleanUserDataByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
