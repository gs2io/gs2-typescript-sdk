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
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var zlib = tslib_1.__importStar(require("zlib"));
var default_1 = /** @class */ (function () {
    function default_1(session) {
        this.session = session;
    }
    default_1.prototype.createAuthorizedHeaders = function () {
        return {
            'X-GS2-CLIENT-ID': this.session.credential.clientId,
            'Authorization': 'Bearer ' + this.session.projectToken,
        };
    };
    default_1.prototype.prepareRequestConfig = function (headers) {
        var config = {
            headers: headers,
        };
        if (this.session.acceptGzipResponse) {
            headers['Accept-Encoding'] = 'gzip';
        }
        return config;
    };
    default_1.prototype.compressBody = function (body, headers) {
        if (this.session.compressRequest) {
            var jsonString = JSON.stringify(body);
            var compressed = zlib.gzipSync(jsonString);
            headers['Content-Encoding'] = 'gzip';
            headers['Content-Type'] = 'application/json';
            return compressed;
        }
        return body;
    };
    default_1.prototype.request = function (method, url, headers, params, body) {
        var config = this.prepareRequestConfig(headers);
        if (method === 'GET' || method === 'DELETE') {
            config.params = params;
            var axiosMethod = method === 'GET' ? axios_1.default.get : axios_1.default.delete;
            return axiosMethod(url, config)
                .then(function (response) { return response.data; })
                .catch(function (error) {
                throw JSON.parse(error.response.data.message);
            });
        }
        else {
            var data = body ? this.compressBody(body, headers) : undefined;
            var axiosMethod = method === 'POST' ? axios_1.default.post : axios_1.default.put;
            return axiosMethod(url, data, config)
                .then(function (response) { return response.data; })
                .catch(function (error) {
                if (error.response) {
                    throw JSON.parse(error.response.data.message);
                }
                else {
                    throw [];
                }
            });
        }
    };
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=AbstractGs2RestClient.js.map