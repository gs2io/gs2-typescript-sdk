import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Version.Namespace | null;
    setItem(item: Gs2Version.Namespace | null): this;
    withItem(item: Gs2Version.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
