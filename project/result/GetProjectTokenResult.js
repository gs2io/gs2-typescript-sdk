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
import * as Gs2Project from '../model';
var GetProjectTokenResult = /** @class */ (function () {
    function GetProjectTokenResult() {
        this.item = null;
        this.ownerId = null;
        this.projectToken = null;
    }
    GetProjectTokenResult.prototype.getItem = function () {
        return this.item;
    };
    GetProjectTokenResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetProjectTokenResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetProjectTokenResult.prototype.getOwnerId = function () {
        return this.ownerId;
    };
    GetProjectTokenResult.prototype.setOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    GetProjectTokenResult.prototype.withOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    GetProjectTokenResult.prototype.getProjectToken = function () {
        return this.projectToken;
    };
    GetProjectTokenResult.prototype.setProjectToken = function (projectToken) {
        this.projectToken = projectToken;
        return this;
    };
    GetProjectTokenResult.prototype.withProjectToken = function (projectToken) {
        this.projectToken = projectToken;
        return this;
    };
    GetProjectTokenResult.fromDict = function (data) {
        return new GetProjectTokenResult()
            .withItem(Gs2Project.Project.fromDict(data["item"]))
            .withOwnerId(data["ownerId"])
            .withProjectToken(data["projectToken"]);
    };
    GetProjectTokenResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "ownerId": this.getOwnerId(),
            "projectToken": this.getProjectToken(),
        };
    };
    return GetProjectTokenResult;
}());
export { GetProjectTokenResult };
//# sourceMappingURL=GetProjectTokenResult.js.map