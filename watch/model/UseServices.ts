/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';

export default class UseServices implements IModel {
    private account: boolean|null = null;
    private chat: boolean|null = null;
    private datastore: boolean|null = null;
    private dictionary: boolean|null = null;
    private exchange: boolean|null = null;
    private experience: boolean|null = null;
    private formation: boolean|null = null;
    private friend: boolean|null = null;
    private inbox: boolean|null = null;
    private inventory: boolean|null = null;
    private key: boolean|null = null;
    private limit: boolean|null = null;
    private lottery: boolean|null = null;
    private matchmaking: boolean|null = null;
    private mission: boolean|null = null;
    private money: boolean|null = null;
    private quest: boolean|null = null;
    private ranking: boolean|null = null;
    private showcase: boolean|null = null;
    private stamina: boolean|null = null;
    public getAccount(): boolean|null {
        return this.account;
    }
    public setAccount(account: boolean|null) {
        this.account = account;
        return this;
    }
    public withAccount(account: boolean|null): this {
        this.account = account;
        return this;
    }
    public getChat(): boolean|null {
        return this.chat;
    }
    public setChat(chat: boolean|null) {
        this.chat = chat;
        return this;
    }
    public withChat(chat: boolean|null): this {
        this.chat = chat;
        return this;
    }
    public getDatastore(): boolean|null {
        return this.datastore;
    }
    public setDatastore(datastore: boolean|null) {
        this.datastore = datastore;
        return this;
    }
    public withDatastore(datastore: boolean|null): this {
        this.datastore = datastore;
        return this;
    }
    public getDictionary(): boolean|null {
        return this.dictionary;
    }
    public setDictionary(dictionary: boolean|null) {
        this.dictionary = dictionary;
        return this;
    }
    public withDictionary(dictionary: boolean|null): this {
        this.dictionary = dictionary;
        return this;
    }
    public getExchange(): boolean|null {
        return this.exchange;
    }
    public setExchange(exchange: boolean|null) {
        this.exchange = exchange;
        return this;
    }
    public withExchange(exchange: boolean|null): this {
        this.exchange = exchange;
        return this;
    }
    public getExperience(): boolean|null {
        return this.experience;
    }
    public setExperience(experience: boolean|null) {
        this.experience = experience;
        return this;
    }
    public withExperience(experience: boolean|null): this {
        this.experience = experience;
        return this;
    }
    public getFormation(): boolean|null {
        return this.formation;
    }
    public setFormation(formation: boolean|null) {
        this.formation = formation;
        return this;
    }
    public withFormation(formation: boolean|null): this {
        this.formation = formation;
        return this;
    }
    public getFriend(): boolean|null {
        return this.friend;
    }
    public setFriend(friend: boolean|null) {
        this.friend = friend;
        return this;
    }
    public withFriend(friend: boolean|null): this {
        this.friend = friend;
        return this;
    }
    public getInbox(): boolean|null {
        return this.inbox;
    }
    public setInbox(inbox: boolean|null) {
        this.inbox = inbox;
        return this;
    }
    public withInbox(inbox: boolean|null): this {
        this.inbox = inbox;
        return this;
    }
    public getInventory(): boolean|null {
        return this.inventory;
    }
    public setInventory(inventory: boolean|null) {
        this.inventory = inventory;
        return this;
    }
    public withInventory(inventory: boolean|null): this {
        this.inventory = inventory;
        return this;
    }
    public getKey(): boolean|null {
        return this.key;
    }
    public setKey(key: boolean|null) {
        this.key = key;
        return this;
    }
    public withKey(key: boolean|null): this {
        this.key = key;
        return this;
    }
    public getLimit(): boolean|null {
        return this.limit;
    }
    public setLimit(limit: boolean|null) {
        this.limit = limit;
        return this;
    }
    public withLimit(limit: boolean|null): this {
        this.limit = limit;
        return this;
    }
    public getLottery(): boolean|null {
        return this.lottery;
    }
    public setLottery(lottery: boolean|null) {
        this.lottery = lottery;
        return this;
    }
    public withLottery(lottery: boolean|null): this {
        this.lottery = lottery;
        return this;
    }
    public getMatchmaking(): boolean|null {
        return this.matchmaking;
    }
    public setMatchmaking(matchmaking: boolean|null) {
        this.matchmaking = matchmaking;
        return this;
    }
    public withMatchmaking(matchmaking: boolean|null): this {
        this.matchmaking = matchmaking;
        return this;
    }
    public getMission(): boolean|null {
        return this.mission;
    }
    public setMission(mission: boolean|null) {
        this.mission = mission;
        return this;
    }
    public withMission(mission: boolean|null): this {
        this.mission = mission;
        return this;
    }
    public getMoney(): boolean|null {
        return this.money;
    }
    public setMoney(money: boolean|null) {
        this.money = money;
        return this;
    }
    public withMoney(money: boolean|null): this {
        this.money = money;
        return this;
    }
    public getQuest(): boolean|null {
        return this.quest;
    }
    public setQuest(quest: boolean|null) {
        this.quest = quest;
        return this;
    }
    public withQuest(quest: boolean|null): this {
        this.quest = quest;
        return this;
    }
    public getRanking(): boolean|null {
        return this.ranking;
    }
    public setRanking(ranking: boolean|null) {
        this.ranking = ranking;
        return this;
    }
    public withRanking(ranking: boolean|null): this {
        this.ranking = ranking;
        return this;
    }
    public getShowcase(): boolean|null {
        return this.showcase;
    }
    public setShowcase(showcase: boolean|null) {
        this.showcase = showcase;
        return this;
    }
    public withShowcase(showcase: boolean|null): this {
        this.showcase = showcase;
        return this;
    }
    public getStamina(): boolean|null {
        return this.stamina;
    }
    public setStamina(stamina: boolean|null) {
        this.stamina = stamina;
        return this;
    }
    public withStamina(stamina: boolean|null): this {
        this.stamina = stamina;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UseServices|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new UseServices()
            .withAccount(data["account"])
            .withChat(data["chat"])
            .withDatastore(data["datastore"])
            .withDictionary(data["dictionary"])
            .withExchange(data["exchange"])
            .withExperience(data["experience"])
            .withFormation(data["formation"])
            .withFriend(data["friend"])
            .withInbox(data["inbox"])
            .withInventory(data["inventory"])
            .withKey(data["key"])
            .withLimit(data["limit"])
            .withLottery(data["lottery"])
            .withMatchmaking(data["matchmaking"])
            .withMission(data["mission"])
            .withMoney(data["money"])
            .withQuest(data["quest"])
            .withRanking(data["ranking"])
            .withShowcase(data["showcase"])
            .withStamina(data["stamina"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "account": this.getAccount(),
            "chat": this.getChat(),
            "datastore": this.getDatastore(),
            "dictionary": this.getDictionary(),
            "exchange": this.getExchange(),
            "experience": this.getExperience(),
            "formation": this.getFormation(),
            "friend": this.getFriend(),
            "inbox": this.getInbox(),
            "inventory": this.getInventory(),
            "key": this.getKey(),
            "limit": this.getLimit(),
            "lottery": this.getLottery(),
            "matchmaking": this.getMatchmaking(),
            "mission": this.getMission(),
            "money": this.getMoney(),
            "quest": this.getQuest(),
            "ranking": this.getRanking(),
            "showcase": this.getShowcase(),
            "stamina": this.getStamina(),
        };
    }
}
