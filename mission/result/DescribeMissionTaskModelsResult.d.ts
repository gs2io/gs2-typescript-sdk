import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class DescribeMissionTaskModelsResult implements IResult {
    private items;
    getItems(): Gs2Mission.MissionTaskModel[] | null;
    setItems(items: Gs2Mission.MissionTaskModel[] | null): this;
    withItems(items: Gs2Mission.MissionTaskModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMissionTaskModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
