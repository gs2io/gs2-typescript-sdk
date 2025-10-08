import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MissionMissionGroupModelDistributions implements IModel {
    private receive;
    getReceive(): Gs2Watch.MissionMissionGroupModelReceiveDistribution | null;
    setReceive(receive: Gs2Watch.MissionMissionGroupModelReceiveDistribution | null): this;
    withReceive(receive: Gs2Watch.MissionMissionGroupModelReceiveDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionMissionGroupModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
