import IModel from '../../core/interface/IModel';
import * as Gs2Log from '../../log/model';
export default class Facet implements IModel {
    private field;
    private values;
    private range;
    private globalRange;
    getField(): string | null;
    setField(field: string | null): this;
    withField(field: string | null): this;
    getValues(): Gs2Log.FacetValueCount[] | null;
    setValues(values: Gs2Log.FacetValueCount[] | null): this;
    withValues(values: Gs2Log.FacetValueCount[] | null): this;
    getRange(): Gs2Log.NumericRange | null;
    setRange(range: Gs2Log.NumericRange | null): this;
    withRange(range: Gs2Log.NumericRange | null): this;
    getGlobalRange(): Gs2Log.NumericRange | null;
    setGlobalRange(globalRange: Gs2Log.NumericRange | null): this;
    withGlobalRange(globalRange: Gs2Log.NumericRange | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Facet | null;
    toDict(): {
        [key: string]: any;
    };
}
