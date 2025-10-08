import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2MegaField.Namespace | null;
    setItem(item: Gs2MegaField.Namespace | null): this;
    withItem(item: Gs2MegaField.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
