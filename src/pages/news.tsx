import { type NextPage } from "next";
import Banner from "~/components/banner";
import { CreateBlogWizard } from "~/components/create-wizards/blog";
const News: NextPage = () => {
  return (
    <>
      <Banner>Blog</Banner>
      <CreateBlogWizard />
    </>
  );
};

export default News;
