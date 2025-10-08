import IModel from '../../core/interface/IModel';
import QuestQuest from './QuestQuest';
export default class QuestQuestGroup implements IModel {
    private name;
    private quest;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getQuest(): QuestQuest[] | null;
    setQuest(quest: QuestQuest[] | null): this;
    withQuest(quest: QuestQuest[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): QuestQuestGroup | null;
    toDict(): {
        [key: string]: any;
    };
}
