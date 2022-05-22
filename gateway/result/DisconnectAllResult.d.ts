import IResult from '../../core/interface/IResult';
export default class DisconnectAllResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): DisconnectAllResult;
    toDict(): {
        [key: string]: any;
    };
}
