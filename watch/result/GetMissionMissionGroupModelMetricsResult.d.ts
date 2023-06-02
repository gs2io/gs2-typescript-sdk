import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetMissionMissionGroupModelMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.MissionMissionGroupModel | null;
    setItem(item: Gs2Watch.MissionMissionGroupModel | null): this;
    withItem(item: Gs2Watch.MissionMissionGroupModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMissionMissionGroupModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
