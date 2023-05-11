import { useUser } from "@clerk/nextjs";
import { FC, FormEvent, PropsWithChildren } from "react";
import { api } from "~/utils/api";

export const CreateBlogWizard: FC<PropsWithChildren> = ({ children }) => {
  const mutation = api.articles.createBlogPost.useMutation();
  const { isSignedIn, user } = useUser();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isSignedIn) return;
    const upsertData = {
      title: "Test",
      content: "Test",
      articleType: "blog",
      authorId: user.id || "",
      likes: 0,
    };
    mutation.mutate(upsertData);
  };
  return (
    <div>
      <h1>Create Blog Wizard</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {children}
    </div>
  );
};
