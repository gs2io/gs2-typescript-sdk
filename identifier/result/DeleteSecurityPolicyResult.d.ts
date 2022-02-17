import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class DeleteSecurityPolicyResult implements IResult {
    private item;
    getItem(): Gs2Identifier.SecurityPolicy | null;
    setItem(item: Gs2Identifier.SecurityPolicy | null): this;
    withItem(item: Gs2Identifier.SecurityPolicy | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteSecurityPolicyResult;
    toDict(): {
        [key: string]: any;
    };
}
