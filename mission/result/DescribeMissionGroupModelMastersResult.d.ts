import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class DescribeMissionGroupModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Mission.MissionGroupModelMaster[] | null;
    setItems(items: Gs2Mission.MissionGroupModelMaster[] | null): this;
    withItems(items: Gs2Mission.MissionGroupModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMissionGroupModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
