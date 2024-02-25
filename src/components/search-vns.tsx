"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { shortAddress } from "@/lib/utils";
import AddressInput from "./address-input";
import VnsInput from "./vns-input";

interface SearchVnsProps {
  isNewMsg: string;
  onInputBlurVns: (newAddress: any) => void;
  errorMsg: string;
  selectedConvo: string | null;
}

const SearchVns = ({
  isNewMsg,
  onInputBlurVns,
  errorMsg,
  selectedConvo,
}: SearchVnsProps) => {
  const [newAddress, setNewAddress] = useState("");

  return (
    <div className="flex ">
      <motion.div
        key="input"
        className={`w-full relative flex flex-col ${isNewMsg ? "flex-1" : ""}`}
        layout
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{
          opacity: { duration: 0.05 },
          layout: {
            type: "spring",
            bounce: 0.15,
          },
        }}
      >
        {isNewMsg ? (
          <>
            <VnsInput
              setNewValue={setNewAddress}
              placeholder="Search VNS name ..."
              value={newAddress}
              onInputBlurVns={() => onInputBlurVns(newAddress)}
            />
            {errorMsg && (
              <span className="text-xs text-[#ff5656] text-start ml-1 mt-2 flex flex-col">
                {errorMsg}
              </span>
            )}
          </>
        ) : (
          <b>{shortAddress(selectedConvo!)}</b>
        )}
      </motion.div>
    </div>
  );
};

export default SearchVns;
