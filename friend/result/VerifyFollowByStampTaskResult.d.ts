import IResult from '../../core/interface/IResult';
export default class VerifyFollowByStampTaskResult implements IResult {
    private newContextStack;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyFollowByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
