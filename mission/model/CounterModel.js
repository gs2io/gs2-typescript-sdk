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
import CounterScopeModel from './CounterScopeModel';
var CounterModel = /** @class */ (function () {
    function CounterModel() {
        this.counterId = null;
        this.name = null;
        this.metadata = null;
        this.scopes = null;
        this.challengePeriodEventId = null;
    }
    CounterModel.prototype.getCounterId = function () {
        return this.counterId;
    };
    CounterModel.prototype.setCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    CounterModel.prototype.withCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    CounterModel.prototype.getName = function () {
        return this.name;
    };
    CounterModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CounterModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CounterModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    CounterModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CounterModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CounterModel.prototype.getScopes = function () {
        return this.scopes;
    };
    CounterModel.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    CounterModel.prototype.withScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    CounterModel.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    CounterModel.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CounterModel.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CounterModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CounterModel()
            .withCounterId(data["counterId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withScopes(data.scopes ?
            data.scopes.map(function (item) {
                return CounterScopeModel.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    };
    CounterModel.prototype.toDict = function () {
        return {
            "counterId": this.getCounterId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "scopes": this.getScopes() ?
                this.getScopes().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return CounterModel;
}());
export default CounterModel;
//# sourceMappingURL=CounterModel.js.map