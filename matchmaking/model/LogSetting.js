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
var LogSetting = /** @class */ (function () {
    function LogSetting() {
        this.loggingNamespaceId = null;
    }
    LogSetting.prototype.getLoggingNamespaceId = function () {
        return this.loggingNamespaceId;
    };
    LogSetting.prototype.setLoggingNamespaceId = function (loggingNamespaceId) {
        this.loggingNamespaceId = loggingNamespaceId;
        return this;
    };
    LogSetting.prototype.withLoggingNamespaceId = function (loggingNamespaceId) {
        this.loggingNamespaceId = loggingNamespaceId;
        return this;
    };
    LogSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LogSetting()
            .withLoggingNamespaceId(data["loggingNamespaceId"]);
    };
    LogSetting.prototype.toDict = function () {
        return {
            "loggingNamespaceId": this.getLoggingNamespaceId(),
        };
    };
    return LogSetting;
}());
exports.default = LogSetting;
//# sourceMappingURL=LogSetting.js.map