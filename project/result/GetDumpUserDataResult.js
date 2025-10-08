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
var GetDumpUserDataResult = /** @class */ (function () {
    function GetDumpUserDataResult() {
        this.url = null;
    }
    GetDumpUserDataResult.prototype.getUrl = function () {
        return this.url;
    };
    GetDumpUserDataResult.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    GetDumpUserDataResult.prototype.withUrl = function (url) {
        this.url = url;
        return this;
    };
    GetDumpUserDataResult.fromDict = function (data) {
        return new GetDumpUserDataResult()
            .withUrl(data["url"]);
    };
    GetDumpUserDataResult.prototype.toDict = function () {
        return {
            "url": this.getUrl(),
        };
    };
    return GetDumpUserDataResult;
}());
exports.default = GetDumpUserDataResult;
//# sourceMappingURL=GetDumpUserDataResult.js.map