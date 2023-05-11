import { useUser } from "@clerk/nextjs";
import { FC, FormEvent, PropsWithChildren } from "react";
import { api } from "~/utils/api";
import { Prisma } from "@prisma/client";

export const CreateUserWizard: FC<PropsWithChildren> = ({ children }) => {
  const mutation = api.user.upsertUser.useMutation();
  const { isSignedIn, user } = useUser();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isSignedIn) return;
    const upsertData: Prisma.UserCreateInput = {
      id: user.id || "",
      email: user.emailAddresses[0]?.emailAddress || "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      fullName: user.fullName || "",
      username: user.username || "",
      rating: 0,
      image: user.profileImageUrl || "",
    };
    mutation.mutate(upsertData);
  };
  return (
    <div>
      <h1>Create User Wizard</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {children}
    </div>
  );
};
