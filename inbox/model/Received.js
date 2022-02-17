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
var Received = /** @class */ (function () {
    function Received() {
        this.receivedId = null;
        this.userId = null;
        this.receivedGlobalMessageNames = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Received.prototype.getReceivedId = function () {
        return this.receivedId;
    };
    Received.prototype.setReceivedId = function (receivedId) {
        this.receivedId = receivedId;
        return this;
    };
    Received.prototype.withReceivedId = function (receivedId) {
        this.receivedId = receivedId;
        return this;
    };
    Received.prototype.getUserId = function () {
        return this.userId;
    };
    Received.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Received.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Received.prototype.getReceivedGlobalMessageNames = function () {
        return this.receivedGlobalMessageNames;
    };
    Received.prototype.setReceivedGlobalMessageNames = function (receivedGlobalMessageNames) {
        this.receivedGlobalMessageNames = receivedGlobalMessageNames;
        return this;
    };
    Received.prototype.withReceivedGlobalMessageNames = function (receivedGlobalMessageNames) {
        this.receivedGlobalMessageNames = receivedGlobalMessageNames;
        return this;
    };
    Received.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Received.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Received.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Received.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Received.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Received.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Received.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Received()
            .withReceivedId(data["receivedId"])
            .withUserId(data["userId"])
            .withReceivedGlobalMessageNames(data.receivedGlobalMessageNames ?
            data.receivedGlobalMessageNames.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Received.prototype.toDict = function () {
        return {
            "receivedId": this.getReceivedId(),
            "userId": this.getUserId(),
            "receivedGlobalMessageNames": this.getReceivedGlobalMessageNames() ?
                this.getReceivedGlobalMessageNames().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Received;
}());
export default Received;
//# sourceMappingURL=Received.js.map