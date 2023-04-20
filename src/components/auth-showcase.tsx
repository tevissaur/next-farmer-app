import { useUser } from "@clerk/nextjs";
import {
  SignInButtonStyled,
  SignOutButtonStyled,
  SignUpButtonStyled,
} from "./buttons";

export const AuthShowcase = () => {
  const user = useUser();
  return (
    <>
      <div className="flex items-center justify-center py-2 text-center gap-2">
        {!user.isSignedIn && (
          <>
            <SignInButtonStyled />
            <SignUpButtonStyled />
          </>
        )}
        {!!user.isSignedIn && <SignOutButtonStyled />}
        {user.user?.fullName}
      </div>
    </>
  );
};
