import IModel from '../../core/interface/IModel';
import QuestQuestGroup from './QuestQuestGroup';
export default class QuestNamespace implements IModel {
    private namespaceName;
    private questGroup;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getQuestGroup(): QuestQuestGroup[] | null;
    setQuestGroup(questGroup: QuestQuestGroup[] | null): this;
    withQuestGroup(questGroup: QuestQuestGroup[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
