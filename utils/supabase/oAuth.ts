import { Provider } from "@supabase/auth-js/dist/module/lib/types";
import { supabase } from "./component";
import _ from "lodash";

export const useOAuth = (providers: Provider[] = ["google"]) => {
  const signInFuncs = providers
    .map((provider) => async () => {
      const { error, ...rest } = await supabase.auth.signInWithOAuth({
        provider,
      });

      if (error) {
        console.error("Error signing in:", error.message);
      }
      return rest;
    })
    .reduce(_.merge);

  return signInFuncs;
};
