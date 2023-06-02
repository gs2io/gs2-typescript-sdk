import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeMissionMissionGroupModelMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.MissionMissionGroupModel[] | null;
    setItems(items: Gs2Watch.MissionMissionGroupModel[] | null): this;
    withItems(items: Gs2Watch.MissionMissionGroupModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMissionMissionGroupModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
