import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class CreateMissionGroupModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Mission.MissionGroupModelMaster | null;
    setItem(item: Gs2Mission.MissionGroupModelMaster | null): this;
    withItem(item: Gs2Mission.MissionGroupModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateMissionGroupModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
