"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var UseServices = /** @class */ (function () {
    function UseServices() {
        this.account = null;
        this.chat = null;
        this.datastore = null;
        this.dictionary = null;
        this.exchange = null;
        this.experience = null;
        this.formation = null;
        this.friend = null;
        this.inbox = null;
        this.inventory = null;
        this.key = null;
        this.limit = null;
        this.matchmaking = null;
        this.mission = null;
        this.money = null;
        this.quest = null;
        this.ranking = null;
        this.showcase = null;
        this.stamina = null;
    }
    UseServices.prototype.getAccount = function () {
        return this.account;
    };
    UseServices.prototype.setAccount = function (account) {
        this.account = account;
        return this;
    };
    UseServices.prototype.withAccount = function (account) {
        this.account = account;
        return this;
    };
    UseServices.prototype.getChat = function () {
        return this.chat;
    };
    UseServices.prototype.setChat = function (chat) {
        this.chat = chat;
        return this;
    };
    UseServices.prototype.withChat = function (chat) {
        this.chat = chat;
        return this;
    };
    UseServices.prototype.getDatastore = function () {
        return this.datastore;
    };
    UseServices.prototype.setDatastore = function (datastore) {
        this.datastore = datastore;
        return this;
    };
    UseServices.prototype.withDatastore = function (datastore) {
        this.datastore = datastore;
        return this;
    };
    UseServices.prototype.getDictionary = function () {
        return this.dictionary;
    };
    UseServices.prototype.setDictionary = function (dictionary) {
        this.dictionary = dictionary;
        return this;
    };
    UseServices.prototype.withDictionary = function (dictionary) {
        this.dictionary = dictionary;
        return this;
    };
    UseServices.prototype.getExchange = function () {
        return this.exchange;
    };
    UseServices.prototype.setExchange = function (exchange) {
        this.exchange = exchange;
        return this;
    };
    UseServices.prototype.withExchange = function (exchange) {
        this.exchange = exchange;
        return this;
    };
    UseServices.prototype.getExperience = function () {
        return this.experience;
    };
    UseServices.prototype.setExperience = function (experience) {
        this.experience = experience;
        return this;
    };
    UseServices.prototype.withExperience = function (experience) {
        this.experience = experience;
        return this;
    };
    UseServices.prototype.getFormation = function () {
        return this.formation;
    };
    UseServices.prototype.setFormation = function (formation) {
        this.formation = formation;
        return this;
    };
    UseServices.prototype.withFormation = function (formation) {
        this.formation = formation;
        return this;
    };
    UseServices.prototype.getFriend = function () {
        return this.friend;
    };
    UseServices.prototype.setFriend = function (friend) {
        this.friend = friend;
        return this;
    };
    UseServices.prototype.withFriend = function (friend) {
        this.friend = friend;
        return this;
    };
    UseServices.prototype.getInbox = function () {
        return this.inbox;
    };
    UseServices.prototype.setInbox = function (inbox) {
        this.inbox = inbox;
        return this;
    };
    UseServices.prototype.withInbox = function (inbox) {
        this.inbox = inbox;
        return this;
    };
    UseServices.prototype.getInventory = function () {
        return this.inventory;
    };
    UseServices.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    UseServices.prototype.withInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    UseServices.prototype.getKey = function () {
        return this.key;
    };
    UseServices.prototype.setKey = function (key) {
        this.key = key;
        return this;
    };
    UseServices.prototype.withKey = function (key) {
        this.key = key;
        return this;
    };
    UseServices.prototype.getLimit = function () {
        return this.limit;
    };
    UseServices.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    UseServices.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    UseServices.prototype.getMatchmaking = function () {
        return this.matchmaking;
    };
    UseServices.prototype.setMatchmaking = function (matchmaking) {
        this.matchmaking = matchmaking;
        return this;
    };
    UseServices.prototype.withMatchmaking = function (matchmaking) {
        this.matchmaking = matchmaking;
        return this;
    };
    UseServices.prototype.getMission = function () {
        return this.mission;
    };
    UseServices.prototype.setMission = function (mission) {
        this.mission = mission;
        return this;
    };
    UseServices.prototype.withMission = function (mission) {
        this.mission = mission;
        return this;
    };
    UseServices.prototype.getMoney = function () {
        return this.money;
    };
    UseServices.prototype.setMoney = function (money) {
        this.money = money;
        return this;
    };
    UseServices.prototype.withMoney = function (money) {
        this.money = money;
        return this;
    };
    UseServices.prototype.getQuest = function () {
        return this.quest;
    };
    UseServices.prototype.setQuest = function (quest) {
        this.quest = quest;
        return this;
    };
    UseServices.prototype.withQuest = function (quest) {
        this.quest = quest;
        return this;
    };
    UseServices.prototype.getRanking = function () {
        return this.ranking;
    };
    UseServices.prototype.setRanking = function (ranking) {
        this.ranking = ranking;
        return this;
    };
    UseServices.prototype.withRanking = function (ranking) {
        this.ranking = ranking;
        return this;
    };
    UseServices.prototype.getShowcase = function () {
        return this.showcase;
    };
    UseServices.prototype.setShowcase = function (showcase) {
        this.showcase = showcase;
        return this;
    };
    UseServices.prototype.withShowcase = function (showcase) {
        this.showcase = showcase;
        return this;
    };
    UseServices.prototype.getStamina = function () {
        return this.stamina;
    };
    UseServices.prototype.setStamina = function (stamina) {
        this.stamina = stamina;
        return this;
    };
    UseServices.prototype.withStamina = function (stamina) {
        this.stamina = stamina;
        return this;
    };
    UseServices.fromDict = function (data) {
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
            .withMatchmaking(data["matchmaking"])
            .withMission(data["mission"])
            .withMoney(data["money"])
            .withQuest(data["quest"])
            .withRanking(data["ranking"])
            .withShowcase(data["showcase"])
            .withStamina(data["stamina"]);
    };
    UseServices.prototype.toDict = function () {
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
            "matchmaking": this.getMatchmaking(),
            "mission": this.getMission(),
            "money": this.getMoney(),
            "quest": this.getQuest(),
            "ranking": this.getRanking(),
            "showcase": this.getShowcase(),
            "stamina": this.getStamina(),
        };
    };
    return UseServices;
}());
exports.default = UseServices;
//# sourceMappingURL=UseServices.js.map