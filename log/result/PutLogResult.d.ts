import IResult from '../../core/interface/IResult';
export default class PutLogResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): PutLogResult;
    toDict(): {
        [key: string]: any;
    };
}
