import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
export default class Contents implements IModel {
    private metadata;
    private completeAcquireActions;
    private weight;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getCompleteAcquireActions(): AcquireAction[] | null;
    setCompleteAcquireActions(completeAcquireActions: AcquireAction[] | null): this;
    withCompleteAcquireActions(completeAcquireActions: AcquireAction[] | null): this;
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
