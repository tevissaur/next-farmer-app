import { UserProfile, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Banner from "~/components/banner";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { api } from "~/utils/api";
import { FormEvent, useEffect } from "react";
import { CreateFarmWizard } from "~/components/create-wizards/farm";
import Link from "next/link";

const Profile: NextPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Banner>My Farms</Banner>
      <ProfileFarmWidget />
    </div>
  );
};

export default Profile;

export const ProfileFarmWidget = () => {
  const { user } = useUser();
  const { data: farms, isLoading } = api.farms.getFarmsByOwnerId.useQuery(
    user?.id || ""
  );
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleChange = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <CreateFarmWizard />
      {farms?.map((farm) => (
        <section key={farm.id} className="farm-card">
          <div className="farm-card-header">
            <Link href={`/farm-dashboard/${farm.slug}`}>
              <h3 className="text-[2rem] font-semibold leading-7 text-gray-900">
                Farm Information: {farm.name}
              </h3>
            </Link>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Personal details and application.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            onChange={handleChange}
            className="farm-card-body"
          >
            <div className="divide-y divide-gray-100">
              <div className="w-full items-center justify-center px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <label className="text-sm font-medium leading-6 text-gray-900">
                  Address
                </label>
                <input
                  className="mt-1 rounded-lg border-1 px-4 py-3 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                  defaultValue={farm.address}
                  type="text"
                />
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <label className="text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <input
                  className="mt-1 rounded-lg border-1 px-4 py-3 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                  defaultValue={farm.description}
                  type="text"
                />
              </div>
            </div>
          </form>
        </section>
      ))}
    </>
  );
};

export const ProfileOrdersWidget = () => {
  return (
    <section className="farm-card">
      <div className="w-full">
        <h3 className="text-[2rem] font-semibold leading-7 text-gray-900">
          Recent Orders
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Margot Foster
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Application for
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Backend Developer
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              margotfoster@example.com
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              $120,000
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              About
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Attachments
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        resume_back_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        coverletter_back_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
