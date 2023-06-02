import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetMissionNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.MissionNamespace | null;
    setItem(item: Gs2Watch.MissionNamespace | null): this;
    withItem(item: Gs2Watch.MissionNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMissionNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
