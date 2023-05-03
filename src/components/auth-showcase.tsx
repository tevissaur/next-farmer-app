import { UserButton, useUser } from "@clerk/nextjs";
import {
  SignInButtonStyled,
  SignOutButtonStyled,
  SignUpButtonStyled,
} from "./buttons";

export const AuthShowcase = () => {
  const user = useUser();
  return (
    <>
      <div className="flex items-center justify-center gap-4 py-2 text-center">
        {!user.isSignedIn && (
          <>
            <SignInButtonStyled />
            <SignUpButtonStyled />
          </>
        )}
        {!!user.isSignedIn && (
          <>
            <UserButton
              userProfileMode="modal"
              appearance={{
                elements: {
                  userButtonTrigger: "btn-profile",
                },
              }}
            />

            <SignOutButtonStyled />
          </>
        )}
      </div>
    </>
  );
};
