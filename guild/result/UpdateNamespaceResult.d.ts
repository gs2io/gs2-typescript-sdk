import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Guild.Namespace | null;
    setItem(item: Gs2Guild.Namespace | null): this;
    withItem(item: Gs2Guild.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
