import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import Button from '@mui/material/Button';

export const SignOutButton = () => {
    const { instance } = useMsal();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleLogout = (logoutType: string) => {
        setAnchorEl(null);

        if (logoutType === "popup") {
            instance.logoutPopup({
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect();
        }
    }

    return (
        <div>

<Button
               onClick={() => handleLogout("redirect")}
                color="inherit"
            >
                Logout
            </Button>

        </div>
    )
};