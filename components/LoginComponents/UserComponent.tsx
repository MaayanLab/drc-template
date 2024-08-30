import Signin from "./Signin";
import UserAvatar from "./UserAvatar";
import MenuItem from '@mui/material/MenuItem';
import { SignOutLink } from './links';
import { AccountLink } from './MyAccount';
import { Session } from 'next-auth';

export default function UserComponent ({session}: {session: Session | null})  {
    if (session === null) {
        return <Signin/>
    } else {
        return (
            <UserAvatar session={session}>
                {session.user ?
                    <MenuItem>
                        <AccountLink />
                    </MenuItem>
                    : null}
                <MenuItem>
                    <SignOutLink>Logout</SignOutLink>
                </MenuItem>
            </UserAvatar>
        )
    }
}
