import { NextPage } from "next";
import Image from "next/image";
import { FC, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import IntegratorModal from "../../components/integrator/IntegratorModal";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import PortalModal from "../../components/shared/PortalModal";
import useLocalStorage from "../../helpers/hooks/useLocalStorage";
import { SvgShowMore } from "../../helpers/svgs/entegratorSvg";

interface IntegratorSettings {
  xmlLink: string;
  orderLink: string;
  clientName: string;
  clientSecretKey: string;
  status: "Active" | "Inactive";
}

const DEFAULT_SETTINGS: IntegratorSettings = {
  xmlLink: "",
  orderLink: "",
  clientName: "",
  clientSecretKey: "",
  status: "Active",
};

const Integrators: NextPage = () => {
  const [settings, setSettings] = useLocalStorage<IntegratorSettings>("integrator-settings", DEFAULT_SETTINGS);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [resetModal, setResetModal] = useState<boolean>(false);

  const update = (key: keyof IntegratorSettings, value: string) =>
    setSettings((prev) => ({ ...prev, [key]: value }));

  const checkXmlLink = () => {
    const link = settings.xmlLink.trim();
    if (!link) {
      toast.error("Please enter your Product XML link first.");
      return;
    }
    toast.success("Your Product XML link is valid.");
  };

  const saveOurAccount = () => {
    if (!settings.xmlLink.trim()) {
      toast.error("Your Product XML link is required.");
      return;
    }
    setSuccessModal(true);
  };

  const saveBiInvoice = () => {
    if (!settings.clientName.trim() || !settings.clientSecretKey.trim()) {
      toast.error("Client Name and Client Secret Key are required.");
      return;
    }
    setSuccessModal(true);
  };

  const confirmReset = () => {
    setSettings(DEFAULT_SETTINGS);
    setResetModal(false);
    toast.info("Integrator information has been reset.");
  };

  return (
    <ProfileLayout>
      <div className="flex flex-col gap-6">
        <div className="grid gap-6 xl:grid-cols-2">
          <CardPanel
            title="Our Account"
            subtitle="XML and order links used to sync your products."
            content={
              <OurAccountCard
                settings={settings}
                update={update}
                onCheck={checkXmlLink}
                onSave={saveOurAccount}
              />
            }
          />
          <CardPanel
            title="Bi Invoice"
            subtitle="API credentials for the Bi Invoice service."
            content={
              <BiInvoiceCard
                settings={settings}
                update={update}
                onSave={saveBiInvoice}
                onReset={() => setResetModal(true)}
              />
            }
          />
        </div>
        <div className="hidden xl:flex justify-center">
          <Image
            src="/images/photos/entegrator.svg"
            width={480}
            height={200}
            alt="Entegrator illustration"
            className="h-auto w-full max-w-xl"
          />
        </div>
      </div>

      {successModal && <IntegratorModal open={successModal} onClose={() => setSuccessModal(false)} />}

      <PortalModal open={resetModal} onClose={() => setResetModal(false)}>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-display text-xl font-bold text-ink">Reset Information</p>
          <p className="text-sm text-ink-soft">
            Your saved integrator settings will be cleared. This action cannot be undone.
          </p>
          <div className="flex w-full justify-center gap-3">
            <button
              type="button"
              onClick={() => setResetModal(false)}
              className="rounded-pill border border-line px-6 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={confirmReset}
              className="rounded-full bg-brand-400 px-6 py-2 text-sm font-bold text-white"
            >
              Reset
            </button>
          </div>
        </div>
      </PortalModal>
    </ProfileLayout>
  );
};

const CardPanel: FC<{ title: string; subtitle: string; content: ReactNode }> = ({
  title,
  subtitle,
  content,
}) => (
  <div className="flex flex-col gap-5 rounded-card border border-line bg-surface p-6 shadow-card xl:p-8">
    <div className="flex flex-col gap-1 border-b border-line pb-4">
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="font-display text-xs uppercase tracking-wider text-ink-muted">{subtitle}</p>
    </div>
    {content}
  </div>
);

const OurAccountCard: FC<{
  settings: IntegratorSettings;
  update: (key: keyof IntegratorSettings, value: string) => void;
  onCheck: () => void;
  onSave: () => void;
}> = ({ settings, update, onCheck, onSave }) => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-2">
      <label htmlFor="xmlLink" className="font-medium text-ink">
        Your Product XML Link *
      </label>
      <div className="relative">
        <input
          id="xmlLink"
          type="text"
          value={settings.xmlLink}
          onChange={(e) => update("xmlLink", e.target.value)}
          placeholder="https://cdn1.xmlbankasi.com/p1/lxxxvlkhzqxg/image/data/xml/tradlia.xml"
          className="w-full rounded-card border border-line bg-surface py-2.5 pl-5 pr-24 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 xl:pr-28"
        />
        <button
          type="button"
          onClick={onCheck}
          className="bottom-1 right-1 top-1 absolute rounded-pill bg-brand-400 px-6 text-sm font-medium text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          Check
        </button>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="orderLink" className="font-medium text-ink">
        Your Product Order Link
      </label>
      <input
        id="orderLink"
        type="text"
        value={settings.orderLink}
        onChange={(e) => update("orderLink", e.target.value)}
        placeholder="https://www.tradlia.com/en/entegra/orders/194/tFe6xANd9Xm1WQiU"
        className="w-full rounded-card border border-line bg-surface px-5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="status" className="font-medium text-ink">
        Status *
      </label>
      <div className="relative">
        <select
          id="status"
          value={settings.status}
          onChange={(e) => update("status", e.target.value)}
          className="w-full appearance-none rounded-card border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink outline-none transition-colors duration-200 focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <div className="pointer-events-none absolute right-5 top-3.5 h-3 w-3 rotate-180 text-brand-500">
          <SvgShowMore />
        </div>
      </div>
    </div>
    <button
      type="button"
      onClick={onSave}
      className="self-start rounded-full bg-brand-400 px-8 py-2.5 text-sm font-bold text-white shadow-sm"
    >
      Save / Update
    </button>
  </div>
);

const BiInvoiceCard: FC<{
  settings: IntegratorSettings;
  update: (key: keyof IntegratorSettings, value: string) => void;
  onSave: () => void;
  onReset: () => void;
}> = ({ settings, update, onSave, onReset }) => (
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-2">
      <label htmlFor="clientName" className="font-medium text-ink">
        ClientName *
      </label>
      <input
        id="clientName"
        type="text"
        value={settings.clientName}
        onChange={(e) => update("clientName", e.target.value)}
        placeholder="ixZUbeLpkcQzqmOH"
        className="w-full rounded-card border border-line bg-surface px-5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="clientSecretKey" className="font-medium text-ink">
        ClientSecretKey *
      </label>
      <input
        id="clientSecretKey"
        type="text"
        value={settings.clientSecretKey}
        onChange={(e) => update("clientSecretKey", e.target.value)}
        placeholder="ixZUbeLpkcQzqmOH"
        className="w-full rounded-card border border-line bg-surface px-5 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30"
      />
    </div>
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={onSave}
        className="rounded-full bg-brand-400 px-8 py-2.5 text-sm font-bold text-white shadow-sm"
      >
        Save / Update
      </button>
      <button
        type="button"
        onClick={onReset}
        className="rounded-pill border border-dangerTint bg-dangerTint px-8 py-2.5 text-sm font-medium text-dangerDark transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:brightness-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
      >
        Reset Information
      </button>
    </div>
  </div>
);

export default Integrators;
