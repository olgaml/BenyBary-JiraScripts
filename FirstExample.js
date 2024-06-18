function showDetails() {

const Bridge = window.AdaptavistBridgeContext;
  
  AdaptavistBridge.request({
   url: `/rest/api/2/issue/${AdaptavistBridgeContext.context.issueKey}`,
   type: 'GET'
})
    .then(issue => {
       document.getElementById("issueType").innerHTML= `${issue.key} is a ${issue.fields.issuetype.name} in ${issue.fields.status.name}`;
   });

}
