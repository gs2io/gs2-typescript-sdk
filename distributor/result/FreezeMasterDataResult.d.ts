import IResult from '../../core/interface/IResult';
export default class FreezeMasterDataResult implements IResult {
    private newContextStack;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FreezeMasterDataResult;
    toDict(): {
        [key: string]: any;
    };
}
