import IResult from '../../core/interface/IResult';
export default class ImportUserDataByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): ImportUserDataByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
