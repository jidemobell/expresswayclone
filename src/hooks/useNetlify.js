import { useEffect } from "react";
import { $ }  from 'react-jquery-plugin'

const useNetlify = () => {
  useEffect(() => {
    $.getScript("netlify.js", function(){
        const authenticator = new netlify.default({});
        authenticator.authenticate(
          { provider: "github", scope: "user" },
          async function (error, data) {
            if (error) {      
             console.log ("Error Authenticating with GitHub: " + error);
            } else {
              console.log("Authenticated with GitHub. Access Token: " +
              data.token)
              
              let res = await loadGitHubUserEmails(data.token);
              console.log(res)
            }
          }
        );

      async function loadGitHubUserEmails(token) {
        return await fetch("https://api.github.com/user/emails", {
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${token}`,
          },
        })
          .then((response) => response.json())
          .then((response) => JSON.stringify(response));
      }
    })
  }, []);

};


export default useNetlify