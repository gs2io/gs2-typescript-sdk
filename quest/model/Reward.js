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
var Reward = /** @class */ (function () {
    function Reward() {
        this.action = null;
        this.request = null;
        this.itemId = null;
        this.value = null;
    }
    Reward.prototype.getAction = function () {
        return this.action;
    };
    Reward.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    Reward.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    Reward.prototype.getRequest = function () {
        return this.request;
    };
    Reward.prototype.setRequest = function (request) {
        this.request = request;
        return this;
    };
    Reward.prototype.withRequest = function (request) {
        this.request = request;
        return this;
    };
    Reward.prototype.getItemId = function () {
        return this.itemId;
    };
    Reward.prototype.setItemId = function (itemId) {
        this.itemId = itemId;
        return this;
    };
    Reward.prototype.withItemId = function (itemId) {
        this.itemId = itemId;
        return this;
    };
    Reward.prototype.getValue = function () {
        return this.value;
    };
    Reward.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Reward.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    Reward.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Reward()
            .withAction(data["action"])
            .withRequest(data["request"])
            .withItemId(data["itemId"])
            .withValue(data["value"]);
    };
    Reward.prototype.toDict = function () {
        return {
            "action": this.getAction(),
            "request": this.getRequest(),
            "itemId": this.getItemId(),
            "value": this.getValue(),
        };
    };
    return Reward;
}());
export default Reward;
//# sourceMappingURL=Reward.js.map