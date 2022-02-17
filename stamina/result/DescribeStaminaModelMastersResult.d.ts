import IResult from '../../core/interface/IResult';
import * as Gs2Stamina from '../model';
export default class DescribeStaminaModelMastersResult implements IResult {
    private items;
    private nextPageToken;
    getItems(): Gs2Stamina.StaminaModelMaster[] | null;
    setItems(items: Gs2Stamina.StaminaModelMaster[] | null): this;
    withItems(items: Gs2Stamina.StaminaModelMaster[] | null): this;
    getNextPageToken(): string | null;
    setNextPageToken(nextPageToken: string | null): this;
    withNextPageToken(nextPageToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStaminaModelMastersResult;
    toDict(): {
        [key: string]: any;
    };
}
