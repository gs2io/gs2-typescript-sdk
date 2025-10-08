import IResult from '../../core/interface/IResult';
import * as Gs2Limit from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Limit.Namespace | null;
    setItem(item: Gs2Limit.Namespace | null): this;
    withItem(item: Gs2Limit.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
