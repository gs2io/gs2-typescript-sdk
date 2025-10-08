import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Inbox.Namespace | null;
    setItem(item: Gs2Inbox.Namespace | null): this;
    withItem(item: Gs2Inbox.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
