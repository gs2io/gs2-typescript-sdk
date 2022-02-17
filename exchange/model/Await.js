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
var Await = /** @class */ (function () {
    function Await() {
        this.awaitId = null;
        this.userId = null;
        this.rateName = null;
        this.name = null;
        this.count = null;
        this.exchangedAt = null;
    }
    Await.prototype.getAwaitId = function () {
        return this.awaitId;
    };
    Await.prototype.setAwaitId = function (awaitId) {
        this.awaitId = awaitId;
        return this;
    };
    Await.prototype.withAwaitId = function (awaitId) {
        this.awaitId = awaitId;
        return this;
    };
    Await.prototype.getUserId = function () {
        return this.userId;
    };
    Await.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Await.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Await.prototype.getRateName = function () {
        return this.rateName;
    };
    Await.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    Await.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    Await.prototype.getName = function () {
        return this.name;
    };
    Await.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Await.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Await.prototype.getCount = function () {
        return this.count;
    };
    Await.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    Await.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    Await.prototype.getExchangedAt = function () {
        return this.exchangedAt;
    };
    Await.prototype.setExchangedAt = function (exchangedAt) {
        this.exchangedAt = exchangedAt;
        return this;
    };
    Await.prototype.withExchangedAt = function (exchangedAt) {
        this.exchangedAt = exchangedAt;
        return this;
    };
    Await.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Await()
            .withAwaitId(data["awaitId"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withName(data["name"])
            .withCount(data["count"])
            .withExchangedAt(data["exchangedAt"]);
    };
    Await.prototype.toDict = function () {
        return {
            "awaitId": this.getAwaitId(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "name": this.getName(),
            "count": this.getCount(),
            "exchangedAt": this.getExchangedAt(),
        };
    };
    return Await;
}());
export default Await;
//# sourceMappingURL=Await.js.map