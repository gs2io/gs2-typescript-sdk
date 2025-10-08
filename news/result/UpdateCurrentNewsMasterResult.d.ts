import IResult from '../../core/interface/IResult';
export default class UpdateCurrentNewsMasterResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentNewsMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
