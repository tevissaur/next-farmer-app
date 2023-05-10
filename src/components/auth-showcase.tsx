import {
  CreateOrganization,
  OrganizationProfile,
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/nextjs";
import {
  SignInButtonStyled,
  SignOutButtonStyled,
  SignUpButtonStyled,
} from "./buttons";
import { useEffect } from "react";
import { api } from "~/utils/api";
import ProfileDropdown from "./profile-dropdown";

export const AuthShowcase = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 py-2 text-center">
        <SignedOut>
          <SignInButtonStyled />
          <SignUpButtonStyled />
        </SignedOut>
        <SignedIn>
          <ProfileDropdown />
          <SignOutButtonStyled />
        </SignedIn>
      </div>
    </>
  );
};
