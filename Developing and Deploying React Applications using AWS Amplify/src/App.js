import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const App = () => (
  <div>
    <AmplifySignOut />
    Auth App
  </div>
);

export default withAuthenticator(App);