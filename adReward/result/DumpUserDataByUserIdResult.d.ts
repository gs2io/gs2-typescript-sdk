import IResult from '../../core/interface/IResult';
export default class DumpUserDataByUserIdResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): DumpUserDataByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
