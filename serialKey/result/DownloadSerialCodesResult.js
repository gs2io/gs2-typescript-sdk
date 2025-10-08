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
var DownloadSerialCodesResult = /** @class */ (function () {
    function DownloadSerialCodesResult() {
        this.url = null;
    }
    DownloadSerialCodesResult.prototype.getUrl = function () {
        return this.url;
    };
    DownloadSerialCodesResult.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    DownloadSerialCodesResult.prototype.withUrl = function (url) {
        this.url = url;
        return this;
    };
    DownloadSerialCodesResult.fromDict = function (data) {
        return new DownloadSerialCodesResult()
            .withUrl(data["url"]);
    };
    DownloadSerialCodesResult.prototype.toDict = function () {
        return {
            "url": this.getUrl(),
        };
    };
    return DownloadSerialCodesResult;
}());
exports.default = DownloadSerialCodesResult;
//# sourceMappingURL=DownloadSerialCodesResult.js.map