import { Configuration, PopupRequest } from "@azure/msal-browser";

console.log(process.env.REACT_APP_AZURE_CLIENT_ID)
// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: `${process.env.REACT_APP_AZURE_CLIENT_ID}`,
        authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}`,
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    },
    system: {
        allowNativeBroker: false // Disables WAM Broker
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: ["openid", "profile", "email"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
