import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class GetMissionTaskModelResult implements IResult {
    private item;
    getItem(): Gs2Mission.MissionTaskModel | null;
    setItem(item: Gs2Mission.MissionTaskModel | null): this;
    withItem(item: Gs2Mission.MissionTaskModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMissionTaskModelResult;
    toDict(): {
        [key: string]: any;
    };
}
