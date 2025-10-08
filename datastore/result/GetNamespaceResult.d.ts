import IResult from '../../core/interface/IResult';
import * as Gs2Datastore from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Datastore.Namespace | null;
    setItem(item: Gs2Datastore.Namespace | null): this;
    withItem(item: Gs2Datastore.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
