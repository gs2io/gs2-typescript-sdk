import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2JobQueue.Namespace | null;
    setItem(item: Gs2JobQueue.Namespace | null): this;
    withItem(item: Gs2JobQueue.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}