import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "../authConfig";
import { useEffect } from "react";

const SignInSignOutButton = () => {
  const { inProgress, instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (
      !isAuthenticated &&
      inProgress !== InteractionStatus.Startup &&
      inProgress !== InteractionStatus.HandleRedirect
    ) {
      instance.loginRedirect(loginRequest);
    }
  }, [isAuthenticated, inProgress]);

  // if (isAuthenticated) {
  //   return <SignOutButton />;
  // } else if (
  //   inProgress !== InteractionStatus.Startup &&
  //   inProgress !== InteractionStatus.HandleRedirect
  // ) {
  //   // inProgress check prevents sign-in button from being displayed briefly after returning from a redirect sign-in. Processing the server response takes a render cycle or two
  //   return <SignInButton />;
  // } else {
  //   return null;
  // }

  return null
};

export default SignInSignOutButton;
