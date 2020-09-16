import React, { ReactNode } from "react";

import nestComponents from "../shared/utils/nestComponents";
import { UserStoreProvider } from "./user-store/user-store";

interface Props {
  children: ReactNode;
}

// App Global Context Providers
const appStoreProviders: React.FC<Props>[] = [UserStoreProvider];

const combineProviders = (providers: React.FC<Props>[]): React.FC => {
  return ({ children }): JSX.Element => {
    const CombinedProvider = providers.reduce(nestComponents);

    return <CombinedProvider>{children}</CombinedProvider>;
  };
};

export const StoreProvider = ({ children }): JSX.Element => {
  const Provider = combineProviders(appStoreProviders);

  return <Provider>{children}</Provider>;
};
