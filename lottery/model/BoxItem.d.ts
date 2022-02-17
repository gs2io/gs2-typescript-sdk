import IModel from '../../core/interface/IModel';
import AcquireAction from './AcquireAction';
export default class BoxItem implements IModel {
    private acquireActions;
    private remaining;
    private initial;
    getAcquireActions(): AcquireAction[] | null;
    setAcquireActions(acquireActions: AcquireAction[] | null): this;
    withAcquireActions(acquireActions: AcquireAction[] | null): this;
    getRemaining(): number | null;
    setRemaining(remaining: number | null): this;
    withRemaining(remaining: number | null): this;
    getInitial(): number | null;
    setInitial(initial: number | null): this;
    withInitial(initial: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BoxItem | null;
    toDict(): {
        [key: string]: any;
    };
}
