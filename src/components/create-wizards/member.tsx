import { useUser } from "@clerk/nextjs";
import { FC, FormEvent, PropsWithChildren, useEffect } from "react";
import slugify from "slugify";
import { api } from "~/utils/api";

interface CreateMemberWizardProps extends PropsWithChildren {
  farmId: string;
}

export const CreateMemberWizard: FC<CreateMemberWizardProps> = ({
  children,
  farmId,
}) => {
  const mutation = api.farms.addMemberToFarm.useMutation();
  const { isSignedIn, user } = useUser();
  useEffect(() => {
    console.log(user);
  }, [user]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isSignedIn) return;
    const memberData = {
      userId: user?.id,
      farmId,
    };
    mutation.mutate(memberData);
  };
  return (
    <div>
      <h1>Create Member Wizard</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {children}
    </div>
  );
};
