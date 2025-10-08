import IResult from '../../core/interface/IResult';
import * as Gs2News from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2News.Namespace | null;
    setItem(item: Gs2News.Namespace | null): this;
    withItem(item: Gs2News.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
