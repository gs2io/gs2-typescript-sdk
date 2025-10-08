import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class DescribeMissionGroupModelsResult implements IResult {
    private items;
    getItems(): Gs2Mission.MissionGroupModel[] | null;
    setItems(items: Gs2Mission.MissionGroupModel[] | null): this;
    withItems(items: Gs2Mission.MissionGroupModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMissionGroupModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
