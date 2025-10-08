import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Quest.Namespace | null;
    setItem(item: Gs2Quest.Namespace | null): this;
    withItem(item: Gs2Quest.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
