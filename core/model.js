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
import axios from 'axios';
var BasicGs2Credential = /** @class */ (function () {
    function BasicGs2Credential(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    return BasicGs2Credential;
}());
export { BasicGs2Credential };
var Gs2RestSession = /** @class */ (function () {
    function Gs2RestSession(credential, region) {
        this.credential = credential;
        this.region = region;
        this.projectToken = null;
        this.expiresAt = null;
    }
    Gs2RestSession.prototype.connect = function () {
        var _this = this;
        var service = 'identifier';
        var url = Gs2Constant.ENDPOINT_HOST
            .replace('{service}', service)
            .replace('{region}', this.region)
            + '/projectToken/login';
        if (this.credential instanceof BasicGs2Credential) {
            var data = {
                client_id: this.credential.clientId,
                client_secret: this.credential.clientSecret,
            };
            return axios.post(url, data)
                .then(function (response) {
                var result = new LoginResult(response.data);
                _this.projectToken = result.accessToken;
                _this.expiresAt = new Date().getTime() + result.expiresIn * 1000;
                return result;
            }).catch(function (error) {
                throw JSON.parse(error.response.data.message);
            });
        }
        else if (this.credential instanceof ProjectTokenGs2Credential) {
            this.projectToken = this.credential.projectToken;
        }
    };
    Gs2RestSession.prototype.disconnect = function () {
        this.projectToken = null;
    };
    return Gs2RestSession;
}());
export { Gs2RestSession };
var LoginResult = /** @class */ (function () {
    function LoginResult(data) {
        if (data) {
            this.accessToken = data.access_token;
            this.tokenType = data.token_type;
            this.expiresIn = data.expires_in;
        }
    }
    return LoginResult;
}());
var ProjectToken = /** @class */ (function () {
    function ProjectToken(data) {
        this.token = null;
        this.expiresAt = null;
        this.token = data.token;
        this.expiresAt = data.expiresAt;
    }
    return ProjectToken;
}());
export { ProjectToken };
var ProjectTokenGs2Credential = /** @class */ (function () {
    function ProjectTokenGs2Credential(clientId, projectToken) {
        this.clientId = clientId;
        this.projectToken = projectToken;
    }
    return ProjectTokenGs2Credential;
}());
export { ProjectTokenGs2Credential };
export var Gs2Constant = {
    ENDPOINT_HOST: 'https://{service}.{region}.gen2.gs2io.com',
};
export var Region = {
    AP_NORTHEAST_1: 'ap-northeast-1',
    US_EAST_1: 'us-east-1',
    EU_WEST_1: 'eu-west-1',
    AP_SOUTHEAST_1: 'ap-southeast-1',
};
//# sourceMappingURL=model.js.map