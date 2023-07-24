import React, { useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    '0xe0dc66395d195a81b64987Fa8bA12B1E3f3d0012'
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async(form) => {
    try{
        const data = await createCampaign([
            address, // owner
            form.title, // title
            form.description, // description
            form.target, // target amount
            new Date(form.deadline).getTime(), // deadline
            form.image
        ])

        console.log("contract call sucess", data);
    }
    catch(error){
        console.log("contract call failure", error);
    }
  }

  return(
    <StateContext.Provider
        value={{
            address,
            contract,
            connect,
            createCampaign: publishCampaign,
        }}
    >
        {children}
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);