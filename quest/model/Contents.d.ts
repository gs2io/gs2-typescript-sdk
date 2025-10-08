import IModel from '../../core/interface/IModel';
import * as Gs2Quest from '../../quest/model';
export default class Contents implements IModel {
    private metadata;
    private completeAcquireActions;
    private weight;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getCompleteAcquireActions(): Gs2Quest.AcquireAction[] | null;
    setCompleteAcquireActions(completeAcquireActions: Gs2Quest.AcquireAction[] | null): this;
    withCompleteAcquireActions(completeAcquireActions: Gs2Quest.AcquireAction[] | null): this;
    getWeight(): number | null;
    setWeight(weight: number | null): this;
    withWeight(weight: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Contents | null;
    toDict(): {
        [key: string]: any;
    };
}
