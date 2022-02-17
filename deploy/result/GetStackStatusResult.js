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
exports.GetStackStatusResult = void 0;
var GetStackStatusResult = /** @class */ (function () {
    function GetStackStatusResult() {
        this.status = null;
    }
    GetStackStatusResult.prototype.getStatus = function () {
        return this.status;
    };
    GetStackStatusResult.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    GetStackStatusResult.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    GetStackStatusResult.fromDict = function (data) {
        return new GetStackStatusResult()
            .withStatus(data["status"]);
    };
    GetStackStatusResult.prototype.toDict = function () {
        return {
            "status": this.getStatus(),
        };
    };
    return GetStackStatusResult;
}());
exports.GetStackStatusResult = GetStackStatusResult;
//# sourceMappingURL=GetStackStatusResult.js.map