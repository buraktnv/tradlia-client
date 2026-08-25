import { NextPage } from "next";
import Link from "next/link";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import * as U from "../../helpers/urls";

const Profile: NextPage = () => {
  return (
    <ProfileLayout>
      <div className="rounded-card border border-line bg-surface p-8 shadow-card sm:p-12">
        <p className="font-display text-xs uppercase tracking-wider text-ink-muted">Overview</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
          Welcome to your dashboard
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
          Everything about your Tradlia store in one place — manage your listings, follow
          your orders and keep an eye on messages and payments.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={U.URL_PROFILE_ADVERTS}
            className="inline-flex h-10 items-center justify-center rounded-pill bg-brand-400 px-5 text-sm font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 active:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
          >
            Manage listings
          </Link>
          <Link
            href={U.URL_PROFILE_ORDERS_SOLD}
            className="inline-flex h-10 items-center justify-center rounded-pill border border-line px-5 text-sm font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
          >
            View orders
          </Link>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
