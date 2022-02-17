import IResult from '../../core/interface/IResult';
import * as Gs2News from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2News.Namespace | null;
    setItem(item: Gs2News.Namespace | null): this;
    withItem(item: Gs2News.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
