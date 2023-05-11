import { useUser } from "@clerk/nextjs";
import { Farm } from "@prisma/client";
import { FC, FormEvent, PropsWithChildren, useEffect } from "react";
import slugify from "slugify";
import { api } from "~/utils/api";

interface CreateMemberWizardProps extends PropsWithChildren {
  farm: Farm;
}

export const CreateMemberWizard: FC<CreateMemberWizardProps> = ({
  children,
  farm,
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
      farmId: farm?.id,
    };
    mutation.mutate(memberData);
    if (window) window.location.replace(`/storefront/${farm.slug}`);
  };
  return (
    <div>
      <h1>Create Member Wizard</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button type="submit">Submit</button>
      </form>
      {children}
    </div>
  );
};
