import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/dist/client/link";
import { useAppDispatch, useAppSelector } from "~/utils/hooks";
import { toggleDrawer } from "~/utils/slices/ui/ui-slice";

export const SignInButtonStyled = () => {
  return (
    <SignInButton mode="modal">
      <button className="btn-primary">Sign In</button>
    </SignInButton>
  );
};
export const SignUpButtonStyled = () => {
  return (
    <SignUpButton mode="modal">
      <button className="btn-signup">Sign Up</button>
    </SignUpButton>
  );
};
export const SignOutButtonStyled = () => {
  return (
    <SignOutButton>
      <button className="btn-primary border-bl text-bl">Sign Out</button>
    </SignOutButton>
  );
};
export const NavItem = ({ href, label }: { href: string; label: string }) => {
  const dispatch = useAppDispatch();
  return (
    <Link
      href={href}
      className="btn-primary"
      onClick={() => dispatch(toggleDrawer(false))}
    >
      {label}
    </Link>
  );
};
