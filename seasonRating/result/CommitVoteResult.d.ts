import IResult from '../../core/interface/IResult';
export default class CommitVoteResult implements IResult {
    static fromDict(data: {
        [key: string]: any;
    }): CommitVoteResult;
    toDict(): {
        [key: string]: any;
    };
}
