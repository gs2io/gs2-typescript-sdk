import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class GetHasSecurityPolicyResult implements IResult {
    private items;
    getItems(): Gs2Identifier.SecurityPolicy[] | null;
    setItems(items: Gs2Identifier.SecurityPolicy[] | null): this;
    withItems(items: Gs2Identifier.SecurityPolicy[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetHasSecurityPolicyResult;
    toDict(): {
        [key: string]: any;
    };
}
