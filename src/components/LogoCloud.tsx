import { useState } from "react";

const companies = [
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "Oracle", domain: "oracle.com" },
  { name: "SAP", domain: "sap.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "Dell", domain: "dell.com" },
  { name: "Cisco", domain: "cisco.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "VMware", domain: "vmware.com" },
];

const LogoItem = ({ name, domain }: { name: string; domain: string }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex-shrink-0 px-10 flex items-center justify-center min-w-[160px] h-16">
      {!imgFailed ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt=""
          role="presentation"
          className="h-10 w-auto max-w-[120px] object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="text-xl font-bold tracking-tight text-foreground/20 hover:text-primary transition-all duration-500 select-none whitespace-nowrap">
          {name}
        </span>
      )}
    </div>
  );
};

const LogoCloud = () => (
  <section className="py-16 bg-muted/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-muted-foreground font-semibold text-xs tracking-[0.2em] uppercase mb-10">
        Trusted by Industry Leaders Worldwide
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-infinite-scroll">
          {[...companies, ...companies].map((c, i) => (
            <LogoItem key={i} name={c.name} domain={c.domain} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LogoCloud;
