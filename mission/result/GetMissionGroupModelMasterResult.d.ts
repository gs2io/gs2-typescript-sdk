import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class GetMissionGroupModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Mission.MissionGroupModelMaster | null;
    setItem(item: Gs2Mission.MissionGroupModelMaster | null): this;
    withItem(item: Gs2Mission.MissionGroupModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMissionGroupModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
