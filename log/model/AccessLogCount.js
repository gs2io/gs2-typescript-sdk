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
var AccessLogCount = /** @class */ (function () {
    function AccessLogCount() {
        this.service = null;
        this.method = null;
        this.userId = null;
        this.count = null;
    }
    AccessLogCount.prototype.getService = function () {
        return this.service;
    };
    AccessLogCount.prototype.setService = function (service) {
        this.service = service;
        return this;
    };
    AccessLogCount.prototype.withService = function (service) {
        this.service = service;
        return this;
    };
    AccessLogCount.prototype.getMethod = function () {
        return this.method;
    };
    AccessLogCount.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    AccessLogCount.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    AccessLogCount.prototype.getUserId = function () {
        return this.userId;
    };
    AccessLogCount.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AccessLogCount.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AccessLogCount.prototype.getCount = function () {
        return this.count;
    };
    AccessLogCount.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    AccessLogCount.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    AccessLogCount.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccessLogCount()
            .withService(data["service"])
            .withMethod(data["method"])
            .withUserId(data["userId"])
            .withCount(data["count"]);
    };
    AccessLogCount.prototype.toDict = function () {
        return {
            "service": this.getService(),
            "method": this.getMethod(),
            "userId": this.getUserId(),
            "count": this.getCount(),
        };
    };
    return AccessLogCount;
}());
export default AccessLogCount;
//# sourceMappingURL=AccessLogCount.js.map