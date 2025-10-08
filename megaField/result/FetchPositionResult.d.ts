import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class FetchPositionResult implements IResult {
    private items;
    getItems(): Gs2MegaField.Spatial[] | null;
    setItems(items: Gs2MegaField.Spatial[] | null): this;
    withItems(items: Gs2MegaField.Spatial[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FetchPositionResult;
    toDict(): {
        [key: string]: any;
    };
}
