import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class DeleteAwaitByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Exchange.Await | null;
    setItem(item: Gs2Exchange.Await | null): this;
    withItem(item: Gs2Exchange.Await | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteAwaitByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
