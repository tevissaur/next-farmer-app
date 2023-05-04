import { UserButton, useUser } from "@clerk/nextjs";
import {
  SignInButtonStyled,
  SignOutButtonStyled,
  SignUpButtonStyled,
} from "./buttons";
import { useEffect } from "react";
import { api } from "~/utils/api";

export const AuthShowcase = () => {
  const { isSignedIn, user } = useUser();
  const mutation = api.user.upsertUser.useMutation();

  useEffect(() => {
    console.log(user);
    if (!isSignedIn) return;

    const upsertData = {
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress || "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      fullName: user.fullName || "",
      username: user.username || "",
      rating: 0,
    };

    mutation.mutate(upsertData);
  }, [user]);
  return (
    <>
      <div className="flex items-center justify-center gap-4 py-2 text-center">
        {!isSignedIn && (
          <>
            <SignInButtonStyled />
            <SignUpButtonStyled />
          </>
        )}
        {!!isSignedIn && (
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
