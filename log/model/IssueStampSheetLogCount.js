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
var IssueStampSheetLogCount = /** @class */ (function () {
    function IssueStampSheetLogCount() {
        this.service = null;
        this.method = null;
        this.userId = null;
        this.action = null;
        this.count = null;
    }
    IssueStampSheetLogCount.prototype.getService = function () {
        return this.service;
    };
    IssueStampSheetLogCount.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    IssueStampSheetLogCount.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    IssueStampSheetLogCount.prototype.getMethod = function () {
        return this.method;
    };
    IssueStampSheetLogCount.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    IssueStampSheetLogCount.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    IssueStampSheetLogCount.prototype.getUserId = function () {
        return this.userId;
    };
    IssueStampSheetLogCount.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueStampSheetLogCount.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueStampSheetLogCount.prototype.getAction = function () {
        return this.action;
    };
    IssueStampSheetLogCount.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    IssueStampSheetLogCount.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    IssueStampSheetLogCount.prototype.getCount = function () {
        return this.count;
    };
    IssueStampSheetLogCount.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    IssueStampSheetLogCount.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    IssueStampSheetLogCount.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new IssueStampSheetLogCount()
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withAction(data["action"])
            .withCount(data["count"]);
    };
    IssueStampSheetLogCount.prototype.toDict = function () {
        return {
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "action": this.getAction(),
            "count": this.getCount(),
        };
    };
    return IssueStampSheetLogCount;
}());
export default IssueStampSheetLogCount;
//# sourceMappingURL=IssueStampSheetLogCount.js.map