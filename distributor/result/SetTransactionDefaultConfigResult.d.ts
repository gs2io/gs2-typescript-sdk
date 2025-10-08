import IResult from '../../core/interface/IResult';
export default class SetTransactionDefaultConfigResult implements IResult {
    private newContextStack;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetTransactionDefaultConfigResult;
    toDict(): {
        [key: string]: any;
    };
}
