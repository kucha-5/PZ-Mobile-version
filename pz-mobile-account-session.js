(function(){
  "use strict";

  const GUEST_ACTIVE_KEY="project_zero_guest_session_active_v1";
  const TRUSTED_UID_KEY="project_zero_mobile_trusted_account_uid_v1";

  function read(key){
    try{return String(localStorage.getItem(key)||"");}catch(_){return "";}
  }
  function write(key,value){
    try{
      if(value) localStorage.setItem(key,String(value));
      else localStorage.removeItem(key);
    }catch(_){}
  }
  function normalizeUid(userOrUid){
    if(userOrUid&&typeof userOrUid==="object")return String(userOrUid.uid||userOrUid.id||"");
    return String(userOrUid||"");
  }

  window.PZMobileAccountSession=Object.freeze({
    trustedUid:()=>read(TRUSTED_UID_KEY),
    trust(userOrUid){const uid=normalizeUid(userOrUid);if(uid)write(TRUSTED_UID_KEY,uid);return uid;},
    forget(){write(TRUSTED_UID_KEY,"");},
    isTrusted(userOrUid){const uid=normalizeUid(userOrUid);return Boolean(uid)&&read(TRUSTED_UID_KEY)===uid;},
    isGuestActive:()=>read(GUEST_ACTIVE_KEY)==="1",
    setGuestActive(active){write(GUEST_ACTIVE_KEY,active?"1":"");},
    // Guest identities may only be created from a direct player action.
    mayCreateGuest(explicitAction){return explicitAction===true;}
  });
})();
