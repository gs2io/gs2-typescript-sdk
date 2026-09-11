import IGs2Credential from './interface/IGs2Credential';
import IModel from './interface/IModel';
export declare class BasicGs2Credential implements IGs2Credential {
    clientId: string;
    clientSecret: string;
    constructor(clientId: string, clientSecret: string);
}
/**
 * Steady の基点への接続（DNS / TCP / TLS handshake）の上限（ms）。
 * フリートが手放した公開 IP は SYN を落とすので、OS 既定（数十秒〜数分）に任せない。
 * ★ブラウザでは接続だけの上限を持てない（XHR / fetch の timeout は要求全体にかかり、
 *  GS2 の長い API を殺す）ので、ブラウザでは上限を置かず 1 回の再送だけが効く。
 */
export declare const STEADY_CONNECT_TIMEOUT_MS = 5000;
/** 接続段階の上限で落としたときに載せる code（Node だけ。再送の判定に使う） */
export declare const STEADY_CONNECT_TIMEOUT_CODE = "GS2_STEADY_CONNECT_TIMEOUT";
/** 末尾の / と空白を落とす。未設定なら '' */
export declare function normalizeSteadyEndpoint(value?: string | null): string;
/** steadyEndpoint から REST の template（{service} 付き）を作る。未設定なら '' */
export declare function steadyRestTemplate(steadyEndpoint?: string | null): string;
/**
 * steadyEndpoint から WebSocket の接続先を作る。未設定・壊れた基点なら ''。
 * http:// の基点（ローカルの試験・開発）は ws:// に、https:// は wss:// に。
 */
export declare function steadyWebSocketUrl(steadyEndpoint?: string | null): string;
/** 要求 URL が Steady の基点宛か */
export declare function isSteadyUrl(steadyEndpoint: string | null | undefined, url: string): boolean;
/**
 * 生成クライアントが組んだ URL を Steady の基点配下へ書き換える。
 *
 * 生成クライアントは `(Gs2XxxRestClient.ENDPOINT_HOST ?? Gs2Constant.ENDPOINT_HOST) + <path>` で
 * URL を組む。★共有クラウドの template（Gs2Constant.ENDPOINT_HOST）から組まれた URL だけを
 * `<steady>/<service><path>` に書き換えるので、優先順は
 * サービスごとの override ＞ steadyEndpoint ＞ 共有クラウドの template になる
 * （override の URL は template に当たらないので、そのまま残る）。
 * steadyEndpoint が未設定なら URL は従来と byte 単位で同じ。
 */
export declare function steadyRestUrl(steadyEndpoint: string | null | undefined, region: string, url: string): string;
/**
 * 接続段階の失敗か（応答が無く、code が接続系）。
 * ★ブラウザの axios は接続失敗も送信後の切断もまとめて ERR_NETWORK（応答無し）にするので、
 *  ブラウザでは両者を見分けられない ―― 再送が効くのは Node だけ。
 */
export declare function isConnectFailure(error: any): boolean;
/** Steady 宛の要求に使う Agent（Node だけ）。http / https の両方を用意する */
export interface SteadyAgents {
    http: any;
    https: any;
}
/**
 * Node のときだけ: 接続（DNS / TCP / TLS handshake）に上限を置く Agent を作る（timeout ごとに使い回す）。
 * ★要求全体の timeout は使わない ―― GS2 には応答まで長くかかる API があるので殺せない。
 * ブラウザ（window がある）では接続だけの上限を持てないので null を返す（再送だけが効く）。
 */
export declare function steadyAgents(timeoutMs: number): SteadyAgents | null;
export interface Gs2RestSessionOptions {
    /** リクエストボディをgzip圧縮して送信するかどうか（デフォルト: true） */
    compressRequest?: boolean;
    /** レスポンスのgzip展開を受け入れるかどうか（デフォルト: true） */
    acceptGzipResponse?: boolean;
    /**
     * Steady（専用フリート）の基点 `https://<host>`（placeholder 無し。末尾の `/` と空白は落とす）。
     * 設定すると全サービスの接続先が `<steady>/<service>` になり、接続段階に上限と 1 回の再送が付く。
     * 未設定なら URL・挙動は従来どおり（`Gs2Constant.ENDPOINT_HOST` から組む）。
     */
    steadyEndpoint?: string;
    /** Steady の基点への接続タイムアウト（ms、デフォルト: STEADY_CONNECT_TIMEOUT_MS） */
    steadyConnectTimeoutMs?: number;
}
export declare class Gs2RestSession {
    credential: IGs2Credential;
    region: string;
    projectToken: string | null;
    expiresAt: number | null;
    compressRequest: boolean;
    acceptGzipResponse: boolean;
    /** Steady の基点（正規化済み）。'' なら共有クラウド */
    steadyEndpoint: string;
    /** Steady の基点への接続タイムアウト（ms） */
    steadyConnectTimeoutMs: number;
    constructor(credential: IGs2Credential, region: string, options?: Gs2RestSessionOptions);
    /**
     * サービスの接続先。優先順: steadyEndpoint ＞ 共有クラウドの `Gs2Constant.ENDPOINT_HOST`。
     * steadyEndpoint が未設定なら従来の文字列と byte 単位で一致する
     * （生成クライアントのサービスごとの override はこれより強い。`steadyRestUrl` の説明）。
     */
    endpointHost(service: string): string;
    connect(): Promise<LoginResult> | undefined;
    disconnect(): void;
}
export interface Gs2WebSocketSessionOptions {
    /**
     * Steady（専用フリート）の基点 `https://<host>`。接続先は `wss://<host>/`（基点が `http://` なら
     * `ws://<host>/`）になり、handshake に上限（steadyConnectTimeoutMs）が付く。未設定なら従来の gateway-ws。
     */
    steadyEndpoint?: string;
    /** Steady の handshake タイムアウト（ms、デフォルト: STEADY_CONNECT_TIMEOUT_MS） */
    steadyConnectTimeoutMs?: number;
}
export declare class Gs2WebSocketSession {
    credential: IGs2Credential;
    private client;
    region: string;
    projectToken: string | null;
    expiresAt: number | null;
    /** Steady の基点（正規化済み）。'' なら共有クラウド */
    steadyEndpoint: string;
    /** Steady の handshake タイムアウト（ms） */
    steadyConnectTimeoutMs: number;
    private inflightRequest;
    private onOpenHandlers;
    private onErrorHandlers;
    private onCloseHandlers;
    private onNotificationHandlers;
    constructor(credential: IGs2Credential, region: string, options?: Gs2WebSocketSessionOptions);
    /** 接続先。steadyEndpoint ＞ 共有クラウドの `Gs2Constant.WS_ENDPOINT_HOST` */
    webSocketUrl(): string;
    /**
     * Node の `ws` に渡す接続オプション。Steady のときだけ handshake に上限を置く。
     * ★ブラウザの WebSocket は handshake の上限を持てない（オプションが無い）ので、
     *  ブラウザでは上限が効かない。共有クラウドは従来どおりオプション無し（undefined）。
     */
    webSocketOptions(): {
        handshakeTimeout: number;
    } | undefined;
    /** ログイン（identifier）の REST 接続先。steady があれば `<steady>/identifier`、無ければ従来 */
    endpointHost(service: string): string;
    connect(): Promise<any>;
    send(service: string, component: string, func: string, payload: any): Promise<any>;
    onOpen(func: (ev: Event) => any): void;
    onError(func: (ev: Event) => any): void;
    onClose(func: (ev: CloseEvent) => any): void;
    onNotification(func: (message: {
        subject: string;
        issuer: string;
        payload: any;
    }) => any): void;
    disconnect(): Promise<any>;
}
declare class LoginResult {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    constructor(data?: {
        [key: string]: any;
    });
}
export declare class ProjectToken implements IModel {
    token: string | null;
    expiresAt: number | null;
    constructor(data: {
        [key: string]: any;
    });
}
export declare class ProjectTokenGs2Credential implements IGs2Credential {
    clientId: string;
    projectToken: string;
    constructor(clientId: string, projectToken: string);
}
export declare const Gs2Constant: {
    ENDPOINT_HOST: string;
    WS_ENDPOINT_HOST: string;
};
export declare const Region: {
    AP_NORTHEAST_1: string;
    US_EAST_1: string;
    EU_WEST_1: string;
    AP_SOUTHEAST_1: string;
};
export {};
