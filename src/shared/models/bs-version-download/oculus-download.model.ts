
export enum OculusDownloaderErrorCodes {
    DOWNLOAD_MANIFEST_FAILED = "DOWNLOAD_MANIFEST_FAILED",
    MANIFEST_FILE_NOT_FOUND = "MANIFEST_FILE_NOT_FOUND",
    PARSE_MANIFEST_FILE_FAILED = "PARSE_MANIFEST_FILE_FAILED",
    ALREADY_DOWNLOADING = "ALREADY_DOWNLOADING",
    UNABLE_TO_GET_MANIFEST = "UNABLE_TO_GET_MANIFEST",
    VERIFY_INTEGRITY_FAILED = "VERIFY_INTEGRITY_FAILED",
    SOME_FILES_FAILED_TO_DOWNLOAD = "SOME_FILES_FAILED_TO_DOWNLOAD",
}

export enum MetaAuthErrorCodes {
    META_LOGIN_TIMED_OUT = "META_LOGIN_TIMED_OUT",
    META_LOGIN_WINDOW_CLOSED_BY_USER = "META_LOGIN_WINDOW_CLOSED_BY_USER",
    NO_META_AUTH_TOKEN = "NO_META_AUTH_TOKEN",
}