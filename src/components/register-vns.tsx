import React, { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { vns } from "@nest25/ens-lib";

const RegisterVNS = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const VNS = new vns();

  const handleRegisterVns = async () => {
    const receipt = await VNS.registerVNS(`${username}.vlry`, privateKey);
    console.log(receipt);
  };

  return (
    <div className="flex-col items-center justify-center p-10 rounded-3xl bg-[#fcede9] shadow-2xl">
      <p className="text-3xl font-semibold leading-tight text-[#000000] sm:leading-tight sm:text-2xl lg:text-3xl lg:leading-tight font-pj">
        Your Web3 Username
      </p>
      <p className="text-3xl leading-tight text-[#000000] sm:leading-tight sm:text-lg lg:text-xl lg:leading-tight font-pj mt-2">
        An identity across Web3, one name to represent you.
      </p>
      <div className="flex items-center justify-center gap-2">
        <Input
          type="text"
          placeholder="Search for a name"
          className="mt-5 relative"
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="flex items-center justify-center text-lg mt-4 font-bold">
          .vlry
        </p>
      </div>
      <Input
        type="password"
        placeholder="Enter your private key"
        className="mt-5"
        onChange={(e) => setPrivateKey(e.target.value)}
      />
      <Button
        id="register-vns"
        onClick={handleRegisterVns}
        className="h-12 px-8 bg-[#fcede9] border border-[#2a2a2a] hover:bg-[#2a2a2a] text-[#2a2a2a] hover:text-[#fcede9] rounded-3xl font-semibolt text-xl gap-2 mt-5"
      >
        Register VNS
      </Button>
    </div>
  );
};

export default RegisterVNS;
