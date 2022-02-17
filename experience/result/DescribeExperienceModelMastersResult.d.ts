import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class DescribeExperienceModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Experience.ExperienceModelMaster[] | null;
    setItems(items: Gs2Experience.ExperienceModelMaster[] | null): this;
    withItems(items: Gs2Experience.ExperienceModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeExperienceModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
