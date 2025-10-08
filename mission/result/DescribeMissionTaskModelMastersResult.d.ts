import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class DescribeMissionTaskModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Mission.MissionTaskModelMaster[] | null;
    setItems(items: Gs2Mission.MissionTaskModelMaster[] | null): this;
    withItems(items: Gs2Mission.MissionTaskModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMissionTaskModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
