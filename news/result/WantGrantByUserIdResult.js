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
import * as Gs2News from '../model';
var WantGrantByUserIdResult = /** @class */ (function () {
    function WantGrantByUserIdResult() {
        this.items = null;
        this.browserUrl = null;
        this.zipUrl = null;
    }
    WantGrantByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    WantGrantByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    WantGrantByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    WantGrantByUserIdResult.prototype.getBrowserUrl = function () {
        return this.browserUrl;
    };
    WantGrantByUserIdResult.prototype.setBrowserUrl = function (browserUrl) {
        this.browserUrl = browserUrl;
        return this;
    };
    WantGrantByUserIdResult.prototype.withBrowserUrl = function (browserUrl) {
        this.browserUrl = browserUrl;
        return this;
    };
    WantGrantByUserIdResult.prototype.getZipUrl = function () {
        return this.zipUrl;
    };
    WantGrantByUserIdResult.prototype.setZipUrl = function (zipUrl) {
        this.zipUrl = zipUrl;
        return this;
    };
    WantGrantByUserIdResult.prototype.withZipUrl = function (zipUrl) {
        this.zipUrl = zipUrl;
        return this;
    };
    WantGrantByUserIdResult.fromDict = function (data) {
        return new WantGrantByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2News.SetCookieRequestEntry.fromDict(item);
            }) : [])
            .withBrowserUrl(data["browserUrl"])
            .withZipUrl(data["zipUrl"]);
    };
    WantGrantByUserIdResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "browserUrl": this.getBrowserUrl(),
            "zipUrl": this.getZipUrl(),
        };
    };
    return WantGrantByUserIdResult;
}());
export default WantGrantByUserIdResult;
//# sourceMappingURL=WantGrantByUserIdResult.js.map