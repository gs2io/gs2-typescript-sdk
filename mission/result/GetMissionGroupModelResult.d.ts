import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class GetMissionGroupModelResult implements IResult {
    private item;
    getItem(): Gs2Mission.MissionGroupModel | null;
    setItem(item: Gs2Mission.MissionGroupModel | null): this;
    withItem(item: Gs2Mission.MissionGroupModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMissionGroupModelResult;
    toDict(): {
        [key: string]: any;
    };
}
