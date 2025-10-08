import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetFormationNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.FormationNamespace | null;
    setItem(item: Gs2Watch.FormationNamespace | null): this;
    withItem(item: Gs2Watch.FormationNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetFormationNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
