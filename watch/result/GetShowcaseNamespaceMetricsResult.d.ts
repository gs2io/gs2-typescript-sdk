import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetShowcaseNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ShowcaseNamespace | null;
    setItem(item: Gs2Watch.ShowcaseNamespace | null): this;
    withItem(item: Gs2Watch.ShowcaseNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetShowcaseNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
