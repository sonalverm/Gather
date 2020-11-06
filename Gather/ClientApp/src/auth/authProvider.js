import { MsalAuthProvider, LoginType } from "react-aad-msal";
import { Logger, LogLevel } from "msal";

export const authProvider = new MsalAuthProvider(
    {
        auth: {
            authority: "https://login.microsoftonline.com/common",
            clientId: "eeb8eadb-b0d2-4ead-a91d-90040fcfaf5c",
            postLogoutRedirectUri: window.location.origin,
            redirectUri: window.location.origin,
            validateAuthority: true,
            navigateToLoginRequestUrl: true,
        },
        cache: {
            cacheLocation: 'sessionStorage',
            storeAuthStateInCookie: true,
        },
    },
    LoginType.Redirect,
);
