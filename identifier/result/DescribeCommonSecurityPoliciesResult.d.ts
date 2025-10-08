import IResult from '../../core/interface/IResult';
import * as Gs2Identifier from '../model';
export default class DescribeCommonSecurityPoliciesResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Identifier.SecurityPolicy[] | null;
    setItems(items: Gs2Identifier.SecurityPolicy[] | null): this;
    withItems(items: Gs2Identifier.SecurityPolicy[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeCommonSecurityPoliciesResult;
    toDict(): {
        [key: string]: any;
    };
}
