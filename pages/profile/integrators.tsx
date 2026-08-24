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
          <p className="text-xl font-bold text-[#4CBEC5]">Reset Information</p>
          <p className="text-sm text-[#7E8096]">
            Your saved integrator settings will be cleared. This action cannot be undone.
          </p>
          <div className="flex w-full justify-center gap-3">
            <button
              type="button"
              onClick={() => setResetModal(false)}
              className="rounded-full border border-[#00B1B266] px-6 py-2 text-sm font-medium text-[#7E8096]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={confirmReset}
              className="rounded-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] px-6 py-2 text-sm font-bold text-white"
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
  <div className="flex flex-col gap-5 rounded-2xl border border-[#00B1B266] bg-white p-6 shadow-sm xl:p-8">
    <div className="flex flex-col gap-1 border-b border-[#00B1B240] pb-4">
      <h3 className="text-lg font-bold text-[#4CBEC5]">{title}</h3>
      <p className="text-xs text-[#A0A2AF]">{subtitle}</p>
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
      <label htmlFor="xmlLink" className="font-medium text-[#4CBEC5]">
        Your Product XML Link *
      </label>
      <div className="relative">
        <input
          id="xmlLink"
          type="text"
          value={settings.xmlLink}
          onChange={(e) => update("xmlLink", e.target.value)}
          placeholder="https://cdn1.xmlbankasi.com/p1/lxxxvlkhzqxg/image/data/xml/tradlia.xml"
          className="w-full rounded-full border border-[#00B1B2] bg-white py-2.5 pl-5 pr-24 text-sm text-[#7E8096] shadow-sm outline-none placeholder:text-[#A0A2AF] focus:border-[#4CBEC5] xl:pr-28"
        />
        <button
          type="button"
          onClick={onCheck}
          className="absolute right-1 top-1 bottom-1 rounded-full bg-[#4CBEC5] px-6 text-sm font-medium text-white"
        >
          Check
        </button>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="orderLink" className="font-medium text-[#4CBEC5]">
        Your Product Order Link
      </label>
      <input
        id="orderLink"
        type="text"
        value={settings.orderLink}
        onChange={(e) => update("orderLink", e.target.value)}
        placeholder="https://www.tradlia.com/en/entegra/orders/194/tFe6xANd9Xm1WQiU"
        className="w-full rounded-full border border-[#00B1B2] bg-white px-5 py-2.5 text-sm text-[#7E8096] shadow-sm outline-none placeholder:text-[#A0A2AF] focus:border-[#4CBEC5]"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="status" className="font-medium text-[#4CBEC5]">
        Status *
      </label>
      <div className="relative">
        <select
          id="status"
          value={settings.status}
          onChange={(e) => update("status", e.target.value)}
          className="w-full appearance-none rounded-full border border-[#00B1B2] bg-white px-5 py-2.5 text-sm font-medium text-[#7E8096] shadow-sm outline-none focus:border-[#4CBEC5]"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <div className="pointer-events-none absolute right-5 top-3.5 h-3 w-3 rotate-180 text-[#4CBEC5]">
          <SvgShowMore />
        </div>
      </div>
    </div>
    <button
      type="button"
      onClick={onSave}
      className="self-start rounded-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] px-8 py-2.5 text-sm font-bold text-white shadow-sm"
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
      <label htmlFor="clientName" className="font-medium text-[#4CBEC5]">
        ClientName *
      </label>
      <input
        id="clientName"
        type="text"
        value={settings.clientName}
        onChange={(e) => update("clientName", e.target.value)}
        placeholder="ixZUbeLpkcQzqmOH"
        className="w-full rounded-full border border-[#00B1B2] bg-white px-5 py-2.5 text-sm text-[#7E8096] shadow-sm outline-none placeholder:text-[#A0A2AF] focus:border-[#4CBEC5]"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="clientSecretKey" className="font-medium text-[#4CBEC5]">
        ClientSecretKey *
      </label>
      <input
        id="clientSecretKey"
        type="text"
        value={settings.clientSecretKey}
        onChange={(e) => update("clientSecretKey", e.target.value)}
        placeholder="ixZUbeLpkcQzqmOH"
        className="w-full rounded-full border border-[#00B1B2] bg-white px-5 py-2.5 text-sm text-[#7E8096] shadow-sm outline-none placeholder:text-[#A0A2AF] focus:border-[#4CBEC5]"
      />
    </div>
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={onSave}
        className="rounded-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] px-8 py-2.5 text-sm font-bold text-white shadow-sm"
      >
        Save / Update
      </button>
      <button
        type="button"
        onClick={onReset}
        className="rounded-full border border-[#FB295A80] px-8 py-2.5 text-sm font-medium text-[#FB295A]"
      >
        Reset Information
      </button>
    </div>
  </div>
);

export default Integrators;
